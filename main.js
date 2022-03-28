'use strict';

/*
 * Created with @iobroker/create-adapter v2.1.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const axios = require('axios');

const adapterName = require('./package.json').name.split('.').pop();

//Reference to my own adapter
let myAdapter;

// Variable for Timer IDs
let alarm_Intervall_ID;
let short_Intervall_ID;
let long_Intervall_ID;

let device_responsive = false;
let interfaceBussy;

// number of connection attemts before throwing an error and exiting
const connectionRetrys = 5;
const connectionRetryPause = 3000;

// Object all possible device commands
const DeviceParameters = {
	CurrentValveStatus: {
		id: 'VLV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Current valve status',
					'de': 'Aktueller Ventilstatus',
					'ru': 'Текущее состояние клапана',
					'pt': 'Status atual da válvula',
					'nl': 'Huidige klepstatus',
					'fr': 'État actuel de la vanne',
					'it': 'Stato attuale della valvola',
					'es': 'Estado actual de la válvula',
					'pl': 'Aktualny stan zaworu',
					'zh-cn': '当前阀门状态'
				},
				type: 'string',
				role: 'info.code',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: 'Device.Device-Conditions',
		levelRead: 'SERVICE',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	CurrentAlarmStatus: {
		id: 'ALA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Ongoing alarm',
					'de': 'Laufender Alarm',
					'ru': 'Текущая тревога',
					'pt': 'Alarme contínuo',
					'nl': 'Lopend alarm',
					'fr': 'Alarme en cours',
					'it': 'Allarme in corso',
					'es': 'alarma en curso',
					'pl': 'Alarm w toku',
					'zh-cn': '持续警报'
				},
				type: 'string',
				role: 'info.code',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: 'Device.Alarm',
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	SystemTime: {
		id: 'RTC',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'System time',
					'de': 'Systemzeit',
					'ru': 'Системное время',
					'pt': 'Hora do sistema',
					'nl': 'Systeemtijd',
					'fr': 'Le temps du système',
					'it': 'Ora di sistema',
					'es': 'hora del sistema',
					'pl': 'czas systemu',
					'zh-cn': '系统时间'
				},
				type: 'string',
				role: 'info.code',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: 'Testing',
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
};

const oldDeviceParameters = {
	Shutoff: {
		id: 'AB',
		translate: 'Shut off',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SelectedProfile: {
		id: 'PRF',
		translate: 'Active profile',
		statePath: 'Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	NumAvailableProfiles: {
		id: 'PRN',
		translate: 'Number of available profiles',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	ProfileAvailable: {
		id: 'PA',
		translate: 'Available',
		statePath: 'Profile',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ProfileName: {
		id: 'PN',
		translate: 'Name',
		statePath: 'Profile',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ProfileVolumeLevel: {
		id: 'PV',
		translate: 'Volume level',
		statePath: 'Profile',
		unit: 'l',
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ProfileTimeLevel: {
		id: 'PT',
		translate: 'Time level',
		statePath: 'Profile',
		unit: 'min',
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ProfileMaxFlow: {
		id: 'PF',
		translate: 'Max flow',
		statePath: 'Profile',
		unit: 'l/h',
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ProfileMicroLeakageDetection: {
		id: 'PM',
		translate: 'Micro leak detection',
		statePath: 'Profile',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ProfileReturnTimeToStandardProfile: {
		id: 'PR',
		translate: 'Returne time to standard profile',
		statePath: 'Profile',
		unit: 'h',
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ProfileBuzzerOn: {
		id: 'PB',
		translate: 'Buzzer on',
		statePath: 'Profile',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ProfileLeakageWarningOn: {
		id: 'PW',
		translate: 'Leak warning on',
		statePath: 'Profile',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	LeakageProtectionTemoraryDisanled: {
		id: 'TMP',
		translate: 'Leak protection temporary disabled',
		statePath: 'Device.Settings',
		unit: 's',
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	Language: {
		id: 'LNG',
		translate: 'Language',
		statePath: 'Device.Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	Units: {
		id: 'UNI',
		translate: 'Units',
		statePath: 'Device.Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	MaxFlowLeakageTime: {
		id: 'T2',
		translate: 'Max flow leakage time',
		statePath: 'Device.Settings',
		unit: 'min',
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	FloorSensor: {
		id: 'BSA',
		translate: 'Floor sensor',
		statePath: 'Device.Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	MicroLeakageTest: {
		id: 'DMA',
		translate: 'Micro leake test',
		statePath: 'Device.Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	BuzzerOnAlarm: {
		id: 'BUZ',
		translate: 'Buzzer on alarm',
		statePath: 'Device.Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ConductivityLimit: {
		id: 'CNL',
		translate: 'Conductivity limit',
		statePath: 'Device.Settings',
		unit: 'µS/cm',
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ConductivityFactor: {
		id: 'CNF',
		translate: 'Conductivity factor',
		statePath: 'Device.Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	LeakageWarningThreshold: {
		id: 'LWT',
		translate: 'Leakage warning threshold',
		statePath: 'Device.Settings',
		unit: '%',
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	FirmwareVersion: {
		id: 'VER',
		translate: 'Firmware version',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	SerialNumber: {
		id: 'SRN',
		translate: 'Serial number',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	CodeNumber: {
		id: 'CNO',
		translate: 'Code number',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	MacAddress: {
		id: 'MAC',
		translate: 'MAC address',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	NextMaintenance: {
		id: 'SRV',
		translate: 'Next maintenance',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	BatteryVoltage: {
		id: 'BAT',
		translate: 'Battery voltage',
		statePath: 'Device.Info',
		unit: 'V',
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	DcPowerAdapterVoltage: {
		id: 'NET',
		translate: 'DC power adapter voltage',
		statePath: 'Device.Info',
		unit: 'V',
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WaterTemperature: {
		id: 'CEL',
		translate: 'Water temperature',
		statePath: 'Conditions',
		unit: '°',
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WaterPressure: {
		id: 'BAR',
		translate: 'Water pressure',
		statePath: 'Conditions',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WaterConductivity: {
		id: 'CND',
		translate: 'Water conductivity',
		statePath: 'Conditions',
		unit: 'µS/cm',
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WaterFlow: {
		id: 'FLO',
		translate: 'Water flow',
		statePath: 'Consumption',
		unit: 'l/h',
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	LastTappedVolume: {
		id: 'LTV',
		translate: 'Last tapped volume',
		statePath: 'Consumption',
		unit: 'l',
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	DeaktivateTemperatureSensor: {
		id: 'TSD',
		translate: 'Deactivate temperatur sensor',
		statePath: 'Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DeaktivatePressureSensor: {
		id: 'PSD',
		translate: 'Deactivate pressure sensor',
		statePath: 'Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DeaktivateConductivitySensor: {
		id: 'CSD',
		translate: 'Deactivate conductivity sensor',
		statePath: 'Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	WifiKey: {
		id: 'WFK',
		translate: 'WiFi key',
		statePath: 'Settings',
		unit: null,
		levelRead: null,
		levelWrite: 'USER',
		readCommand: null,
		writeCommand: 'set'
	},
	WifiConnectSsid: {
		id: 'WFC',
		translate: 'WiFi ssid',
		statePath: 'Settings',
		unit: null,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	WifiDisconnect: {
		id: 'WFD',
		translate: 'WiFi disconnect',
		statePath: 'Settings',
		unit: null,
		levelRead: null,
		levelWrite: 'USER',
		readCommand: null,
		writeCommand: 'set'
	},
	WifiState: {
		id: 'WFS',
		translate: 'WiFi state',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WifiRssi: {
		id: 'WFR',
		translate: 'WiFi rssi',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WifiScan: {
		id: 'WFL',
		translate: 'WiFi scan',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	IpAddress: {
		id: 'WIP',
		translate: 'IP address',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	DefaultGateway: {
		id: 'WGW',
		translate: 'Default gateway',
		statePath: 'Device.Info',
		unit: null,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WifiDisableScan: {
		id: 'WNS',
		translate: 'WiFi disable scan',
		statePath: 'Device.Settings',
		unit: null,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	WifiAPhidden: {
		id: 'WAH',
		translate: 'WiFi ap hidden',
		statePath: 'Device.Settings',
		unit: null,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
};

const adapterChannels = {
	DeviceSettings: {
		path: 'Device.Settings',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device settings',
					'de': 'Geräteeinstellungen',
					'ru': 'Настройки устройства',
					'pt': 'Configurações do dispositivo',
					'nl': 'Apparaat instellingen',
					'fr': "Réglages de l'appareil",
					'it': 'Impostazioni del dispositivo',
					'es': 'Configuración de dispositivo',
					'pl': 'Ustawienia urządzenia',
					'zh-cn': '设备设置'
				},
			},
			native: {}
		}
	},
	DeviceConditions: {
		path: 'Device.Device-Conditions',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device conditions',
					'de': 'Gerätebedingungen',
					'ru': 'Условия устройства',
					'pt': 'Condições do dispositivo',
					'nl': 'Apparaatvoorwaarden',
					'fr': "État de l'appareil",
					'it': 'Condizioni del dispositivo',
					'es': 'Condiciones del dispositivo',
					'pl': 'Warunki urządzenia',
					'zh-cn': '设备条件'
				},
			},
			native: {}
		}
	},
	DevicePofiles: {
		path: 'Device.Profiles',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profiles',
					'de': 'Geräteprofile',
					'ru': 'Профили устройств',
					'pt': 'Perfis de dispositivo',
					'nl': 'Apparaatprofielen',
					'fr': "Profils d'appareils",
					'it': 'Profili dispositivo',
					'es': 'Perfiles de dispositivos',
					'pl': 'Profile urządzeń',
					'zh-cn': '设备配置文件'
				},
			},
			native: {}
		}
	},
	DevicePofile1: {
		path: 'Device.Profiles.1',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profile 1',
					'de': 'Geräteprofil 1',
					'ru': 'Профиль устройства 1',
					'pt': 'Perfil do dispositivo 1',
					'nl': 'Apparaatprofiel 1',
					'fr': "Profil d'appareil 1",
					'it': 'Profilo dispositivo 1',
					'es': 'Perfil de dispositivo 1',
					'pl': 'Profil urządzenia 1',
					'zh-cn': '设备配置文件 1'
				},
			},
			native: {}
		}
	},
	DevicePofile2: {
		path: 'Device.Profiles.2',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profile 2',
					'de': 'Geräteprofil 2',
					'ru': 'Профиль устройства 2',
					'pt': 'Perfil do dispositivo 2',
					'nl': 'Apparaatprofiel 2',
					'fr': "Profil d'appareil 2",
					'it': 'Profilo dispositivo 2',
					'es': 'Perfil de dispositivo 2',
					'pl': 'Profil urządzenia 2',
					'zh-cn': '设备配置文件 2'
				},
			},
			native: {}
		}
	},
	DevicePofile3: {
		path: 'Device.Profiles.3',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profile 3',
					'de': 'Geräteprofil 3',
					'ru': 'Профиль устройства 3',
					'pt': 'Perfil do dispositivo 3',
					'nl': 'Apparaatprofiel 3',
					'fr': "Profil d'appareil 3",
					'it': 'Profilo del dispositivo 3',
					'es': 'Perfil de dispositivo 3',
					'pl': 'Profil urządzenia 3',
					'zh-cn': '设备配置文件 3'
				},
			},
			native: {}
		}
	},
	DevicePofile4: {
		path: 'Device.Profiles.4',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profile 4',
					'de': 'Geräteprofil 4',
					'ru': 'Профиль устройства 4',
					'pt': 'Perfil do dispositivo 4',
					'nl': 'Apparaatprofiel 4',
					'fr': "Profil d'appareil 4",
					'it': 'Profilo del dispositivo 4',
					'es': 'Perfil de dispositivo 4',
					'pl': 'Profil urządzenia 4',
					'zh-cn': '设备配置文件 4'
				},
			},
			native: {}
		}
	},
	DevicePofile5: {
		path: 'Device.Profiles.5',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profile 5',
					'de': 'Geräteprofil 5',
					'ru': 'Профиль устройства 5',
					'pt': 'Perfil do dispositivo 5',
					'nl': 'Apparaatprofiel 5',
					'fr': "Profil d'appareil 5",
					'it': 'Profilo del dispositivo 5',
					'es': 'Perfil de dispositivo 5',
					'pl': 'Profil urządzenia 5',
					'zh-cn': '设备配置文件 5'
				},
			},
			native: {}
		}
	},
	DevicePofile6: {
		path: 'Device.Profiles.6',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profile 6',
					'de': 'Geräteprofil 6',
					'ru': 'Профиль устройства 6',
					'pt': 'Perfil do dispositivo 6',
					'nl': 'Apparaatprofiel 6',
					'fr': "Profil d'appareil 6",
					'it': 'Profilo del dispositivo 6',
					'es': 'Perfil de dispositivo 6',
					'pl': 'Profil urządzenia 6',
					'zh-cn': '设备配置文件 6'
				},
			},
			native: {}
		}
	},
	DevicePofile7: {
		path: 'Device.Profiles.7',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profile 7',
					'de': 'Geräteprofil 7',
					'ru': 'Профиль устройства 7',
					'pt': 'Perfil do dispositivo 7',
					'nl': 'Apparaatprofiel 7',
					'fr': "Profil d'appareil 7",
					'it': 'Profilo del dispositivo 7',
					'es': 'Perfil de dispositivo 7',
					'pl': 'Profil urządzenia 7',
					'zh-cn': '设备配置文件 7'
				},
			},
			native: {}
		}
	},
	DevicePofile8: {
		path: 'Device.Profiles.8',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device profile 8',
					'de': 'Geräteprofil 8',
					'ru': 'Профиль устройства 8',
					'pt': 'Perfil do dispositivo 8',
					'nl': 'Apparaatprofiel 8',
					'fr': "Profil d'appareil 8",
					'it': 'Profilo del dispositivo 8',
					'es': 'Perfil de dispositivo 8',
					'pl': 'Profil urządzenia 8',
					'zh-cn': '设备配置文件 8'
				},
			},
			native: {}
		}
	},
	WaterCondition: {
		path: 'Device.Water-Condition',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Water Condition',
					'de': 'Wasserzustand',
					'ru': 'Состояние воды',
					'pt': 'Condição da Água',
					'nl': 'Waterconditie',
					'fr': "État de l'eau",
					'it': "Condizione dell'acqua",
					'es': 'Condición del agua',
					'pl': 'Stan wody',
					'zh-cn': '水质'
				},
			},
			native: {}
		}
	},
	WaterConumption: {
		path: 'Device.Water-Consumption',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Water consumption',
					'de': 'Wasserverbrauch',
					'ru': 'Потребление воды',
					'pt': 'Consumo de água',
					'nl': 'Waterverbruik',
					'fr': "Consommation d'eau",
					'it': "Consumo d'acqua",
					'es': 'Consumo de agua',
					'pl': 'Konsumpcja wody',
					'zh-cn': '耗水量'
				},
			},
			native: {}
		}
	},
	Alarm: {
		path: 'Device.Alarm',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Alarm',
					'de': 'Alarm',
					'ru': 'Тревога',
					'pt': 'Alarme',
					'nl': 'Alarm',
					'fr': 'Alarme',
					'it': 'Allarme',
					'es': 'Alarma',
					'pl': 'Alarm',
					'zh-cn': '警报'
				},
			},
			native: {}
		}
	},
};


const alarmPeriod = [DeviceParameters.CurrentAlarmStatus];
const shortPeriod = [];
const longPeriode = [DeviceParameters.CurrentValveStatus, DeviceParameters.SystemTime];

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

class wamo extends utils.Adapter {

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
		/* Umrechnung in Härte
		eine Quelle besagt, dass 33µS/cm in etwa 1° deutscher Härte entspricht
		*/

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		this.log.info('config Device IP: ' + this.config.device_ip);
		this.log.info('config Device Port: ' + this.config.device_port);

		try {
			await this.initDevicesAndChanels();
		} catch (err) {
			this.log.error('Error from initStatesAndChanels : ' + err);
		}
		let connTrys = 0;

		//=================================================================================================
		//===  Connecting to device																		===
		//=================================================================================================
		while (connTrys < connectionRetrys) {
			try {
				await this.deviceCommcheck(this.config.device_ip, this.config.device_port);
				device_responsive = true;
				this.log.info('Device at ' + this.config.device_ip + ':' + this.config.device_port + ' is connected');
				break;
			}
			catch (err) {
				this.log.error(String(connTrys + 1) + ' try Device at ' + this.config.device_ip + ':' + this.config.device_port + 'is not responding');
				this.log.warn('Waiting for ' + String(connectionRetryPause / 1000) + ' seconds ...');
				await sleep(connectionRetryPause);
				this.log.warn('retry connection ...');
			}
			finally {
				connTrys++;
				if (connTrys > 1) {
					this.log.warn('connection attempt No. ' + connTrys);
				}
			}
		}

		if (!device_responsive) {
			this.log.error('device NOT connected ... exit');
			// we throw an exception causing Adaper to restart
			throw 'exit not OK';
		}

		//=================================================================================================
		//===  Connection LED to Green																	===
		//=================================================================================================
		await this.setStateAsync('info.connection', { val: true, ack: true });
		this.log.debug('info.connection gesetzt');

		//=================================================================================================
		//===  Getting device data																		===
		//=================================================================================================

		// Verbindungsversuche zurücksetzen
		connTrys = 0;
		// Verbindungsbestätigung zurücksetzen
		device_responsive = false;

		while (connTrys < connectionRetrys) {
			try {
				this.log.info('Getting data from device at ' + this.config.device_ip + ':' + this.config.device_port);
				const responseInit = await this.initDevice(this.config.device_ip, this.config.device_port);
				this.log.debug(`[initDevice] Response:  ${responseInit}`);
				device_responsive = true;
				break;
			}
			catch (err) {
				this.log.error(String(connTrys + 1) + ' try Device at ' + this.config.device_ip + ':' + this.config.device_port + 'is not responding');
				this.log.warn('Waiting for ' + String(connectionRetryPause / 1000) + ' seconds ...');
				await sleep(connectionRetryPause);
				this.log.warn('retry connection ...');
			}
			finally {
				connTrys++;
				if (connTrys > 1) {
					this.log.warn('connection attempt No. ' + connTrys);
				}
			}
		}
		if (!device_responsive) {
			this.log.error('device NOT connected ... exit');
			// we throw an exception causing Adaper to restart
			throw 'exit not OK';
		}

		//=================================================================================================
		//===  Getting device Profiles data																===
		//=================================================================================================

		// Verbindungsversuche zurücksetzen
		connTrys = 0;
		// Verbindungsbestätigung zurücksetzen
		device_responsive = false;

		while (connTrys < connectionRetrys) {
			try {
				// Device Profiles Initialisation
				this.log.info('Getting Profiles data from device at ' + this.config.device_ip + ':' + this.config.device_port);
				const responseInitProfiles = await this.initDeviceProfiles(this.config.device_ip, this.config.device_port);
				this.log.debug(`[initDeviceProfiles] Response:  ${responseInitProfiles}`);
				device_responsive = true;
				break;
			}
			catch (err) {
				this.log.error(String(connTrys + 1) + ' try / Device at ' + this.config.device_ip + ':' + this.config.device_port + 'is not responding');
				this.log.warn('Waiting for ' + String(connectionRetryPause / 1000) + ' seconds ...');
				await sleep(connectionRetryPause);
				this.log.warn('retry connection ...');
			}
			finally {
				connTrys++;
				if (connTrys > 1) {
					this.log.warn('connection attempt No. ' + connTrys);
				}
			}
		}
		if (!device_responsive) {
			this.log.error('device NOT connected ... exit');
			// we throw an exception causing Adaper to restart
			throw 'exit not OK';
		}

		//=================================================================================================
		//===  Timer starten																			===
		//=================================================================================================
		try {
			const tmstarted = await this.timerStarts();
			this.log.debug('Timers started - Result: ' + String(tmstarted));
		} catch (err) {
			this.log.error('device Timer start Error ... exit');
			// we throw an exception causing Adaper to restart
			throw err;
		}

		/*
		// ==================================================================================================================
		// =======                                 TESTING															  =======
		// ==================================================================================================================
		this.log.debug('Neue update Funktion Testen');
		try {
			await this.updateState(DeviceParameters.TestDefinition, 224);
		}
		catch (err) {
			this.log.error(`[updateState(DeviceParameters.TestDefinition, '224')] error: ${err}`);
		}
		// ==================================================================================================================
		*/

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

		// In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
		// this.subscribeStates('info.connection');
		// You can also add a subscription for multiple states. The following line watches all states starting with "lights."
		// this.subscribeStates('lights.*');
		// Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
		// this.subscribeStates('*');

		/*
			setState examples
			you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		//await this.setStateAsync('testVariable', true);

		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		//await this.setStateAsync('testVariable', { val: true, ack: true });

		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		//await this.setStateAsync('testVariable', { val: true, ack: true, expire: 30 });

		// examples for the checkPassword/checkGroup functions
		let result = await this.checkPasswordAsync('admin', 'iobroker');
		this.log.info('check user admin pw iobroker: ' + result);

		result = await this.checkGroupAsync('admin', 'admin');
		this.log.info('check group user admin group admin: ' + result);

		// reference to Adapter
		myAdapter = this;

		this.log.info('Adapter wurde gestartet');

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
			clearInterval(alarm_Intervall_ID);
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


	//===================================================
	// Timer Starten
	async timerStarts() {
		return new Promise(async (resolve, reject) => {
			try {
				// Die Timer für das Polling starten
				alarm_Intervall_ID = this.setInterval(alarm_poll, parseInt(this.config.device_alarm_poll_interval) * 1000);
				this.log.info('Alarm timer initialized');
				await sleep(5000); // Warten um einen Versatz zu erzeugen
				short_Intervall_ID = this.setInterval(short_poll, parseInt(this.config.device_short_poll_interval) * 1000);
				this.log.info('Short timer initialized');
				await sleep(5000); // Warten um einen Versatz zu erzeugen
				long_Intervall_ID = this.setInterval(long_poll, parseInt(this.config.device_long_poll_interval) * 1000);
				this.log.info('Long timer initialized');
				resolve('Alarm Timer ID=' + alarm_Intervall_ID + ' / Short Timer ID=' + short_Intervall_ID + ' / Long Timer ID=' + long_Intervall_ID);
			} catch (err) {
				reject(err);
			}
		});
	}


	//===================================================
	// Timer EVENTS
	async alarm_TimerTick() {
		return new Promise(async (resolve, reject) => {
			try {
				if (!interfaceBussy) {
					this.log.debug('Alarm Timer tick');
					interfaceBussy = true;	// SET flag that device interface is bussy
					await this.get_AlarmTimerValues(this.config.device_ip, this.config.device_port);
					interfaceBussy = false;	// CLEAR flag that device interface is bussy
				}
				else {
					this.log.warn('[async alarm_TimerTick()] Device interface is bussy!');
				}
				resolve('Ok');
			} catch (err) {
				interfaceBussy = false;	// CLEAR flag that device interface is bussy
				reject(err);
			}
		});
	}

	async short_TimerTick() {
		return new Promise(async (resolve, reject) => {
			try {
				if (!interfaceBussy) {
					this.log.debug('Short Timer tick');
					interfaceBussy = true;	// SET flag that device interface is bussy
					await this.get_ShortTimerValues(this.config.device_ip, this.config.device_port);
					interfaceBussy = false;	// CLEAR flag that device interface is bussy
				}
				else {
					this.log.warn('[async short_TimerTick()] Device interface is bussy!');
				}
				resolve('Ok');
			} catch (err) {
				interfaceBussy = false;	// CLEAR flag that device interface is bussy
				reject(err);
			}
		});
	}

	async long_TimerTick() {
		return new Promise(async (resolve, reject) => {

			this.log.debug('Long Timer tick');
			try {
				for (let i = 0; i < longPeriode.length; i++) {
					if (!interfaceBussy) {
						// Verbindungsversuche zurücksetzen
						let connTrys = 0;
						// Verbindungsbestätigung zurücksetzen
						device_responsive = false;

						while (connTrys < connectionRetrys) {
							try {
								interfaceBussy = true;	// SET flag that device interface is bussy
								await this.updateState(longPeriode[i], await this.get_DevieParameter(longPeriode[i].id, this.config.device_ip, this.config.device_port));
								// await this.updateState(DeviceParameters.CurrentValveStatus, await this.get_DevieParameter(DeviceParameters.CurrentValveStatus.id, this.config.device_ip, this.config.device_port));
								interfaceBussy = false;	// CLEAR flag that device interface is bussy
								device_responsive = true;
								break;
							}
							catch (err) {
								this.log.error('[async long_TimerTick()] ' + String(connTrys + 1) + ' try / Device at ' + this.config.device_ip + ':' + this.config.device_port + 'is not responding');
								this.log.warn('Waiting for ' + String(connectionRetryPause / 1000) + ' seconds ...');
								await sleep(connectionRetryPause);
								this.log.warn('retry connection ...');
							}
							finally {
								connTrys++;
								if (connTrys > 1) {
									interfaceBussy = false;	// CLEAR flag that device interface is bussy
									this.log.warn('connection attempt No. ' + connTrys);
								}
							}
						}

						if (!device_responsive) {
							this.log.error('device NOT reachable');
							// we throw an exception causing Adaper to restart
							interfaceBussy = false;	// CLEAR flag that device interface is bussy
						}


					}
					else {
						this.log.warn('[async long_TimerTick()] Device interface is bussy!');
					}
				}

				resolve('Ok');
			} catch (err) {
				interfaceBussy = false;	// CLEAR flag that device interface is bussy
				reject(err);
			}
		});
	}
	//===================================================

	// reading ALA (Alarm) status from device to test if the device is present and responding
	async deviceCommcheck(DeviceIP, DevicePort) {
		return new Promise(async (resolve, reject) => {
			try {
				await this.get_DevieParameter('ALA', DeviceIP, DevicePort);
				resolve(true);
			} catch (err) {
				this.log.warn('[async deviceCommcheck(DeviceIP, DevicePort)] Error:');
				reject(false);
			}
		});

	}

	async initDevicesAndChanels() {
		return new Promise(async (resolve, reject) => {
			try {
				try {
					await this.setObjectNotExistsAsync('Device', {
						type: 'device',
						common: {
							name: 'Device'
						},
						native: {}
					});
					this.log.info('[async initDevicesAndChanels()] Device object created');
				} catch (err) {
					this.log.info('[async initDevicesAndChanels()] ERROR Device: ]' + err);
				}

				for (const key in adapterChannels) {
					try {
						await this.setObjectNotExistsAsync(String(adapterChannels[key].path), adapterChannels[key].channel);
						this.log.info('Key Name = ' + String(key));
						this.log.info('Path =' + String(adapterChannels[key].path));
						this.log.info('Chanel Srtuktur =' + String(adapterChannels[key].channel));
					} catch (err) {
						this.log.info('[async initDevicesAndChanels()] ERROR Channel: ]' + err);
					}
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	//===================================================
	// Divice Initialisation (called on Adapter Start)
	async initDevice(DeviceIP, DevicePort) {
		return new Promise(async (resolve, reject) => {
			try {

				Object.keys(DeviceParameters).forEach(key => {
					this.log.info(key + ' Pfad = ' + DeviceParameters[key].statePath);
				});

				if (false) {
					const listOfParameter = [
						'Device.Info.VER', 	// Firmware Version
						'Device.Info.WIP',	// IP Address
						'Device.Info.MAC',	// MAC Address
						'Device.Info.WGW',	// Default Gatewa
						'Device.Info.SRN',	// Serial Number
						'Device.Info.CNO',	// Code Number
						'Device.Info.WFR',	// WiFi RSSI
						'Device.Info.WFC',	// WiFi SSID
						'Device.Info.SRV',	// Next Maintenance
						'Device.Info.WAH',	// WiFi AP Hidden
						'Device.Info.WAD',	// WiFi AP Disabled
						'Device.Info.APT',	// WiFi AP Timeout
						'Device.Info.DWL',	// WiFi Deactivated
						'Device.Info.WFS',	// WiFi State
						'Device.Info.BAT',	// Batterie voltage
						'Conditions.CEL',	// Water temperatur
						'Conditions.CND',	// Water conductivity
						'Device.Info.IDS'];	// Daylight Saving Time

					this.log.debug(`[initDevice()]`);
					let result;
					for (const stateID of listOfParameter) {
						const parameterIDs = stateID.split('.');
						this.log.debug('current Parameter ID: ' + parameterIDs[parameterIDs.length - 1]);
						result = await this.get_DevieParameter(parameterIDs[parameterIDs.length - 1], DeviceIP, DevicePort);
						this.log.debug('[' + parameterIDs[parameterIDs.length - 1] + '] : ' + String(JSON.stringify(result)));
						await this.UpdateState(stateID, result);
					}
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async initDeviceProfiles(DeviceIP, DevicePort,) {
		return new Promise(async (resolve, reject) => {
			try {
				if (false) {

					// alle 8 möglichen Profile durchlaufen
					for (let ProfileNumber = 1; ProfileNumber < 9; ProfileNumber++) {

						this.log.debug('[async initDeviceProfiles(DeviceIP, DevicePort)] Profil ' + ProfileNumber);

						const listOfParameter = [
							'Profiles.' + String(ProfileNumber) + '.PA' + String(ProfileNumber),
							'Profiles.' + String(ProfileNumber) + '.PN' + String(ProfileNumber),
							'Profiles.' + String(ProfileNumber) + '.PV' + String(ProfileNumber),
							'Profiles.' + String(ProfileNumber) + '.PT' + String(ProfileNumber),
							'Profiles.' + String(ProfileNumber) + '.PF' + String(ProfileNumber),
							'Profiles.' + String(ProfileNumber) + '.PM' + String(ProfileNumber),
							'Profiles.' + String(ProfileNumber) + '.PR' + String(ProfileNumber),
							'Profiles.' + String(ProfileNumber) + '.PB' + String(ProfileNumber),
							'Profiles.' + String(ProfileNumber) + '.PW' + String(ProfileNumber)];

						this.log.debug(`[initDeviceProfiles()] Profil ` + ProfileNumber);
						for (const stateID of listOfParameter) {
							const parameterIDs = stateID.split('.');
							this.log.debug('current Parameter ID: ' + parameterIDs[parameterIDs.length - 1]);
							const result = await this.get_DevieProfileParameter(ProfileNumber, parameterIDs[parameterIDs.length - 1], DeviceIP, DevicePort);
							this.log.debug('[' + parameterIDs[parameterIDs.length - 1] + '] : ' + String(JSON.stringify(result)));
							await this.UpdateProfileState(ProfileNumber, stateID, result);
							this.log.debug('Profil ' + ProfileNumber + ' Parameter ' + parameterIDs[parameterIDs.length - 1]);
						}
					}
				}
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});
	}
	//===================================================

	//===================================================
	// Alarm Timer: Get Values  (called on each Alarm Timer Tick)

	async get_AlarmTimerValues(DeviceIP, DevicePort) {
		return new Promise(async (resolve, reject) => {
			try {
				if (false) {

					const listOfParameter = [
						'Conditions.ALA'];

					this.log.debug(`[get_AlarmTimerValues(DeviceIP, DevicePort)]`);
					let result;
					for (const stateID of listOfParameter) {
						const parameterIDs = stateID.split('.');
						this.log.debug('current Parameter ID: ' + parameterIDs[parameterIDs.length - 1]);
						result = await this.get_DevieParameter(parameterIDs[parameterIDs.length - 1], DeviceIP, DevicePort);
						this.log.debug('[' + parameterIDs[parameterIDs.length - 1] + '] : ' + String(JSON.stringify(result)));
						await this.UpdateState(stateID, result);
					}
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}
	//===================================================

	//===================================================
	// Short Timer: Get Values  (called on each short Timer Tick)
	async get_ShortTimerValues(DeviceIP, DevicePort) {
		return new Promise(async (resolve, reject) => {
			try {
				if (false) {
					const listOfParameter = [
						'Conditions.CEL',	// Water temperatur
						'Conditions.CND',	// Water conductivity
						'Device.Info.BAT',
						'Consumptions.AVO',
						'Consumptions.LTV',
						'Consumptions.VOL',
						'Device.Info.NET'];

					this.log.debug(`[get_ShortTimerValues(DeviceIP, DevicePort)]`);
					let result;
					for (const stateID of listOfParameter) {
						const parameterIDs = stateID.split('.');
						this.log.debug('current Parameter ID: ' + parameterIDs[parameterIDs.length - 1]);
						result = await this.get_DevieParameter(parameterIDs[parameterIDs.length - 1], DeviceIP, DevicePort);
						this.log.debug('[' + parameterIDs[parameterIDs.length - 1] + '] : ' + String(JSON.stringify(result)));
						await this.UpdateState(stateID, result);
					}
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}
	//===================================================

	//===================================================
	// Sets the Adapter State Objects
	// stateID: object path
	// value:	Value for Object
	async UpdateState(stateID, value) {
		return new Promise(async (resolve, reject) => {

			// Parameter ID aus stateID ermitteln
			const parameterIDs = stateID.split('.');
			const parameter = (parameterIDs[parameterIDs.length - 1]).substr(0, parameterIDs[parameterIDs.length - 1].length);
			this.log.debug('[UpdateState(stateID, value)] Parameter = ' + String(parameter));
			try {
				switch (parameter) {
					case 'VER':
						await this.state_VER(value);
						break;
					case 'WIP':
						await this.state_WIP(value);
						break;
					case 'MAC':
						await this.state_MAC(value);
						break;
					case 'WGW':
						await this.state_WGW(value);
						break;
					case 'SRN':
						await this.state_SRN(value);
						break;
					case 'CNO':
						await this.state_CNO(value);
						break;
					case 'WFR':
						await this.state_WFR(value);
						break;
					case 'WFC':
						await this.state_WFC(value);
						break;
					case 'SRV':
						await this.state_SRV(value);
						break;
					case 'WAH':
						await this.state_WAH(value);
						break;
					case 'WAD':
						await this.state_WAD(value);
						break;
					case 'APT':
						await this.state_APT(value);
						break;
					case 'DWL':
						await this.state_DWL(value);
						break;
					case 'WFS':
						await this.state_WFS(value);
						break;
					case 'BAT':
						await this.state_BAT(value);
						break;
					case 'IDS':
						await this.state_IDS(value);
						break;
					case 'ALA':
						await this.state_ALA(value);
						break;
					case 'AVO':
						await this.state_AVO(value);
						break;
					case 'LTV':
						await this.state_LTV(value);
						break;
					case 'VOL':
						await this.state_VOL(value);
						break;
					case 'NET':
						await this.state_NET(value);
						break;
					case 'CEL':
						await this.state_CEL(value);
						break;
					case 'CND':
						await this.state_CND(value);
						break;
				}

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	//=============================================================================
	// Diese Funktion speichert das übergebene'vValue' im entsprechenden State
	// der in 'stateID' übergebenen Struktur
	//=============================================================================
	async updateState(stateID, value) {
		return new Promise(async (resolve, reject) => {
			try {

				let cur_ParameterID;	// Parameter ID
				let cur_StatePath;		// State Path

				// Parameter ID ermitteln, wenn nciht vorhanden, Error auslösen und abbrechen
				if (stateID == null) { throw '[async updateState(stateID, value)] stateID is null'; }


				if ('id' in stateID) {
					if (stateID.id == null || stateID.id == '') { throw String(stateID) + ' [async updateState(stateID, value)] has no valid [id] key (null or empty)'; }
					cur_ParameterID = stateID.id;
					this.log.debug('id key Value is: ' + cur_ParameterID);
				} else {
					throw String(stateID) + ' [async updateState(stateID, value)] has no [id] key';
				}

				// Den Pafad des States ermittlen -> wenn nicht vorhanden, Error auslösen und abbrechen
				if ('statePath' in stateID) {
					if (stateID.statePath == null || stateID.statePath == '') { throw String(stateID) + ' [async updateState(stateID, value)] has no valid (statePath) key'; }
					cur_StatePath = stateID.statePath;
					this.log.debug('(statePath) key Value is: ' + cur_StatePath);
				} else {
					throw String(stateID) + ' [async updateState(stateID, value)] has no id statePath';
				}

				const state_ID = cur_StatePath + '.' + cur_ParameterID;
				await this.setObjectNotExistsAsync(state_ID, stateID.objectdefinition);
				this.log.debug('stateID.objectdefinition.common.type = ' + stateID.objectdefinition.common.type);

				// convert into final value
				let finalValue;
				try {
					finalValue = await this.convertDeviceReturnValue(stateID.id, value['get' + stateID.id]);
					this.log.debug('finalValue = ' + String(finalValue));
				}
				catch (err) {
					this.log.error('[async updateState(stateID, value)] Error: ' + String(err));
					reject(err);
				}

				switch (stateID.objectdefinition.common.type) {
					case 'number':
						this.log.debug('[async updateState(stateID, value)] value is NUMBER');
						this.setStateAsync(state_ID, { val: parseFloat(String(finalValue)), ack: true });
						break;
					default:
						// handle as string
						this.log.debug('[async updateState(stateID, value)] value is STRING');
						this.setStateAsync(state_ID, { val: String(finalValue), ack: true });
				}

				this.log.info(String(cur_StatePath) + ' ' + String(cur_ParameterID) + ' ' + String(finalValue));
				//this.log.info(String(cur_StatePath) + ' ' + String(stateID.common.name) + ' ' + String(cur_ParameterID) + ' ' + String(finalValue));

				resolve(true);
			} catch (err) {
				this.log.error('[async updateState(stateID, value)] Error: ' + String(err));
				reject(err);
			}
		});
	}

	async convertDeviceReturnValue(valueKey, value) {
		return new Promise((resolve, reject) => {
			try {
				let finalValue;
				switch (String(valueKey)) {
					case 'VLV':	// Current Valve Status
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
						break;
					case 'RTC':	// System Time
						finalValue = (new Date(parseInt(value) * 1000)).toLocaleString();
						//finalValue = (new Date(parseInt(value) * 1000)).toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);
						break;
					default:
						this.log.warn('[async convertDeviceReturnValue(valueKey, value)] Key (' + String(valueKey) + ') is not valid!');
						finalValue = null;
				}
				resolve(finalValue);
			} catch (err) {
				reject(err);
			}
		});
	}

	async UpdateProfileState(ProfileNumber, stateID, value) {
		return new Promise(async (resolve, reject) => {

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

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	//===================================================
	// Pulls the Information from the Device
	// ParameterID: API command Parameter (last instance of the State path)
	// IPadress: Device IP Adress
	// Port: Device Port
	//===================================================
	// Return: Readed Value from Device (JSON Format)
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

	async get_DevieProfileParameter(Profile, ParameterID, IPadress, Port) {
		return new Promise(async (resolve, reject) => {

			this.log.debug(`[getDevieParameter(ParameterID)] ${ParameterID}${Profile}`);

			axios({
				method: 'get', url: 'Http://' + String(IPadress) + ':' + String(Port) + '/safe-tec/get/' + String(ParameterID) + String(Profile), timeout: 10000, responseType: 'json'
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
	//===================================================

	async state_profile_PA(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PA' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' available',
							de: 'Profil ' + String(ProfileNumber) + ' verfügbar'
						},
						type: 'boolean',
						role: 'profile.' + String(ProfileNumber) + '.available',
						read: true,
						write: false
					},
					native: {}
				});
				if (parseFloat(value['getPA' + String(ProfileNumber)]) == 0) {
					this.setStateAsync(state_ID, { val: false, ack: true });
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
				}
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_profile_PN(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PN' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Name',
							de: 'Profil ' + String(ProfileNumber) + ' Name'
						},
						type: 'string',
						role: 'profile.' + String(ProfileNumber) + '.name',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value['getPN' + String(ProfileNumber)], ack: true });
				this.log.info('Profile ' + String(ProfileNumber) + ' Name is ' + value['getPN' + String(ProfileNumber)]);
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_profile_PV(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PV' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Volume Level (0 = disabled 1...1900L)',
							de: 'Profil ' + String(ProfileNumber) + ' Volumen Grenze (0 = deaktiviert 1...1900L)'
						},
						type: 'string',
						role: 'profile.' + String(ProfileNumber) + '.volumelevel',
						unit: 'L',
						read: true,
						write: false
					},
					native: {}
				});
				if (parseFloat(value['getPV' + String(ProfileNumber)]) > 0) {
					this.setStateAsync(state_ID, { val: value['getPV' + String(ProfileNumber)], ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Volume Level is ' + value['getPV' + String(ProfileNumber)] + ' min');
				}
				else {
					this.setStateAsync(state_ID, { val: 'disabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Volume Level is disabled');
				}
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_profile_PT(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PT' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Time Level (0 = disabled 1...1500min (25h)',
							de: 'Profil ' + String(ProfileNumber) + ' Zeit Grenze (0 = deaktiviert 1...1500min (25h)'
						},
						type: 'string',
						role: 'profile.' + String(ProfileNumber) + '.timelevel',
						unit: 'min',
						read: true,
						write: false
					},
					native: {}
				});
				if (parseFloat(value['getPV' + String(ProfileNumber)]) > 0) {
					this.setStateAsync(state_ID, { val: value['getPT' + String(ProfileNumber)], ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Time Level is ' + value['getPT' + String(ProfileNumber)] + ' min');
				}
				else {
					this.setStateAsync(state_ID, { val: 'disabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Time Level is disabled');
				}
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_profile_PF(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PF' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Max Flow (0 = disabled 1...5000L/h)',
							de: 'Profil ' + String(ProfileNumber) + ' Maximaler Durchfluss (0 = deaktiviert 1...5000L/h)'
						},
						type: 'string',
						role: 'profile.' + String(ProfileNumber) + '.maxflow',
						unit: 'L/h',
						read: true,
						write: false
					},
					native: {}
				});
				if (parseFloat(value['getPV' + String(ProfileNumber)]) > 0) {
					this.setStateAsync(state_ID, { val: value['getPF' + String(ProfileNumber)], ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Max Flow is ' + value['getPF' + String(ProfileNumber)] + ' L/h');
				}
				else {
					this.setStateAsync(state_ID, { val: 'disabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Max Flow is disabled');
				}
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_profile_PM(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PM' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Microleak Detektion',
							de: 'Profil ' + String(ProfileNumber) + ' Microleckageüberwachung'
						},
						type: 'string',
						role: 'profile.' + String(ProfileNumber) + '.microleakagedetection',
						read: true,
						write: false
					},
					native: {}
				});
				if (parseFloat(value['getPM' + String(ProfileNumber)]) == 0) {
					this.setStateAsync(state_ID, { val: 'disabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Microleak Detektion is disabled');
				}
				else {
					this.setStateAsync(state_ID, { val: 'enabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Microleak Detektion is enabled');
				}
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_profile_PR(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PR' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Return Time to standard Profile (1...720h (30 Days))',
							de: 'Profil ' + String(ProfileNumber) + ' Zeit bis zur Rückkehr zum Standardprofil (1...720h (30 Tage))'
						},
						type: 'string',
						role: 'profile.' + String(ProfileNumber) + '.returntime',
						unit: 'h',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value['getPR' + String(ProfileNumber)], ack: true });
				this.log.info('Profile ' + String(ProfileNumber) + ' return time ' + String(value['getPR' + String(ProfileNumber)]));
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_profile_PB(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PB' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Buzzer',
							de: 'Profil ' + String(ProfileNumber) + ' Warnton'
						},
						type: 'string',
						role: 'profile.' + String(ProfileNumber) + '.buzzeron',
						read: true,
						write: false
					},
					native: {}
				});
				if (parseFloat(value['getPB' + String(ProfileNumber)]) == 0) {
					this.setStateAsync(state_ID, { val: 'disabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Busser is disabled');
				}
				else {
					this.setStateAsync(state_ID, { val: 'enabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Busser is enabled');
				}
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_profile_PW(ProfileNumber, value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Profiles.' + String(ProfileNumber) + '.PW' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Leakage Warning',
							de: 'Profil ' + String(ProfileNumber) + ' Leckage Warnung'
						},
						type: 'string',
						role: 'profile.' + String(ProfileNumber) + '.leakagewarning',
						read: true,
						write: false
					},
					native: {}
				});
				if (parseFloat(value['getPW' + String(ProfileNumber)]) == 0) {
					this.setStateAsync(state_ID, { val: 'disabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Leakage Warning disabled');
				}
				else {
					this.setStateAsync(state_ID, { val: 'enabled', ack: true });
					this.log.info('Profile ' + String(ProfileNumber) + ' Leakage Warning is enabled');
				}
				resolve(true);
			} catch (err) {
				this.log.error(err.message);
				reject(err);
			}
		});

	}

	async state_ALA(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Conditions.ALA';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Alarm Status',
							de: 'Alarm Status'
						},
						type: 'string',
						role: 'conditions.alarm',
						read: true,
						write: false
					},
					native: {}
				});
				let AlarmText;
				switch (String(value.getALA)) {
					case 'FF':
						AlarmText = 'NO ALARM';
						break;
					case 'A1':
						AlarmText = 'ALARM END SWITCH';
						break;
					case 'A2':
						AlarmText = 'NO NETWORK';
						break;
					case 'A3':
						AlarmText = 'ALARM VOLUME LEAKAGE';
						break;
					case 'A4':
						AlarmText = 'ALARM TIME LEAKAGE';
						break;
					case 'A5':
						AlarmText = 'ALARM MAX FLOW LEAKAGE';
						break;
					case 'A6':
						AlarmText = 'ALARM MICRO LEAKAGE';
						break;
					case 'A7':
						AlarmText = 'ALARM EXT. SENSOR LEAKAGE';
						break;
					case 'A8':
						AlarmText = 'ALARM TURBINE BLOCKED';
						break;
					case 'A9':
						AlarmText = 'ALARM PRESSURE SENSOR ERROR';
						break;
					case 'AA':
						AlarmText = 'ALARM TEMPERATURE SENSOR ERROR';
						break;
					case 'AB':
						AlarmText = 'ALARM CONDUCTIVITY SENSOR ERROR';
						break;
					case 'AC':
						AlarmText = 'ALARM TO HIGH CONDUCTIVITY';
						break;
					case 'AD':
						AlarmText = 'LOW BATTERY';
						break;
					case 'AE':
						AlarmText = 'WARNING VOLUME LEAKAGE';
						break;
					case 'AF':
						AlarmText = 'ALARM NO POWER SUPPLY';
						break;
					default:
						AlarmText = 'undefined';
				}
				this.setStateAsync(state_ID, { val: AlarmText, ack: true });
				this.log.info('Alarm Status: ' + AlarmText);
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
				this.log.info('Device Firmware Version: ' + String(value.getVER));
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
				this.log.info('Device IP: ' + String(value.getWIP));
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
				this.log.info('Device MAC Address: ' + String(value.getMAC));
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
				this.log.info('Device Default Gateway: ' + String(value.getWGW));
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
				this.log.info('Device Serial Number: ' + String(value.getSRN));
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
				this.log.info('Device Code Number: ' + String(value.getCND));
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
				this.log.info('WiFi RSSI is ' + String(value.getWFR) + ' %');
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
				this.log.info('WiFi SSID is ' + String(value.getWFC));
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
					this.log.info('WiFi is disconected');
				} else if (String(value.getWFS) == '1') {
					this.setStateAsync(state_ID, { val: 'connecting', ack: true });
					this.log.info('WiFi is connecting');
				} else if (String(value.getWFS) == '2') {
					this.setStateAsync(state_ID, { val: 'connected', ack: true });
					this.log.info('WiFi is connected');
				} else {
					this.setStateAsync(state_ID, { val: 'undefined', ack: true });
					this.log.info('WiFi is undefined');
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
				this.log.info('Next Maintenance: ' + String(value.getSRV));
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
					this.log.info('WiFi AP is not hidden');
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
					this.log.info('WiFi AP is hidden');
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
					this.log.info('WiFi AP is enabled');
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
					this.log.info('WiFi AP is disabled');
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
							en: 'WiFi AP Timeout',
							de: 'WLAN AP Timeout'
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
					this.log.info('WiFi AP Timeout: ' + String(value.getAPT) + ' s');
				}
				else {
					this.setStateAsync(state_ID, { val: 'disabled', ack: true });
					this.log.info('WiFi AP Timeout is Disabled');
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
					this.log.info('WiFi is deactivated');
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
					this.log.info('WiFi is activated');
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
				this.log.info('Battery Voltage: ' + String(value.getBAT) + ' V');
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_NET(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Device.Info.NET';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'DC Power Adapter Voltage',
							de: 'DC Netzteil Spannung'
						},
						type: 'string',
						role: 'info.powersupplyvoltage',
						unit: 'V',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getNET, ack: true });
				this.log.info('DC Power Adapter Voltage: ' + String(value.getNET) + ' V');
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
					this.log.info('Daylight saving Time is disabled');
				}
				else {
					this.setStateAsync(state_ID, { val: true, ack: true });
					this.log.info('Daylight saving Time is enabled');
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_AVO(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Consumptions.AVO';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Current water consumption',
							de: 'Aktuelle Wasserentnahme'
						},
						type: 'string',
						role: 'consumptions.currentvolume',
						unit: 'mL',
						read: true,
						write: false
					},
					native: {}
				});

				this.setStateAsync(state_ID, { val: String(parseFloat(String(value.getAVO).replace('mL', ''))), ack: true });
				this.log.info('Current water consumption: ' + String(parseFloat(String(value.getAVO).replace('mL', ''))) + ' mL');
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_LTV(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Consumptions.LTV';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Last Taped Water',
							de: 'Letzte Wasserentnahme'
						},
						type: 'string',
						role: 'consumptions.lasttapedvolume',
						unit: 'L',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: value.getLTV, ack: true });
				this.log.info('Last Taped Water: ' + String(value.getLTV) + ' L');
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_VOL(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Consumptions.VOL';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Total Water Volume',
							de: 'Gesamte Wasserentnahme'
						},
						type: 'string',
						role: 'consumptions.totalvolume',
						unit: 'm3',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: String(parseFloat(String(value.getVOL).replace('Vol[L]', '')) / 1000), ack: true });
				this.log.info('Total Water Volume: ' + String(parseFloat(String(value.getVOL).replace('Vol[L]', '')) / 1000) + ' m3');
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_CEL(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Conditions.CEL';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Water temperature',
							de: 'Wassertemperatur'
						},
						type: 'string',
						role: 'conditions.watertemp',
						unit: '°C',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: String((parseFloat(String(value.getCEL)) / 10)), ack: true });
				this.log.info('Water temperature: ' + String((parseFloat(String(value.getCEL)) / 10)) + ' °C');
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async state_CND(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const state_ID = 'Conditions.CND';
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Water conductivitye',
							de: 'Leitfähigkeit'
						},
						type: 'string',
						role: 'conditions.waterconductivity',
						unit: 'uS/cm',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: String(value.getCND), ack: true });
				this.log.info('Water conductivity: ' + String(value.getCND) + ' uS/cm');
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

}

//===================================================
// Async Delay Funktion (you can await for delay)
function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

const isObject = function (val) {
	if (val === null) { return false; }
	return (typeof val === 'object');
};

//===================================================
// Timer Event Handler
async function alarm_poll() {
	try {
		await myAdapter.alarm_TimerTick();
	} catch (err) {
		//throw new Error(err);
	}
}

async function short_poll() {
	try {
		await myAdapter.short_TimerTick();
	} catch (err) {
		//throw new Error(err);
	}
}

async function long_poll() {
	try {
		await myAdapter.long_TimerTick();
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


