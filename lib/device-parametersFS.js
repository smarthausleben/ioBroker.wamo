/* eslint-disable quotes */

/**
 * [Objects] Adapter chanels definition
 * ========================
 * SYR SafiFloore Sensor
 * ========================
 */
const AdapterChannelsFS = {
	DeviceControl: {
		path: 'FloreSensors.X.Device-Control',
		channel: {
			type: 'channel',
			common: {
				name: {
					"en": "Device control",
					"de": "Gerätesteuerung",
					"ru": "Контроль устройства",
					"pt": "Controle de dispositivo",
					"nl": "Device controle",
					"fr": "Contrôle des dispositifs",
					"it": "Controllo dispositivi",
					"es": "Control de dispositivos",
					"pl": "Kontrola Device",
					"zh-cn": "证人控制"
				},
			},
			native: {}
		}
	},
	DeviceRawData: {
		path: 'FloreSensors.X.RawData',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Raw data',
					'de': 'Rohdaten',
					'ru': 'Необработанные данные',
					'pt': 'Dados não tratados',
					'nl': 'Ruwe data',
					'fr': 'Données brutes',
					'it': 'Dati grezzi',
					'es': 'Datos sin procesar',
					'pl': 'Surowe dane',
					'zh-cn': '原始数据'
				},
			},
			native: {}
		}
	},
	DeviceInfo: {
		path: 'FloreSensors.X.Info',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Device info',
					'de': 'Geräteinformationen',
					'ru': 'Информация об устройстве',
					'pt': 'Informação do dispositivo',
					'nl': 'Apparaat info',
					'fr': 'Info appareil',
					'it': 'Informazioni sul dispositivo',
					'es': 'Información del dispositivo',
					'pl': 'Informacje o urządzeniu',
					'zh-cn': '设备信息'
				},
			},
			native: {}
		}
	},
	DeviceSettings: {
		path: 'FloreSensors.X.Settings',
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
		path: 'FloreSensors.X.Device-Conditions',
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
};

const DeviceParametetsFS = {
	FirmwareVersion: {
		id: 'VER',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Firmware Version',
					'de': 'Firmware Version',
					'ru': 'Версия прошивки',
					'pt': 'Versão do firmware',
					'nl': 'Firmware versie',
					'fr': 'Version du firmware',
					'it': 'Versione del firmware',
					'es': 'Versión de firmware',
					'pl': 'Wersja oprogramowania',
					'zh-cn': '固件版本'
				},
				type: 'string',
				unit: null,
				role: 'info.firmware',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	SerialNumber: {
		id: 'SRN',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'serial number',
					'de': 'Seriennummer',
					'ru': 'серийный номер',
					'pt': 'número de série',
					'nl': 'serienummer',
					'fr': 'numéro de série',
					'it': 'numero di serie',
					'es': 'número de serie',
					'pl': 'numer seryjny',
					'zh-cn': '序列号'
				},
				type: 'string',
				unit: null,
				role: 'info.serial',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'ADMIN',
		readCommand: 'get',
		writeCommand: 'set'
	},
	FabricSerialNumber: {
		id: 'FRN',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Fabric serial number",
					"de": "Hersteller Seriennummer",
					"ru": "Серийный номер ткани",
					"pt": "Número de série de tecido",
					"nl": "Fabric serienummer",
					"fr": "Numéro de série",
					"it": "Numero di serie in tessuto",
					"es": "Número de serie de tejido",
					"pl": "Numer seryjny Fabryki",
					"uk": "Тканини серійний номер",
					"zh-cn": "Fbricsers"
				},
				type: 'string',
				unit: null,
				role: 'info.serial',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	CodeNumber: {
		id: 'CNO',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Code number',
					'de': 'Codenummer',
					'ru': 'Кодовое число',
					'pt': 'Número do código',
					'nl': 'Codenummer',
					'fr': 'Numéro de code',
					'it': 'Numero di codice',
					'es': 'Número de código',
					'pl': 'Numer kodu',
					'zh-cn': '代号'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	MACAddress: {
		id: 'MAC',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'IP address',
					'de': 'IP Adresse',
					'ru': 'айпи адрес',
					'pt': 'endereço de IP',
					'nl': 'IP adres',
					'fr': 'adresse IP',
					'it': 'indirizzo IP',
					'es': 'dirección IP',
					'pl': 'adres IP',
					'zh-cn': 'IP地址'
				},
				type: 'string',
				unit: null,
				role: 'info.mac',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	FsType: {
		id: 'TYP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Floor Sensor Type",
					"de": "Bodensensor Typ",
					"ru": "Тип датчика пола",
					"pt": "Tipo de sensor de piso",
					"nl": "Vertaling:",
					"fr": "Type de capteur de sol",
					"it": "Tipo di sensore del pavimento",
					"es": "Tipo de sensor de piso",
					"pl": "Floor Sensor",
					"uk": "Тип датчика",
					"zh-cn": "Floor Sensor类型"
				},
				type: 'string',
				unit: null,
				role: 'info.hardware',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	BatteryState: {
		id: 'BAT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Battery state",
					"de": "Batteriezustand",
					"ru": "Состояние батареи",
					"pt": "Estado da bateria",
					"nl": "Batterij staat",
					"fr": "État de la batterie",
					"it": "Stato della batteria",
					"es": "Estado de la batería",
					"pl": "Strona internetowa",
					"uk": "Стан батареї",
					"zh-cn": "邦"
				},
				type: 'number',
				unit: '%',
				role: 'value.battery',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceConditions.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	EnvTemperature: {
		id: 'CEL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Environment temperature",
					"de": "Umgebungstemperatur",
					"ru": "Температура окружающей среды",
					"pt": "Temperatura ambiente",
					"nl": "Environatietemperatuur",
					"fr": "Température de l ' environnement",
					"it": "Temperatura ambiente",
					"es": "Temperatura ambiente",
					"pl": "Temperatura środowiska",
					"uk": "Температура навколишнього середовища",
					"zh-cn": "环境温度"
				},
				type: 'number',
				unit: '°C',
				role: 'value.temperature',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceConditions.path,
		saveRawData: true,
		createOnStartup: false,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	}
};

module.exports = {AdapterChannelsFS, DeviceParametetsFS};