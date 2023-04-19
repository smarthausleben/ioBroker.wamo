'use strict';

/*
 * Created with @iobroker/create-adapter v2.1.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const { info } = require('console');
const axios = require('axios').default;
const http = require('http');
const schedule = require('node-schedule');
const { join } = require('path');
const { nextTick } = require('process');
const { stringify } = require('querystring');
const adapterName = require('./package.json').name.split('.').pop();

// my own modules
const {
	adapterChannels,
	calculatedStates,
	StatisticStates,
	DeviceParameters,
	initStates,
	alarmPeriod,
	shortPeriod,
	longPeriode,
	sensorPresence
} = require('./lib/device-parameters');

const {
	channelsRootNameFS,
	AdapterChannelsFS,
	DeviceParametetsFS
} = require('./lib/device-parametersFS');

/* cron definitions for the varius cron timers.
(cron timers are for statistik data collection) */
const cron_Year = '0 0 1 1 *';
const cron_Month = '0 0 1 * *';
const cron_Week = '0 0 * * 1';
const cron_Day = '0 0 * * *';
const corn_FloorSensor_short = '*/15 * * * * *'; // Every 15 Seconds
const corn_FloorSensor_long = '*/2 * * * *'; // Every 2 minutes

//const cron_TestinLoop = '*/2 * * * *'; // Every 2 minutes
const cron_TestinLoop = '*/13 * * * * *'; // Every 13 seconds

const FloorSenso1_LoopTimeout = 5;
const FloorSenso2_LoopTimeout = 5;
const FloorSenso3_LoopTimeout = 5;
const FloorSenso4_LoopTimeout = 5;

//=======================================================================================
let executeTestingLoop; // Flag to indicate if Testing Loop should be executed
//=======================================================================================

const Parameter_FACTORY_Mode = 'ADM/(2)f';
const Parameter_SERVICE_Mode = 'ADM/(1)';
const Parameter_Clear_SERVICE_FACTORY_Mode = 'ADM';

// Values for further calculations
let _WaterTemperature = 0;
let _WaterPressure = 0;
let _WaterConductivity = 0;
let _WaterConductivity_EC25 = 0;

//Reference to my own adapter
let myAdapter;

// Variable for Timer IDs
let alarm_Intervall_ID;
let short_Intervall_ID;
let long_Intervall_ID;
let very_long_Intervall_ID;
let delay_Timer_ID;
let delay_reconnection;
let timeout_axios_request;

let sensor_temperature_present = false;
let sensor_pressure_present = false;
let sensor_conductivity_present = false;

let valuesInfoMessages = true;
let moreMessages = false;
let apiResponseInfoMessages = false;

let interfaceBusy;
let interfaceBusyCounter = 0;
const interfaceBusyMaxBeforeReaset = 10;
let SystemLanguage;
let MainValveJammProtection_running = false;

class wamo extends utils.Adapter {

	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: String(adapterName),
		});

		// Axios Clients
		this.syrApiClient = null;
		this.syrSaveFloor1APIClient = null;
		this.syrSaveFloor2APIClient = null;
		this.syrSaveFloor3APIClient = null;
		this.syrSaveFloor4APIClient = null;

		// test
		this.on('ready', this.onReady.bind(this));
		this.on('stateChange', this.onStateChange.bind(this));
		// this.on('objectChange', this.onObjectChange.bind(this));
		// this.on('message', this.onMessage.bind(this));
		this.on('unload', this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		moreMessages = this.config.moremessages;
		apiResponseInfoMessages = this.config.apiresponsemessages;
		valuesInfoMessages = this.config.valueinfomessages;
		delay_reconnection = this.config.reconnectingdelaytime;
		timeout_axios_request = this.config.requesttimeout;
		executeTestingLoop = this.config.executetestloop;
		this.log.debug('config Device IP: ' + String(this.config.device_ip));
		this.log.debug('config Device Port: ' + String(this.config.device_port));
		this.log.debug('More log messages: ' + String(this.config.moremessages));
		this.log.debug('show API response messages: ' + String(this.config.apiresponsemessages));
		this.log.debug('show value messages from device: ' + String(this.config.valueinfomessages));
		this.log.debug('Reconnection time after lost connection to the device is ' + String(this.config.reconnectingdelaytime) + ' seconds');
		this.log.debug('Timeout for axios requests is ' + String(this.config.requesttimeout) + ' seconds');
		this.log.debug('Main valve jam Protection: ' + String(this.config.regularmainvalvemovement));
		this.log.debug('Cron settings main valve jam protection ' + String(this.config.regularemovementcron));


		//=================================================================================================
		// getting system language
		//=================================================================================================
		try {
			const systemSettings = await this.getForeignObjectAsync('system.config');
			if (systemSettings != null) {
				SystemLanguage = String(systemSettings.common.language);
				this.log.debug('System language is ' + String(systemSettings.common.language));
			}
			else {
				// we set language to default english
				SystemLanguage = String('en');
				this.log.error('systemSettings objekt is null');
			}
		} catch (err) {
			// we set language to default; english
			SystemLanguage = String('en');
			this.log.error('ERROR getting system config: ' + err);
		}

		//=================================================================================================
		//===  Create the "Device" object and all channel objects										===
		//=================================================================================================
		try {
			if (this.config.device_ip != '0.0.0.0' && this.config.device_ip != ''){
				await this.initDevicesAndChanels();
			}
			else{
				this.log.warn('No "Water Protection Device" configured!');
			}
		} catch (err) {
			this.log.error('Error initStatesAndChanels: ' + err);
		}

		//=================================================================================================
		//===  Create the "Floorsensor.X" object and all channel objects								===
		//=================================================================================================

		try {
			if (this.config.safefloor_1_ip != '0.0.0.0' && this.config.safefloor_1_ip != '') {
				await this.initFloorsensorAndChanels(1);
			}
			if (this.config.safefloor_2_ip != '0.0.0.0' && this.config.safefloor_2_ip != '') {
				await this.initFloorsensorAndChanels(2);
			}
			if (this.config.safefloor_3_ip != '0.0.0.0' && this.config.safefloor_3_ip != '') {
				await this.initFloorsensorAndChanels(3);
			}
			if (this.config.safefloor_4_ip != '0.0.0.0' && this.config.safefloor_4_ip != '') {
				await this.initFloorsensorAndChanels(4);
			}
		} catch (err) {
			this.log.error('Error initFloorsensorAndChanels: ' + err);
		}

		//=================================================================================================
		//===  Create All state Objects in order to avoid later use of "setObjectNotExistsAsync"		===
		//=================================================================================================
		try {
			if (this.config.device_ip != '0.0.0.0' && this.config.device_ip != ''){
				await this.createAlloObjects();
			}
		} catch (err) {
			this.log.error('Error createAlloObjects: ' + err);
		}

		//=================================================================================================================
		//===  Create All state Objects for Floor Sensors in order to avoid later use of "setObjectNotExistsAsync"		===
		//=================================================================================================================
		try {
			if (this.config.safefloor_1_ip != '0.0.0.0' && this.config.safefloor_1_ip != '') {
				await this.createAlloFloorsensorObjects(1);
			}
			if (this.config.safefloor_2_ip != '0.0.0.0' && this.config.safefloor_2_ip != '') {
				await this.createAlloFloorsensorObjects(2);
			}
			if (this.config.safefloor_3_ip != '0.0.0.0' && this.config.safefloor_3_ip != '') {
				await this.createAlloFloorsensorObjects(3);
			}
			if (this.config.safefloor_4_ip != '0.0.0.0' && this.config.safefloor_4_ip != '') {
				await this.createAlloFloorsensorObjects(4);
			}
		} catch (err) {
			this.log.error('Error createAlloFloorsensorObjects: ' + err);
		}

		//=================================================================================================
		//===  Initialise additional runtime states														===
		//=================================================================================================
		if (this.config.device_ip != '0.0.0.0' && this.config.device_ip != '') {
			// Jam protection running Flag
			this.setStateAsync(DeviceParameters.JamProtectionOngoing.statePath + '.' + DeviceParameters.JamProtectionOngoing.id, { val: false, ack: true });
			// Jam protection activated
			this.setStateAsync(DeviceParameters.JamProtectionEnabled.statePath + '.' + DeviceParameters.JamProtectionEnabled.id, { val: this.config.regularmainvalvemovement, ack: true });
			// Jam protection Cron Timing
			this.setStateAsync(DeviceParameters.JamProtectionTiming.statePath + '.' + DeviceParameters.JamProtectionTiming.id, { val: this.config.regularemovementcron, ack: true });
		}
		//=================================================================================================
		// Initialize Axios Client (this client will be used to communicate with the device)			===
		//=================================================================================================
		if (this.config.device_ip != '0.0.0.0' && this.config.device_ip != '') {
			this.syrApiClient = axios.create({
				baseURL: `http://${this.config.device_ip}:${this.config.device_port}/safe-tec/`,
				timeout: timeout_axios_request * 1000,
				responseType: 'json',
				responseEncoding: 'utf8',
				httpAgent: new http.Agent({
					keepAlive: true
				})
			});
		}

		//=====================================================================================================================
		// Initialize Axios Client for SafeFloor Units (this client will be used to communicate with the SafeFloor units)	===
		//=====================================================================================================================
		if (this.config.safefloor_1_ip != '0.0.0.0' && this.config.safefloor_1_ip != '') {
			this.log.info('SafeFloor Connect Unit 1 IP-Address: ' + String(this.config.safefloor_1_ip) + ':' + String(this.config.device_port));
			this.syrSaveFloor1APIClient = axios.create({
				baseURL: `http://${this.config.safefloor_1_ip}:${this.config.device_port}/floorsensor/`,
				timeout: FloorSenso1_LoopTimeout * 1000,
				responseType: 'json',
				responseEncoding: 'utf8',
				httpAgent: new http.Agent({
					keepAlive: true
				})
			});
			this.log.debug('SafeFloor Connect Unit 1 baseURL: ' + String(this.syrSaveFloor1APIClient.defaults.baseURL));
		}
		if (this.config.safefloor_2_ip != '0.0.0.0' && this.config.safefloor_2_ip != '') {
			this.log.info('SafeFloor Connect Unit 2 IP-Address: ' + String(this.config.safefloor_2_ip) + ':' + String(this.config.device_port));
			this.syrSaveFloor2APIClient = axios.create({
				baseURL: `http://${this.config.safefloor_2_ip}:${this.config.device_port}/floorsensor/`,
				timeout: FloorSenso2_LoopTimeout * 1000,
				responseType: 'json',
				responseEncoding: 'utf8',
				httpAgent: new http.Agent({
					keepAlive: true
				})
			});
			this.log.debug('SafeFloor Connect Unit 2 baseURL: ' + String(this.syrSaveFloor2APIClient.defaults.baseURL));
		}
		if (this.config.safefloor_3_ip != '0.0.0.0' && this.config.safefloor_3_ip != '') {
			this.log.info('SafeFloor Connect Unit 3 IP-Address: ' + String(this.config.safefloor_3_ip) + ':' + String(this.config.device_port));
			this.syrSaveFloor3APIClient = axios.create({
				baseURL: `http://${this.config.safefloor_3_ip}:${this.config.device_port}/floorsensor/`,
				timeout: FloorSenso3_LoopTimeout * 1000,
				responseType: 'json',
				responseEncoding: 'utf8',
				httpAgent: new http.Agent({
					keepAlive: true
				})
			});
			this.log.debug('SafeFloor Connect Unit 3 baseURL: ' + String(this.syrSaveFloor3APIClient.defaults.baseURL));
		}
		if (this.config.safefloor_4_ip != '0.0.0.0' && this.config.safefloor_4_ip != '') {
			this.log.info('SafeFloor Connect Unit 4 IP-Address: ' + String(this.config.safefloor_4_ip) + ':' + String(this.config.device_port));
			this.syrSaveFloor4APIClient = axios.create({
				baseURL: `http://${this.config.safefloor_4_ip}:${this.config.device_port}/floorsensor/`,
				timeout: FloorSenso4_LoopTimeout * 1000,
				responseType: 'json',
				responseEncoding: 'utf8',
				httpAgent: new http.Agent({
					keepAlive: true
				})
			});
			this.log.debug('SafeFloor Connect Unit 4 baseURL: ' + String(this.syrSaveFloor4APIClient.defaults.baseURL));
		}
		//=================================================================================================
		// Test if device is responding																	===
		//=================================================================================================
		if (this.syrApiClient != null) {
			try {
				while (!await this.devicePing()) {
					this.log.warn('waiting till device becomes available again ...');
				}
				this.log.info('Leakage protection device is present at: ' + String(this.config.device_ip) + ':' + String(this.config.device_port));
			}
			catch (err) {
				this.log.error(err);
				return;
			}
		}
		//=================================================================================================
		//===  Getting sensor presence																	===
		//=================================================================================================
		let gotSensorPreasence = false;
		if (this.syrApiClient != null) {
			while (!gotSensorPreasence) {
				try {
					this.log.info('checking sensor presence ...');
					this.log.debug('async onReady() at "while (!gotSensorPreasence)" -> Getting sensor presence');
					//==================================================================
					//= Getting data for 'DeviceParameters' in [const sensorPresence]  =
					//==================================================================
					if (moreMessages) { this.log.info('reading device parameters defined in object [sensorPresence]'); }
					await this.getData(sensorPresence);
					gotSensorPreasence = true;
					await this.delay(3000); // we need to wait some seconds to make sure sensor objects are created
					// now we can create the sensor specific objects
					await this.createSensorSpecificObjects();
				}
				catch (err) {
					this.log.error('this.getData(sensorPresence) ERROR: ' + err);
				}
			}
		}

		//=================================================================================================
		//===  Getting device data																		===
		//=================================================================================================
		let gotDeviceData = false;
		if (this.syrApiClient != null) {
			while (!gotDeviceData) {
				try {
					this.log.info('initial reading device data ...');
					this.log.debug('async onReady() at "while (!gotDeviceData)" -> Getting initial data');
					//==================================================================
					//= Getting all datas for 'DeviceParameters' in [const initStates] =
					//==================================================================
					if (moreMessages) { this.log.info('reading device parameters defined in object [initStates]'); }
					await this.getData(initStates);
					gotDeviceData = true;
				}
				catch (err) {
					this.log.error('this.getData(initStates) ERROR: ' + err);
				}
			}
		}
		//=================================================================
		// update state: German hardnes calculation factor from settings
		//=================================================================
		if (this.syrApiClient != null) {
			await this.updateHardnesFactorObject();
		}
		//=================================================================================================
		//===  Getting device Profiles data																===
		//=================================================================================================
		let gotDeviceProfileData = false;
		if (this.syrApiClient != null) {
			while (!gotDeviceProfileData) {
				try {
					this.log.info('initial reading profile data ...');
					// Device Profiles Initialisation
					this.log.debug('async onReady() - getDeviceProfilesData -> Getting Profiles data from device at ' + this.config.device_ip + ':' + this.config.device_port);
					//===============================================
					//= Getting all Profile 'DeviceParameters' data =
					//===============================================
					const responseInitProfiles = await this.getDeviceProfilesData();
					this.log.debug(`[async onReady() - getDeviceProfilesData -> getDeviceProfilesData] Response:  ${responseInitProfiles}`);
					gotDeviceProfileData = true;
				}
				catch (err) {
					this.log.error('getDeviceProfilesData() ERROR: ' + err);
				}
			}
		}
		//=========================
		//===  Timer starten	===
		//=========================
		try {
			await this.timerStarts();
		} catch (err) {
			this.log.error('Timer start error ... exit');
			return;
		}
		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*//*
		await this.setObjectNotExistsAsync('testVariable', {
			type: 'state',
			common: {
				name: 'testVariable',
				type: 'boolean',
				role: 'indicator',
				read: true,
				write: true,
			},
			native: {},
		});
		*/

		//==========================================
		//=== Subscribe to user changable states ===
		//==========================================
		if (this.syrApiClient != null) {
			this.subscribeStates(DeviceParameters.systemRestart.statePath + '.' + DeviceParameters.systemRestart.id); // [RST] System Restart
			this.subscribeStates(DeviceParameters.DeactivateConductivitySensor.statePath + '.' + DeviceParameters.DeactivateConductivitySensor.id); // [CSD] Deactivate conductivity sensor
			this.subscribeStates(DeviceParameters.DeactivatePressureSensor.statePath + '.' + DeviceParameters.DeactivatePressureSensor.id); // [PSD] Deactivate pressure sensor
			this.subscribeStates(DeviceParameters.DeactivateTemperatureSensor.statePath + '.' + DeviceParameters.DeactivateTemperatureSensor.id); // [TSD] Deactivate temperature sensor
			this.subscribeStates(DeviceParameters.MaxFlowLeakageTime.statePath + '.' + DeviceParameters.MaxFlowLeakageTime.id); // [T2] Max flow leakage time
			this.subscribeStates(DeviceParameters.Units.statePath + '.' + DeviceParameters.Units.id); // [UNI] units
			this.subscribeStates(DeviceParameters.ScreenRotation.statePath + '.' + DeviceParameters.ScreenRotation.id); // [SRO] Screen Rotation
			this.subscribeStates(DeviceParameters.ShutOff.statePath + '.' + DeviceParameters.ShutOff.id); // [AB] Shutoff valve
			this.subscribeStates(DeviceParameters.APTimeout.statePath + '.' + DeviceParameters.APTimeout.id); // [APT] WiFi AP timeout
			this.subscribeStates(DeviceParameters.ButtonProfileChange.statePath + '.' + DeviceParameters.ButtonProfileChange.id); // [BPB] Enable profile changes by button (0 = blocked, 1 = possible)
			this.subscribeStates(DeviceParameters.FloorSensor.statePath + '.' + DeviceParameters.FloorSensor.id); // [BSE] Floor sensor
			this.subscribeStates(DeviceParameters.BuzzerOnAlarm.statePath + '.' + DeviceParameters.BuzzerOnAlarm.id); // [BUZ] Buzzer on alarm
			this.subscribeStates(DeviceParameters.MicroLeakageTest.statePath + '.' + DeviceParameters.MicroLeakageTest.id); // [BUZ] Buzzer on alarm
			this.subscribeStates(DeviceParameters.MicroLeakageTestPeriod.statePath + '.' + DeviceParameters.MicroLeakageTestPeriod.id); // [DRP] Micro-Leakage-Test period
			this.subscribeStates(DeviceParameters.DaylightSavingTime.statePath + '.' + DeviceParameters.DaylightSavingTime.id); // [IDS] Daylight saving time
			this.subscribeStates(DeviceParameters.Language.statePath + '.' + DeviceParameters.Language.id); // [LNG] Language
			this.subscribeStates(DeviceParameters.LeakProtectionTemporaryDeactivation.statePath + '.' + DeviceParameters.LeakProtectionTemporaryDeactivation.id);// [TMP] temporary protection deactivation
			this.subscribeStates(DeviceParameters.LeakageNotificationWarningThreshold.statePath + '.' + DeviceParameters.LeakageNotificationWarningThreshold.id); // [LWT] Leakage notification (warning) threshold
			this.subscribeStates(DeviceParameters.SelectedProfile.statePath + '.' + DeviceParameters.SelectedProfile.id); // [PRF] Selected profile
			this.subscribeStates(adapterChannels.DevicePofiles.path + '.*'); // ALL profile states
		}
		if(this.syrSaveFloor1APIClient != null)
		{
			this.subscribeStates(DeviceParametetsFS.SleepMode.statePath.replace('.X.', '.1.')  + '.' + DeviceParametetsFS.SleepMode.id); // Floor Sensor 1 [SLP] Send device to sleep
			this.subscribeStates(DeviceParametetsFS.AdminMode.statePath.replace('.X.', '.1.')  + '.' + DeviceParametetsFS.AdminMode.id); // Floor Sensor 1 [ADM(2)f] Set device ADMIN mode
		}
		if(this.syrSaveFloor2APIClient != null)
		{
			this.subscribeStates(DeviceParametetsFS.SleepMode.statePath.replace('.X.', '.2.')  + '.' + DeviceParametetsFS.SleepMode.id); // Floor Sensor 2 [SLP] Send device to sleep
			this.subscribeStates(DeviceParametetsFS.AdminMode.statePath.replace('.X.', '.2.')  + '.' + DeviceParametetsFS.AdminMode.id); // Floor Sensor 2 [ADM(2)f] Set device ADMIN mode
		}
		if(this.syrSaveFloor3APIClient != null)
		{
			this.subscribeStates(DeviceParametetsFS.SleepMode.statePath.replace('.X.', '.3.')  + '.' + DeviceParametetsFS.SleepMode.id); // Floor Sensor 3 [SLP] Send device to sleep
			this.subscribeStates(DeviceParametetsFS.AdminMode.statePath.replace('.X.', '.3.')  + '.' + DeviceParametetsFS.AdminMode.id); // Floor Sensor 3 [ADM(2)f] Set device ADMIN mode
		}
		if(this.syrSaveFloor4APIClient != null)
		{
			this.subscribeStates(DeviceParametetsFS.SleepMode.statePath.replace('.X.', '.4.')  + '.' + DeviceParametetsFS.SleepMode.id); // Floor Sensor 4 [SLP] Send device to sleep
			this.subscribeStates(DeviceParametetsFS.AdminMode.statePath.replace('.X.', '.4.')  + '.' + DeviceParametetsFS.AdminMode.id); // Floor Sensor 4 [ADM(2)f] Set device ADMIN mode
		}

		// reference to Adapter
		myAdapter = this;

		if (moreMessages) { this.log.info('wamo adapter is running'); }
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		this.log.debug('[onUnload(callback)] was hit');
		try {
			schedule.gracefulShutdown();
		} catch (err) {
			this.log.error('Error disabeling cron jobs' + err);
		}

		try {
			// clear all intervals
			if(alarm_Intervall_ID != null){try { clearInterval(alarm_Intervall_ID); } catch (err) { this.log.error('ERRRO clerring [Alarm Timer] interval');}}
			if(short_Intervall_ID != null){try { clearInterval(short_Intervall_ID); } catch (err) { this.log.error('ERRRO clerring [Short Timer] interval');}}
			if(long_Intervall_ID != null){try { clearInterval(long_Intervall_ID); } catch (err) { this.log.error('ERRRO clerring [Long Timer] interval');}}
			if(very_long_Intervall_ID != null){try { clearInterval(very_long_Intervall_ID); } catch (err) { this.log.error('ERRRO clerring [Very Long Timer] interval');}}

			if(delay_Timer_ID != null){try { clearTimeout(delay_Timer_ID); } catch (err) { this.log.error('ERRRO clerring [Delay Timeout] interval');}}

			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	async onStateChange(id, state) {
		try {
			this.log.debug('async onStateChange(id, state) hit -> id: ' + String(id));
			if (state) {
				this.log.debug('async onStateChange(id, state) -> if (state) hit -> id: ' + String(id) + ' state.val: ' + String(state.val) + ' state.ack: ' + String(state.ack));
				const statePrefix = this.name + '.' + String(this.instance) + '.';
				// The state was changed
				//============================================================================
				// Screen Rotation
				//============================================================================
				if ((id == statePrefix + DeviceParameters.ScreenRotation.statePath + '.' + DeviceParameters.ScreenRotation.id) && state.ack == false) {
					switch (state.val) {
						case 0:
						case 90:
						case 180:
						case 270:
							try {
								await this.set_DevieParameter(DeviceParameters.ScreenRotation, String(state.val));
								this.log.info('[SRO] Screen rotation changed to ' + String(state.val) + '°');
							}
							catch (err) {
								this.log.warn('onStateChange(id, state) -> await this.set_DevieParameter(DeviceParameters.ScreenRotation ... ERROR: ' + err);
							}
							break;
						default:
							this.log.error('Screen rotation value of ' + String(state.val) + '° is not a valid angle!');
							break;
					}
				}
				//============================================================================
				// Shutoff valve AB
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.ShutOff.statePath + '.' + DeviceParameters.ShutOff.id) && state.ack == false) {
					switch (state.val) {
						case 1:
						case 2:
							try {
								await this.set_DevieParameter(DeviceParameters.ShutOff, String(state.val));
								if (state.val == 1) {
									this.log.info('Command: [AB] Shutoff valve OPENED');
								}
								else {
									this.log.warn('Command: [AB] Shutoff valve CLOSED');
								}
							}
							catch (err) {
								this.log.warn('onStateChange(id, state) -> await this.set_DevieParameter(DeviceParameters.ShutOff ... ERROR: ' + err);
							}
							break;
						default:
							this.log.error(String(state.val) + ' is not valid for ' + String(DeviceParameters.ScreenRotation.id + ' Valid values: 1=open 2=closed'));
							break;
					}
				}
				//============================================================================
				// APT WiFi AP timeout changed
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.APTimeout.statePath + '.' + DeviceParameters.APTimeout.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.APTimeout.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.APTimeout.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.APTimeout, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.APTimeout.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.ButtonProAPTimeoutfileChange.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [APT]: ' + err.message);
						}
					}
				}
				//============================================================================
				// BPB ButtonProfileChange
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.ButtonProfileChange.statePath + '.' + DeviceParameters.ButtonProfileChange.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.ButtonProfileChange.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.ButtonProfileChange.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.ButtonProfileChange, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.ButtonProfileChange.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.ButtonProfileChange.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [BPB]: ' + err.message);
						}
					}
				}
				//============================================================================
				// BSA Floor Sensor
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.FloorSensor.statePath + '.' + DeviceParameters.FloorSensor.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.FloorSensor.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.FloorSensor.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.FloorSensor, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.FloorSensor.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.FloorSensor.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [BSA]: ' + err.message);
						}
					}
				}
				//============================================================================
				// BUZ Buzzer on alarm
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.BuzzerOnAlarm.statePath + '.' + DeviceParameters.BuzzerOnAlarm.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.BuzzerOnAlarm.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.BuzzerOnAlarm.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.BuzzerOnAlarm, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.BuzzerOnAlarm.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.BuzzerOnAlarm.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [BUZ]: ' + err.message);
						}
					}
				}
				//============================================================================
				// DMA Micro-Leakage-Test
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.MicroLeakageTest.statePath + '.' + DeviceParameters.MicroLeakageTest.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.MicroLeakageTest.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.MicroLeakageTest.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.MicroLeakageTest, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.MicroLeakageTest.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.MicroLeakageTest.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [DMA]: ' + err.message);
						}
					}
				}
				//============================================================================
				// DRP Micro-Leakage-Test period
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.MicroLeakageTestPeriod.statePath + '.' + DeviceParameters.MicroLeakageTestPeriod.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.MicroLeakageTestPeriod.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.MicroLeakageTestPeriod.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.MicroLeakageTestPeriod, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.MicroLeakageTestPeriod.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.MicroLeakageTestPeriod.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [DRP]: ' + err.message);
						}
					}
				}
				//============================================================================
				// IDS Daylight saving time
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.DaylightSavingTime.statePath + '.' + DeviceParameters.DaylightSavingTime.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.DaylightSavingTime.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.DaylightSavingTime.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.DaylightSavingTime, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.DaylightSavingTime.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.DaylightSavingTime.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [IDS]: ' + err.message);
						}
					}
				}
				//============================================================================
				// LNG Language
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.Language.statePath + '.' + DeviceParameters.Language.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.Language.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.Language.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.Language, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.Language.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.Language.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [LNG]: ' + err.message);
						}
					}
				}
				//============================================================================
				// LWT Leakage notification (warning) threshold
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.LeakageNotificationWarningThreshold.statePath + '.' + DeviceParameters.LeakageNotificationWarningThreshold.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.LeakageNotificationWarningThreshold.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.LeakageNotificationWarningThreshold.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.LeakageNotificationWarningThreshold, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.LeakageNotificationWarningThreshold.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.LeakageNotificationWarningThreshold.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [LWT]: ' + err.message);
						}
					}
				}
				//============================================================================
				// UNI Units
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.Units.statePath + '.' + DeviceParameters.Units.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.Units.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.Units.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.Units, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.Units.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.Units.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [UNI]: ' + err.message);
						}
					}
				}
				//============================================================================
				// CSD Deactivate conductivity sensor
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.DeactivateConductivitySensor.statePath + '.' + DeviceParameters.DeactivateConductivitySensor.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.DeactivateConductivitySensor.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.DeactivateConductivitySensor.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.DeactivateConductivitySensor, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.DeactivateConductivitySensor.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.DeactivateConductivitySensor.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [CSD]: ' + err.message);
						}
					}
				}
				//============================================================================
				// PSD Deactivate pressure sensor
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.DeactivatePressureSensor.statePath + '.' + DeviceParameters.DeactivatePressureSensor.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.DeactivatePressureSensor.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.DeactivatePressureSensor.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.DeactivatePressureSensor, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.DeactivatePressureSensor.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.DeactivatePressureSensor.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [PSD]: ' + err.message);
						}
					}
				}
				//============================================================================
				// TSD Deactivate temperature sensor
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.DeactivateTemperatureSensor.statePath + '.' + DeviceParameters.DeactivateTemperatureSensor.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.DeactivateTemperatureSensor.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.DeactivateTemperatureSensor.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.DeactivateTemperatureSensor, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.DeactivateTemperatureSensor.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.DeactivateTemperatureSensor.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [TSD]: ' + err.message);
						}
					}
				}
				//============================================================================
				// T2 Max flow leakage time
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.MaxFlowLeakageTime.statePath + '.' + DeviceParameters.MaxFlowLeakageTime.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if ((Number(state.val) >= Number(DeviceParameters.MaxFlowLeakageTime.objectdefinition.common.min)) && Number(state.val) <= Number(DeviceParameters.MaxFlowLeakageTime.objectdefinition.common.max)) {
								await this.set_DevieParameter(DeviceParameters.MaxFlowLeakageTime, state.val);
								if (moreMessages) { this.log.info(DeviceParameters.MaxFlowLeakageTime.id + ' changed to ' + String(state.val)); }
							}
							else { this.log.error(DeviceParameters.MaxFlowLeakageTime.id + ' new value [' + String(state.val) + '] is out of range!'); }
						} catch (err) {
							this.log.error('ERROR setting [T2]: ' + err.message);
						}
					}
				}
				//============================================================================
				// RST System restart
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.systemRestart.statePath + '.' + DeviceParameters.systemRestart.id) && (state.ack == false)) {
					if (state.val != null) {
						try {
							if (state.val == 1) {
								this.log.warn('System restart initiated by user!');
								// send restart command (1 as number) to device
								await this.set_DevieParameter(DeviceParameters.systemRestart, state.val);
								this.log.debug('Setting state RST (sytem restart) back to 0!');
								// set state back to 0
								await this.setStateAsync(DeviceParameters.systemRestart.statePath + '.' + DeviceParameters.systemRestart.id, { val: 0, ack: true });

								if (moreMessages) { this.log.info(DeviceParameters.systemRestart.id + ' changed to ' + String(state.val)); }
							}
						} catch (err) {
							this.log.error('ERROR setting [RST]: ' + err.message);
						}
					}
				}
				//============================================================================
				// Leakage protection deactivation time
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.LeakProtectionTemporaryDeactivation.statePath + '.' + DeviceParameters.LeakProtectionTemporaryDeactivation.id) && state.ack == false) {
					try {
						await this.set_DevieParameter(DeviceParameters.LeakProtectionTemporaryDeactivation, String(state.val));
					}
					catch (err) {
						this.log.warn('onStateChange(id, state) -> await this.set_DevieParameter(DeviceParameters.LeakProtectionTemporaryDeactivation ... ERROR: ' + err);
					}
					const tempDisabledSeconds = parseFloat(String(state.val));
					const offTime = new Date(tempDisabledSeconds * 1000).toISOString().substring(11, 19);

					if (tempDisabledSeconds == 0) { this.log.info('Command: [TMP] Leakage protection is aktive'); }
					else { this.log.warn('Command: [TMP] Leakage protection temporary disabled for ' + offTime + ' (hh:mm:ss)'); }
				}
				//============================================================================
				// Selected Profile
				//============================================================================
				else if ((id == statePrefix + DeviceParameters.SelectedProfile.statePath + '.' + DeviceParameters.SelectedProfile.id) && state.ack == false) {
					let profileEnabled = Object();
					let changeOK = false;
					switch (state.val) {
						case 1:
							// Profile available?
							profileEnabled = await this.getStateAsync(DeviceParameters.Profile_PA1.statePath + '.' + DeviceParameters.Profile_PA1.id);
							if ((profileEnabled != null) && parseInt(profileEnabled.val) == 1) { changeOK = true; } else { changeOK = false; }
							break;
						case 2:
							// Profile available?
							profileEnabled = await this.getStateAsync(DeviceParameters.Profile_PA2.statePath + '.' + DeviceParameters.Profile_PA2.id);
							if ((profileEnabled != null) && parseInt(profileEnabled.val) == 1) { changeOK = true; } else { changeOK = false; }
							break;
						case 3:
							// Profile available?
							profileEnabled = await this.getStateAsync(DeviceParameters.Profile_PA3.statePath + '.' + DeviceParameters.Profile_PA3.id);
							if ((profileEnabled != null) && parseInt(profileEnabled.val) == 1) { changeOK = true; } else { changeOK = false; }
							break;
						case 4:
							// Profile available?
							profileEnabled = await this.getStateAsync(DeviceParameters.Profile_PA4.statePath + '.' + DeviceParameters.Profile_PA4.id);
							if ((profileEnabled != null) && parseInt(profileEnabled.val) == 1) { changeOK = true; } else { changeOK = false; }
							break;
						case 5:
							// Profile available?
							profileEnabled = await this.getStateAsync(DeviceParameters.Profile_PA5.statePath + '.' + DeviceParameters.Profile_PA5.id);
							if ((profileEnabled != null) && parseInt(profileEnabled.val) == 1) { changeOK = true; } else { changeOK = false; }
							break;
						case 6:
							// Profile available?
							profileEnabled = await this.getStateAsync(DeviceParameters.Profile_PA6.statePath + '.' + DeviceParameters.Profile_PA6.id);
							if ((profileEnabled != null) && parseInt(profileEnabled.val) == 1) { changeOK = true; } else { changeOK = false; }
							break;
						case 7:
							// Profile available?
							profileEnabled = await this.getStateAsync(DeviceParameters.Profile_PA7.statePath + '.' + DeviceParameters.Profile_PA7.id);
							if ((profileEnabled != null) && parseInt(profileEnabled.val) == 1) { changeOK = true; } else { changeOK = false; }
							break;
						case 8:
							// Profile available?
							profileEnabled = await this.getStateAsync(DeviceParameters.Profile_PA8.statePath + '.' + DeviceParameters.Profile_PA8.id);
							if ((profileEnabled != null) && parseInt(profileEnabled.val) == 1) { changeOK = true; } else { changeOK = false; }
							break;
						default:
							this.log.error(String(state.val) + ' is not valid for ' + String(DeviceParameters.SelectedProfile.id + ' Valid values: 1...8'));
							break;
					}
					if (changeOK) {
						try {
							await this.set_DevieParameter(DeviceParameters.SelectedProfile, String(state.val));
							this.log.info('Selected profile changed to number ' + String(state.val));
						}
						catch (err) {
							this.log.warn('onStateChange(id, state) -> await this.set_DevieParameter(DeviceParameters.SelectedProfile ... ERROR: ' + err);
						}
					}
					else {
						this.log.error('You cant change to an unavailable profile! Please make profil ' + String(state.val) + ' available first.');
						// Rerstore old active Profile back to State
						// Read selected Profile from Device
						const currentAktiveProfile = await this.get_DevieParameter(DeviceParameters.SelectedProfile);
						if (currentAktiveProfile != null) {
							// Save aktive profile from Device in state
							await this.set_DevieParameter(DeviceParameters.SelectedProfile, String(currentAktiveProfile['getPRF']));
						} else {
							this.log.debug('couldn\'t read aktive Profile Parameter');
						}
					}
				}
				//============================================================================
				// Profile(s) Parameter
				//============================================================================
				else if ((id.includes('Device.Profiles.')) && (state.ack == false)) {
					try {
						// identify Profile parameter
						const currentProfileState = id.substring(id.lastIndexOf('.') + 1, id.length - 1);
						this.log.debug('onStateChange Profile Parameter is: ' + String(currentProfileState));
						// identify profile number
						const stateChangeProfileNo = parseInt(id.substring(id.length - 1));
						this.log.debug('onStateChange Profile Number is: ' + String(stateChangeProfileNo));

						// identify currentAktiveProfile
						const AktiveProfileNumber = await this.getStateAsync(DeviceParameters.SelectedProfile.statePath + '.' + DeviceParameters.SelectedProfile.id);

						switch (currentProfileState) {
							case 'PA':	// Available
								// Trying to disable the ACTIVE profile?
								if ((AktiveProfileNumber != null) && (parseInt(String(AktiveProfileNumber.val)) == stateChangeProfileNo) && (parseInt(String(state.val)) == 0)) {
									this.log.error('You can\'t disable the aktive profile! You need to select an other aktiv profile first!');

									// Restore availability parameter to 1 (on)
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PA1, '1');
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PA2, '1');
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PA3, '1');
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PA4, '1');
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PA5, '1');
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PA6, '1');
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PA7, '1');
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PA8, '1');
											break;
									}
									this.log.warn('Restored profile ' + String(stateChangeProfileNo) + 'availability to 1 (on)');
								}
								else {
									let profAvailableState = parseInt(String(state.val));
									// do we have a legal value like 0 or 1
									if (profAvailableState > 1) {
										profAvailableState = 1;
										this.log.warn('Profile ' + stateChangeProfileNo + ' available value \'' + String(state.val) + '\' is not valid! Profile will be set to \'available\'! (1)');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PA1, String(profAvailableState));
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PA2, String(profAvailableState));
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PA3, String(profAvailableState));
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PA4, String(profAvailableState));
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PA5, String(profAvailableState));
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PA6, String(profAvailableState));
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PA7, String(profAvailableState));
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PA8, String(profAvailableState));
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PA');
									}

									if (profAvailableState == 0) { this.log.info('Profile ' + String(stateChangeProfileNo) + ' availability changed to \'not available\'.'); }
									else { this.log.info('Profile ' + String(stateChangeProfileNo) + ' availability changed to \'available\'.'); }
								}
								break;
							case 'PN':	// Name
								try {
									let newProfileName = String(state.val);
									if (String(state.val).length > 31) {
										newProfileName = newProfileName.substring(0, 30);
										this.log.warn('Profile name \'' + String(state.val) + '\' is to long and will be cut to \'' + String(newProfileName) + '\' Mmax. 31 characters allowed!');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PN1, newProfileName);
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PN2, newProfileName);
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PN3, newProfileName);
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PN4, newProfileName);
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PN5, newProfileName);
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PN6, newProfileName);
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PN7, newProfileName);
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PN8, newProfileName);
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PN');
									}
									this.log.info('Profile ' + String(stateChangeProfileNo) + ' name changed to \'' + String(newProfileName) + '\'');
								} catch (err) { this.log.error('at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) Profile Name change ERROR: ' + err); }
								break;
							case 'PB':	// Buzzer
								try {
									let profileBuzzer = parseFloat(String(state.val));
									if (profileBuzzer > 1) {
										profileBuzzer = 1;
										this.log.warn('Profile ' + String(stateChangeProfileNo) + ' buzzer value \'' + String(state.val) + '\' is not valid! Buzzer will be set to \'ON\'! (1)');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PB1, String(profileBuzzer));
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PB2, String(profileBuzzer));
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PB3, String(profileBuzzer));
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PB4, String(profileBuzzer));
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PB5, String(profileBuzzer));
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PB6, String(profileBuzzer));
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PB7, String(profileBuzzer));
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PB8, String(profileBuzzer));
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PB');
									}

									if (profileBuzzer == 0) { this.log.info('Profile ' + String(stateChangeProfileNo) + ' buzzer is disabled'); }
									else { this.log.info('Profile ' + String(stateChangeProfileNo) + ' buzzer is enabled'); }

								} catch (err) { this.log.error('at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) Profile buzzer change ERROR: ' + err); }
								break;
							case 'PF':	// Max flow
								try {
									let profileMaxFlow = parseInt(String(state.val));
									if (profileMaxFlow > 5000) {
										profileMaxFlow = 5000;
										this.log.warn('Profile ' + String(stateChangeProfileNo) + ' Maximal flow per hour of \'' + String(state.val) + '/h\' is is to high! Max flow will be set to maximum \'5000l/h\'!');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PF1, String(profileMaxFlow));
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PF2, String(profileMaxFlow));
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PF3, String(profileMaxFlow));
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PF4, String(profileMaxFlow));
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PF5, String(profileMaxFlow));
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PF6, String(profileMaxFlow));
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PF7, String(profileMaxFlow));
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PF8, String(profileMaxFlow));
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PF');
									}

									if (profileMaxFlow == 0) { this.log.info('Profile ' + String(stateChangeProfileNo) + ' max Flow per hour is disabled'); }
									else { this.log.info('Profile ' + String(stateChangeProfileNo) + ' max Flow per hour changed to \'' + String(profileMaxFlow) + 'l/h\''); }

								} catch (err) { this.log.error('at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) Profile max flow change ERROR: ' + err); }
								break;
							case 'PM':	// Micro leak detection
								try {
									let profileMicroLeak = parseInt(String(state.val));
									if (profileMicroLeak > 1) {
										profileMicroLeak = 1;
										this.log.warn('Profile ' + String(stateChangeProfileNo) + ' micro leak detection \'' + String(state.val) + '\' is not valid! Micro leak detection will be set to \'ON\'! (1)');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PM1, String(profileMicroLeak));
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PM2, String(profileMicroLeak));
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PM3, String(profileMicroLeak));
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PM4, String(profileMicroLeak));
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PM5, String(profileMicroLeak));
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PM6, String(profileMicroLeak));
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PM7, String(profileMicroLeak));
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PM8, String(profileMicroLeak));
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PM');
									}

									if (profileMicroLeak == 0) { this.log.info('Profile ' + String(stateChangeProfileNo) + ' micro leak detection is disabled'); }
									else { this.log.info('Profile ' + String(stateChangeProfileNo) + ' micro leak detection is enabled'); }

								} catch (err) { this.log.error('at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) Profile micro leak detection change ERROR: ' + err); }
								break;
							case 'PR':	// Time back to default profile
								try {
									let profileTimeBackStandardProfile = parseInt(String(state.val));
									if (profileTimeBackStandardProfile > 720) {
										profileTimeBackStandardProfile = 720;
										this.log.warn('Profile ' + String(stateChangeProfileNo) + ' time back to default profile of \'' + String(state.val) + ' h\' is is to high! It will be set to the maximum of \'720h\' (30 days)!');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PR1, String(profileTimeBackStandardProfile));
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PR2, String(profileTimeBackStandardProfile));
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PR3, String(profileTimeBackStandardProfile));
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PR4, String(profileTimeBackStandardProfile));
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PR5, String(profileTimeBackStandardProfile));
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PR6, String(profileTimeBackStandardProfile));
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PR7, String(profileTimeBackStandardProfile));
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PR8, String(profileTimeBackStandardProfile));
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PR');
									}

									if (profileTimeBackStandardProfile == 0) { this.log.info('Profile ' + String(stateChangeProfileNo) + ' time back to default profile is disabled'); }
									else { this.log.info('Profile ' + String(stateChangeProfileNo) + ' time back to default profile is \'' + String(profileTimeBackStandardProfile) + ' h\''); }

								} catch (err) { this.log.error('at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) Profile back to default profile change ERROR: ' + err); }
								break;
							case 'PT':	// Time limit
								try {
									let profileLeakageTimeLimit = parseInt(String(state.val));
									if (profileLeakageTimeLimit > 1500) {
										profileLeakageTimeLimit = 1500;
										this.log.warn('Profile ' + String(stateChangeProfileNo) + ' leakage time limit of \'' + String(state.val) + ' min\' is is to high! It will be set to the maximum of \'1500 min\' (25 h)!');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PT1, String(profileLeakageTimeLimit));
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PT2, String(profileLeakageTimeLimit));
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PT3, String(profileLeakageTimeLimit));
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PT4, String(profileLeakageTimeLimit));
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PT5, String(profileLeakageTimeLimit));
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PT6, String(profileLeakageTimeLimit));
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PT7, String(profileLeakageTimeLimit));
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PT8, String(profileLeakageTimeLimit));
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PT');
									}

									if (profileLeakageTimeLimit == 0) { this.log.info('Profile ' + String(stateChangeProfileNo) + ' leakage time limit is disabled'); }
									else { this.log.info('Profile ' + String(stateChangeProfileNo) + ' leakage time limit is \'' + String(profileLeakageTimeLimit) + ' min\''); }

								} catch (err) { this.log.error('at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) Profile time limit change ERROR: ' + err); }
								break;
							case 'PV':	// Volume limit
								try {
									let profileLeakageVolumeLimit = parseInt(String(state.val));
									if (profileLeakageVolumeLimit > 1900) {
										profileLeakageVolumeLimit = 1900;
										this.log.warn('Profile ' + String(stateChangeProfileNo) + ' leakage volume limit of \'' + String(state.val) + ' l\' is is to high! It will be set to the maximum of \'1900 l\'!');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PV1, String(profileLeakageVolumeLimit));
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PV2, String(profileLeakageVolumeLimit));
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PV3, String(profileLeakageVolumeLimit));
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PV4, String(profileLeakageVolumeLimit));
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PV5, String(profileLeakageVolumeLimit));
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PV6, String(profileLeakageVolumeLimit));
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PV7, String(profileLeakageVolumeLimit));
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PV8, String(profileLeakageVolumeLimit));
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PV');
									}

									if (profileLeakageVolumeLimit == 0) { this.log.info('Profile ' + String(stateChangeProfileNo) + ' leakage volume limit is disabled'); }
									else { this.log.info('Profile ' + String(stateChangeProfileNo) + ' leakage volume limit is \'' + String(profileLeakageVolumeLimit) + ' l\''); }

								} catch (err) { this.log.error('at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) Profile volume limit change ERROR: ' + err); }
								break;
							case 'PW':	// Leakage warning
								try {
									let profileLeakageWarning = parseInt(String(state.val));
									if (profileLeakageWarning > 1) {
										profileLeakageWarning = 1;
										this.log.warn('Profile ' + String(stateChangeProfileNo) + ' leackage warning value \'' + String(state.val) + '\' is not valid! Leackage warning will be set to \'ON\'! (1)');
									}
									switch (stateChangeProfileNo) {
										case 1:
											await this.set_DevieParameter(DeviceParameters.Profile_PW1, String(profileLeakageWarning));
											break;
										case 2:
											await this.set_DevieParameter(DeviceParameters.Profile_PW2, String(profileLeakageWarning));
											break;
										case 3:
											await this.set_DevieParameter(DeviceParameters.Profile_PW3, String(profileLeakageWarning));
											break;
										case 4:
											await this.set_DevieParameter(DeviceParameters.Profile_PW4, String(profileLeakageWarning));
											break;
										case 5:
											await this.set_DevieParameter(DeviceParameters.Profile_PW5, String(profileLeakageWarning));
											break;
										case 6:
											await this.set_DevieParameter(DeviceParameters.Profile_PW6, String(profileLeakageWarning));
											break;
										case 7:
											await this.set_DevieParameter(DeviceParameters.Profile_PW7, String(profileLeakageWarning));
											break;
										case 8:
											await this.set_DevieParameter(DeviceParameters.Profile_PW8, String(profileLeakageWarning));
											break;
										default:
											this.log.error('Invalid Profile Number \'' + String(stateChangeProfileNo) + ' \' at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) -> PW');
									}

									if (profileLeakageWarning == 0) { this.log.info('Profile ' + String(stateChangeProfileNo) + ' leackage warning is disabled'); }
									else { this.log.info('Profile ' + String(stateChangeProfileNo) + ' leackage warning is enabled'); }

								} catch (err) { this.log.error('at: onStateChange... -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) Profile leackage warning ERROR: ' + err); }
								break;
							default:
						}
					} catch (err) { this.log.warn('onStateChange(id, state) -> else if((id.includes(\'Device.Profiles.\')) && (state.ack == false)) ... ERROR: ' + err); }
				}
				//############################################################################
				// Floore Sensor 1 State changes
				//############################################################################

				//============================================================================
				// Floor Sensor 1: Sleep Mode
				//============================================================================
				else if ((id == statePrefix + DeviceParametetsFS.SleepMode.statePath.replace('.X.', '.1.') + '.' + DeviceParametetsFS.SleepMode.id) && state.ack == false) {
					this.handle_FS_state_changes(this.syrSaveFloor1APIClient, 1, DeviceParametetsFS.SleepMode.id);
				}
				//============================================================================
				// Floor Sensor 1: Admin Mode
				//============================================================================
				else if ((id == statePrefix + DeviceParametetsFS.AdminMode.statePath.replace('.X.', '.1.') + '.' + DeviceParametetsFS.AdminMode.id) && state.ack == false) {
					this.handle_FS_state_changes(this.syrSaveFloor1APIClient, 1, DeviceParametetsFS.AdminMode.id);
				}

				//############################################################################
				// Unsupported State change
				//############################################################################
				else {
					this.log.debug('StateChange: ' + String(id) + ' Value: ' + String(state.val) + ' acknowledged: ' + String(state.ack));
				}

			} else {
				// The state was deleted
				this.log.debug(`state ${id} deleted`);
			}
		} catch (err) {this.log.error('Handling state chane event ' + err);}
	}


	/**
	 * Floor Sensor State Handler
	 * @param {*} FS_Number - Floor Sensor Number
	 * @param {*} FS_State_ID - State ID
	 */
	async handle_FS_state_changes(FS_Handler, FS_Number, FS_State_ID)
	{
		this.log.warn('Floor sensor state change: Floor Sensor No. ' + String(FS_Number) + ' State ID: ' + String(FS_State_ID));
		switch (FS_State_ID) {
			case DeviceParametetsFS.AdminMode.id:
				this.FS_set_AMIN_Mode(FS_Handler, FS_Number);
				break;
			case DeviceParametetsFS.SleepMode.id:
				this.FS_set_SLEEP_Mode(FS_Handler, FS_Number);
				break;

			default:
		}
	}

	/**
	 * start all timers
	 */
	async timerStarts() {
		try {
			if(this.config.executetestloop)
			{
				schedule.scheduleJob(cron_TestinLoop, cron_poll_TestingLoop);
			}
			if(this.syrApiClient != null){
				schedule.scheduleJob(cron_Day, cron_poll_day);
				schedule.scheduleJob(cron_Week, cron_poll_week);
				schedule.scheduleJob(cron_Month, cron_poll_month);
				schedule.scheduleJob(cron_Year, cron_poll_year);
			}
			// do we have Floor Sensors?
			if (this.syrSaveFloor1APIClient != null) {
				// Floor Sensors present so initialize FloorSensors Schedule
				if(this.config.safefloor_1_keep_online){schedule.scheduleJob(corn_FloorSensor_long, cron_poll_FloorSensor_1);}
				else{schedule.scheduleJob(corn_FloorSensor_short, cron_poll_FloorSensor_1);}
			}
			if (this.syrSaveFloor2APIClient != null) {
				// Floor Sensors present so initialize FloorSensors Schedule
				if(this.config.safefloor_2_keep_online){schedule.scheduleJob(corn_FloorSensor_long, cron_poll_FloorSensor_2);}
				else{schedule.scheduleJob(corn_FloorSensor_short, cron_poll_FloorSensor_2);}
			}
			if (this.syrSaveFloor3APIClient != null) {
				// Floor Sensors present so initialize FloorSensors Schedule
				if(this.config.safefloor_3_keep_online){schedule.scheduleJob(corn_FloorSensor_long, cron_poll_FloorSensor_3);}
				else{schedule.scheduleJob(corn_FloorSensor_short, cron_poll_FloorSensor_3);}
			}
			if (this.syrSaveFloor4APIClient != null) {
				// Floor Sensors present so initialize FloorSensors Schedule
				if(this.config.safefloor_4_keep_online){schedule.scheduleJob(corn_FloorSensor_long, cron_poll_FloorSensor_4);}
				else{schedule.scheduleJob(corn_FloorSensor_short, cron_poll_FloorSensor_4);}
			}

			// Main valve jam protection active?
			if (this.config.regularmainvalvemovement) {
				// Ok we schedule it
				this.log.info('Jam protection cron job scheduled for: ' + String(this.config.regularemovementcron));
				schedule.scheduleJob(this.config.regularemovementcron, cron_poll_jam_protection);
			}
			if (moreMessages) { this.log.info('Cron timer started'); }

			if (this.syrApiClient != null) {

				// Die Timer für das Polling starten
				alarm_Intervall_ID = this.setInterval(alarm_poll, this.config.device_alarm_poll_interval * 1000);
				if (moreMessages) { this.log.info('Alarm timer initialized'); }

				try {
					await this.delay(3000); // Warten um einen Versatz zu erzeugen
				}
				catch (err) {
					// Tieout to clear?
					if (delay_Timer_ID != null) {
						try { this.clearTimeout(delay_Timer_ID); }
						catch (err) { this.log.error('Error clear Timeout'); }
					}
					this.log.error('await this.delay(3000)] ERROR: ' + err);
				}
				short_Intervall_ID = this.setInterval(short_poll, this.config.device_short_poll_interval * 1000);
				if (moreMessages) { this.log.info('Short timer initialized'); }

				try {
					await this.delay(3000); // Warten um einen Versatz zu erzeugen
				}
				catch (err) {
					// Tieout to clear?
					if (delay_Timer_ID != null) {
						try { this.clearTimeout(delay_Timer_ID); }
						catch (err) { this.log.error('Error clear Timeout'); }
					}
					this.log.error('await this.delay(3000)] ERROR: ' + err);
				}
				long_Intervall_ID = this.setInterval(long_poll, this.config.device_long_poll_interval * 1000);
				if (moreMessages) { this.log.info('Long timer initialized'); }

				try {
					await this.delay(3000); // Warten um einen Versatz zu erzeugen
				}
				catch (err) {
					// Tieout to clear?
					if (delay_Timer_ID != null) {
						try { this.clearTimeout(delay_Timer_ID); }
						catch (err) { this.log.error('Error clear Timeout'); }
					}
					this.log.error('await this.delay(3000)] ERROR: ' + err);
				}
				very_long_Intervall_ID = this.setInterval(very_long_poll, this.config.device_very_long_poll_interval * 1000);
				if (moreMessages) { this.log.info('Very Long timer initialized'); }
			}
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Cron action
	 * [daily]
	 */
	async alarm_cron_day_Tick() {
		try {
			if (moreMessages) { this.log.info('Cron day tick'); }

			// ================================================
			// Dayly sum reset
			// ================================================
			// here we save the sumary and the we reset it to 0
			// ================================================

			let TotalDayState = null;

			try {
				// getting saved Total state
				TotalDayState = await this.getStateAsync(StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id);
			}
			catch (err) {
				this.log.error('await this.getStateAsync(' + StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id + ') ERROR: ' + err);
			}

			// saving sum to "past" State
			if ((TotalDayState != null) && (TotalDayState.val != null)) {
				try {
					await this.setStateAsync(StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id, { val: TotalDayState.val, ack: true });
				}
				catch (err) {
					// maybe object is not existing ...
					try {
						// so let's create it ...
						await this.setObjectNotExistsAsync(StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id, Object(StatisticStates.TotalPastDay.objectdefinition));
						// and write ist again
						await this.setStateAsync(StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id, { val: TotalDayState.val, ack: true });
					}
					catch (err) {
						this.log.error('In Catch of setStateAsync ... await this.setObjectNotExistsAsync(' + StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id + ',' + StatisticStates.TotalPastDay.objectdefinition + ' ) ERROR: ' + err);
					}
					this.log.error('setStateAsync(' + StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id + ',' + '{ val: parseFloat(' + TotalDayState.val + '), ack: true }) ERROR: ' + err);
				}
			}
			// resetting sum to 0
			try {
				await this.setObjectNotExistsAsync(StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id, Object(StatisticStates.TotalDay.objectdefinition));
			}
			catch (err) {
				this.log.error('await this.setObjectNotExistsAsync(' + StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id + ',' + StatisticStates.TotalDay.objectdefinition + ' ) ERROR: ' + err);
			}
			try {
				await this.setStateAsync(StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id, { val: 0, ack: true });
			}
			catch (err) {
				this.log.error('setStateAsync(' + StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id + ',' + '{ val: 0, ack: true }) ERROR: ' + err);
			}

			return true;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Cron action
	 * [weekly]
	 */
	async alarm_cron_week_Tick() {
		try {
			if (moreMessages) { this.log.info('Cron week tick'); }

			// ================================================
			// Week sum reset
			// ================================================
			// here we save the sumary and the we reset it to 0
			// ================================================

			// getting saved Total state
			const TotalWeekState = await this.getStateAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id);

			if ((TotalWeekState != null) && (TotalWeekState.val != null)) {
				// saving sum to "past" State
				await this.setObjectNotExistsAsync(StatisticStates.TotalPastWeek.statePath + '.' + StatisticStates.TotalPastWeek.id, Object(StatisticStates.TotalPastWeek.objectdefinition));
				await this.setStateAsync(StatisticStates.TotalPastWeek.statePath + '.' + StatisticStates.TotalPastWeek.id, { val: TotalWeekState.val, ack: true });

				// resetting sum to 0
				await this.setObjectNotExistsAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id, Object(StatisticStates.TotalWeek.objectdefinition));
				await this.setStateAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id, { val: 0, ack: true });
			}
			return true;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Cron actioninterfaceBussy
	 * [monthly]
	 */
	async alarm_cron_month_Tick() {
		try {
			if (moreMessages) { this.log.info('Cron month tick'); }

			// ================================================
			// Month sum reset
			// ================================================
			// here we save the sumary and the we reset it to 0
			// ================================================

			// getting saved Total state
			const TotalMonthState = await this.getStateAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id);

			if ((TotalMonthState != null) && (TotalMonthState.val != null)) {
				// saving sum to "past" State
				await this.setObjectNotExistsAsync(StatisticStates.TotalPastMonth.statePath + '.' + StatisticStates.TotalPastMonth.id, Object(StatisticStates.TotalPastMonth.objectdefinition));
				await this.setStateAsync(StatisticStates.TotalPastMonth.statePath + '.' + StatisticStates.TotalPastMonth.id, { val: TotalMonthState.val, ack: true });

				// resetting sum to 0
				await this.setObjectNotExistsAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id, Object(StatisticStates.TotalMonth.objectdefinition));
				await this.setStateAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id, { val: 0, ack: true });
			}
			return true;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Cron action
	 * [yearly]
	 */
	async alarm_cron_year_Tick() {
		try {
			if (moreMessages) { this.log.info('Cron year tick'); }

			// ================================================
			// Year sum reset
			// ================================================
			// here we save the sumary and the we reset it to 0
			// ================================================

			// getting saved Total state
			const TotalYearState = await this.getStateAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id);

			if ((TotalYearState != null) && (TotalYearState.val != null)) {
				// saving sum to "past" State
				await this.setObjectNotExistsAsync(StatisticStates.TotalPastYear.statePath + '.' + StatisticStates.TotalPastYear.id, Object(StatisticStates.TotalPastYear.objectdefinition));
				await this.setStateAsync(StatisticStates.TotalPastYear.statePath + '.' + StatisticStates.TotalPastYear.id, { val: TotalYearState.val, ack: true });

				// resetting sum to 0
				await this.setObjectNotExistsAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id, Object(StatisticStates.TotalYear.objectdefinition));
				await this.setStateAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id, { val: 0, ack: true });
			}
			return true;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Cron action
	 * [Testing loop]
	 *
	 * This function is only for internal testing and will only
	 * be executed if "executeTestingLoop" is set to true
	 */
	async alarm_corn_TestingLoop_Tick() {

		// only execute if Flag is set to TRUE
		if (!executeTestingLoop) { return; }
		this.log.warn('[Testing Loop] Trigger');
		for (const key in DeviceParametetsFS) {
			this.log.warn('DeviceParameterFS.id: ' + String(DeviceParametetsFS[key].id) + ' is defined');
		}
	}

	/**
	 * Cron action
	 * [Floor Sensor 1]
	 */
	async alarm_cron_FloorSensor_Tick_1(){
		if (this.syrSaveFloor1APIClient != null){
			const rnd = Math.random();
			this.log.warn('Zufallszahl' + String(rnd));
			this.log.warn('* 10 = ' + String(rnd * 10));
			this.log.warn('* 100 = ' + String(rnd * 100));
			this.log.warn('* 1000 = ' + String(rnd * 1000));
			this.log.warn('* 10000 = ' + String(rnd * 10000));
			this.alarm_cron_FloorSensors(this.syrSaveFloor1APIClient, this.config.safefloor_1_keep_online, 1);
		}
	}

	/**
	 * Cron action
	 * [Floor Sensor 2]
	 */
	async alarm_cron_FloorSensor_Tick_2(){
		if (this.syrSaveFloor2APIClient != null){this.alarm_cron_FloorSensors(this.syrSaveFloor2APIClient, this.config.safefloor_2_keep_online, 2);}}

	/**
	 * Cron action
	 * [Floor Sensor 3]
	 */
	async alarm_cron_FloorSensor_Tick_3(){
		if (this.syrSaveFloor3APIClient != null){this.alarm_cron_FloorSensors(this.syrSaveFloor3APIClient, this.config.safefloor_3_keep_online, 3);}}

	/**
	 * Cron action
	 * [Floor Sensor 4]
	 */
	async alarm_cron_FloorSensor_Tick_4(){
		if (this.syrSaveFloor4APIClient != null){this.alarm_cron_FloorSensors(this.syrSaveFloor4APIClient, this.config.safefloor_4_keep_online, 4);}}

	/**
	 * This function is for polling data from FloorSensors
	 *
	 * @param {*} AxiosHandlerToUse - Axios handler we have to use for the API request
	 * @param {*} KeepFloorSensorOnline - Flag if we have to send the Floor Sensor to sleep after API request
	 * @param {*} FlooreSensNo - Number of Floor Sensor (1 ... 4)
	 */
	async alarm_cron_FloorSensors(AxiosHandlerToUse, KeepFloorSensorOnline, FlooreSensNo) {
		try {
			this.log.info('Trigger: Floor Sensor ' + String(FlooreSensNo));
			// Do we have this one?
			if (AxiosHandlerToUse != null) {
				try {
					// set Floor Sensor into ADMIN mode
					if(!await this.FS_set_AMIN_Mode(AxiosHandlerToUse, FlooreSensNo))
					{
						return;	// setting Admin mode failed
					}

					await this.delay(500);	// waiting 500mS to avoid Axios "socket hang up"
					// request data from Floor Sensor
					const FS_Data = await AxiosHandlerToUse.get('get/' + 'ALL');
					if (FS_Data.status === 200) {

						//  We got Data and handle them asyncron (so NO AWAIT the data handling process)
						this.handle_FloorSensor_Data(FS_Data.data, FlooreSensNo);

						if (!KeepFloorSensorOnline) {
							await this.delay(500);	// waiting 500mS to avoid Axios "socket hang up"
							//  We don't care if Sensor really gos to sleep and handle this asyncron (so NO AWAIT)
							this.FS_set_SLEEP_Mode(AxiosHandlerToUse, FlooreSensNo);
						}
					}
					else { this.log.warn('Floor Sensor ' + FlooreSensNo + ' API response Status: ' + String(FS_Data.status) + ' ' + String(FS_Data.statusText)); }
				} catch (err) {
					// connect EHOSTUNREACH Fehler sollte nicht ausgegeben werden
					this.log.error('Floor Sensor ' + FlooreSensNo + ' API request ' + err);
				}
			}
		} catch (err) { this.log.error('[async alarm_cron_FloorSensors_Tick()] ' + err); }
	}

	/**
	 * This function precesses the date we got from a SafeTech Floor Sensor
	 * @param {*} FS_Data - Json Data from the Floor Sensor
	 * @param {*} num_FloorSensor - Number of the corresponding Floor Sensor
	 */
	async handle_FloorSensor_Data(FS_Data, num_FloorSensor) {
		try {
			this.log.info('Floor Sensor No. ' + String(num_FloorSensor) + ' Data received');
			if(moreMessages){this.log.info('JSON data of Floor Sensor No. ' + String(num_FloorSensor) + ': ' + JSON.stringify(FS_Data));}

			// iterate through all requested Parameters
			for (const key in DeviceParametetsFS) {
				let ToStore;
				try {
					if(DeviceParametetsFS[key].saveRawData && FS_Data[String(DeviceParametetsFS[key].id)] !== undefined)
					{
						// save Raw Values to State Object
						this.setStateAsync(AdapterChannelsFS.DeviceRawData.path.replace('.X.', '.' + String(num_FloorSensor) + '.') + '.' + DeviceParametetsFS[key].id, { val: '{"' + DeviceParametetsFS[key].id + '":"' + String(FS_Data[String(DeviceParametetsFS[key].id)]) + '"}', ack: true });
					}
				} catch (err) { this.log.error('Saving Floor Sensor RAW value to state "' + String(DeviceParametetsFS[key].id) + '" has failed. ' + err); }
				try {
					// is the current device parameter present in sensor return data?
					if(FS_Data[String(DeviceParametetsFS[key].id)] !== undefined){
						if(moreMessages){this.log.info('Value of "' + String(DeviceParametetsFS[key].id) + '" = ' + String(FS_Data[String(DeviceParametetsFS[key].id)]));}
						// converte returned value into final value
						ToStore = await this.handle_FloorSensor_Value(String(DeviceParametetsFS[key].id), String(DeviceParametetsFS[key].objectdefinition.common.type), String(FS_Data[DeviceParametetsFS[key].id]));
						if (ToStore != null) {
							try {
								// save Values to State Object
								this.setStateAsync(DeviceParametetsFS[key].statePath.replace('.X.', '.' + String(num_FloorSensor) + '.') + '.' + DeviceParametetsFS[key].id, { val: ToStore, ack: true });
							} catch (err) { this.log.error('Saving Floor Sensor value to state "' + String(DeviceParametetsFS[key].id) + '" has failed. ' + err); }
						} else { this.log.warn('Saving Floor Sensor value to state "' + String(DeviceParametetsFS[key].id) + '" was skipped because of NULL value.'); }
					}
				} catch (err) {this.log.error('Converting Floor Sensor value "' + String(DeviceParametetsFS[key].id) + '" has failed. ' + err);}
			}
		} catch (err) {this.log.error('[async handle_FloorSensor_Data(FS_Data, num_FloorSensor)] Floore Sensor: ' + String(num_FloorSensor) + ' ' + err);}
	}

	/**
	 * this function procedes the returned data from Floor Sensor and converts it
	 * into the correct format and modifies (Deviding; Multiplicating etc.) it in order
	 * to be stored in state object
	 * @param {*} FS_Value_ID - ID of device Parameter
	 * @param {*} FS_Value_Type - Type of device parameter
	 * @param {*} FS_Value - the string value extracted from Floor Sensor returned data
	 * @returns - Final value to be stored into state object or null if something went wrong
	 */
	async handle_FloorSensor_Value(FS_Value_ID, FS_Value_Type, FS_Value){
		try{
			let convertedValue = null;
			switch (FS_Value_ID) {
				case 'MIT': // ENV Minimal temperature alarm (/10)
				case 'MXT': // ENV Maximal temperature alarm (/10)
				case 'CEL': // ENV Temperature (/10)
					convertedValue = parseInt(String(FS_Value)) / 10;
					break;
				case 'BMI': // Reference point battery 0%
				case 'BMA': // Reference point battery 100%
					convertedValue = parseInt(String(FS_Value)) / 100;
					break;
				default:
					switch (FS_Value_Type) {
						case 'number': // State has number format
							convertedValue = parseInt(String(FS_Value));
							break;
						case 'string': // State has string format
							convertedValue = String(FS_Value);
							break;
						default:	// State format is not supported
							this.log.warn('Parameter: "' + String(FS_Value_ID) + '" data type "' + String(FS_Value_Type) + '" handling not implemented.');
							convertedValue = null;
					}
			}
			return convertedValue;
		}catch(err){
			this.log.error('Converting Floor Sensor value "' + String(FS_Value_ID) + '" has failed. ' + err);
			return null;
		}
	}

	/**
	 * Function saves Set Admin Result to corresponding state object
	 * @param {*} FS_Value - Arios request result data
	 * @param {*} FS_Num - Number of Floor Sensor
	 */
	async handle_FloorSensor_ADM_Result(FS_Value, FS_Num)
	{
		if(moreMessages){this.log.info('JSON Set Admin Result of Floor Sensor No. ' + String(FS_Num) + ': ' + JSON.stringify(FS_Value));}
		try {
			let stateValue = null;
			if(String(FS_Value['ADM(2)f']) == 'FACTORY'){stateValue = true;}else{stateValue = false;}
			// save Values to State Object
			this.setStateAsync(DeviceParametetsFS.AdminMode.statePath.replace('.X.', '.' + String(FS_Num) + '.') + '.' + DeviceParametetsFS.AdminMode.id, { val: stateValue, ack: true, expire: 30});
		} catch (err) { this.log.error('Saving Set Admin Result of Floor Sensor No. ' + String(FS_Num) + '" has failed. ' + err); }
	}

	/**
	 * Function saves Set Admin Result to corresponding state object
	 * @param {*} FS_Value - Arios request result data
	 * @param {*} FS_Num - Number of Floor Sensor
	 */
	async handle_FloorSensor_Sleep_Result(FS_Value, FS_Num)
	{
		if(moreMessages){this.log.info('[JSON] Set Sleep mode of Floor Sensor No. ' + String(FS_Num) + ': ' + JSON.stringify(FS_Value));}
		try {
			let stateValue = null;
			if(String(FS_Value['SLP']) == 'OK'){stateValue = true;}else{stateValue = false;}
			// save Values to State Object
			this.setStateAsync(DeviceParametetsFS.SleepMode.statePath.replace('.X.', '.' + String(FS_Num) + '.') + '.' + DeviceParametetsFS.SleepMode.id, { val: stateValue, ack: true, expire: 30});
		} catch (err) { this.log.error('Set Sleep mode Result of Floor Sensor No. ' + String(FS_Num) + '" has failed. ' + err); }
	}

	/**
	 * Puts Floor Sensor into ADMIN Mode
	 * @param {*} AxiosHandlerToUse - Axios API handler
	 * @param {*} FlooreSensNo - Number of Floor Sensor
	 * @returns TRUE if everithing went OK, or FALSE
	 */
	async FS_set_AMIN_Mode(AxiosHandlerToUse, FlooreSensNo) {
		try {
			// Set Admin Mode
			const AdminResult = await AxiosHandlerToUse.get('set/' + Parameter_FACTORY_Mode);
			if (AdminResult.status === 200) {
				this.handle_FloorSensor_ADM_Result(AdminResult.data, FlooreSensNo);
				return true;
			}
			this.log.warn('Set ADMIN mode Floor Sensor No. ' + String(FlooreSensNo) + ' returned wrong status: ' + String(AdminResult.status) + ' ' + String(AdminResult.statusText));
			return false;
		} catch (err) {
			if (moreMessages) { this.log.error('Set Admin command ' + err); }
			if (String(err).includes('connect EHOSTUNREACH')) {
				// device not reachable we skipp further requests against this sensor
				this.log.warn('No response from Floor Sensor No. ' + String(FlooreSensNo) + ', we skipp data request this time');
				return false;
			}
		}
	}

	/**
	 * Puts Floor Sensor into SLEEP Mode
	 * @param {*} AxiosHandlerToUse - Axios API handler
	 * @param {*} FlooreSensNo - Number of Floor Sensor
	 * @returns TRUE if everithing went OK, or FALSE
	 */async FS_set_SLEEP_Mode(AxiosHandlerToUse, FlooreSensNo)
	{
		this.log.warn('Sending Floor Sensor ' + String(FlooreSensNo) + ' to sleep');
		try {
			//... sending Floor Sensor to sleep
			const SleepResult = await AxiosHandlerToUse.get('set/' + 'SLP');
			if (SleepResult.status === 200) {
				this.handle_FloorSensor_Sleep_Result(SleepResult.data, FlooreSensNo);
				return true;
			}
			return false;
		} catch (err) { if (moreMessages) { this.log.error('Sending Floor Sensor ' + FlooreSensNo + ' to sleep ' + err); } }

		return false;
	}

	/**
	 * Cron action
	 * [jam protection]
	 */
	async alarm_corn_jam_protection_Tick() {
		try {
			const openValveCommand = false;
			const closeValveCommand = true;

			// Is Jam Protection already in progess)
			if (MainValveJammProtection_running == true) {
				this.log.warn('Valve JAM Protection is already running. We skip it this time.');
				return;
			}

			// Do we have initialised syrApiClient?
			if (this.syrApiClient != null) {
				let currentconsumption;
				const max_trys = 10;
				const wait_time_between_consumption_reading = 60000;
				let trys = 0;
				let consumption_is_zero = false;

				// waiting for free interface to device
				while (interfaceBusy) {
					this.log.warn('[JAM PROTECTION] Interface is bussy we wait one second ...');
					await this.delay(10000); // Wait one second till next try
				}

				while (!consumption_is_zero) {
					interfaceBusy = true;
					// get current water consumption from device
					currentconsumption = (await this.syrApiClient.get('get/' + String(DeviceParameters.CurrentVolume.id)));
					interfaceBusy = false;
					// increase request counter
					trys++;
					// is there no water consumption?
					if (JSON.stringify(currentconsumption.data['getAVO']) == '"0mL"') {
						consumption_is_zero = true;
						break;
					}
					// did we reach maximum amount of requests?
					if (trys >= max_trys) {
						// we cancle jam protection because of ongoing water consumption
						this.log.warn('[JAM PROTECTION] Jam protection valve move was canceled because of ongoing water flow during ' + String((wait_time_between_consumption_reading * max_trys) / 1000) + ' seconds');
						return;
					}
					// Wait defined time until next device requests
					await this.delay(wait_time_between_consumption_reading);
				}
			} else {
				this.log.error('[JAM PROTECTION] syrApiClient is not initialised. No device requests possible -> Jam Protection wil be canceled!');
				return;
			}

			// Looks like everything is ok, we can start Jam Protection move

			// waiting for free interface to device
			while (interfaceBusy) {
				this.log.warn('[JAM PROTECTION] Interface is bussy we wait one second ...');
				await this.delay(10000); // Wait one second till next try
			}

			MainValveJammProtection_running = true; // set flag that jam protection is running
			// set state accordingly
			this.setStateAsync(DeviceParameters.JamProtectionOngoing.statePath + '.' + DeviceParameters.JamProtectionOngoing.id, { val: true, ack: true });

			this.log.info('[JAM PROTECTION] Starting');
			this.log.info('[JAM PROTECTION] Valve operation delay to avoide disturbing running device requests');
			await this.delay(10000); // Wait some time seconds to avoid desturbing already made Requests
			this.log.info('[JAM PROTECTION] Closing main valve');
			try {
				// Closing main valve
				if (!await this.move_main_valve(closeValveCommand)) {
					// Main valve was already closed! Maybe for a good reason So we cancel Jam Protection
					this.log.error('Jam Protection canceld because main valve is already closed');
					this.setStateAsync(DeviceParameters.JamProtectionOngoing.statePath + '.' + DeviceParameters.JamProtectionOngoing.id, { val: false, ack: true }); // set state accordingly
					MainValveJammProtection_running = false; // clear flag that jam protection is running
					return;
				}
			} catch (err) {
				this.log.warn('[JAM PROTECTION] closing main valve ERROR: ' + err);
				this.setStateAsync(DeviceParameters.JamProtectionOngoing.statePath + '.' + DeviceParameters.JamProtectionOngoing.id, { val: false, ack: true }); // set state accordingly
				MainValveJammProtection_running = false; // clear flag that jam protection is running
				return;
			}
			this.log.info('[JAM PROTECTION] Main valve is closed');
			this.log.info('[JAM PROTECTION] Opening main valve');
			try {
				// opening main valve again
				if (!await this.move_main_valve(openValveCommand)) {
					// something went wron .. we cancel the wohle action.
					this.log.error('Jam Protection canceld because main valve could not be opened again');
					this.setStateAsync(DeviceParameters.JamProtectionOngoing.statePath + '.' + DeviceParameters.JamProtectionOngoing.id, { val: false, ack: true }); // set state accordingly
					MainValveJammProtection_running = false; // clear flag that jam protection is running
					return;
				}
			} catch (err) {
				this.log.warn('[JAM PROTECTION] opening main valve ERROR: ' + err);
				this.setStateAsync(DeviceParameters.JamProtectionOngoing.statePath + '.' + DeviceParameters.JamProtectionOngoing.id, { val: false, ack: true }); // set state accordingly
				MainValveJammProtection_running = false; // clear flag that jam protection is running
				return;
			}

			MainValveJammProtection_running = false; // clear flag that jam protection is running
			// set state accordingly
			this.setStateAsync(DeviceParameters.JamProtectionOngoing.statePath + '.' + DeviceParameters.JamProtectionOngoing.id, { val: false, ack: true });

			this.log.info('[JAM PROTECTION] Finished');
		} catch (err) {
			MainValveJammProtection_running = false; // clear flag that jam protection is running
			// set state accordingly
			this.setStateAsync(DeviceParameters.JamProtectionOngoing.statePath + '.' + DeviceParameters.JamProtectionOngoing.id, { val: false, ack: true });
			throw new Error(err);
		}
	}

	/**
	 * This function Opens the main valve
	 *
	 * mainValveParameters[0] = VLV Valve State (SERVICE)
	 * 10 Closed
	 * 11 Closing
	 * 20 Open
	 * 21 Opening
	 * 30 Undefined
	 */
	async move_main_valve(close) {
		try {
			const closedPosition = '"10"';
			const closingMove = '"11"';
			const openedPosition = '"20"';
			const openingMove = '"21"';
			const undefinedPosition = '"30"';

			const closeCommand = '2';
			const openCommand = '1';

			let valveCommand;
			let valve_state;


			// set position we want for the valve
			let valve_state_target;
			if (close) {
				valve_state_target = closedPosition;
				valveCommand = closeCommand;
			} else {
				valve_state_target = openedPosition;
				valveCommand = openCommand;
			}

			// only procede if we have a initialised ApiClient
			if (this.syrApiClient != null) {

				// enable service Mode
				this.log.debug('[JAM PROTECTION] Set service Mode');
				await this.set_SERVICE_Mode();
				this.log.info('[JAM PROTECTION] Reading main valve State');

				// Get current Valve Status
				let deviceResponse = await this.syrApiClient.get('get/' + String(DeviceParameters.CurrentValveStatus.id));
				if (deviceResponse.status === 200) {
					if (apiResponseInfoMessages) { this.log.info('[JAM PROTECTION] syrApiClient response: ' + JSON.stringify(deviceResponse.data)); }
					valve_state = JSON.stringify(deviceResponse.data['getVLV']);
					this.log.debug('[JAM PROTECTION] Current Main valve Status = ' + String(valve_state));
				}
				else {
					// no response from device
					this.log.warn('Error reading main valve position! No valid response from device.');
					return false;
				}

				if (close) {
					if (valve_state == closedPosition) {
						// Main valve could be already closed for a good reason and therefore we cancel the Jam Protection
						this.log.error('[JAM PROTECTION] Main valve is already closed! Maybe for a good reason. Jam Protection canceled!');
						// clear special mode
						await this.clear_SERVICE_FACTORY_Mode();
						return false;
					}
				} else {
					if (valve_state == openedPosition) {
						this.log.info('[JAM PROTECTION] Main valve was already open');
						// clear special mode
						await this.clear_SERVICE_FACTORY_Mode();
						return false;
					}
				}

				// we have to move the main valve
				// Procede according valve state
				this.log.info('[JAM PROTECTION] Moving main valve ...');

				// Send moving command to Device
				await this.syrApiClient.get('set/' + String(DeviceParameters.ShutOff.id + '/' + String(valveCommand)));

				// Flags to track if info message for specific valve position was already released
				// if meassage was once published we release debug messages instead of info message
				let closedPosition_occourred = false;
				let closingMove_occourred = false;
				let openedPosition_occourred = false;
				let openingMove_occourred = false;
				let undefinedPosition_occourred = false;

				// reading position till valve reaches requested position
				while (valve_state != valve_state_target) {
					// set special mode
					await this.set_SERVICE_Mode();
					// read valve state from device
					deviceResponse = await this.syrApiClient.get('get/' + String(DeviceParameters.CurrentValveStatus.id));
					// clear special mode
					await this.clear_SERVICE_FACTORY_Mode();

					// did we get a valid answer from device?
					if (deviceResponse.status === 200) {
						// extract valve position from JSON result
						valve_state = JSON.stringify(deviceResponse.data['getVLV']);
						switch (valve_state) {
							case closedPosition:
								if (!closedPosition_occourred) {
									this.log.info('[JAM PROTECTION] Main valve Status = Closed');
									closedPosition_occourred = true;
								} else {
									this.log.debug('[JAM PROTECTION] Main valve Status = Closed');
								}
								break;
							case closingMove:
								if (!closingMove_occourred) {
									this.log.info('[JAM PROTECTION] Main valve Status = Closing ...');
									closingMove_occourred = true;
								} else {
									this.log.debug('[JAM PROTECTION] Main valve Status = Closing ...');
								}
								break;
							case openedPosition:
								if (!openedPosition_occourred) {
									this.log.info('[JAM PROTECTION] Main valve Status = Open');
									openedPosition_occourred = true;
								} else {
									this.log.debug('[JAM PROTECTION] Main valve Status = Open');
								}
								break;
							case openingMove:
								if (!openingMove_occourred) {
									this.log.info('[JAM PROTECTION] Main valve Status = Opening ...');
									openingMove_occourred = true;
								} else {
									this.log.debug('[JAM PROTECTION] Main valve Status = Opening ...');
								}
								break;
							case undefinedPosition:
								if (!undefinedPosition_occourred) {
									this.log.warn('[JAM PROTECTION] Main valve Status = Undefined');
									undefinedPosition_occourred = true;
								} else {
									this.log.debug('[JAM PROTECTION] Main valve Status = Undefined');
								}
								break;
							default:
								this.log.error('[JAM PROTECTION] Main valve Status = Invalid return value: ' + String(valve_state));
						}
					}
					else { this.log.error('[JAM PROTECTION] Device resopns status invalid at position reading during valve movement! Response Status: ' + String(deviceResponse.status)); }
				}

				// await this.delay(1000); // wait one second between requests
				if (close) { this.log.info('[JAM PROTECTION] Main valve is closed'); }
				else { this.log.info('[JAM PROTECTION] Main valve is open'); }
				return true;
			}
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Timer action
	 * [alarm]
	 */
	async alarm_TimerTick() {
		try {
			this.log.info('Trigger: Alarm Timer');
			// Check if main valve protection is not runneing
			if (!MainValveJammProtection_running) {
				if (moreMessages) { this.log.info('Alarm Timer tick'); }
				// get alarmPeriode data
				if (!interfaceBusy) {
					interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
					await this.getData(Object(alarmPeriod));
					return true;
				}
				else {
					this.log.warn('Interface bussy during ALARM TIMER data request');
					await this.interfaceBusyWatchDog();	// check if bussy flag is still plausible
					return false;
				}
			}
			else {
				this.log.warn('Alarm Timer: Device request canceled becaus jam protection is running!');
			}
		} catch (err) {
			interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
			interfaceBusy = false;	// CLEAR flag that device interface is bussy
			throw new Error(err);
		}
	}

	/**
	 * Timer action
	 * [short]
	 */
	async short_TimerTick() {
		try {
			this.log.info('Trigger: Short Timer');
			// Check if main valve protection is not runneing
			if (!MainValveJammProtection_running) {
				if (moreMessages) { this.log.info('Short Timer tick'); }
				// get longPeriode data
				if (!interfaceBusy) {
					interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
					await this.getData(Object(shortPeriod));
					try {
						await this.updateStatistics();
					} catch (err) {
						this.log.error('Statistics Error: ' + err);
					}
					return true;
				}
				else {
					this.log.warn('Interface bussy during SHORT TIMER data request');
					await this.interfaceBusyWatchDog();	// check if bussy flag is still plausible
					return false;
				}
			}
			else {
				this.log.warn('Short Timer: Device request canceled becaus jam protection is running!');
			}
		}
		catch (err) {
			interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
			interfaceBusy = false;	// CLEAR flag that device interface is bussy
			throw new Error(err);
		}
	}

	/**
	 * Timer action
	 * [long]
	 */
	async long_TimerTick() {
		try {
			this.log.info('Trigger: Long Timer');
			// Check if main valve protection is not runneing
			if (!MainValveJammProtection_running) {
				if (moreMessages) { this.log.info('Long Timer tick'); }
				// get longPeriode data
				if (!interfaceBusy) {
					interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
					await this.getData(Object(longPeriode));
					return true;
				}
				else {
					this.log.warn('Interface bussy during LONG TIMER data request');
					await this.interfaceBusyWatchDog();	// check if bussy flag is still plausible
					return false;
				}
			}
			else {
				this.log.warn('Long Timer: Device request canceled becaus jam protection is running!');
			}
		} catch (err) {
			interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
			interfaceBusy = false;	// CLEAR flag that device interface is bussy
			throw new Error(err);
		}
	}

	/**
	 * Timer action
	 * [very long]
	 */
	async very_long_TimerTick() {
		try {
			this.log.info('Trigger: Very Long Timer');
			// Check if main valve protection is not runneing
			if (!MainValveJammProtection_running) {
				if (moreMessages) { this.log.info('Very Long Timer tick'); }
				// get longPeriode data
				if (!interfaceBusy) {
					interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
					if (moreMessages) { this.log.info('Get initStates'); }
					//=================================================================
					// update state: German hardnes calculation factor from settings
					//=================================================================
					await this.updateHardnesFactorObject();

					//=================================================================
					// Read all values, defined in 'initStates' from device
					//=================================================================
					await this.getData(Object(initStates));

					if (moreMessages) { this.log.info('Get Device Profiles'); }
					await this.getDeviceProfilesData();
					return true;

				}
				else {
					this.log.warn('Interface bussy during VERY LONG TIMER data request');
					await this.interfaceBusyWatchDog();	// check if bussy flag is still plausible
					return false;
				}
			}
			else {
				this.log.warn('Very Long Timer: Device request canceled becaus jam protection is running!');
			}
		} catch (err) {
			interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
			interfaceBusy = false;	// CLEAR flag that device interface is bussy
			throw new Error(err);
		}
	}

	/** checks plausibility of an set InterfaceBussy flag
	 * and resets flag after defined attempts.
	*/
	async interfaceBusyWatchDog() {
		try {
			if (interfaceBusyCounter >= interfaceBusyMaxBeforeReaset) {
				// we reste interfaceBusy Flag and Counter
				interfaceBusy = false;
				interfaceBusyCounter = 0;
				this.log.warn('\'interfaceBusy\' flag reset by watch dog');
			}
			else {
				// increase interfaceBusy counter
				interfaceBusyCounter++;
			}
		}
		catch (err) {
			this.log.error('[async checkInterfaceBussyPlausibility()] Error: ' + err);
		}
	}

	/**
	 * Updates the object containing Hardnes Factor calculation
	 */
	async updateHardnesFactorObject() {
		await this.setObjectNotExistsAsync(DeviceParameters.gerWaterHardnessFactor.statePath + '.' + DeviceParameters.gerWaterHardnessFactor.id, Object(DeviceParameters.gerWaterHardnessFactor.objectdefinition));
		await this.setStateAsync(DeviceParameters.gerWaterHardnessFactor.statePath + '.' + DeviceParameters.gerWaterHardnessFactor.id, { val: this.config.factor_german_water_hardnes, ack: true });
	}

	/**
	 * Checks if device is present by sending Request to the base url + /get
	 * if present, device returns an Error Message in json Format
	 * @returns true if device is present, false if not
	 */
	async devicePing() {
		interfaceBusy = true; // to informe other timer calls that the can't perfromn request and therefore have to skipp.

		//=========================================================================================
		//===  Connection LED to RED															===
		//=========================================================================================
		try {
			await this.setStateAsync('info.connection', { val: false, ack: true });
		}
		catch (err) {
			this.log.warn('Error at: await this.setStateAsync(\'info.connection\', { val: true, ack: true }) Error Message: ' + err);
		}

		if (moreMessages) { this.log.info('async devicePing() -> hit'); }
		try {
			if (this.syrApiClient != null) {
				this.log.debug('this.syrApiClientbaseURL: ' + String(this.syrApiClient.defaults.baseURL));
				this.log.debug('this.syrApiClientbaseURL: ' + String(this.syrApiClient.defaults.timeout));
				this.log.debug('this.syrApiClientbaseURL: ' + String(this.syrApiClient.defaults.responseType));

				const deviceResponse = await this.syrApiClient.get('get/');

				if (deviceResponse.status === 200) {
					if (apiResponseInfoMessages) { this.log.info('syrApiClient response: ' + JSON.stringify(deviceResponse.data)); }
					//=========================================================================================
					//===  Connection LED to GREEN															===
					//=========================================================================================
					try {
						await this.setStateAsync('info.connection', { val: true, ack: true });
					}
					catch (err) {
						this.log.warn('Error at: await this.setStateAsync(\'info.connection\', { val: true, ack: true }) Error Message: ' + err);
					}
					interfaceBusy = false; // to informe other timer calls that they can perform request to the device.
					interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
					return true;
				} else {
					this.log.error('Axios response.status: ' + String(deviceResponse.status) + ' ' + String(deviceResponse.statusText));
					// we wait some time before we return the bad news
					this.log.warn('device ping delay successfull response ...');
					await this.delay(delay_reconnection * 1000);
					return false;
				}
			} else {
				throw new Error('syrApiClient is not initialized!');
			}
		} catch (err) {
			this.log.error(String(err));
			this.log.warn('device ping delay on response error ...');
			await this.delay(delay_reconnection * 1000);
			return false;
		}
	}

	/**
	* getting data from device according DeviceParameter Array
	* @param {Object[]} deviceParametersToGet - Array of DeviceParameters Objects
	*/
	async getData(deviceParametersToGet) {
		let parNumber = 0;
		try {
			// iterate through all requested Parameters
			for (let i = 0; i < deviceParametersToGet.length; i++) {
				parNumber = i;
				let DeviceParameterReturn = null;
				let gotDeviceParameter = false;
				while (!gotDeviceParameter) {
					// Read out parameter from device
					try {
						DeviceParameterReturn = await this.get_DevieParameter(deviceParametersToGet[i]);
						gotDeviceParameter = true;
						// Data received
					}
					catch (err) {
						this.log.error('async getData(' + deviceParametersToGet[i].id + ', ' + this.config.device_ip + ':' + this.config.device_port + ' ERROR: ' + err);
						// is device available?
						while (!await this.devicePing()) {
							this.log.warn('waiting till device becomes available again ...');
						}
					}
				}
				// Update object states
				try {
					if (DeviceParameterReturn == null) {
						this.log.debug('Device parameter returned NULL -> skipped');
					} else {
						await this.updateState(deviceParametersToGet[i], DeviceParameterReturn);
					}
				}
				catch (err) {
					// something went wrong during state update
					this.log.error('Error [updateState] (' + deviceParametersToGet[i].id + ', ' + DeviceParameterReturn + ') within [getData] ERROR: ' + err);
				}
			}
			return true;
		} catch (err) {
			// something else and unhandled went wrong
			this.log.error('getData(deviceParametersToGet) -> somthing else went wrong at ID ' + deviceParametersToGet[parNumber].id + '! ERROR: ' + err);
			throw new Error(err);
		}
	}

	/**
	 * Creating device object and all channel objects
	 * @returns true OR error
	 */
	async initDevicesAndChanels() {
		this.log.info('creating channel objects ...');
		try {
			try {
				await this.setObjectNotExistsAsync('Device', {
					type: 'device',
					common: {
						name: 'Device'
					},
					native: {}
				});
				this.log.debug('[async initDevicesAndChanels()] Device object created');
			} catch (err) {
				this.log.error('[async initDevicesAndChanels()] ERROR Device: ]' + err);
			}

			for (const key in adapterChannels) {
				try {
					await this.setObjectNotExistsAsync(String(adapterChannels[key].path), adapterChannels[key].channel);
					this.log.debug('Channel ' + String(adapterChannels[key].path) + ' created');
				} catch (err) {
					this.log.error('[async initDevicesAndChanels()] ERROR Channel: ]' + err);
				}
			}
			return true;
		} catch (err) {
			throw new Error(err);
		}
	}


	/**
	 * Creating FloorSensor object and all channel objects
	 * @param number - number of Floor sensor
	 * @returns true OR error
	 */
	async initFloorsensorAndChanels(numberFloorSensor) {
		this.log.info('creating channel objects for FloorSensor ' + String(numberFloorSensor) + ' ...');
		try {
			try {
				await this.setObjectNotExistsAsync(channelsRootNameFS + '.' + String(numberFloorSensor), {
					type: 'device',
					common: {
						name: '1'
					},
					native: {}
				});
				this.log.debug('[async initFloorsensorAndChanels(numberFloorSensor)]' + channelsRootNameFS + '.' + String(numberFloorSensor) + ' object created');
			} catch (err) {
				this.log.error('[async initFloorsensorAndChanels(numberFloorSensor)] ERROR' + channelsRootNameFS + '.' + String(numberFloorSensor) + ' ' + err);
			}

			for (const key in AdapterChannelsFS) {
				try {
					await this.setObjectNotExistsAsync(String(AdapterChannelsFS[key].path.replace('.X.', '.' + String(numberFloorSensor) + '.')), AdapterChannelsFS[key].channel);
					this.log.debug('Channel ' + String(AdapterChannelsFS[key].path.replace('.X.', '.' + String(numberFloorSensor) + '.')) + ' created');
				} catch (err) {
					this.log.error('[async initFloorsensorAndChanels(numberFloorSensor)] ERROR Channel: ]' + err);
				}
			}
			return true;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Creating all object in order to avoid the function createObjectifnot exists in later states
	 * @returns true OR error
	 */
	async createAlloObjects() {
		try {
			this.log.info('creating state objects ...');
			// Creating device parameter states
			for (const key in DeviceParameters) {
				const stateID = String(DeviceParameters[key].statePath) + '.' + String(DeviceParameters[key].id);
				try {
					// do we need to crate this object on startup?
					if (DeviceParameters[key].createOnStartup) {
						await this.setObjectNotExistsAsync(stateID, DeviceParameters[key].objectdefinition);
						this.log.debug('State: "' + stateID + '" created');
						// creating matching RAW State objects
						await this.createRawStateObject(DeviceParameters[key], adapterChannels.DeviceRawData.path);
						this.log.debug('Raw State: "' + stateID + '" created');
					}
				} catch (err) {
					this.log.error('[async createAlloObjects()] STATE: ' + stateID + ' ERROR: ' + err);
				}
			}

			// Creating calculated states
			for (const key in calculatedStates) {
				const stateID = String(calculatedStates[key].statePath) + '.' + String(calculatedStates[key].id);
				try {
					// do we need to crate this object on startup?
					if (calculatedStates[key].createOnStartup) {
						await this.setObjectNotExistsAsync(stateID, calculatedStates[key].objectdefinition);
						this.log.debug('State: "' + stateID + '" created');
					}
				} catch (err) {
					this.log.error('[async createAlloObjects()] STATE: ' + stateID + ' ERROR: ' + err);
				}
			}

			// Creating statistic states
			for (const key in StatisticStates) {
				const stateID = String(StatisticStates[key].statePath) + '.' + String(StatisticStates[key].id);
				try {
					// do we need to crate this object on startup?
					if (StatisticStates[key].createOnStartup) {
						await this.setObjectNotExistsAsync(stateID, StatisticStates[key].objectdefinition);
						this.log.debug('State: "' + stateID + '" created');
					}
				} catch (err) {
					this.log.error('[async createAlloObjects()] STATE: ' + stateID + ' ERROR: ' + err);
				}
			}

			this.log.debug('creating state objects -> done');
		}
		catch (err) { this.log.error('ERROR at async createAlloObjects(): ' + err); }
	}

	/**
	 * Creating all object in order to avoid the function createObjectifnot exists in later states
	 * @param number - number of Floor sensor
	 * @returns true OR error
	 */
	async createAlloFloorsensorObjects(numberFloorSensor) {
		try {
			this.log.info('creating Floor Sensor ' + String(numberFloorSensor) + ' state objects ...');
			// Creating device parameter states
			for (const key in DeviceParametetsFS) {
				const stateID = String(DeviceParametetsFS[key].statePath.replace('.X.', '.' + String(numberFloorSensor) + '.')) + '.' + String(DeviceParametetsFS[key].id);
				try {
					// do we need to crate this object on startup?
					if (DeviceParametetsFS[key].createOnStartup) {
						await this.setObjectNotExistsAsync(stateID, DeviceParametetsFS[key].objectdefinition);
						this.log.debug('State: "' + stateID + '" created');
						// creating matching RAW State objects
						await this.createRawStateObject(DeviceParametetsFS[key], AdapterChannelsFS.DeviceRawData.path.replace('.X.', '.' + String(numberFloorSensor) + '.'));
						this.log.debug('Raw State: "' + stateID + '" created');
					}
				} catch (err) {
					this.log.error('[async createAlloFloorsensorObjects(numberFloorSensor)] STATE: ' + stateID + ' ERROR: ' + err);
				}
			}

			this.log.debug('creating state objects -> done');
		}
		catch (err) { this.log.error('ERROR at async createAlloFloorsensorObjects(numberFloorSensor): ' + err); }
	}

	/**
	 * this method creats the sate object for the RAW value
	 * of the handed over device parameter
	 * @param {*} DeviceParameter - DeviceParameter Object
	 * @param string - path to raw data channel
	 */
	async createRawStateObject(DeviceParameter, RawDataChannelPath) {
		try {
			// do we need a raw object for this state
			if (DeviceParameter.saveRawData) {

				// basic RAW object definition
				const raw_objectdefinition = {
					type: 'state',
					common: {
						name: DeviceParameter.objectdefinition.common.name,
						type: 'string',
						unit: null,
						role: 'json',
						read: true,
						write: false
					},
					native: {}
				};
				await this.setObjectNotExistsAsync(RawDataChannelPath + '.' + DeviceParameter.id, Object(raw_objectdefinition));
			}
		}
		catch (err) {
			this.log.error('ERROR at async createRawStateObject(DeviceParameter, DeviceCannels): Parameter ID = ' + String(DeviceParameter.id) + ' ERROR: ' + err);
		}
	}


	/**
	 * This methode creates state objects
	 * accordung to persence of sensors
	 */
	async createSensorSpecificObjects() {
		this.log.info('creating sensor related objects ...');
		for (let i = 0; i < sensorPresence.length; i++) {
			let precence_return_value = null;
			switch (sensorPresence[i].id) {
				case 'CSD':	// conductivity sensor
					precence_return_value = await this.getStateAsync(sensorPresence[i].statePath + '.' + sensorPresence[i].id);
					if (precence_return_value != null) {
						this.log.debug('CSD presence return value: ' + String(precence_return_value.val));
						if (parseInt(String(precence_return_value.val)) === 0) {
							// Sensor is present
							sensor_conductivity_present = true;
							this.log.info('Coductivity sensor is present');
							try {
								// create Object for conductivity value
								await this.setObjectNotExistsAsync(DeviceParameters.WaterConductivity.statePath + '.' + DeviceParameters.WaterConductivity.id, Object(DeviceParameters.WaterConductivity.objectdefinition));
								// create RAW data object if needed
								if (DeviceParameters.WaterConductivity.saveRawData) {
									// basic RAW object definition
									const raw_objectdefinition = {
										type: 'state',
										common: {
											name: DeviceParameters.WaterConductivity.objectdefinition.common.name,
											type: 'string',
											unit: null,
											role: 'json',
											read: true,
											write: false
										},
										native: {}
									};
									await this.setObjectNotExistsAsync(adapterChannels.DeviceRawData.path + '.' + DeviceParameters.WaterConductivity.id, Object(raw_objectdefinition));
								}
							}
							catch (err) {
								this.log.error('[async createSensorSpecificObjects()] Error case \'CSD\' ERROR: ' + err);
							}
						}
						else {
							// Sensor is not present
							sensor_conductivity_present = false;
							this.log.info('Conductivity sensor not present');
						}
					}
					break;

				case 'TSD':	// temperature sensor
					precence_return_value = await this.getStateAsync(sensorPresence[i].statePath + '.' + sensorPresence[i].id);
					if (precence_return_value != null) {
						this.log.debug('TSD presence return value: ' + String(precence_return_value.val));
						if (parseInt(String(precence_return_value.val)) === 0) {
							// Sensor is present
							sensor_temperature_present = true;
							this.log.info('Temperature sensor is present');
							try {
								// create Object for temperature value
								await this.setObjectNotExistsAsync(DeviceParameters.WaterTemperature.statePath + '.' + DeviceParameters.WaterTemperature.id, Object(DeviceParameters.WaterTemperature.objectdefinition));
								// create RAW data object if needed
								if (DeviceParameters.WaterTemperature.saveRawData) {
									// basic RAW object definition
									const raw_objectdefinition = {
										type: 'state',
										common: {
											name: DeviceParameters.WaterTemperature.objectdefinition.common.name,
											type: 'string',
											unit: null,
											role: 'json',
											read: true,
											write: false
										},
										native: {}
									};
									await this.setObjectNotExistsAsync(adapterChannels.DeviceRawData.path + '.' + DeviceParameters.WaterTemperature.id, Object(raw_objectdefinition));
								}
							}
							catch (err) {
								this.log.error('[async createSensorSpecificObjects()] Error case \'TSD\' ERROR: ' + err);
							}
						}
						else {
							// Sensor is not present
							sensor_temperature_present = false;
							this.log.info('Temperature sensor not present');
						}
					}
					break;

				case 'PSD':	// pressure sensor
					precence_return_value = await this.getStateAsync(sensorPresence[i].statePath + '.' + sensorPresence[i].id);
					if (precence_return_value != null) {
						this.log.debug('TSD presence return value: ' + String(precence_return_value.val));
						if (parseInt(String(precence_return_value.val)) === 0) {
							// Sensor is present
							sensor_pressure_present = true;
							this.log.info('Pressure sensor is present');
							try {
								// create Object for pressure value
								await this.setObjectNotExistsAsync(DeviceParameters.WaterPressure.statePath + '.' + DeviceParameters.WaterPressure.id, Object(DeviceParameters.WaterPressure.objectdefinition));
								// create RAW data object if needed
								if (DeviceParameters.WaterPressure.saveRawData) {
									// basic RAW object definition
									const raw_objectdefinition = {
										type: 'state',
										common: {
											name: DeviceParameters.WaterPressure.objectdefinition.common.name,
											type: 'string',
											unit: null,
											role: 'json',
											read: true,
											write: false
										},
										native: {}
									};
									await this.setObjectNotExistsAsync(adapterChannels.DeviceRawData.path + '.' + DeviceParameters.WaterPressure.id, Object(raw_objectdefinition));
								}
							}
							catch (err) {
								this.log.error('[async createSensorSpecificObjects()] Error case \'TSD\' ERROR: ' + err);
							}
						}
						else {
							// Sensor is not present
							sensor_pressure_present = false;
							this.log.info('Pressure sensor not present');
						}
					}
					break;

				default:
					this.log.warn('[async createSensorSpecificObjects()] Sensor type "' + sensorPresence[i].id + '" not recognised');
			}
		}

		// do we have conductivity AND temperature sensor present?
		if (sensor_conductivity_present && sensor_temperature_present) {
			// then we nedd additional calculated objects

			// create object for "compensated conductivity" value
			await this.setObjectNotExistsAsync(calculatedStates.conductivityEC25.statePath + '.' + calculatedStates.conductivityEC25.id, Object(calculatedStates.conductivityEC25.objectdefinition));

			// create object for "German water hardness" value
			await this.setObjectNotExistsAsync(calculatedStates.germanWaterHardness.statePath + '.' + calculatedStates.germanWaterHardness.id, Object(calculatedStates.germanWaterHardness.objectdefinition));
		}
	}

	/**
	 * get data of all profiles from the device
	 */
	async getDeviceProfilesData() {
		try {
			this.log.debug('reading profiles ...');

			if (moreMessages) { this.log.info('reading device profiles'); }
			// alle 8 möglichen Profile durchlaufen
			for (let ProfileNumber = 1; ProfileNumber < 9; ProfileNumber++) {

				this.log.debug('[async getDeviceProfilesData(DeviceIP, DevicePort)] Profil ' + ProfileNumber);

				const listOfParameter = [
					'Device.Profiles.' + String(ProfileNumber) + '.PA' + String(ProfileNumber),
					'Device.Profiles.' + String(ProfileNumber) + '.PN' + String(ProfileNumber),
					'Device.Profiles.' + String(ProfileNumber) + '.PV' + String(ProfileNumber),
					'Device.Profiles.' + String(ProfileNumber) + '.PT' + String(ProfileNumber),
					'Device.Profiles.' + String(ProfileNumber) + '.PF' + String(ProfileNumber),
					'Device.Profiles.' + String(ProfileNumber) + '.PM' + String(ProfileNumber),
					'Device.Profiles.' + String(ProfileNumber) + '.PR' + String(ProfileNumber),
					'Device.Profiles.' + String(ProfileNumber) + '.PB' + String(ProfileNumber),
					'Device.Profiles.' + String(ProfileNumber) + '.PW' + String(ProfileNumber)];

				this.log.debug(`[getDeviceProfilesData()] Profil ` + ProfileNumber);
				for (const stateID of listOfParameter) {
					const parameterIDs = stateID.split('.');
					this.log.debug('current Parameter ID: ' + parameterIDs[parameterIDs.length - 1]);
					let result = null;
					try {
						result = await this.get_DevieProfileParameter(ProfileNumber, parameterIDs[parameterIDs.length - 1]);
						this.log.debug('[' + parameterIDs[parameterIDs.length - 1] + '] : ' + String(JSON.stringify(result)));
					}
					catch (err) {
						this.log.error('getDeviceProfilesData -> Error from get_DevieProfileParameter Profile Number:' + String(ProfileNumber) + ' ParameterID:' + String(parameterIDs[parameterIDs.length - 1]));
					}
					try {
						await this.UpdateProfileState(ProfileNumber, stateID, result);
						this.log.debug('Profil ' + ProfileNumber + ' Parameter ' + parameterIDs[parameterIDs.length - 1]);
					}
					catch (err) {
						this.log.error('getDeviceProfilesData -> Error from UpdateProfileState -> Profile Number:' + String(ProfileNumber) + ' stateID:' + String(stateID) + ' ParameterID:' + String(parameterIDs[parameterIDs.length - 1]));
					}
				}
			}
			this.log.debug('reading profiles ... done');
			return true;
		} catch (err) {
			this.log.error(err.message);
			throw new Error(err);
		}
	}

	/**
	 * updates states value to DeviceParameter
	 * @param {Object} deviceParameterToUpdate - DeviceParameter Object
	 * @param {JSON} deviceValue - JSON return value from Device eg {"getCND": "269"}
	 */
	async updateState(deviceParameterToUpdate, deviceValue) {
		try {

			let cur_ParameterID;	// Parameter ID
			let cur_StatePath;		// State Path

			// determin parameter ID, if not defined, throw Error and return
			if (deviceParameterToUpdate == null) { throw new Error('[async updateState(deviceParameterToUpdate, deviceValue)] deviceParameterToUpdate is null'); }

			if ('id' in deviceParameterToUpdate) {
				if (deviceParameterToUpdate.id == null || deviceParameterToUpdate.id == '') { throw new Error(String(deviceParameterToUpdate) + ' [async updateState(deviceParameterToUpdate, deviceValue)] has no valid [id] key (null or empty)'); }
				cur_ParameterID = deviceParameterToUpdate.id;
				this.log.debug('id key Value is: ' + cur_ParameterID);
			} else {
				throw new Error(String(deviceParameterToUpdate) + ' [async updateState(deviceParameterToUpdate, deviceValue)] has no [id] key');
			}

			// determin state path -> if not defined, throw Error and return
			if ('statePath' in deviceParameterToUpdate) {
				if (deviceParameterToUpdate.statePath == null || deviceParameterToUpdate.statePath == '') { throw new Error(String(deviceParameterToUpdate) + ' [async updateState(deviceParameterToUpdate, deviceValue)] has no valid (statePath) key'); }
				cur_StatePath = deviceParameterToUpdate.statePath;
				this.log.debug('(statePath) key Value is: ' + cur_StatePath);
			} else {
				throw new Error(String(deviceParameterToUpdate) + ' [async updateState(deviceParameterToUpdate, deviceValue)] has no id statePath');
			}

			// Path for state object
			const state_ID = cur_StatePath + '.' + cur_ParameterID;

			// clear flag to signalize to skip some later operations
			let skip = false;

			// checking if we deal with parameters which need to skip some later operations
			if (cur_ParameterID === DeviceParameters.WaterConductivity.id && sensor_conductivity_present === false) { skip = true; }
			else if (cur_ParameterID === DeviceParameters.WaterPressure.id && sensor_pressure_present === false) { skip = true; }
			else if (cur_ParameterID === DeviceParameters.WaterTemperature.id && sensor_temperature_present === false) { skip = true; }

			// do we need to skip this parameter?
			if (skip) {
				// sensor for this parameter is not present in the system ... return
				this.log.debug('Sensor not Present ... skipped');
				return true;
			}

			// save RAW State
			try {
				this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + cur_ParameterID, { val: JSON.stringify(deviceValue), ack: true });
			}
			catch (err) {
				this.log.warn('[async updateState(deviceParameterToUpdate, deviceValue)] ERROR saving RAW state. State ID=' + String(adapterChannels.DeviceRawData.path + '.' + cur_ParameterID) + ' Value=' + String(deviceValue)) + ' maybe object dose not exist. -> creating object ...';
			}
			//=========================

			// convert into final value
			let finalValue;
			try {
				finalValue = await this.convertDeviceReturnValue(deviceParameterToUpdate.id, deviceValue['get' + deviceParameterToUpdate.id]);
				this.log.debug('finalValue = ' + String(finalValue));
			}
			catch (err) {
				this.log.error('[async updateState(deviceParameterToUpdate, deviceValue)] Error: ' + String(err));
				throw new Error(err);
			}

			switch (deviceParameterToUpdate.objectdefinition.common.type) {
				case 'number':	// handle as number
					this.log.debug('[async updateState(deviceParameterToUpdate, deviceValue)] value is NUMBER');
					try {
						// trying to write value into state object
						this.log.debug('deviceParameterToUpdate.objectdefinition.common.type = ' + deviceParameterToUpdate.objectdefinition.common.type);
						this.setStateAsync(state_ID, { val: parseFloat(String(finalValue)), ack: true });
					}
					catch (err) {
						this.log.error('[async updateState(deviceParameterToUpdate, deviceValue)]: State "' + String(deviceParameterToUpdate.id) + '" couldn\'t be saved ERROR: ' + err);
					}
					break;
				default:	// handle as string
					this.log.debug('[async updateState(deviceParameterToUpdate, deviceValue)] value is STRING');
					try {
						this.log.debug('deviceParameterToUpdate.objectdefinition.common.type = ' + deviceParameterToUpdate.objectdefinition.common.type);
						this.setStateAsync(state_ID, { val: String(finalValue), ack: true });
					}
					catch (err) {
						this.log.warn('[async updateState(deviceParameterToUpdate, deviceValue)]: State "' + String(deviceParameterToUpdate.id) + '" couldn\'t be saved ERROR: ' + err);
					}
			}
			if (deviceParameterToUpdate.objectdefinition.common.unit !== null) {
				this.log.debug('[async updateState(deviceParameterToUpdate, deviceValue)] info: ' + String(cur_StatePath) + ' ' + String(cur_ParameterID) + ' ' + String(finalValue) + ' ' + String(deviceParameterToUpdate.objectdefinition.common.unit));
			}
			else {
				this.log.debug('[async updateState(deviceParameterToUpdate, deviceValue)] info: ' + String(cur_StatePath) + ' ' + String(cur_ParameterID) + ' ' + String(finalValue));
			}
			return true;
		} catch (err) {
			this.log.error('[async updateState(deviceParameterToUpdate, deviceValue)] Error: ' + String(err));
			throw new Error(err);
		}
	}

	/**
	 * returns a globalised value if defined in the parameter Structure
	 * @param {object} ParameterObject - DeviceParameter Object
	 * @param {JSON} value - JSON return value from Device eg {"getCND": "269"}
	 * @returns translated result value or NULL if ther is no translation
	 */
	async getGlobalisedValue(ParameterObject, value) {
		try {
			let result;

			if ('rangevalues' in ParameterObject) {	// do we have globalised values?
				if (String(value) in ParameterObject.rangevalues) {	// ist the current value globalised?
					if (SystemLanguage in ParameterObject.rangevalues[String(value)]) { // value in current system language available?
						result = ParameterObject.rangevalues[String(value)][SystemLanguage]; // OK we take it
					}
					else {
						this.log.debug('Parameter id : ' + String(ParameterObject.id) + ' value is not globalised');
						result = null;
					}
				} else {
					this.log.debug('Parameter id: ' + String(ParameterObject.id) + ' value is not globalised');
					result = null;
				}
			} else {
				this.log.debug('Parameter id: ' + String(ParameterObject.id) + ' value is not globalised');
				result = null;
			}
			return result;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * here we convert the raw values from the device
	 * into the final values for the states
	 * @param {string} valueKey - State ID value out of the DeviceParameter
	 * @param {any} value - value to convert
	 * @returns final value or an error
	 */
	async convertDeviceReturnValue(valueKey, value) {
		try {
			let finalValue;
			switch (String(valueKey)) {
				case DeviceParameters.Units.id:						// UNI - Units
					finalValue = await this.getGlobalisedValue(DeviceParameters.Units, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.Units, finalValue); }
					break;
				case DeviceParameters.Language.id:					// LNG - Language
					finalValue = await this.getGlobalisedValue(DeviceParameters.Language, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.Language, finalValue); }
					break;
				case DeviceParameters.AvailableProfiles.id: 		// PRN - available profiles
					finalValue = await this.getGlobalisedValue(DeviceParameters.AvailableProfiles, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = parseInt(value);
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.AvailableProfiles, finalValue); }
					break;
				case DeviceParameters.SelectedProfile.id: 			// PRF - selected profile
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelectedProfile, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = parseInt(value);
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelectedProfile, finalValue); }
					break;
				case DeviceParameters.DeactivateTemperatureSensor.id:	// TSD - Temp sensor present
					if (parseInt(value) == 0) { sensor_temperature_present = true; } else { sensor_temperature_present = false; }
					finalValue = await this.getGlobalisedValue(DeviceParameters.DeactivateTemperatureSensor, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.DeactivateTemperatureSensor, finalValue); }
					break;
				case DeviceParameters.DeactivateConductivitySensor.id:	// CSD - conductivity sensor present
					if (parseInt(value) == 0) { sensor_conductivity_present = true; } else { sensor_conductivity_present = false; }
					finalValue = await this.getGlobalisedValue(DeviceParameters.DeactivateConductivitySensor, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.DeactivateConductivitySensor, finalValue); }
					break;
				case DeviceParameters.DeactivatePressureSensor.id:	// PSD - Pressure sensor present
					if (parseInt(value) == 0) { sensor_pressure_present = true; } else { sensor_pressure_present = false; }
					finalValue = await this.getGlobalisedValue(DeviceParameters.DeactivatePressureSensor, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.DeactivatePressureSensor, finalValue); }
					break;
				case DeviceParameters.CurrentAlarmStatus.id:		// ALA Alarm status
					finalValue = await this.getGlobalisedValue(DeviceParameters.CurrentAlarmStatus, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						switch (String(value)) {
							case 'FF':
								finalValue = 'NO ALARM';
								break;
							case 'A1':
								finalValue = 'ALARM END SWITCH';
								break;
							case 'A2':
								finalValue = 'NO NETWORK';
								break;
							case 'A3':
								finalValue = 'ALARM VOLUME LEAKAGE';
								break;
							case 'A4':
								finalValue = 'ALARM TIME LEAKAGE';
								break;
							case 'A5':
								finalValue = 'ALARM MAX FLOW LEAKAGE';
								break;
							case 'A6':
								finalValue = 'ALARM MICRO LEAKAGE';
								break;
							case 'A7':
								finalValue = 'ALARM EXT. SENSOR LEAKAGE';
								break;
							case 'A8':
								finalValue = 'ALARM TURBINE BLOCKED';
								break;
							case 'A9':
								finalValue = 'ALARM PRESSURE SENSOR ERROR';
								break;
							case 'AA':
								finalValue = 'ALARM TEMPERATURE SENSOR ERROR';
								break;
							case 'AB':
								finalValue = 'ALARM CONDUCTIVITY SENSOR ERROR';
								break;
							case 'AC':
								finalValue = 'ALARM TO HIGH CONDUCTIVITY';
								break;
							case 'AD':
								finalValue = 'LOW BATTERY';
								break;
							case 'AE':
								finalValue = 'WARNING VOLUME LEAKAGE';
								break;
							case 'AF':
								finalValue = 'ALARM NO POWER SUPPLY';
								break;
							default:
								finalValue = 'undefined';
						}
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.CurrentAlarmStatus, finalValue); }
					break;
				case DeviceParameters.CurrentValveStatus.id:		// VLV - Current Valve Status
					finalValue = await this.getGlobalisedValue(DeviceParameters.CurrentValveStatus, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						switch (String(value)) {
							case '10':
								finalValue = 'Closed';
								break;
							case '11':
								finalValue = 'Closing';
								break;
							case '20':
								finalValue = 'Open';
								break;
							case '21':
								finalValue = 'Opening';
								break;
							case '30':
								finalValue = 'Undefined';
								break;
							default:
								this.log.warn('[async convertDeviceReturnValue(valueKey, value)] Value (' + String(value) + ') for Key (' + String(valueKey) + ') is not defined!');
								finalValue = null;
						}
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.CurrentValveStatus, finalValue); }
					break;
				case DeviceParameters.SystemTime.id:				// RTC - System Time
					finalValue = await this.getGlobalisedValue(DeviceParameters.SystemTime, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = (new Date(parseInt(value) * 1000)).toLocaleString();
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SystemTime, finalValue); }
					break;
				case DeviceParameters.WaterTemperature.id:			// CEL - Water temperature
					if (sensor_temperature_present) {
						finalValue = await this.getGlobalisedValue(DeviceParameters.WaterTemperature, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = parseFloat(value) / 10;
							_WaterTemperature = finalValue;
						}
						if (valuesInfoMessages) { await this.moremessages(DeviceParameters.WaterTemperature, finalValue); }
					}
					break;
				case DeviceParameters.WaterPressure.id:				// BAR Water pressure
					if (sensor_pressure_present) {
						value = parseFloat(String(value).replace(',', '.'));
						finalValue = await this.getGlobalisedValue(DeviceParameters.WaterPressure, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = parseFloat(value);
							_WaterPressure = finalValue;
						}
						if (valuesInfoMessages) { await this.moremessages(DeviceParameters.WaterPressure, finalValue); }
					}
					break;
				case DeviceParameters.WaterConductivity.id:			// CND - Water conductivity
					if (sensor_conductivity_present) {
						try {
							finalValue = await this.getGlobalisedValue(DeviceParameters.WaterConductivity, value);
							if (finalValue === null) {	// did we get a globalised Value back?
								finalValue = parseFloat(String(value).replace(',', '.'));
								_WaterConductivity = finalValue;
								// updatig German water hardness
								if (sensor_temperature_present) {
									try { await this.updateEC25conductivity(); } catch (err) { this.log.error('convertDeviceReturnValue -> WaterConductivity -> updateEC25conductivity ERROR: ' + err); }
									if (valuesInfoMessages) { try { await this.moremessages(calculatedStates.conductivityEC25, _WaterConductivity_EC25); } catch (err) { this.log.error('convertDeviceReturnValue -> WaterConductivity -> moremessages ERROR: ' + err); } }
								}
								try { await this.updateGermanWaterHardnes(); } catch (err) { this.log.error('convertDeviceReturnValue -> WaterConductivity -> updateGermanWaterHardnes ERROR: ' + err); }
							}
							if (valuesInfoMessages) { try { await this.moremessages(DeviceParameters.WaterConductivity, _WaterConductivity); } catch (err) { this.log.error('convertDeviceReturnValue -> WaterConductivity -> moremessages ERROR: ' + err); } }
						} catch (err) {
							this.log.error('convertDeviceReturnValue -> WaterConductivity -> getGlobalisedValue ERROR: ' + err);
						}
					}
					break;
				case DeviceParameters.BatteryVoltage.id:			// BAT Batterie voltage
					value = parseFloat(String(value).replace(',', '.'));
					finalValue = await this.getGlobalisedValue(DeviceParameters.BatteryVoltage, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = parseFloat(value);
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.BatteryVoltage, finalValue); }
					break;
				case DeviceParameters.PowerAdapterVoltage.id:		// NET - DC voltage (power adaptor)
					value = parseFloat(String(value).replace(',', '.'));
					finalValue = await this.getGlobalisedValue(DeviceParameters.PowerAdapterVoltage, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = parseFloat(value);
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.PowerAdapterVoltage, finalValue); }
					break;
				case DeviceParameters.LastTappedVolume.id:			// LTV - Last tapped Volume
					value = parseFloat(String(value).replace(',', '.'));
					finalValue = await this.getGlobalisedValue(DeviceParameters.LastTappedVolume, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = parseFloat(value);
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.LastTappedVolume, finalValue); }
					break;
				case DeviceParameters.TotalVolume.id:				// VOL - total consumed water
					value = parseFloat(String(value).replace(',', '.').replace('Vol[L]', '')) / 1000;
					finalValue = await this.getGlobalisedValue(DeviceParameters.TotalVolume, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = parseFloat(value);
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.TotalVolume, finalValue); }
					break;
				case DeviceParameters.CurrentVolume.id:				// AVO - current water volume
					value = parseFloat(String(value).replace(',', '.').replace('mL', ''));
					finalValue = await this.getGlobalisedValue(DeviceParameters.CurrentVolume, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = parseFloat(value);
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.CurrentVolume, finalValue); }
					break;
				case DeviceParameters.APHidden.id:					// WAH - WiFi AP hidden
					finalValue = await this.getGlobalisedValue(DeviceParameters.APHidden, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						if (parseInt(value) == 0) {
							finalValue = 'AP not hidden (visible)';
						} else {
							finalValue = 'AP hidden';
						}
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.APHidden, finalValue); }
					break;
				case DeviceParameters.APDisabled.id:				// WAD - WiFi AP dissabled
					finalValue = await this.getGlobalisedValue(DeviceParameters.APDisabled, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						if (parseInt(value) == 0) {
							finalValue = 'AP not disabled';
						} else {
							finalValue = 'AP disabled';
						}
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.APDisabled, finalValue); }
					break;
				case DeviceParameters.APTimeout.id:					// APT - WiFi AP timeout
					finalValue = await this.getGlobalisedValue(DeviceParameters.APTimeout, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.APTimeout, finalValue); }
					break;
				case DeviceParameters.WiFiDeaktivate.id:			// DWL - WiFi deactivated
					finalValue = await this.getGlobalisedValue(DeviceParameters.WiFiDeaktivate, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.WiFiDeaktivate, finalValue); }
					break;
				case DeviceParameters.WiFiState.id:					// WFS - WiFi state
					finalValue = await this.getGlobalisedValue(DeviceParameters.WiFiState, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						if (parseInt(value) == 0) {
							finalValue = 'disconnected';
						} else if (parseInt(value) == 1) {
							finalValue = 'connecting';
						} else if (parseInt(value) == 2) {
							finalValue = 'connected';
						} else {
							finalValue = 'undefined';
						}
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.WiFiState, finalValue); }
					break;
				case DeviceParameters.DaylightSavingTime.id:		// IDS - Daylight saving time
					finalValue = await this.getGlobalisedValue(DeviceParameters.DaylightSavingTime, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.DaylightSavingTime, finalValue); }
					break;
				case DeviceParameters.FirmwareVersion.id:			// VER -Firmware Version
					finalValue = await this.getGlobalisedValue(DeviceParameters.FirmwareVersion, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.FirmwareVersion, finalValue); }
					break;
				case DeviceParameters.IPAddress.id: 				// WIP - IP address
					finalValue = await this.getGlobalisedValue(DeviceParameters.IPAddress, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.IPAddress, finalValue); }
					break;
				case DeviceParameters.MACAddress.id:				// MAC -MAC address
					finalValue = await this.getGlobalisedValue(DeviceParameters.MACAddress, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.MACAddress, finalValue); }
					break;
				case DeviceParameters.DefaultGateway.id:			// WGW - Default gateway
					finalValue = await this.getGlobalisedValue(DeviceParameters.DefaultGateway, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.DefaultGateway, finalValue); }
					break;
				case DeviceParameters.SerialNumber.id:				// SRN - Device serial number
					finalValue = await this.getGlobalisedValue(DeviceParameters.SerialNumber, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SerialNumber, finalValue); }
					break;
				case DeviceParameters.CodeNumber.id:				// CNO - Code Number
					finalValue = await this.getGlobalisedValue(DeviceParameters.CodeNumber, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.CodeNumber, finalValue); }
					break;
				case DeviceParameters.WiFiRSSI.id:					// WFR - WiFi RSSI
					finalValue = await this.getGlobalisedValue(DeviceParameters.WiFiRSSI, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.WiFiRSSI, finalValue); }
					break;
				case DeviceParameters.WiFiSSID.id:					// WFC - WiFi SSID
					finalValue = await this.getGlobalisedValue(DeviceParameters.WiFiSSID, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.WiFiSSID, finalValue); }
					break;
				case DeviceParameters.NextMaintenance.id:			// SRV - Next Maintenance
					finalValue = await this.getGlobalisedValue(DeviceParameters.NextMaintenance, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.NextMaintenance, finalValue); }
					break;
				case DeviceParameters.FloorSensor.id:				// BSA - Floor Sensor
					finalValue = await this.getGlobalisedValue(DeviceParameters.FloorSensor, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.FloorSensor, finalValue); }
					break;
				case DeviceParameters.ShutOff.id:					// AB - Shutoff state
					finalValue = await this.getGlobalisedValue(DeviceParameters.ShutOff, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						if (parseInt(value) == 1) {
							finalValue = 1;
						} else if (parseInt(value) == 2) {
							finalValue = 2;
						}
						else {
							finalValue = 'Shutoff undefined';
						}
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.ShutOff, finalValue); }
					break;
				case DeviceParameters.LeakProtectionTemporaryDeactivation.id:	// TMP Leackage protection temporary deactivation
					finalValue = await this.getGlobalisedValue(DeviceParameters.LeakProtectionTemporaryDeactivation, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.LeakProtectionTemporaryDeactivation, finalValue); }
					break;
				case DeviceParameters.MaxFlowLeakageTime.id:		// T2 - Max flow leakage time
					finalValue = await this.getGlobalisedValue(DeviceParameters.MaxFlowLeakageTime, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.MaxFlowLeakageTime, finalValue); }
					break;
				case DeviceParameters.MicroLeakageTest.id:			// DMA - Micro leakage test
					finalValue = await this.getGlobalisedValue(DeviceParameters.MicroLeakageTest, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.MicroLeakageTest, finalValue); }
					break;
				case DeviceParameters.MicroLeakageTestPeriod.id:	// DRP - Micro leakage test period
					finalValue = await this.getGlobalisedValue(DeviceParameters.MicroLeakageTestPeriod, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.MicroLeakageTestPeriod, finalValue); }
					break;
				case DeviceParameters.BuzzerOnAlarm.id:				// BUZ - Buzzer on alarm
					finalValue = await this.getGlobalisedValue(DeviceParameters.BuzzerOnAlarm, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.BuzzerOnAlarm, finalValue); }
					break;
				case DeviceParameters.LeakageNotificationWarningThreshold.id:	// LWT - Leakage notification (warning) threshold
					finalValue = await this.getGlobalisedValue(DeviceParameters.LeakageNotificationWarningThreshold, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.LeakageNotificationWarningThreshold, finalValue); }
					break;
				case DeviceParameters.WaterFlow.id:					// FLO - Water flow
					finalValue = await this.getGlobalisedValue(DeviceParameters.WaterFlow, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.WaterFlow, finalValue); }
					break;
				case DeviceParameters.TurbineNoPulseTime.id:		// NPS - Turbine no pulse time
					finalValue = await this.getGlobalisedValue(DeviceParameters.TurbineNoPulseTime, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.TurbineNoPulseTime, finalValue); }
					break;
				case DeviceParameters.ValveTestOngoing.id:			// VTO - Valve test ongoing
					finalValue = await this.getGlobalisedValue(DeviceParameters.ValveTestOngoing, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						if (parseInt(value) == 0) {
							finalValue = 'inactive';
						} else {
							finalValue = 'active';
						}
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.ValveTestOngoing, finalValue); }
					break;
				case DeviceParameters.FirmwareCheck.id:				// SFV - Check if new firmware is available
					finalValue = await this.getGlobalisedValue(DeviceParameters.FirmwareCheck, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						if (parseInt(value) == 0) {
							finalValue = 'new firmware not available';
						} else {
							finalValue = 'new firmware available';
						}
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.FirmwareCheck, finalValue); }
					break;
				case DeviceParameters.ScreenRotation.id:			// SRO - Screen rotation
					finalValue = await this.getGlobalisedValue(DeviceParameters.ScreenRotation, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.ScreenRotation, finalValue); }
					break;
				case DeviceParameters.SelfLearningPhase.id:			// SLP - Self learning phase
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelfLearningPhase, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelfLearningPhase, finalValue); }
					break;
				case DeviceParameters.SelfLearningOffset.id:		// SLO - Self learning offset
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelfLearningOffset, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelfLearningOffset, finalValue); }
					break;
				case DeviceParameters.SelfLearningFlowOffset.id:	// SOF - Self learning offset flow
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelfLearningFlowOffset, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelfLearningFlowOffset, finalValue); }
					break;
				case DeviceParameters.SelfLearningMinimumFlow.id:	// SMF - Self learning minimum flow
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelfLearningMinimumFlow, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelfLearningMinimumFlow, finalValue); }
					break;
				case DeviceParameters.SelfLearningTimeToEnd.id:		// SLE - Self learning time to end
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelfLearningTimeToEnd, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelfLearningTimeToEnd, finalValue); }
					break;
				case DeviceParameters.SelfLearningVolumeValue.id:	// SLV - Self learning current volume
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelfLearningVolumeValue, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelfLearningVolumeValue, finalValue); }
					break;
				case DeviceParameters.SelfLearningTimeValue.id:		// SLF - Self learning max flow volume
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelfLearningTimeValue, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelfLearningVolumeValue, finalValue); }
					break;
				case DeviceParameters.SelfLearningFlowValue.id:		// SLT - Self learning Time volume
					finalValue = await this.getGlobalisedValue(DeviceParameters.SelfLearningFlowValue, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.SelfLearningFlowValue, finalValue); }
					break;
				case DeviceParameters.TimeZone.id:					// TMZ - Time zone
					finalValue = await this.getGlobalisedValue(DeviceParameters.TimeZone, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.TimeZone, finalValue); }
					break;
				case DeviceParameters.MotorOverrun.id:				// TN  - Motor overrun
					finalValue = await this.getGlobalisedValue(DeviceParameters.MotorOverrun, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.MotorOverrun, finalValue); }
					break;
				case DeviceParameters.LeakageProtectionDeactivated.id:	// 71 - Leakage protection deactivated
					finalValue = await this.getGlobalisedValue(DeviceParameters.LeakageProtectionDeactivated, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.LeakageProtectionDeactivated, finalValue); }
					break;
				case DeviceParameters.AlarmDuration.id:				// ALD - Alarm duration
					finalValue = await this.getGlobalisedValue(DeviceParameters.AlarmDuration, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.AlarmDuration, finalValue); }
					break;
				case DeviceParameters.ClusterProfile.id:			// CLP - Cluster Profile
					finalValue = await this.getGlobalisedValue(DeviceParameters.ClusterProfile, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.ClusterProfile, finalValue); }
					break;
				case DeviceParameters.ButtonProfileChange.id:		// BPB - Profile change by button
					finalValue = await this.getGlobalisedValue(DeviceParameters.ButtonProfileChange, value);
					if (finalValue === null) {	// did we get a globalised Value back?
						finalValue = value;
					}
					if (valuesInfoMessages) { await this.moremessages(DeviceParameters.ButtonProfileChange, finalValue); }
					break;
				default:
					this.log.warn('[async convertDeviceReturnValue(valueKey, value)] Key (' + String(valueKey) + ') is not valid!');
					finalValue = value;
			}
			return finalValue;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * sends the comand to the device to bring it into FACTORY mode
	 * @returns true or error
	 */
	async set_FACTORY_Mode() {
		try {
			if (moreMessages) { this.log.info('Setting SERVICE mode'); }
			if (this.syrApiClient != null) {
				const deviceResponse = await this.syrApiClient.get('set/' + Parameter_FACTORY_Mode);
				if (apiResponseInfoMessages) { this.log.info('syrApiClient response: ' + JSON.stringify(deviceResponse.data)); }
				return true;
			}
			else {
				throw new Error('syrApiClient is not initialized!');
			}
		} catch (err) {
			throw new Error(err.message);
		}
	}

	/**
	 * sends the comand to the device to bring it into SERVICE mode
	 * @returns true or error
	 */
	async set_SERVICE_Mode() {
		try {
			if (moreMessages) { this.log.info('Setting FACTORY mode'); }
			if (this.syrApiClient != null) {
				const deviceResponse = await this.syrApiClient.get('set/' + Parameter_SERVICE_Mode);
				if (apiResponseInfoMessages) { this.log.info('syrApiClient response: ' + JSON.stringify(deviceResponse.data)); }
				return true;
			}
			else {
				throw new Error('syrApiClient is not initialized!');
			}
		} catch (err) {
			throw new Error(err.message);
		}
	}

	/**
	 * sends the comand to the device to bring it back into USER mode
	 * @returns true or error
	 */
	async clear_SERVICE_FACTORY_Mode() {
		try {
			if (moreMessages) { this.log.info('Clearing SERVICE or FACTORY mode'); }
			if (this.syrApiClient != null) {
				const deviceResponse = await this.syrApiClient.get('clr/' + Parameter_Clear_SERVICE_FACTORY_Mode);
				if (apiResponseInfoMessages) { this.log.info('syrApiClient response: ' + JSON.stringify(deviceResponse.data)); }
				return true;
			}
			else {
				throw new Error('syrApiClient is not initialized!');
			}
		} catch (err) {
			throw new Error(err.message);
		}
	}

	/**
	 * generate the additional log messages if the option is aktive in
	 * adapter settings
	 * @param {Object} ParameterStruct - DeviceParameter Object
	 * @param {any} value - value to show in log
	 * @returns true or error
	 */
	async moremessages(ParameterStruct, value) {
		try {
			const ID = ParameterStruct.id;
			let nameWish;
			if (SystemLanguage in ParameterStruct.objectdefinition.common.name) {
				nameWish = SystemLanguage;
			} else {
				nameWish = 'en';
			}
			const Name = ParameterStruct.objectdefinition.common.name[nameWish];
			const Unit = ParameterStruct.objectdefinition.common.unit;
			if (Unit !== null) {
				this.log.info(ID + ' - ' + Name + ': ' + String(value) + ' ' + String(Unit));
			} else {
				this.log.info(ID + ' - ' + Name + ': ' + String(value));
			}
			return true;
		} catch (err) {
			this.log.error('ERROR at [async moremessages(ParameterStruct, value)]: ' + err);
			return false;
		}
	}

	/**
	 * here we do a part of the math for the statistics
	 * @returns true or error
	 */
	async updateStatistics() {
		try {
			this.log.debug('update Statistics');

			let lastTotalValue = 0;
			let currentTotalValue = 0;
			let deltaValue = 0;
			let current_Day = 0;
			let current_Week = 0;
			let current_Month = 0;
			let current_Year = 0;

			let lastTotalvalueState = null;
			let currentTotalvalueState = null;
			let current_Day_valueState = null;
			let current_Week_valueState = null;
			let current_Month_valueState = null;
			let current_Year_valueState = null;

			// getting states
			try {
				lastTotalvalueState = await this.getStateAsync(StatisticStates.TotalLastValue.statePath + '.' + StatisticStates.TotalLastValue.id);
				if ((lastTotalvalueState != null) && (lastTotalvalueState.val != null)) {
					// pulling values from state if state already existed
					lastTotalValue = parseFloat(String(lastTotalvalueState.val));
				}
			}
			catch (err) {
				this.log.error('async updateStatistics() -> lastTotalvalueState = await this.getStateAsync(StatisticStates.TotalLastValue.statePath + \'.\' + StatisticStates.TotalLastValue.id) -> returned ERROR: ' + err);
			}

			try {
				currentTotalvalueState = await this.getStateAsync(DeviceParameters.TotalVolume.statePath + '.' + DeviceParameters.TotalVolume.id);
				if ((currentTotalvalueState != null) && (currentTotalvalueState.val != null)) {
					// pulling values from state if state already existed
					currentTotalValue = parseFloat(String(currentTotalvalueState.val)) * 1000;
				}
			}
			catch (err) {
				this.log.error('async updateStatistics() -> currentTotalvalueState = await this.getStateAsync(DeviceParameters.TotalVolume.statePath + \'.\' + DeviceParameters.TotalVolume.id) -> returned ERROR: ' + err);
			}

			try {
				current_Day_valueState = await this.getStateAsync(StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id);
				if ((current_Day_valueState != null) && (current_Day_valueState.val != null)) {
					// pulling values from state if state already existed
					current_Day = parseFloat(String(current_Day_valueState.val));
				}
			}
			catch (err) {
				this.log.error('async updateStatistics() -> current_Day_valueState = await this.getStateAsync(StatisticStates.TotalDay.statePath + \'.\' + StatisticStates.TotalDay.id) -> returned ERROR: ' + err);
			}

			try {
				current_Week_valueState = await this.getStateAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id);
				if ((current_Week_valueState != null) && (current_Week_valueState.val != null)) {
					// pulling values from state if state already existed
					current_Week = parseFloat(String(current_Week_valueState.val));
				}
			}
			catch (err) {
				this.log.error('async updateStatistics() -> current_Week_valueState = await this.getStateAsync(StatisticStates.TotalWeek.statePath + \'.\' + StatisticStates.TotalWeek.id) -> returned ERROR: ' + err);
			}

			try {
				current_Month_valueState = await this.getStateAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id);
				if ((current_Month_valueState != null) && (current_Month_valueState.val != null)) {
					// pulling values from state if state already existed
					current_Month = parseFloat(String(current_Month_valueState.val));
				}
			}
			catch (err) {
				this.log.error('async updateStatistics() -> current_Month_valueState = await this.getStateAsync(StatisticStates.TotalMonth.statePath + \'.\' + StatisticStates.TotalMonth.id) -> returned ERROR: ' + err);
			}

			try {
				current_Year_valueState = await this.getStateAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id);
				if ((current_Year_valueState != null) && (current_Year_valueState.val != null)) {
					// pulling values from state if state already existed
					current_Year = parseFloat(String(current_Year_valueState.val));
				}
			}
			catch (err) {
				this.log.error('async updateStatistics() -> current_Year_valueState = await this.getStateAsync(StatisticStates.TotalYear.statePath + \'.\' + StatisticStates.TotalYear.id) -> returned ERROR: ' + err);
			}


			// calculating the delta
			deltaValue = currentTotalValue - lastTotalValue;
			this.log.debug('old total = ' + String(lastTotalValue) + 'l / akt total = ' + String(currentTotalValue) + 'l / Delta = ' + String(deltaValue) + 'l');

			// only update states if we hav a change in total consumption
			if (deltaValue > 0) {
				// adding delta to states
				current_Day += deltaValue;
				current_Week += deltaValue;
				current_Month += deltaValue;
				current_Year += (deltaValue / 1000);

				// saving states
				// new last total
				try {
					await this.setObjectNotExistsAsync(StatisticStates.TotalLastValue.statePath + '.' + StatisticStates.TotalLastValue.id, Object(StatisticStates.TotalLastValue.objectdefinition));
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setObjectNotExistsAsync(StatisticStates.TotalLastValue.statePath + \'.\' + StatisticStates.TotalLastValue.id, Object(StatisticStates.TotalLastValue.objectdefinition)) returned ERROR: ' + err);
				}
				try {
					await this.setStateAsync(StatisticStates.TotalLastValue.statePath + '.' + StatisticStates.TotalLastValue.id, { val: currentTotalValue, ack: true });
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setStateAsync(StatisticStates.TotalLastValue.statePath + \'.\' + StatisticStates.TotalLastValue.id, { val: currentTotalValue, ack: true }) returned ERROR: ' + err);
				}

				// new day total
				try {
					await this.setObjectNotExistsAsync(StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id, Object(StatisticStates.TotalDay.objectdefinition));
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setObjectNotExistsAsync(StatisticStates.TotalDay.statePath + \'.\' + StatisticStates.TotalDay.id, Object(StatisticStates.TotalDay.objectdefinition)) returned ERROR: ' + err);
				}
				try {
					await this.setStateAsync(StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id, { val: current_Day, ack: true });
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setStateAsync(StatisticStates.TotalDay.statePath + \'.\' + StatisticStates.TotalDay.id, { val: current_Day, ack: true }) returned ERROR: ' + err);
				}

				// new week total
				try {
					await this.setObjectNotExistsAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id, Object(StatisticStates.TotalWeek.objectdefinition));
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setObjectNotExistsAsync(StatisticStates.TotalWeek.statePath + \'.\' + StatisticStates.TotalWeek.id, Object(StatisticStates.TotalWeek.objectdefinition)) returned ERROR: ' + err);
				}
				try {
					await this.setStateAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id, { val: current_Week, ack: true });
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setStateAsync(StatisticStates.TotalWeek.statePath + \'.\' + StatisticStates.TotalWeek.id, { val: current_Week, ack: true }) returned ERROR: ' + err);
				}

				// new month total
				try {
					await this.setObjectNotExistsAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id, Object(StatisticStates.TotalMonth.objectdefinition));
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setObjectNotExistsAsync(StatisticStates.TotalMonth.statePath + \'.\' + StatisticStates.TotalMonth.id, Object(StatisticStates.TotalMonth.objectdefinition)) returned ERROR: ' + err);
				}
				try {
					await this.setStateAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id, { val: current_Month, ack: true });
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setStateAsync(StatisticStates.TotalMonth.statePath + \'.\' + StatisticStates.TotalMonth.id, { val: current_Month, ack: true }) returned ERROR: ' + err);
				}

				// new year total
				try {
					await this.setObjectNotExistsAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id, Object(StatisticStates.TotalYear.objectdefinition));
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setObjectNotExistsAsync(StatisticStates.TotalYear.statePath + \'.\' + StatisticStates.TotalYear.id, Object(StatisticStates.TotalYear.objectdefinition)) returned ERROR: ' + err);
				}
				try {
					await this.setStateAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id, { val: current_Year, ack: true });
				}
				catch (err) {
					this.log.error('updateStatistics() -> await this.setStateAsync(StatisticStates.TotalYear.statePath + \'.\' + StatisticStates.TotalYear.id, { val: current_Year, ack: true }) returned ERROR: ' + err);
				}
			}

			return true;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * here we calculate Water conductivity -> German water hardness
	 * @returns true or error
	 */
	async updateGermanWaterHardnes() {
		try {
			this.log.debug('calculating german water hardness ...');
			if ((_WaterConductivity === 0) || _WaterConductivity === null) { throw new Error('updateGermanWaterHardnes -> No valid water conductivity value'); }
			let german_hardnes = 0;

			if (_WaterConductivity_EC25 === 0) {
				// Water hardnes NOT temperatur compensated
				german_hardnes = parseFloat((_WaterConductivity * this.config.factor_german_water_hardnes).toFixed(2));
				if (valuesInfoMessages) { this.log.info('German water hardness: ' + german_hardnes + ' (NOT temperature compensated)'); }
			} else {
				// Water hardnes temperatur compensated
				german_hardnes = parseFloat((_WaterConductivity_EC25 * this.config.factor_german_water_hardnes).toFixed(2));
				if (valuesInfoMessages) { this.log.info('German water hardness: ' + german_hardnes + ' (Temperature compensated)'); }
			}

			this.log.debug('calculated german water hardness = ' + String(german_hardnes));
			// new last total
			try {
				await this.setObjectNotExistsAsync(calculatedStates.germanWaterHardness.statePath + '.' + calculatedStates.germanWaterHardness.id, Object(calculatedStates.germanWaterHardness.objectdefinition));
			}
			catch (err) {
				this.log.error('updateGermanWaterHardnes -> setObjectNotExistsAsync(calculatedStates.germanWaterHardness.statePath + \'.\' + calculatedStates.germanWaterHardness.id, Object(calculatedStates.germanWaterHardness.objectdefinition)) -> ERROR: ' + err);
			}

			try {
				await this.setStateAsync(calculatedStates.germanWaterHardness.statePath + '.' + calculatedStates.germanWaterHardness.id, { val: german_hardnes, ack: true });
			}
			catch (err) {
				this.log.error('updateGermanWaterHardnes -> setStateAsync(calculatedStates.germanWaterHardness.statePath + \'.\' + calculatedStates.germanWaterHardness.id, { val: german_hardnes, ack: true }) -> ERROR: ' + err);
			}
			return true;
		}
		catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * here we calculate Water temperature kompensated conductivity
	 * @returns true or error
	 */
	async updateEC25conductivity() {
		// The formula is:
		// EC25 = EC / (1 + 0.020 * (t - 25))
		// EC25: COnductivity at 25°C
		// EC: Measured conductivity at Temperature t
		// t: Temperature in °C
		try {
			if ((_WaterConductivity === 0) || _WaterConductivity === null) { throw new Error('updateEC25conductivity -> No valid water conductivity value'); }
			if ((_WaterTemperature === 0) || _WaterTemperature === null) { throw new Error('updateEC25conductivity -> No valid water temperature value'); }

			_WaterConductivity_EC25 = parseFloat((_WaterConductivity / (1 + 0.02 * (_WaterTemperature - 25))).toFixed(2));

			this.log.debug('EC25 conductivity = ' + String(_WaterConductivity_EC25));

			// Save Value
			try {
				await this.setObjectNotExistsAsync(calculatedStates.conductivityEC25.statePath + '.' + calculatedStates.conductivityEC25.id, Object(calculatedStates.conductivityEC25.objectdefinition));
			}
			catch (err) {
				this.log.error('updateEC25conductivity -> setObjectNotExistsAsync(calculatedStates.conductivityEC25.statePath + \'.\' + calculatedStates.conductivityEC25.id, Object(calculatedStates.conductivityEC25.objectdefinition)) -> ERROR: ' + err);
			}

			try {
				await this.setStateAsync(calculatedStates.conductivityEC25.statePath + '.' + calculatedStates.conductivityEC25.id, { val: _WaterConductivity_EC25, ack: true });
			}
			catch (err) {
				this.log.error('updateEC25conductivity -> setStateAsync(calculatedStates.conductivityEC25.statePath + \'.\' + calculatedStates.conductivityEC25.id, { val: EC25conductivity, ack: true }) -> ERROR: ' + err);
			}
			return true;
		}
		catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * reads out all Profiles, generates and/ore updates state objects
	 * @param {number} ProfileNumber - profile number
	 * @param {Object} stateID - DeviceParameter Object
	 * @param {JSON} value - JSON return value from Device eg {"getCND": "269"}
	 * @returns true or error
	 */
	async UpdateProfileState(ProfileNumber, stateID, value) {
		this.log.debug('async UpdateProfileState(ProfileNumber, stateID, value) stateID: ' + String(stateID) + ' Profile Nr.: ' + String(ProfileNumber) + ' value: ' + JSON.stringify(value));
		const parameterIDs = stateID.split('.');
		const parameter = (parameterIDs[parameterIDs.length - 1]).substr(0, parameterIDs[parameterIDs.length - 1].length - 1);
		this.log.debug('[UpdateProfileState(ProfileNumber, stateID, value)] Profilparameter =' + parameter);
		try {
			switch (parameter) {
				case 'PA':
					await this.state_profile_PA(ProfileNumber, value);
					break;
				case 'PN':
					await this.state_profile_PN(ProfileNumber, value);
					break;
				case 'PV':
					await this.state_profile_PV(ProfileNumber, value);
					break;
				case 'PT':
					await this.state_profile_PT(ProfileNumber, value);
					break;
				case 'PF':
					await this.state_profile_PF(ProfileNumber, value);
					break;
				case 'PM':
					await this.state_profile_PM(ProfileNumber, value);
					break;
				case 'PR':
					await this.state_profile_PR(ProfileNumber, value);
					break;
				case 'PB':
					await this.state_profile_PB(ProfileNumber, value);
					break;
				case 'PW':
					await this.state_profile_PW(ProfileNumber, value);
					break;
				default:
			}

			return true;
		} catch (err) {
			throw new Error(err.message);
		}
	}

	/**
	 * Pulls the Information from the device
	 * @param {Object} Parameter - DeviceParameter Object
	 * @returns Readed Value from Device (JSON Format) or ERROR
	 */
	async get_DevieParameter(Parameter) {
		// Flag indicating if we had to switch into SERVICE or FACTORY mode
		let readModeChanged = false;
		let skipp = false;
		this.log.debug(`[getDevieParameter(ParameterID)] ${Parameter.id}`);

		// is parameter readable?
		if (Parameter.readCommand === null) {
			this.log.warn('[async get_DevieParameter(Parameter)] Parameter ID ' + String(Parameter.id) + ' can\'t be read!');
			throw new Error('Parameter ID ' + String(Parameter.id) + ' can\'t be read!');
		}

		// Do we need special permission to read this parameter?
		if (Parameter.levelRead === 'SERVICE') {
			try {
				await this.set_SERVICE_Mode();
				readModeChanged = true;
			} catch (err) {
				this.log.error('get_DevieParameter -> set_SERVICE_Mode() ERROR: ' + err);
			}
		}
		else if (Parameter.levelRead === 'FACTORY') {
			try {
				await this.set_FACTORY_Mode();
				readModeChanged = true;
			} catch (err) {
				this.log.error('get_DevieParameter -> set_FACTORY_Mode() ERROR: ' + err);
			}
		}

		if ((String(Parameter.id) == 'CEL') && (sensor_temperature_present == false)) { skipp = true; }
		if ((String(Parameter.id) == 'BAR') && (sensor_pressure_present == false)) { skipp = true; }
		if ((String(Parameter.id) == 'CND') && (sensor_conductivity_present == false)) { skipp = true; }

		if (!skipp) {
			try {
				if (moreMessages) { this.log.info('Reading Parameter ' + String(Parameter.id) + ' from device'); }
				if (this.syrApiClient != null) {
					interfaceBusy = true;
					const deviceResponse = await this.syrApiClient.get('get/' + String(Parameter.id));
					interfaceBusy = false;
					interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
					if (deviceResponse.status === 200) {
						if (apiResponseInfoMessages) { this.log.info('syrApiClient response: ' + JSON.stringify(deviceResponse.data)); }
						if (readModeChanged) {
							try { await this.clear_SERVICE_FACTORY_Mode(); }
							catch (err) { this.log.error('async get_DevieParameter(Parameter) -> await this.clear_SERVICE_FACTORY_Mode() - ERROR: ' + err); }
						}
						return deviceResponse.data;
					}
					throw new Error('Error reading device parameter ' + String(Parameter.id) + ': response status: ' + String(deviceResponse.status) + ' ' + String(deviceResponse.statusText));
				}
				else {
					throw new Error('syrApiClient is not initialized!');
				}
			} catch (err) {
				// Reste interfaceBusy flag
				interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
				interfaceBusy = false;
				if (err.response) {
					// The request was made and the server responded with a status code
					this.log.error('async get_DevieParameter(Parameter): Response Code: ' + String(err.message));
				} else if (err.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js<div></div>
					this.log.error('async get_DevieParameter(Parameter): Request got no response: ' + err.message);
				} else {
					// Something happened in setting up the request that triggered an Error
					this.log.error('async get_DevieParameter(Parameter): Error: ' + err.message);
				}			//throw new Error(err.message);
				throw new Error(err.message);
			}
		} else {
			this.log.debug('Sensor ' + String(Parameter.id) + ' not present -> readout skipped');
			return null;
		}
	}

	/**
	 * Putts the a value to the Device
	 * @param {Object} Parameter - DeviceParameter Object
	 * @param {any} Value - Value to send to the device
	 * @returns axios response data OR error
	 */
	async set_DevieParameter(Parameter, Value) {

		let oldParameter = null;

		if (Parameter.readCommand != null) {
			oldParameter = await this.get_DevieParameter(Parameter);
		}
		// Flag indicating if we had to modifiy Admin Mode
		let writeModeChanged = false;

		this.log.debug(`[set_DevieParameter(Parameter, Value)] ${Parameter.id} Value: ${String(Value)}`);

		// is parameter writable?
		if (Parameter.writeCommand === null) {
			this.log.warn('[async set_DevieParameter(Parameter, Value)] Parameter ID ' + String(Parameter.id) + ' can not be written!');
			throw new Error('Parameter ID ' + String(Parameter.id) + ' can not be written!');
		}

		// Do we need special permission to write this parameter?
		if (Parameter.levelWrite === 'SERVICE') {
			try {
				await this.set_SERVICE_Mode();
				writeModeChanged = true;
			}
			catch (err) {
				this.log.error('async set_DevieParameter(Parameter, Value) -> await this.set_SERVICE_Mode() ERROR: ' + err);
			}
		}
		else if (Parameter.levelWrite === 'FACTORY') {
			try {
				await this.set_FACTORY_Mode();
				writeModeChanged = true;
			}
			catch (err) {
				this.log.error('async set_DevieParameter(Parameter, Value) -> await this.set_FACTORY_Mode() ERROR: ' + err);
			}
		}

		try {
			if (moreMessages) { this.log.info('Writing Parameter ' + String(Parameter.id) + ' value: ' + String(Value) + ' to device'); }

			if (this.syrApiClient != null) {
				interfaceBusy = true;
				const deviceResponse = await this.syrApiClient.get('set/' + String(Parameter.id) + '/' + String(Value));
				interfaceBusy = false;
				interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
				if (deviceResponse.status === 200) {
					if (apiResponseInfoMessages) { this.log.info('syrApiClient response: ' + JSON.stringify(deviceResponse.data)); }

					// did we have a problem?
					if ((JSON.stringify(deviceResponse.data)).includes('ERROR')) {
						try {
							// was there an old parameter we can restore?
							if (oldParameter != null) {
								this.log.warn('Restoring old content: ' + String(oldParameter['get' + Parameter.id]));
								await this.setStateAsync(Parameter.statePath + '.' + Parameter.id, { val: oldParameter, ack: true });
							}
						} catch (err) {
							this.log.error('async set_DevieParameter(Parameter, Value) -> await this.setStateAsync(Parameter.statePath + \'.\' + Parameter.id, { val: oldParameter, ack: true }); ERROR: ' + err);
						}
						throw new Error(('Error modifiing device parameter: ' + JSON.stringify(deviceResponse.data)));
					}
					else {
						// writing value ACKNOWLAGED back into state
						try {
							await this.setStateAsync(Parameter.statePath + '.' + Parameter.id, { val: Value, ack: true });
						} catch (err) {
							this.log.error('async set_DevieParameter(Parameter, Value) -> await this.setStateAsync(Parameter.statePath + \'.\' + Parameter.id, { val: Value, ack: true }) ERROR: ' + err);
						}
					}
					if (writeModeChanged) {
						try { await this.clear_SERVICE_FACTORY_Mode(); }
						catch (err) { this.log.error('async set_DevieParameter(Parameter) -> await this.clear_SERVICE_FACTORY_Mode() - ERROR: ' + err); }
					}
					return deviceResponse.data;
				}
				if (writeModeChanged) {
					try { await this.clear_SERVICE_FACTORY_Mode(); }
					catch (err) { this.log.error('async set_DevieParameter(Parameter) -> await this.clear_SERVICE_FACTORY_Mode() - ERROR: ' + err); }
				}

				throw new Error('Error reading device parameter ' + String(Parameter.id) + ': response status: ' + String(deviceResponse.status) + ' ' + String(deviceResponse.statusText));
			}
			else {
				throw new Error('syrApiClient is not initialized!');
			}
		} catch (err) {
			// Reset interfaceBusy Flag
			interfaceBusy = false;
			interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
			if (err.response) {
				// The request was made and the server responded with a status code
				this.log.error('async set_DevieParameter(Parameter): Response Code: ' + String(err.message));
			} else if (err.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js<div></div>
				this.log.error('async set_DevieParameter(Parameter): Request got no response: ' + err.message);
			} else {
				// Something happened in setting up the request that triggered an Error
				this.log.error('async set_DevieParameter(Parameter): Error: ' + err.message);
			}			//throw new Error(err.message);
			throw new Error(err.message);
		}
	}

	/**
	 * Pulls profile parameter data from the device
	 * @param {number} ProfileNumber - profile number
	 * @param {String} ParameterID - Profile parameter ID (without number)
	 * @returns Readed Value from Device (JSON Format) or ERROR
	 */
	async get_DevieProfileParameter(ProfileNumber, ParameterID) {
		this.log.debug(`[getDevieParameter(ParameterID)] ${ParameterID} Profile ${ProfileNumber}`);

		try {
			if (moreMessages) { this.log.info('Reading Profile Parameter: ' + ParameterID + String(ProfileNumber) + ' from device'); }
			if (this.syrApiClient != null) {
				interfaceBusy = true;
				const deviceResponse = await this.syrApiClient.get('get/' + ParameterID + String(ProfileNumber));
				interfaceBusy = false;
				interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
				if (deviceResponse.status === 200) {
					if (apiResponseInfoMessages) { this.log.info('syrApiClient response: ' + JSON.stringify(deviceResponse.data)); }
					return deviceResponse.data;
				}
				throw new Error('Error reading device parameter ' + ParameterID + String(ProfileNumber) + ': response status: ' + String(deviceResponse.status) + ' ' + String(deviceResponse.statusText));
			}
			else {
				throw new Error('syrApiClient is not initialized!');
			}
		} catch (err) {
			// Reset interfaceBusy Flag
			interfaceBusy = false;
			interfaceBusyCounter = 0;	// Counter of interfaceBusy Reqwuest reset
			if (err.response) {
				// The request was made and the server responded with a status code
				this.log.error('async get_DevieProfileParameter(ProfileNumber, ParameterID, IPadress, Port): Response Code: ' + String(err.message));
			} else if (err.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js<div></div>
				this.log.error('async get_DevieProfileParameter(ProfileNumber, ParameterID, IPadress, Port): Request got no response: ' + err.message);
			} else {
				// Something happened in setting up the request that triggered an Error
				this.log.error('async get_DevieProfileParameter(ProfileNumber, ParameterID, IPadress, Port): Error: ' + err.message);
			}			//throw new Error(err.message);
			throw new Error(err.message);
		}
	}

	/**
	 * sets AVAILABLE state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPAx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PA(ProfileNumber, value) {
		try {

			this.log.debug('async state_profile_PA(ProfileNumber, value) value: ' + JSON.stringify(value) + ' Profilnummer: ' + String(ProfileNumber));
			const profileAvailable = parseInt(String(value['getPA' + String(ProfileNumber)]));
			let crStaResult = null;
			let stStaResult = null;
			let currentStatePath = '';
			let currentstateObject = '';
			this.log.debug('async state_profile_PA(ProfileNumber, value) -> const profileAvailable = value[\'getPA\' + String(ProfileNumber)]; = ' + String(profileAvailable));

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PA1.statePath) + '.' + String(DeviceParameters.Profile_PA1.id);
					currentstateObject = Object(DeviceParameters.Profile_PA1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PA2.statePath) + '.' + String(DeviceParameters.Profile_PA2.id);
					currentstateObject = Object(DeviceParameters.Profile_PA2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PA3.statePath) + '.' + String(DeviceParameters.Profile_PA3.id);
					currentstateObject = Object(DeviceParameters.Profile_PA3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PA4.statePath) + '.' + String(DeviceParameters.Profile_PA4.id);
					currentstateObject = Object(DeviceParameters.Profile_PA4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PA5.statePath) + '.' + String(DeviceParameters.Profile_PA5.id);
					currentstateObject = Object(DeviceParameters.Profile_PA5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PA6.statePath) + '.' + String(DeviceParameters.Profile_PA6.id);
					currentstateObject = Object(DeviceParameters.Profile_PA6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PA7.statePath) + '.' + String(DeviceParameters.Profile_PA7.id);
					currentstateObject = Object(DeviceParameters.Profile_PA7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PA8.statePath) + '.' + String(DeviceParameters.Profile_PA8.id);
					currentstateObject = Object(DeviceParameters.Profile_PA8.objectdefinition);
					break;
				default:
					this.log.error('async state_profile_PA(ProfileNumber, value) -> switch (ProfileNumber) hit \'default:\'');
					break;
			}

			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileAvailable));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileAvailable, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) {
				if (profileAvailable == 1) { this.log.info('Profile ' + String(ProfileNumber) + ' is available'); }
				else { this.log.info('Profile ' + String(ProfileNumber) + ' is not available'); }
			}
			return true;
		} catch (err) {
			this.log.error('async state_profile_PA(ProfileNumber, value) ERROR: ' + err);
			throw new Error(err);
		}
	}

	/**
	 * sets NAME state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPNx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PN(ProfileNumber, value) {
		try {
			const profileName = String(value['getPN' + String(ProfileNumber)]);
			let crStaResult = null;
			let stStaResult = null;
			let currentStatePath = '';
			let currentstateObject = '';

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PN1.statePath) + '.' + String(DeviceParameters.Profile_PN1.id);
					currentstateObject = Object(DeviceParameters.Profile_PN1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PN2.statePath) + '.' + String(DeviceParameters.Profile_PN2.id);
					currentstateObject = Object(DeviceParameters.Profile_PN2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PN3.statePath) + '.' + String(DeviceParameters.Profile_PN3.id);
					currentstateObject = Object(DeviceParameters.Profile_PN3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PN4.statePath) + '.' + String(DeviceParameters.Profile_PN4.id);
					currentstateObject = Object(DeviceParameters.Profile_PN4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PN5.statePath) + '.' + String(DeviceParameters.Profile_PN5.id);
					currentstateObject = Object(DeviceParameters.Profile_PN5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PN6.statePath) + '.' + String(DeviceParameters.Profile_PN6.id);
					currentstateObject = Object(DeviceParameters.Profile_PN6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PN7.statePath) + '.' + String(DeviceParameters.Profile_PN7.id);
					currentstateObject = Object(DeviceParameters.Profile_PN7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PN8.statePath) + '.' + String(DeviceParameters.Profile_PN8.id);
					currentstateObject = Object(DeviceParameters.Profile_PN8.objectdefinition);
					break;
			}

			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileName));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileName, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) { this.log.info('Profile ' + String(ProfileNumber) + ' name is ' + profileName); }
			return true;
		} catch (err) {
			this.log.error(err.message);
			throw new Error(err);
		}
	}

	/**
	 * sets QUANTITY LIMITATION state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPVx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PV(ProfileNumber, value) {
		try {
			let currentStatePath = '';
			let crStaResult = null;
			let stStaResult = null;
			let currentstateObject = '';

			const profileQuantityLimitation = parseInt(String(value['getPV' + String(ProfileNumber)]));
			this.log.debug('async state_profile_PV(ProfileNumber, value) -> const profileQuantityLimitation = ' + String(profileQuantityLimitation));

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PV1.statePath) + '.' + String(DeviceParameters.Profile_PV1.id);
					currentstateObject = Object(DeviceParameters.Profile_PV1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PV2.statePath) + '.' + String(DeviceParameters.Profile_PV2.id);
					currentstateObject = Object(DeviceParameters.Profile_PV2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PV3.statePath) + '.' + String(DeviceParameters.Profile_PV3.id);
					currentstateObject = Object(DeviceParameters.Profile_PV3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PV4.statePath) + '.' + String(DeviceParameters.Profile_PV4.id);
					currentstateObject = Object(DeviceParameters.Profile_PV4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PV5.statePath) + '.' + String(DeviceParameters.Profile_PV5.id);
					currentstateObject = Object(DeviceParameters.Profile_PV5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PV6.statePath) + '.' + String(DeviceParameters.Profile_PV6.id);
					currentstateObject = Object(DeviceParameters.Profile_PV6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PV7.statePath) + '.' + String(DeviceParameters.Profile_PV7.id);
					currentstateObject = Object(DeviceParameters.Profile_PV7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PV8.statePath) + '.' + String(DeviceParameters.Profile_PV8.id);
					currentstateObject = Object(DeviceParameters.Profile_PV8.objectdefinition);
					break;
			}
			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileQuantityLimitation));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileQuantityLimitation, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) {
				if (profileQuantityLimitation == 0) { this.log.info('Profile ' + String(ProfileNumber) + ' maximum volume limit disabled'); }
				else { this.log.info('Profile ' + String(ProfileNumber) + ' maximum volume limit is ' + String(profileQuantityLimitation) + 'l'); }
			}
			return true;
		} catch (err) {
			this.log.error('async state_profile_PV(ProfileNumber, value) ERROR: ' + err);
			throw new Error(err);
		}
	}

	/**
	 * sets TIME LIMITATION state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPTx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PT(ProfileNumber, value) {
		try {
			let currentStatePath = '';
			let crStaResult = null;
			let stStaResult = null;
			let currentstateObject = '';

			const profileTimeLimitation = parseInt(String(value['getPT' + String(ProfileNumber)]));
			this.log.debug('async state_profile_PT(ProfileNumber, value) -> const profileTimeLimitation = ' + String(profileTimeLimitation));

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PT1.statePath) + '.' + String(DeviceParameters.Profile_PT1.id);
					currentstateObject = Object(DeviceParameters.Profile_PT1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PT2.statePath) + '.' + String(DeviceParameters.Profile_PT2.id);
					currentstateObject = Object(DeviceParameters.Profile_PT2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PT3.statePath) + '.' + String(DeviceParameters.Profile_PT3.id);
					currentstateObject = Object(DeviceParameters.Profile_PT3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PT4.statePath) + '.' + String(DeviceParameters.Profile_PT4.id);
					currentstateObject = Object(DeviceParameters.Profile_PT4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PT5.statePath) + '.' + String(DeviceParameters.Profile_PT5.id);
					currentstateObject = Object(DeviceParameters.Profile_PT5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PT6.statePath) + '.' + String(DeviceParameters.Profile_PT6.id);
					currentstateObject = Object(DeviceParameters.Profile_PT6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PT7.statePath) + '.' + String(DeviceParameters.Profile_PT7.id);
					currentstateObject = Object(DeviceParameters.Profile_PT7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PT8.statePath) + '.' + String(DeviceParameters.Profile_PT8.id);
					currentstateObject = Object(DeviceParameters.Profile_PT8.objectdefinition);
					break;
			}
			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileTimeLimitation));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileTimeLimitation, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) {
				if (profileTimeLimitation == 0) { this.log.info('Profile ' + String(ProfileNumber) + ' maximum time limit is disabled'); }
				else { this.log.info('Profile ' + String(ProfileNumber) + ' maximum time limit is ' + String(profileTimeLimitation) + 'min'); }
			}
			return true;
		} catch (err) {
			this.log.error(err.message);
			throw new Error(err);
		}
	}

	/**
	 * sets MAXIMUM FLOW state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPFx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PF(ProfileNumber, value) {
		try {
			let currentStatePath = '';
			let crStaResult = null;
			let stStaResult = null;
			let currentstateObject = '';
			const profileMaximumFlow = parseInt(String(value['getPF' + String(ProfileNumber)]));

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PF1.statePath) + '.' + String(DeviceParameters.Profile_PF1.id);
					currentstateObject = Object(DeviceParameters.Profile_PF1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PF2.statePath) + '.' + String(DeviceParameters.Profile_PF2.id);
					currentstateObject = Object(DeviceParameters.Profile_PF2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PF3.statePath) + '.' + String(DeviceParameters.Profile_PF3.id);
					currentstateObject = Object(DeviceParameters.Profile_PF3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PF4.statePath) + '.' + String(DeviceParameters.Profile_PF4.id);
					currentstateObject = Object(DeviceParameters.Profile_PF4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PF5.statePath) + '.' + String(DeviceParameters.Profile_PF5.id);
					currentstateObject = Object(DeviceParameters.Profile_PF5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PF6.statePath) + '.' + String(DeviceParameters.Profile_PF6.id);
					currentstateObject = Object(DeviceParameters.Profile_PF6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PF7.statePath) + '.' + String(DeviceParameters.Profile_PF7.id);
					currentstateObject = Object(DeviceParameters.Profile_PF7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PF8.statePath) + '.' + String(DeviceParameters.Profile_PF8.id);
					currentstateObject = Object(DeviceParameters.Profile_PF8.objectdefinition);
					break;
			}
			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileMaximumFlow));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileMaximumFlow, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) {
				if (profileMaximumFlow == 0) { this.log.info('Profile ' + String(ProfileNumber) + ' maximum flow is disabled'); }
				else { this.log.info('Profile ' + String(ProfileNumber) + ' maximum flow is ' + String(profileMaximumFlow) + 'l/h'); }
			}

			return true;
		} catch (err) {
			this.log.error(err.message);
			throw new Error(err);
		}
	}

	/**
	 * sets MICROLEAK DETECTION state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPMx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PM(ProfileNumber, value) {
		try {
			const profileMicroleackageDetection = parseInt(String(value['getPM' + String(ProfileNumber)]));
			let crStaResult = null;
			let stStaResult = null;
			let currentStatePath = '';
			let currentstateObject = '';

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PM1.statePath) + '.' + String(DeviceParameters.Profile_PM1.id);
					currentstateObject = Object(DeviceParameters.Profile_PM1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PM2.statePath) + '.' + String(DeviceParameters.Profile_PM2.id);
					currentstateObject = Object(DeviceParameters.Profile_PM2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PM3.statePath) + '.' + String(DeviceParameters.Profile_PM3.id);
					currentstateObject = Object(DeviceParameters.Profile_PM3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PM4.statePath) + '.' + String(DeviceParameters.Profile_PM4.id);
					currentstateObject = Object(DeviceParameters.Profile_PM4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PM5.statePath) + '.' + String(DeviceParameters.Profile_PM5.id);
					currentstateObject = Object(DeviceParameters.Profile_PM5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PM6.statePath) + '.' + String(DeviceParameters.Profile_PM6.id);
					currentstateObject = Object(DeviceParameters.Profile_PM6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PM7.statePath) + '.' + String(DeviceParameters.Profile_PM7.id);
					currentstateObject = Object(DeviceParameters.Profile_PM7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PM8.statePath) + '.' + String(DeviceParameters.Profile_PM8.id);
					currentstateObject = Object(DeviceParameters.Profile_PM8.objectdefinition);
					break;
				default:
					this.log.error('async state_profile_PM(ProfileNumber, value) -> switch (ProfileNumber) hit \'default:\'');
					break;
			}

			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileMicroleackageDetection));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileMicroleackageDetection, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) {
				if (profileMicroleackageDetection == 0) { this.log.info('Profile ' + String(ProfileNumber) + ' Microleak Detektion is disabled'); }
				else { this.log.info('Profile ' + String(ProfileNumber) + ' Microleak Detektion is enabled'); }
			}
			return true;
		} catch (err) {
			this.log.error('async state_profile_PM(ProfileNumber, value) ERROR: ' + err);
			throw new Error(err);
		}
	}

	/**
	 * sets RETURNE TIME TO STANDARD PROFILE state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPRx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PR(ProfileNumber, value) {
		try {
			let currentStatePath = '';
			let crStaResult = null;
			let stStaResult = null;
			let currentstateObject = '';
			const profileReturnTime = parseInt(String(value['getPR' + String(ProfileNumber)]));

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PR1.statePath) + '.' + String(DeviceParameters.Profile_PR1.id);
					currentstateObject = Object(DeviceParameters.Profile_PR1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PR2.statePath) + '.' + String(DeviceParameters.Profile_PR2.id);
					currentstateObject = Object(DeviceParameters.Profile_PR2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PR3.statePath) + '.' + String(DeviceParameters.Profile_PR3.id);
					currentstateObject = Object(DeviceParameters.Profile_PR3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PR4.statePath) + '.' + String(DeviceParameters.Profile_PR4.id);
					currentstateObject = Object(DeviceParameters.Profile_PR4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PR5.statePath) + '.' + String(DeviceParameters.Profile_PR5.id);
					currentstateObject = Object(DeviceParameters.Profile_PR5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PR6.statePath) + '.' + String(DeviceParameters.Profile_PR6.id);
					currentstateObject = Object(DeviceParameters.Profile_PR6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PR7.statePath) + '.' + String(DeviceParameters.Profile_PR7.id);
					currentstateObject = Object(DeviceParameters.Profile_PR7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PR8.statePath) + '.' + String(DeviceParameters.Profile_PR8.id);
					currentstateObject = Object(DeviceParameters.Profile_PR8.objectdefinition);
					break;
			}
			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileReturnTime));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileReturnTime, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) { this.log.info('Profile ' + String(ProfileNumber) + ' return time to default profile is ' + String(profileReturnTime) + 'h'); }

			return true;
		} catch (err) {
			this.log.error(err.message);
			throw new Error(err);
		}
	}

	/**
	 * sets BUZZER state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPRx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PB(ProfileNumber, value) {
		try {
			const profileBuzzer = parseInt(String(value['getPB' + String(ProfileNumber)]));
			let crStaResult = null;
			let stStaResult = null;
			let currentStatePath = '';
			let currentstateObject = '';

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PB1.statePath) + '.' + String(DeviceParameters.Profile_PB1.id);
					currentstateObject = Object(DeviceParameters.Profile_PB1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PB2.statePath) + '.' + String(DeviceParameters.Profile_PB2.id);
					currentstateObject = Object(DeviceParameters.Profile_PB2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PB3.statePath) + '.' + String(DeviceParameters.Profile_PB3.id);
					currentstateObject = Object(DeviceParameters.Profile_PB3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PB4.statePath) + '.' + String(DeviceParameters.Profile_PB4.id);
					currentstateObject = Object(DeviceParameters.Profile_PB4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PB5.statePath) + '.' + String(DeviceParameters.Profile_PB5.id);
					currentstateObject = Object(DeviceParameters.Profile_PB5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PB6.statePath) + '.' + String(DeviceParameters.Profile_PB6.id);
					currentstateObject = Object(DeviceParameters.Profile_PB6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PB7.statePath) + '.' + String(DeviceParameters.Profile_PB7.id);
					currentstateObject = Object(DeviceParameters.Profile_PB7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PB8.statePath) + '.' + String(DeviceParameters.Profile_PB8.id);
					currentstateObject = Object(DeviceParameters.Profile_PB7.objectdefinition);
					break;
			}


			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileBuzzer));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileBuzzer, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) {
				if (profileBuzzer == 1) { this.log.info('Profile ' + String(ProfileNumber) + ' buzzer is on'); }
				else { this.log.info('Profile ' + String(ProfileNumber) + ' buzzer is not on'); }
			}
			return true;
		} catch (err) {
			this.log.error(err.message);
			throw new Error(err);
		}
	}

	/**
	 * sets LEACKAGE WARNING state of Profile X
	 * @param {number} ProfileNumber - Profile number
	 * @param {JSON} value - Value from Device eg {"getPWx": "x"}
	 * @returns true OR error
	 */
	async state_profile_PW(ProfileNumber, value) {
		try {
			const profileLeackageWarning = parseInt(String(value['getPW' + String(ProfileNumber)]));
			let crStaResult = null;
			let stStaResult = null;
			let currentStatePath = '';
			let currentstateObject = '';

			switch (ProfileNumber) {
				case 1:
					currentStatePath = String(DeviceParameters.Profile_PW1.statePath) + '.' + String(DeviceParameters.Profile_PW1.id);
					currentstateObject = Object(DeviceParameters.Profile_PW1.objectdefinition);
					break;
				case 2:
					currentStatePath = String(DeviceParameters.Profile_PW2.statePath) + '.' + String(DeviceParameters.Profile_PW2.id);
					currentstateObject = Object(DeviceParameters.Profile_PW2.objectdefinition);
					break;
				case 3:
					currentStatePath = String(DeviceParameters.Profile_PW3.statePath) + '.' + String(DeviceParameters.Profile_PW3.id);
					currentstateObject = Object(DeviceParameters.Profile_PW3.objectdefinition);
					break;
				case 4:
					currentStatePath = String(DeviceParameters.Profile_PW4.statePath) + '.' + String(DeviceParameters.Profile_PW4.id);
					currentstateObject = Object(DeviceParameters.Profile_PW4.objectdefinition);
					break;
				case 5:
					currentStatePath = String(DeviceParameters.Profile_PW5.statePath) + '.' + String(DeviceParameters.Profile_PW5.id);
					currentstateObject = Object(DeviceParameters.Profile_PW5.objectdefinition);
					break;
				case 6:
					currentStatePath = String(DeviceParameters.Profile_PW6.statePath) + '.' + String(DeviceParameters.Profile_PW6.id);
					currentstateObject = Object(DeviceParameters.Profile_PW6.objectdefinition);
					break;
				case 7:
					currentStatePath = String(DeviceParameters.Profile_PW7.statePath) + '.' + String(DeviceParameters.Profile_PW7.id);
					currentstateObject = Object(DeviceParameters.Profile_PW7.objectdefinition);
					break;
				case 8:
					currentStatePath = String(DeviceParameters.Profile_PW8.statePath) + '.' + String(DeviceParameters.Profile_PW8.id);
					currentstateObject = Object(DeviceParameters.Profile_PW8.objectdefinition);
					break;
				default:
					this.log.error('async state_profile_PA(ProfileNumber, value) -> switch (ProfileNumber) hit \'default:\'');
					break;
			}

			this.log.debug('State path before setStateAsync = ' + currentStatePath);
			this.log.debug('Value before setStateAsync = ' + String(profileLeackageWarning));

			crStaResult = await this.setObjectNotExistsAsync(currentStatePath, Object(currentstateObject));
			this.log.debug('result from setObjectNotExistsAsync = ' + JSON.stringify(crStaResult));

			stStaResult = await this.setStateAsync(currentStatePath, { val: profileLeackageWarning, ack: true });
			this.log.debug('result from setStateAsync = ' + JSON.stringify(stStaResult));

			// update RAW state
			this.setStateAsync(adapterChannels.DeviceRawData.path + '.' + currentStatePath.substring(currentStatePath.lastIndexOf('.') + 1, currentStatePath.length - 1) + String(ProfileNumber), { val: JSON.stringify(value), ack: true });

			if (valuesInfoMessages) {
				if (profileLeackageWarning == 0) { this.log.info('Profile ' + String(ProfileNumber) + ' Leakage Warning disabled'); }
				else { this.log.info('Profile ' + String(ProfileNumber) + ' Leakage Warning is enabled'); }
			}
			return true;
		} catch (err) {
			this.log.error(err.message);
			throw new Error(err);
		}
	}
}

/**
 * Timer event handler
 * [alarm]
 */
async function alarm_poll() {
	try {
		await myAdapter.alarm_TimerTick();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Timer event handler
 * [short]
 */
async function short_poll() {
	try {
		await myAdapter.short_TimerTick();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Timer event handler
 * [long]
 */
async function long_poll() {
	try {
		await myAdapter.long_TimerTick();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Timer event handler
 * [very long]
 */
async function very_long_poll() {
	try {
		await myAdapter.very_long_TimerTick();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Cron event handler
 * [daily]
 */
async function cron_poll_day() {
	try {
		await myAdapter.alarm_cron_day_Tick();
	} catch (err) {
		//throw new Error(err);
	}

}

/**
 * Cron event handler
 * [weekly]
 */
async function cron_poll_week() {
	try {
		await myAdapter.alarm_cron_week_Tick();
	} catch (err) {
		//throw new Error(err);
	}

}

/**
 * Cron event handler
 * [monthly]
 */
async function cron_poll_month() {
	try {
		await myAdapter.alarm_cron_month_Tick();
	} catch (err) {
		//throw new Error(err);
	}

}

/**
 * Cron event handler
 * [yearly]
 */
async function cron_poll_year() {
	try {
		await myAdapter.alarm_cron_year_Tick();
	} catch (err) {
		//throw new Error(err);
	}

}

/**
 * Cron event handler
 * [jam protection]
 */
async function cron_poll_jam_protection() {
	try {
		await myAdapter.alarm_corn_jam_protection_Tick();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Cron event handler
 * [Floor Sensors 1 loop]
 */
async function cron_poll_FloorSensor_1() {
	try {
		await myAdapter.alarm_cron_FloorSensor_Tick_1();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Cron event handler
 * [Floor Sensors 2 loop]
 */
async function cron_poll_FloorSensor_2() {
	try {
		await myAdapter.alarm_cron_FloorSensor_Tick_2();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Cron event handler
 * [Floor Sensors 3 loop]
 */
async function cron_poll_FloorSensor_3() {
	try {
		await myAdapter.alarm_cron_FloorSensor_Tick_3();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Cron event handler
 * [Floor Sensors 4 loop]
 */
async function cron_poll_FloorSensor_4() {
	try {
		await myAdapter.alarm_cron_FloorSensor_Tick_4();
	} catch (err) {
		//throw new Error(err);
	}
}

/**
 * Cron event handler
 * [Testing loop]
 */
async function cron_poll_TestingLoop() {
	try {
		await myAdapter.alarm_corn_TestingLoop_Tick();
	} catch (err) {
		//throw new Error(err);
	}
}

//===================================================

if (require.main !== module) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new wamo(options);
} else {
	// otherwise start the instance directly
	new wamo();
}


