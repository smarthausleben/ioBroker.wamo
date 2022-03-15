'use strict';

/*
 * Created with @iobroker/create-adapter v2.1.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const axios = require('axios');

const adapterName = require('./package.json').name.split('.').pop();


let short_Intervall_ID;

let long_Intervall_ID;


//============================================================================
//=== Funktionen um die Antwortzeiten des HTTP Requests zu ermitteln       ===
//============================================================================
axios.interceptors.request.use(x => {
	x.meta = x.meta || {};
	x.meta.requestStartedAt = new Date().getTime();
	return x;
});

axios.interceptors.response.use(x => {
	x.responseTime = new Date().getTime() - x.config.meta.requestStartedAt;
	return x;
});
//============================================================================


// Load your modules here, e.g.:
// const fs = require("fs");

// ein Kommentar von mir

class Leackagedect extends utils.Adapter {

	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: adapterName,
		});

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
		this.log.info('config Device IP: ' + this.config.device_ip);
		this.log.info('config Device Port: ' + this.config.device_port);

		// Device Initialisation
		this.log.debug('vor initDevice()');
		try {
			const response = await this.initDevice(this.config.device_ip, this.config.device_port);
			this.log.debug(`[initDevice] testfunktionAs() Response:  ${response}`);
		}
		catch (err) {
			this.log.debug(`[initDevice] error: ${err}`);
		}
		this.log.debug('nach initDevice()');


		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/
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

		// In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
		this.subscribeStates('testVariable');
		// You can also add a subscription for multiple states. The following line watches all states starting with "lights."
		// this.subscribeStates('lights.*');
		// Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
		// this.subscribeStates('*');

		/*
			setState examples
			you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		await this.setStateAsync('testVariable', true);

		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		await this.setStateAsync('testVariable', { val: true, ack: true });

		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		await this.setStateAsync('testVariable', { val: true, ack: true, expire: 30 });

		// examples for the checkPassword/checkGroup functions
		let result = await this.checkPasswordAsync('admin', 'iobroker');
		this.log.info('check user admin pw iobroker: ' + result);

		result = await this.checkGroupAsync('admin', 'admin');
		this.log.info('check group user admin group admin: ' + result);

		this.log.info('Adapter wurde gestartet');

		if (false) {
			this.log.debug('vor init Timer');
			// Die Timer für das Polling starten
			short_Intervall_ID = this.setInterval(this.short_poll, parseInt(this.config.device_short_poll_interval) * 1000);
			this.log.debug('short_Intervall_ID: ' + String(short_Intervall_ID));
			long_Intervall_ID = this.setInterval(this.long_poll, parseInt(this.config.device_long_poll_interval) * 1000);
			this.log.debug('long_Intervall_ID: ' + String(long_Intervall_ID));
			this.log.debug('nach init Timer');
		} else {
			await this.Test_short();
			await this.Test_long();
		}
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...
			clearInterval(short_Intervall_ID);
			clearInterval(long_Intervall_ID);

			callback();
		} catch (e) {
			callback();
		}
	}

	// If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
	// You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
	// /**
	//  * Is called if a subscribed object changes
	//  * @param {string} id
	//  * @param {ioBroker.Object | null | undefined} obj
	//  */
	// onObjectChange(id, obj) {
	// 	if (obj) {
	// 		// The object was changed
	// 		this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
	// 	} else {
	// 		// The object was deleted
	// 		this.log.info(`object ${id} deleted`);
	// 	}
	// }

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

	// If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.messagebox" property to be set to true in io-package.json
	//  * @param {ioBroker.Message} obj
	//  */
	// onMessage(obj) {
	// 	if (typeof obj === 'object' && obj.message) {
	// 		if (obj.command === 'send') {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info('send command');

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
	// 		}
	// 	}
	// }


	async short_poll() {
		await this.Test_short();
	}

	async long_poll() {
		await this.Test_long();
	}

	async Test_short() {
		return new Promise(async (resolve, reject) => {

			this.log.debug('Trigger SHORT polling');
			this.setInterval(this.Test_long, 10000);
			try {
				resolve('Ok');
			} catch (err) {
				reject(err);
			}
		});

	}

	async Test_long() {
		return new Promise(async (resolve, reject) => {

			this.log.debug('Trigger LONG polling');
			try {
				resolve('Ok');
			} catch (err) {
				reject(err);
			}
		});

	}

	async initDevice(DeviceIP, DevicePort) {
		return new Promise(async (resolve, reject) => {

			const listOfParameter = [
				'Device.Info.VER',
				'Device.Info.WIP',
				'Device.Info.MAC',
				'Device.Info.WGW',
				'Device.Info.SRN',
				'Device.Info.CNO',
				'Device.Info.WFR',
				'Device.Info.WFC',
				'Device.Info.SRV',
				'Device.Info.WAH',
				'Device.Info.WAD',
				'Device.Info.APT',
				'Device.Info.DWL',
				'Device.Info.WFS',
				'Device.Info.BAT',
				'Device.Info.IDS'];

			this.log.debug(`[initDevice()]`);
			let result;
			try {
				for (const stateID of listOfParameter) {
					const parameterIDs = stateID.split('.');
					this.log.debug('current Parameter ID: ' + parameterIDs[parameterIDs.length - 1]);
					result = await this.get_DevieParameter(parameterIDs[parameterIDs.length - 1], DeviceIP, DevicePort);
					this.log.debug('[' + parameterIDs[parameterIDs.length - 1] + '] : ' + String(JSON.stringify(result)));
					await this.UpdateState(stateID, result);
				}
				resolve('Ok');
			} catch (err) {
				reject(err);
			}
		});
	}

	async UpdateState(stateID, value) {
		return new Promise(async (resolve, reject) => {

			try {
				switch (stateID) {
					case 'Device.Info.VER':
						await this.state_VER(value);
						break;
					case 'Device.Info.WIP':
						await this.state_WIP(value);
						break;
					case 'Device.Info.MAC':
						await this.state_MAC(value);
						break;
					case 'Device.Info.WGW':
						await this.state_WGW(value);
						break;
					case 'Device.Info.SRN':
						await this.state_SRN(value);
						break;
					case 'Device.Info.CNO':
						await this.state_CNO(value);
						break;
					case 'Device.Info.WFR':
						await this.state_WFR(value);
						break;
					case 'Device.Info.WFC':
						await this.state_WFC(value);
						break;
					case 'Device.Info.SRV':
						await this.state_SRV(value);
						break;
					case 'Device.Info.WAH':
						await this.state_WAH(value);
						break;
					case 'Device.Info.WAD':
						await this.state_WAD(value);
						break;
					case 'Device.Info.APT':
						await this.state_APT(value);
						break;
					case 'Device.Info.DWL':
						await this.state_DWL(value);
						break;
					case 'Device.Info.WFS':
						await this.state_WFS(value);
						break;
					case 'Device.Info.BAT':
						await this.state_BAT(value);
						break;
					case 'Device.Info.IDS':
						await this.state_IDS(value);
						break;
				}

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_VER(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.VER';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Device Firmware Version',
							de: 'Gerät Firmware Version'
						},
						type: 'string',
						role: 'info.firmware',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getVER, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_WIP(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.WIP';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Device IP Address',
							de: 'Gerät IP-Adresse'
						},
						type: 'string',
						role: 'info.ip',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getWIP, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_MAC(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.MAC';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Device MAC Address',
							de: 'Gerät MAC-Adresse'
						},
						type: 'string',
						role: 'info.mac',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getMAC, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_WGW(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.WGW';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Device Default Gateway',
							de: 'Gerät Standard Gateway'
						},
						type: 'string',
						role: 'info.gateway',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getWGW, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_SRN(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.SRN';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Device Serial Number',
							de: 'Gerät Seriennummer'
						},
						type: 'string',
						role: 'info.serial',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getSRN, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_CNO(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.CNO';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Device Code Number',
							de: 'Gerät Code Nummer'
						},
						type: 'string',
						role: 'info.code',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getCNO, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_WFR(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.WFR';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'WiFi RSSI',
							de: 'WLAN RSSI'
						},
						type: 'string',
						role: 'info.rssi',
						unit: '%',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getWFR, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_WFC(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.WFC';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'WiFi SSID',
							de: 'WLAN SSID'
						},
						type: 'string',
						role: 'info.ssid',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getWFC, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_WFS(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.WFS';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'WiFi State',
							de: 'WLAN Status'
						},
						type: 'string',
						role: 'info.wifistate',
						read: true,
						write: false
					},
					native: {}
				});
				if (String(value.getWFS) == '0') {
					this.setStateAsync(state_ID, { val: 'disconected', ack: true });
				} else if (String(value.getWFS) == '1') {
					this.setStateAsync(state_ID, { val: 'connecting', ack: true });
				} else if (String(value.getWFS) == '2') {
					this.setStateAsync(state_ID, { val: 'connected', ack: true });
				} else {
					this.setStateAsync(state_ID, { val: 'undefined', ack: true });
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_SRV(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.SRV';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Next Maintenance',
							de: 'Nächster Service'
						},
						type: 'string',
						role: 'info.service',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getSRV, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_WAH(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.WAH';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'WiFi AP hidden',
							de: 'WLAN AP versteckt'
						},
						type: 'boolean',
						role: 'info.wifihidden',
						read: true,
						write: false
					},
					native: {}
				});
				if (value.getWAH == '0') {
					this.setStateAsync(state_ID, { val: false, ack: true });
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_WAD(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.WAD';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'WiFi AP disabled',
							de: 'WLAN AP deaktiviert'
						},
						type: 'boolean',
						role: 'info.wifidisabled',
						read: true,
						write: false
					},
					native: {}
				});
				if (String(value.getWAD) == '0') {
					this.setStateAsync(state_ID, { val: false, ack: true });
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_APT(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.APT';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'WiFi AP timeout',
							de: 'WLAN AP timeout'
						},
						type: 'string',
						role: 'info.wifitimeout',
						unit: 's',
						read: true,
						write: false
					},
					native: {}
				});
				if (parseFloat(value.getAPT) > 0) {
					this.setStateAsync(state_ID, { val: value.getAPT, ack: true });
				}
				else {
					this.setStateAsync(state_ID, { val: 'disabled', ack: true });
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_DWL(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.DWL';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'WiFi deactivate',
							de: 'WLAN deaktivieren'
						},
						type: 'boolean',
						role: 'info.wifideaktivate',
						read: true,
						write: false
					},
					native: {}
				});
				if (String(value.getDWL) == '0') {
					this.setStateAsync(state_ID, { val: false, ack: true });
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_BAT(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.BAT';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Battery Voltage',
							de: 'Batteriespannung'
						},
						type: 'string',
						role: 'info.batteryvoltage',
						unit: 'V',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getBAT, ack: true });
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_IDS(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.IDS';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Daylight saving Time enabled',
							de: 'Sommerzeitumschaltung aktieviert'
						},
						type: 'boolean',
						role: 'info.daylightsavingenabled',
						read: true,
						write: false
					},
					native: {}
				});
				if (String(value.getIDS) == '0') {
					this.setStateAsync(state_ID, { val: false, ack: true });
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async get_DevieParameter(ParameterID, IPadress, Port) {
		return new Promise(async (resolve, reject) => {

			this.log.debug(`[getDevieParameter(ParameterID)] ${ParameterID}`);

			axios({
				method: 'get', url: 'Http://' + String(IPadress) + ':' + String(Port) + '/safe-tec/get/' + String(ParameterID), timeout: 10000, responseType: 'json'
			}
			).then(async (response) => {
				const content = response.data;
				this.log.debug(`[getSensorData] local request done after ${response.responseTime / 1000}s - received data (${response.status}): ${JSON.stringify(content)}`);

				resolve(response.data);
			}
			).catch(async (error) => {
				if (error.response) {
					// The request was made and the server responded with a status code

					this.log.warn(`Warnmeldung`);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js<div></div>
					this.log.info(error.message);
				} else {
					// Something happened in setting up the request that triggered an Error
					this.log.info(error.message);
				}
				reject('http error');
			});

		});
	}

	async fillSensorData(deviceId, sensor) {
		return new Promise(async (resolve, reject) => {

			if (!sensor.identifier) {
				reject('sensor type and/or sensor identifier not defined');
			}

			if (!deviceId) {
				reject('DeviceId is empty. Check configuration.');
			}

			const sensorType = sensor.type;
			const sensorName = (sensor.name === '') ? sensor.identifier : sensor.name;
			const path = deviceId + '.';

			this.log.debug(`[getSensorData] sensor "${sensorName}" with type: "${sensorType}", identifier: "${sensor.identifier}", deviceId: "${deviceId}"`);

			const unitList = {
				P1: 'µg/m³',
				P2: 'µg/m³',
				temperature: '°C',
				humidity: '%',
				pressure: 'Pa',
				pressure_at_sealevel: 'Pa',
				noise: 'dB(A)',
				signal: 'dB(A)',
				min_micro: 'µs',
				max_micro: 'µs'
			};

			const roleList = {
				P1: 'value.ppm',
				P2: 'value.ppm',
				temperature: 'value.temperature',
				humidity: 'value.humidity',
				pressure: 'value.pressure',
				pressure_at_sealevel: 'value.pressure',
				noise: 'value',
				signal: 'value',
				min_micro: 'value',
				max_micro: 'value'
			};

			await this.setObjectNotExistsAsync(deviceId, {
				type: 'device',
				common: {
					name: sensorName
				},
				native: {}
			});

			await this.extendObjectAsync(deviceId, {
				common: {
					name: sensorName
				}
			});

			await this.setObjectNotExistsAsync(path + 'name', {
				type: 'state',
				common: {
					name: {
						en: 'Sensor name',
						de: 'Sensorname',
						ru: 'Имя датчика',
						pt: 'Nome do sensor',
						nl: 'Sensornaam',
						fr: 'Nom du capteur',
						it: 'Nome del sensore',
						es: 'Nombre del sensor',
						pl: 'Nazwa czujnika',
						'zh-cn': '传感器名称'
					},
					type: 'string',
					role: 'text',
					read: true,
					write: false
				},
				native: {}
			});
			await this.setStateAsync(path + 'name', { val: sensorName, ack: true });

			await this.setObjectNotExistsAsync(path + 'responseCode', {
				type: 'state',
				common: {
					name: {
						en: 'Response Code',
						de: 'Antwortcode',
						ru: 'Код ответа',
						pt: 'Código de resposta',
						nl: 'Reactiecode',
						fr: 'Code de réponse',
						it: 'Codice di risposta',
						es: 'Código de respuesta',
						pl: 'Kod odpowiedzi',
						'zh-cn': '响应代码'
					},
					type: 'number',
					role: 'value',
					read: true,
					write: false
				},
				native: {}
			});

			if (sensorType == 'local') {
				const sensorUrl = `https://${sensor.identifier}/data.json`;

				this.log.debug(`[getSensorData] local request started (timeout ${this.config.requestTimeout}s): ${sensorUrl}`);

				axios({
					method: 'get',
					url: sensorUrl,
					timeout: this.config.requestTimeout * 1000,
					responseType: 'json'
				}).then(async (response) => {
					const content = response.data;

					this.log.debug(`[getSensorData] local request done after ${response.responseTime / 1000}s - received data (${response.status}): ${JSON.stringify(content)}`);

					await this.setStateAsync(path + 'responseCode', { val: response.status, ack: true });

					if (content && Object.prototype.hasOwnProperty.call(content, 'sensordatavalues')) {
						for (const key in content.sensordatavalues) {
							const obj = content.sensordatavalues[key];

							let unit = null;
							let role = 'value';

							if (obj.value_type.indexOf('SDS_') == 0) {
								unit = 'µg/m³';
								role = 'value.ppm';
							} else if (obj.value_type.indexOf('temperature') >= 0) {
								unit = '°C';
								role = 'value.temperature';
							} else if (obj.value_type.indexOf('humidity') >= 0) {
								unit = '%';
								role = 'value.humidity';
							} else if (obj.value_type.indexOf('pressure') >= 0) {
								unit = 'Pa';
								role = 'value.pressure';
							} else if (obj.value_type.indexOf('noise') >= 0) {
								unit = 'dB(A)';
								role = 'value';
							} else if (Object.prototype.hasOwnProperty.call(unitList, obj.value_type)) {
								unit = unitList[obj.value_type];
								role = roleList[obj.value_type];
							}

							await this.setObjectNotExistsAsync(path + obj.value_type, {
								type: 'state',
								common: {
									name: obj.value_type,
									type: 'number',
									role: role,
									unit: unit,
									read: true,
									write: false
								},
								native: {}
							});
							await this.setStateAsync(path + obj.value_type, { val: parseFloat(obj.value), ack: true });
						}
					}

					resolve(response.responseTime);
				}).catch(async (error) => {
					if (error.response) {
						// The request was made and the server responded with a status code

						this.log.warn(`[getSensorData] received error ${error.response.status} response from local sensor ${sensor.identifier} with content: ${JSON.stringify(error.response.data)}`);
						await this.setStateAsync(path + 'responseCode', { val: error.response.status, ack: true });
					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js<div></div>
						this.log.info(error.message);
						await this.setStateAsync(path + 'responseCode', -1, true);
					} else {
						// Something happened in setting up the request that triggered an Error
						this.log.info(error.message);
						await this.setStateAsync(path + 'responseCode', -99, true);
					}

					reject('http error');
				});

			} else if (sensorType == 'remote') {
				const sensorUrl = `https://data.sensor.community/airrohr/v1/sensor/${sensor.identifier.replace(/\D/g, '')}/`;

				this.log.debug(`[getSensorData] remote request started (timeout ${this.config.requestTimeout}s): ${sensorUrl}`);

				axios({
					method: 'get',
					url: sensorUrl,
					timeout: this.config.requestTimeout * 1000,
					responseType: 'json'
				}).then(async (response) => {
					const content = response.data;

					this.log.debug(`[getSensorData] remote request done after ${response.responseTime / 1000}s - received data (${response.status}): ${JSON.stringify(content)}`);

					await this.setStateAsync(path + 'responseCode', { val: response.status, ack: true });

					if (content && Array.isArray(content) && content.length > 0) {
						const sensorData = content[0];

						if (sensorData && Object.prototype.hasOwnProperty.call(sensorData, 'sensordatavalues')) {
							for (const key in sensorData.sensordatavalues) {
								const obj = sensorData.sensordatavalues[key];

								let unit = null;
								let role = 'value';

								if (obj.value_type.indexOf('noise') >= 0) {
									unit = 'dB(A)';
									role = 'value';
								} else if (Object.prototype.hasOwnProperty.call(unitList, obj.value_type)) {
									unit = unitList[obj.value_type];
									role = roleList[obj.value_type];
								}

								await this.setObjectNotExistsAsync(path + 'SDS_' + obj.value_type, {
									type: 'state',
									common: {
										name: obj.value_type,
										type: 'number',
										role: role,
										unit: unit,
										read: true,
										write: false
									},
									native: {}
								});
								await this.setStateAsync(path + 'SDS_' + obj.value_type, { val: parseFloat(obj.value), ack: true });
							}
						}

						if (Object.prototype.hasOwnProperty.call(sensorData, 'location')) {
							await this.setObjectNotExistsAsync(path + 'location', {
								type: 'channel',
								common: {
									name: {
										en: 'Location',
										de: 'Standort',
										ru: 'Место нахождения',
										pt: 'Localização',
										nl: 'Plaats',
										fr: 'Emplacement',
										it: 'Posizione',
										es: 'Localización',
										pl: 'Lokalizacja',
										'zh-cn': '地点'
									},
									role: 'value.gps'
								},
								native: {}
							});

							await this.setObjectNotExistsAsync(path + 'location.longitude', {
								type: 'state',
								common: {
									name: {
										en: 'Longtitude',
										de: 'Längengrad',
										ru: 'Долгота',
										pt: 'Longitude',
										nl: 'lengtegraad',
										fr: 'Longitude',
										it: 'longitudine',
										es: 'Longitud',
										pl: 'Długość geograficzna',
										'zh-cn': '经度'
									},
									type: 'number',
									role: 'value.gps.longitude',
									unit: '°',
									read: true,
									write: false
								},
								native: {}
							});
							await this.setStateAsync(path + 'location.longitude', { val: parseFloat(sensorData.location.longitude), ack: true });

							await this.setObjectNotExistsAsync(path + 'location.latitude', {
								type: 'state',
								common: {
									name: {
										en: 'Latitude',
										de: 'Breite',
										ru: 'Широта',
										pt: 'Latitude',
										nl: 'Breedtegraad',
										fr: 'Latitude',
										it: 'Latitudine',
										es: 'Latitud',
										pl: 'Szerokość',
										'zh-cn': '纬度'
									},
									type: 'number',
									role: 'value.gps.latitude',
									unit: '°',
									read: true,
									write: false
								},
								native: {}
							});
							await this.setStateAsync(path + 'location.latitude', { val: parseFloat(sensorData.location.latitude), ack: true });

							await this.setObjectNotExistsAsync(path + 'location.altitude', {
								type: 'state',
								common: {
									name: {
										en: 'Altitude',
										de: 'Höhe',
										ru: 'Высота',
										pt: 'Altitude',
										nl: 'Hoogte',
										fr: 'Altitude',
										it: 'Altitudine',
										es: 'Altitud',
										pl: 'Wysokość',
										'zh-cn': '高度'
									},
									type: 'number',
									role: 'value.gps.elevation',
									unit: 'm',
									read: true,
									write: false
								},
								native: {}
							});
							await this.setStateAsync(path + 'location.altitude', { val: parseFloat(sensorData.location.altitude), ack: true });

							await this.setObjectNotExistsAsync(path + 'timestamp', {
								type: 'state',
								common: {
									name: {
										en: 'Last Update',
										de: 'Letztes Update',
										ru: 'Последнее обновление',
										pt: 'Última atualização',
										nl: 'Laatste update',
										fr: 'Dernière mise à jour',
										it: 'Ultimo aggiornamento',
										es: 'Última actualización',
										pl: 'Ostatnia aktualizacja',
										'zh-cn': '最后更新'
									},
									type: 'number',
									role: 'date',
									read: true,
									write: false
								},
								native: {}
							});
							await this.setStateAsync(path + 'timestamp', { val: new Date(sensorData.timestamp).getTime(), ack: true });
						}
					}

					resolve(response.responseTime);
				}).catch(async (error) => {
					if (error.response) {
						// The request was made and the server responded with a status code

						this.log.warn(`[getSensorData] received error ${error.response.status} response from remote sensor ${sensor.identifier} with content: ${JSON.stringify(error.response.data)}`);
						await this.setStateAsync(path + 'responseCode', { val: error.response.status, ack: true });
					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js
						this.log.info(error.message);
						await this.setStateAsync(path + 'responseCode', -1, true);
					} else {
						// Something happened in setting up the request that triggered an Error
						this.log.info(error.message);
						await this.setStateAsync(path + 'responseCode', -99, true);
					}

					reject('http error');
				});
			} else {
				reject('unknown sensor type');
			}
		});
	}


}
if (require.main !== module) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new Leackagedect(options);
} else {
	// otherwise start the instance directly
	new Leackagedect();
}


