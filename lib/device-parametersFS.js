/* eslint-disable quotes */

/**
 * [Objects] Adapter chanels definition
 * ========================
 * SYR SafiFloore Sensor
 * ========================
 */

/**
 * [Objects] Calculatet statistic values
 * including state definition
 */

const channelsRootName = 'FloorSensors';

const AdapterChannelsFS = {
	DeviceControl: {
		path: channelsRootName + '.X.Device-Control',
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
				desc: {
					"en": "Changable objects to control the SafeFloor device ",
					"de": "Änderbare Objekte zur Steuerung des SafeFloor-Geräts",
					"ru": "Изменяемые объекты для управления устройством SafeFloor",
					"pt": "Objetos variáveis para controlar o dispositivo SafeFloor",
					"nl": "Veranderbare objecten om het SafeFloor apparaat te controleren",
					"fr": "Des objets modifiés pour contrôler le dispositif SafeFloor",
					"it": "Oggetti modificabili per controllare il dispositivo SafeFloor",
					"es": "Objetos cambiantes para controlar el dispositivo SafeFloor",
					"pl": "Zmiany obiektów kontrolują urządzenia SafeFloor",
					"uk": "Зміна об'єктів для управління пристроєм SafeFloor",
					"zh-cn": "控制安全车辆装置的可变目标"
				},
			},
			native: {}
		}
	},
	DeviceRawData: {
		path: channelsRootName + '.X.RawData',
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
		path: channelsRootName + '.X.Info',
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
		path: channelsRootName + '.X.Settings',
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
		path: channelsRootName + '.X.Device-Conditions',
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
	}
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
					'uk': 'Версія прошивки',
					'zh-cn': '固件版本'
				},
				desc: {
					"en": "Syr Floorsensor (version number)",
					"de": "Syr Floorsensor (Versionsnummer)",
					"ru": "Syr Floorsensor (номер версии)",
					"pt": "Syr Floorsensor (número de versão)",
					"nl": "Syr Floorsensor (version number)",
					"fr": "Syr Floorsensor (numéro de version)",
					"it": "Syr Floorsensor (numero di conversione)",
					"es": "Syr Floorsensor (número de versión)",
					"pl": "Obserwator wodnosamolotów (numer zwrotny)",
					"uk": "Сир Підлогсенор (версія номер)",
					"zh-cn": "Syr Floorsensor(更替人数)"
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
					'uk': 'серійний номер',
					'zh-cn': '序列号'
				},
				desc: {
					"en": "9 digits",
					"de": "9 ziffern",
					"ru": "9 цифр",
					"pt": "9 dígitos",
					"nl": "9 cijfers",
					"fr": "9 chiffres",
					"it": "9 cifre",
					"es": "9 dígitos",
					"pl": "9 cyfr",
					"uk": "9 цифр",
					"zh-cn": "9 数"
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
					'uk': 'Тканини серійний номер',
					"zh-cn": "Fbricsers"
				},
				desc: {
					"en": "9 digits",
					"de": "9 ziffern",
					"ru": "9 цифр",
					"pt": "9 dígitos",
					"nl": "9 cijfers",
					"fr": "9 chiffres",
					"it": "9 cifre",
					"es": "9 dígitos",
					"pl": "9 cyfr",
					"uk": "9 цифр",
					"zh-cn": "9 数"
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
					'uk': 'Номер коду',
					'zh-cn': '代号'
				},
				desc: {
					"en": "16 characters",
					"de": "16 zeichen",
					"ru": "16 символов",
					"pt": "16 caracteres",
					"nl": "16 personages",
					"fr": "16 caractères",
					"it": "16 caratteri",
					"es": "16 caracteres",
					"pl": "16 znaków",
					"uk": "16 символів",
					"zh-cn": "16种特性"
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
					"en": "MAC address",
					"de": "MAC-Adresse",
					"ru": "MAC адрес",
					"pt": "Endereço MAC",
					"nl": "MAC adres",
					"fr": "Adresse MAC",
					"it": "Indirizzo MAC",
					"es": "Dirección del MAC",
					"pl": "Adres MAC",
					"uk": "Адреса MAC",
					"zh-cn": "MAC地址"
				},
				desc: {
					"en": "xx:xx:xx:xx:xx:xx",
					"de": "xx:xx:xx:xx:xx:xx",
					"ru": "xx:xx:xx:xx:xx:xx",
					"pt": "xx:xx:xx:xx:xx:xx",
					"nl": "xx:xx:xx:xx:xx:xx",
					"fr": "xx:xx:xx:xx:xx:xx",
					"it": "xx:xx:xx:xx:xx:xx",
					"es": "xx:xx:xx:xx:xx:xx",
					"pl": "xx:xx:xx:xx:xx:xx",
					"uk": "xx:xx:xx:xx:xx:xx",
					"zh-cn": "xx:xx:xx:xx:xx:xx:xx"
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
				desc: {
					"en": "0...100% (min. 2,4V => 0%, max. 3,1V => 100%)",
					"de": "0...100% (min. 2,4V => 0%, max. 3,1V = > 100 %",
					"ru": "0...100% (мин. 2,4V => 0%, макс. 3,1V => 100%",
					"pt": "0...100% (min. 2,4V => 0%, máx. 3,1V => 100%)",
					"nl": "0...100% (4V) %, max. 3,1V 100%",
					"fr": "0...100% (min. 2,4V = vaccin 0%, max. 3,1V = 100%",
					"it": "0...100% (min. 2,4V = 0%, max. 3,1V = > 100%)",
					"es": "0...100% (min. 2,4V = coeficiente 0%, max. 3,1V = título 100%)",
					"pl": "0,100% (min. 2,4V => 0%, max. 3,1V => 100%",
					"uk": "0...100% (мін. 2,4V => 0%, макс. 3,1V => 100%",
					"zh-cn": "页:1 3 1V = 100%"
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
				desc: {
					"en": "0.0...100.0°C",
					"de": "0,0...100.0°C",
					"ru": "0.0...100.0°C",
					"pt": "0.0...100.0°C",
					"nl": "0.0...100.0 GRADEN",
					"fr": "0,0...100,0°C",
					"it": "0.0...100.0°C",
					"es": "0,010,0°C",
					"pl": "0,0.100.0°C",
					"uk": "0.0...100.0°C",
					"zh-cn": "0.0..100.0°C"
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
	},
	EnvHumidity: {
		id: 'HMD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Environment humidity",
					"de": "Luftfeuchtigkeit",
					"ru": "Окружающая среда влажность",
					"pt": "Umidade do ambiente",
					"nl": "Environment vochtigheid",
					"fr": "Humidité de l ' environnement",
					"it": "Ambiente",
					"es": "Humedad ambiental",
					"pl": "Wilgotność środowiska naturalnego",
					"uk": "Вологість навколишнього середовища",
					"zh-cn": "环境障碍"
				},
				desc: {
					"en": "0...100%",
					"de": "0...100%",
					"ru": "0...100%",
					"pt": "0...100%",
					"nl": "0,100%",
					"fr": "0...100%",
					"it": "0...100%",
					"es": "0...100%",
					"pl": "0,100%",
					"uk": "0...100%",
					"zh-cn": "页:1"
				},
				type: 'number',
				unit: '%',
				role: 'value.humidity',
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
	},
	WaterDetection: {
		id: 'WTD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Water detection",
					"de": "Wasserdetektion",
					"ru": "Обнаружение воды",
					"pt": "Detecção de água",
					"nl": "Water detectie",
					"fr": "Détection d ' eau",
					"it": "Rilevamento dell'acqua",
					"es": "Detección de agua",
					"pl": "Wykrywanie wody",
					"uk": "Виявлення води",
					"zh-cn": "水事探测"
				},
				desc: {
					"en": "0 no detected; 1 detected",
					"de": "0 nicht erkannt; 1 erkannt",
					"ru": "0 не обнаружено; 1 обнаружено",
					"pt": "0 não detectado; 1 detectado",
					"nl": "0 no detect, 1 gedetecteerd",
					"fr": "0 non détecté; 1 détecté",
					"it": "0 nessun rilevato; 1 rilevato",
					"es": "0 no detectado; 1 detectado",
					"pl": "0 nie wykryto; 1",
					"uk": "0 не виявлено; 1 виявлений",
					"zh-cn": "目 录"
				},
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 1,
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceConditions.path,
		saveRawData: false,
		createOnStartup: true,
		initialValue: 0,
		levelRead: null,
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: null
	},
	WiFiSSID: {
		id: 'WFC',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'WiFi SSID',
					'de': 'WLAN-SSID',
					'ru': 'WiFi SSID',
					'pt': 'Wi-Fi SSID',
					'nl': 'WiFi SSID',
					'fr': 'SSID Wi-Fi',
					'it': 'WiFi SSID',
					'es': 'Wi-Fi SSID',
					'pl': 'Wi-Fi SSID',
					'zh-cn': '无线SSID'
				},
				desc: {
					"en": "Set WiFi SSID (1-32 characters) and connects to network",
					"de": "WLAN SSID (1-32 Zeichen) und Netzwerkverbindung",
					"ru": "Установите WiFi SSID (1-32 символа) и подключается к сети",
					"pt": "Definir SSID WiFi (1-32 caracteres) e se conecta à rede",
					"nl": "Zet WiFi SSID (1-32 personages en verbinding met netwerk",
					"fr": "Set WiFi SSID (1-32 caractères) et connecte au réseau",
					"it": "Impostare WiFi SSID (1-32 caratteri) e connettersi alla rete",
					"es": "Establecer WiFi SSID (1-32 caracteres) y se conecta a la red",
					"pl": "Set WiFi SSID (1-32 postaci) i łączy się z siecią",
					"uk": "Встановити WiFi SSID (1-32 символів) підключитися до мережі",
					"zh-cn": "A. 建立WFi SSID(1-32特征)和连接网络"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WiFiState: {
		id: 'WFS',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'WiFi state',
					'de': 'WiFi-Zustand',
					'ru': 'Состояние WiFi',
					'pt': 'Estado Wi-Fi',
					'nl': 'wifi-status',
					'fr': 'État Wi-Fi',
					'it': 'Stato Wi-Fi',
					'es': 'estado wifi',
					'pl': 'Stan Wi-Fi',
					"uk": "Статус на сервери",
					'zh-cn': 'WiFi 状态'
				},
				desc: {
					"en": "0 Disconnected; 1 Connecting; 2 Connected",
					"de": "0 getrennt; 1 am verbinden; 2 verbunden",
					"ru": "0 Отключено; 1 Подключение; 2 Подключено",
					"pt": "0 Desconectado; 1 Conectando; 2 Conectado",
					"nl": "0 ontsmet, 1 verbinding, 2 verbindingen",
					"fr": "0 Déconnecté; 1 raccordement; 2 connectés",
					"it": "0 Scollegato; 1 Collegamento; 2 Collegato",
					"es": "0 Desconectado; 1 Conexión; 2 Conectado",
					"pl": "0 Disconnected; 1 Connecting; 2 Connected",
					"uk": "0 Відключено; 1 Підключення; 2",
					"zh-cn": "页: 1"
				},
				type: 'string',
				unit: null,
				role: 'indicator.reachable',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceConditions.path,
		rangevalues: {
			'0': {
				'en': 'is disconnected',
				'de': 'ist getrennt',
				'ru': 'отключен',
				'pt': 'está desconectado',
				'nl': 'is losgekoppeld',
				'fr': 'est déconnecté',
				'it': 'è disconnesso',
				'es': 'está desconectado',
				'pl': 'jest odłączony',
				"uk": "відключено",
				'zh-cn': '已断开连接'
			},
			'1': {
				'en': 'is connecting',
				'de': 'verbindet',
				'ru': 'подключается',
				'pt': 'está conectando',
				'nl': 'is verbinden',
				'fr': 'se connecte',
				'it': 'si sta connettendo',
				'es': 'está conectando',
				'pl': 'łączy się',
				"uk": "з'єднання",
				'zh-cn': '正在连接'
			},
			'2': {
				'en': 'is connected',
				'de': 'Ist verbunden',
				'ru': 'подключен',
				'pt': 'está conectado',
				'nl': 'is verbonden',
				'fr': 'est connecté',
				'it': 'è connesso',
				'es': 'está conectado',
				'pl': 'jest połączone',
				"uk": "підключений",
				'zh-cn': '已连接'
			}
		},
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WiFiRSSI: {
		id: 'WFR',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'WiFi RSSI',
					'de': 'WLAN-RSSI',
					'ru': 'WiFi RSSI',
					'pt': 'Wi-Fi RSSI',
					'nl': 'WiFi RSSI',
					'fr': 'RSSI Wi-Fi',
					'it': 'WiFi RSSI',
					'es': 'Wi-Fi RSSI',
					'pl': 'Wi-Fi RSSI',
					"uk": "Контакти",
					'zh-cn': '无线RSSI'
				},
				desc:{
					"en": "Strength of WiFi signal in %",
					"de": "Stärke des WLAN-Signals in %",
					"ru": "Сила WiFi сигнала в %",
					"pt": "Força de sinal WiFi em %",
					"nl": "Strengte van WiFi signaal in %",
					"fr": "Force du signal WiFi en %",
					"it": "Resistenza del segnale WiFi in %",
					"es": "Fuerza de señal WiFi en %",
					"pl": "Wykorzystywanie sygnału WiFi w %",
					"uk": "Сила сигналу WiFi в %",
					"zh-cn": "维卡伊信号的强度"
				},
				type: 'string',
				unit: '%',
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
	WeatherMeasurementPeriod: {
		id: 'WMP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Interval between humidity and temperature measurement. Results are stored in non-volatile memory",
					"de": "Intervall zwischen Feuchtigkeit und Temperaturmessung. Ergebnisse werden in nichtflüchtigen Speichern gespeichert",
					"ru": "Интервал между влажностью и температурным измерением. Результаты хранятся в неэлектрической памяти",
					"pt": "Intervalo entre umidade e medição de temperatura. Os resultados são armazenados em memória não volátil",
					"nl": "Interval tussen vochtigheid en temperatuur. Resultaten worden opgeslagen in niet-vrije herinneringen",
					"fr": "Intervalle entre humidité et mesure de température. Les résultats sont stockés dans la mémoire non volatile",
					"it": "Intervallo tra umidità e misura della temperatura. I risultati sono memorizzati in memoria non volatile",
					"es": "Intervalo entre humedad y medición de temperatura. Los resultados se almacenan en memoria no volátil",
					"pl": "Między wilgotnością a pomiarami temperatury. Wyniki są przechowywane w pamięci nielotnej",
					"uk": "Інтервал між вологістю і вимірюванням температури. Результати зберігаються в нелетильній пам'яті",
					"zh-cn": "湿度与温度测量之间的间隔。 成果存入无活力的记忆"
				},
				desc:{
					"en": "60…(24*3600)[s] (up to 24h)",
					"de": "60...(24*3600)[s] (bis 24h)",
					"ru": "60...(24*3600)[s] (до 24h)",
					"pt": "60...(24*3600)[s] (até 24h)",
					"nl": "60..",
					"fr": "60...(24*3600)[s] (jusqu'à 24h)",
					"it": "60...(24*3600)[s] (fino a 24h)",
					"es": "60...(24*3600)[s] (hasta las 24 horas)",
					"pl": "(24*3600) (do 24h)",
					"uk": "60...(24*3600)[s] (до 24h)",
					"zh-cn": "60.(24*36 600)[(24至24h)"
				},
				type: 'number',
				unit: 's',
				role: 'state',
				min: 60,
				max: 86400,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	}
};

module.exports = {AdapterChannelsFS, DeviceParametetsFS};