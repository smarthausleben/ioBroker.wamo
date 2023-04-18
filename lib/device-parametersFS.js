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

const channelsRootNameFS = 'FloorSensors';

const AdapterChannelsFS = {
	DeviceControl: {
		path: channelsRootNameFS + '.X.Device-Control',
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
		path: channelsRootNameFS + '.X.RawData',
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
		path: channelsRootNameFS + '.X.Info',
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
		path: channelsRootNameFS + '.X.Settings',
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
		path: channelsRootNameFS + '.X.Device-Conditions',
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
	AdminMode: {
		id: 'ADM(2)f',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Admin command response",
					"de": "Antwort Admin-Befehl",
					"ru": "Admin командный ответ",
					"pt": "Resposta de comando de administrador",
					"nl": "Administratie",
					"fr": "Réponse de la commande Admin",
					"it": "Risposta del comando Admin",
					"es": "Respuesta del comando Admin",
					"pl": "Admin",
					"uk": "Відповідність команди адміністратора",
					"zh-cn": "指挥和控制"
				},
				desc: {
					"en": "Response from device if you put it into admin mode",
					"de": "Antwort von Gerät, wenn Sie es in Admin-Modus setzen",
					"ru": "Ответ с устройства, если вы положили его в режим админ",
					"pt": "Resposta do dispositivo se você colocá-lo no modo admin",
					"nl": "Verantwoord van apparaat als je het in administratie zet",
					"fr": "Réponse de l'appareil si vous le mettez en mode admin",
					"it": "Risposta dal dispositivo se lo metti in modalità admin",
					"es": "Respuesta del dispositivo si lo pones en modo de administración",
					"pl": "Odpowiedzialność od urządzenia, jeśli uwolnisz ją w tryb adminowy",
					"uk": "Відповідність від пристрою, якщо вводити його в режим адміністратора",
					"zh-cn": "如果你把它置于突出的格局,那么对装置的反应"
				},
				type: 'boolean',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceControl.path,
		saveRawData: false,
		createOnStartup: true,
		initialValue: null,
		levelRead: 'RESULT',
		levelWrite: 'SERVICE',
		readCommand: null,
		writeCommand: 'set'
	},
	SleepMode: {
		id: 'SLP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Put device into sleep mode",
					"de": "Gerät in den Schlafmodus bringen",
					"ru": "Положите устройство в режим сна",
					"pt": "Coloque o dispositivo no modo de sono",
					"nl": "Zet apparaat in slaapmodus",
					"fr": "Mettre l'appareil en mode veille",
					"it": "Mettere il dispositivo in modalità sonno",
					"es": "Poner dispositivo en modo de sueño",
					"pl": "Urządzenie w trybie snu",
					"uk": "Поставте пристрій в режим сну",
					"zh-cn": "睡觉装置"
				},
				desc: {
					"en": "Response from device if you put it into sleep mode",
					"de": "Antwort vom Gerät, wenn Sie es in den Schlafmodus setzen",
					"ru": "Ответ с устройства, если вы положили его в режим сна",
					"pt": "Resposta do dispositivo se você colocá-lo no modo de sono",
					"nl": "Verantwoord van apparaat als je het in slaapmodus stopt",
					"fr": "Réponse de l'appareil si vous le mettez en mode veille",
					"it": "Risposta dal dispositivo se lo metti in modalità sonno",
					"es": "Respuesta desde el dispositivo si lo pones en modo de sueño",
					"pl": "Pozwoliło to na urządzenie, jeśli uwolnisz go w tryb snu",
					"uk": "Відповідь від пристрою, якщо ви вносите його в режим сну",
					"zh-cn": "如果你把它带到睡觉模式,那么从装置中作出反应"
				},
				type: 'boolean',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: AdapterChannelsFS.DeviceControl.path,
		saveRawData: false,
		createOnStartup: true,
		initialValue: null,
		levelRead: 'RESULT',
		levelWrite: 'USER',
		readCommand: null,
		writeCommand: 'set'
	},
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
		createOnStartup: true,
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
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
		initialValue: 0,
		levelRead: 'USER',
		levelWrite: null,
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
		statePath: AdapterChannelsFS.DeviceConditions.path,
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
	},
	BatteryMeasurementPeriod: {
		id: 'BMP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Battery measurement period",
					"de": "Messperiode des Batteriezustands",
					"ru": "Период измерения батареи",
					"pt": "Período de medição da bateria",
					"nl": "Batterijentijd",
					"fr": "Période de mesure de la batterie",
					"it": "Periodo di misura della batteria",
					"es": "Período de medición de la batería",
					"pl": "Okres budowy",
					"uk": "Термін вимірювання акумулятора",
					"zh-cn": "B. 排放衡量期间"
				},
				desc: {
					"en": "60…(14*24*3600)[s] (up to 14days) - Should be equal to Report Connection Period for best battery utilisation",
					"de": "60…(14*24*3600)[s] (bis zu 14 Tage) - Sollte gleich wie die Messperiode der Batterie sein für beste Batterieauslastung",
					"ru": "60…(14*24*3600)[s] (до 14 дней) - Должен быть равным периоду соединения отчета для лучшего использования батареи",
					"pt": "60…(14*24*3600)[s] (até 14 dias) - Deve ser igual ao Período de Conexão de Relatório para melhor utilização da bateria",
					"nl": "60…(14*24*3600)[s] (up to 14days) - Het zou gelijk moeten zijn aan het verslag van de connectie van de beste batterijen",
					"fr": "60…(14*24*3600)[s] (jusqu'à 14jours) - Devrait être égale à la période de connexion de rapport pour une meilleure utilisation de la batterie",
					"it": "60…(14*24*3600)[s] (fino a 14 giorni) - Dovrebbe essere uguale a Report Periodo di connessione per la migliore utilizzazione della batteria",
					"es": "60…(14*24*3600)[s] (hasta 14 días) - Debe ser igual a Report Connection Periodo para la mejor utilización de batería",
					"pl": "60…(14*24*3600)[s] (do 14 dni) - Może być równa z okresem łączeń dla najlepszej baterii",
					"uk": "60…(14*24*3600)[s] (до 14 днів) - Чи повинен бутирівняний період зв'язку звіту для кращого утилізації батареї",
					"zh-cn": "60…(14*24*3600)[s] (14天) - 如果等于报告最佳电池的使用权"
				},
				type: 'number',
				unit: 's',
				role: 'value.interval',
				min: 60,
				max: 1209600,
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
	},
	ReportConnectionPeriod: {
		id: 'RCP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Report connection period",
					"de": "Meldezeitraum",
					"ru": "Период подключения отчета",
					"pt": "Período de ligação ao relatório",
					"nl": "Vertaling:",
					"fr": "Période visée par le rapport",
					"it": "Periodo di connessione",
					"es": "Período de conexión",
					"pl": "Okres emisji",
					"uk": "Період підключення звіту",
					"zh-cn": "报告所涉期间"
				},
				desc: {
					"en": "60…(14*24*3600)[s] (up to 14days) - With this period Floorsensor connects to WebService or Safe-Tec according to ISN command",
					"de": "60…(14*24*3600)[s] (bis zu 14 Tage) - Mit diesem Abstand verbindet sich der Floorsensor mit dem WebService oder dem Safe-Tec gemäss ISN-Befehl",
					"ru": "60…(14*24*3600)[s] (до 14 дней) - С этим периодом Floorsensor подключается к WebService или Safe-Tec в соответствии с командой ISN",
					"pt": "60…(14*24*3600)[s] (até 14 dias) - Com este período Floorsensor se conecta ao WebService ou Safe-Tec de acordo com o comando ISN",
					"nl": "60…(14*24*3600)[s] (up to 14days) - Met deze periode verbindt Floorsensor met WebService of Safe-Tec volgens het ISN-commandant",
					"fr": "60…(14*24*3600)[s] (jusqu'à 14jours) - Avec cette période Floorsensor se connecte à WebService ou Safe-Tec selon la commande ISN",
					"it": "60…(14*24*3600)[s] (fino a 14 giorni) - Con questo periodo Floorsensor si connette a WebService o Safe-Tec secondo il comando ISN",
					"es": "60…(14*24*3600)[s] (hasta 14 días) - Con este período Floorsensor se conecta a WebService o Safe-Tec según el comando ISN",
					"pl": "60…(14*24*3600)[s] (do 14 dni) - W tym okresie czujnik Floorsensor łączy się z WebService lub Safe-Tec zgodnie z poleceniem ISN",
					"uk": "60…(14*24*3600)[s] (до 14 днів) - З цим періодом підлогове підключення до WebService або Safe-Tec за командою ISN",
					"zh-cn": "60…(14*24*3600)[s] (14天) - 随着这段时间,Floorsensor根据ISN指挥公司与Service或Sfe-Tec连接。"
				},
				type: 'number',
				unit: 's',
				role: 'value.interval',
				min: 10,
				max: 1209600,
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
	},
	AlarmDuration: {
		id: 'ALD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Alarm duration (signaling time)",
					"de": "Alarmdauer (Signalisierungszeit)",
					"ru": "Продолжительность сигнализации (время регистрации)",
					"pt": "Duração do alarme (tempo de sinalização)",
					"nl": "Alarm duration (ondertekenende tijd)",
					"fr": "Durée de l ' alarme (temps de signature)",
					"it": "Durata dell'allarme (orario di firma)",
					"es": "Duración de la alarma (tiempo de firma)",
					"pl": "Czas sygnalizacji (ang.)",
					"uk": "Тривалість сигналізації (час відправлення)",
					"zh-cn": "期限(时间)"
				},
				desc: {
					"en": "Duration of flood/weather/other loud alarm (buzzer and red LED turned on)",
					"de": "Dauer von Flut/Wetter/Sonstigen Alarmen (Signalton und rote LED eingeschaltet)",
					"ru": "Продолжительность наводнения / погодных / других громких сигналов тревоги (сирен и красный светодиод включен)",
					"pt": "Duração do inundação / urze / outro alarme alto (desligado e LED vermelho)",
					"nl": "Vertaling:",
					"fr": "Durée de l ' inondation/d ' une hélice ou d ' une autre alarme bruyante (sirène et LED rouge allumée)",
					"it": "Durata dell'alluvione/infrazione/altri rumori (sirena e LED rosso acceso)",
					"es": "Duración de la inundación / lluvia / otra alarma fuerte (siren y LED rojo encendido)",
					"pl": "Powódź i inne głośne alarmy (siren i czerwony LED odwróciły się)",
					"uk": "Тривалість затоплення/пожежна/іншого звукового сигналу (попередня та червона світлодіодна перетворена)",
					"zh-cn": "在水灾/威热/声音(希伦和红十字运动)期间"
				},
				type: 'number',
				unit: 's',
				role: 'value.interval',
				min: 1,
				max: 600,
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
	},
	AlarmReleaseTime: {
		id: 'ALI',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Alarm release time",
					"de": "Alarm Alarmdauer",
					"ru": "Время релиза тревоги",
					"pt": "Tempo de liberação de alarme",
					"nl": "Alarm verlaat de tijd",
					"fr": "Temps de relâchement des armes",
					"it": "Tempo di rilascio dell'allarme",
					"es": "Hora de lanzamiento de alarma",
					"pl": "Alarm release time",
					"uk": "Час релізу сигналу",
					"zh-cn": "释放时间"
				},
				desc: {
					"en": "Duration of flood quiet alarm (siren and red LED turned off, energy saving)",
					"de": "Dauer des Flut Alarms (Signalton und rote LED ausgeschaltet, Energieeinsparung)",
					"ru": "Продолжительность спокойной сигнализации (сирен и красный светодиод выключен, энергосберегающий)",
					"pt": "Duração do alarme silencioso de inundação (ser e LED vermelho desligado, economia de energia)",
					"nl": "Vertaling van overstromingsalarm (siren en rode LED uitgezet, energie spaar)",
					"fr": "Durée de l'alarme calme (sirène et LED rouge éteint, économie d'énergie)",
					"it": "Durata dell'alluvione allarme silenzioso (sirena e LED rosso spento, risparmio energetico)",
					"es": "Duración de la alarma silenciosa de inundación (sirena y LED rojo apagado, ahorro de energía)",
					"pl": "Powódź cichego alarmu (siren i czerwony LED odwróciły się, oszczędność energii)",
					"uk": "Тривалість затоплення тихої сигналізації (зняття з червоного та червоного світлодіода, економія енергії)",
					"zh-cn": "在水灾静止(希伦和红树林倒塌,能源节约)"
				},
				type: 'number',
				unit: 's',
				role: 'value.interval',
				min: 10,
				max: 600,
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
	},
	WeatherAlarmReleaseTime: {
		id: 'WAR',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Weather Alarm Release time",
					"de": "Wetter Alarmdauer",
					"ru": "Погода Сигнализация Время выпуска",
					"pt": "Tempo de alarme Tempo de lançamento",
					"nl": "Weather Alarm Releases",
					"fr": "Temps de sortie de l'alarme",
					"it": "Tempo di rilascio dell'allarme",
					"es": "El tiempo de liberación de alarma",
					"pl": "Oficjalna strona Weather Alarm",
					"uk": "Погода Час релізу",
					"zh-cn": "宣 日"
				},
				desc: {
					"en": "Duration of weather quiet alarm (caused by temperature or humidity)",
					"de": "Dauer des Wetters Alarms (durch Temperatur oder Feuchtigkeit verursacht)",
					"ru": "Продолжительность погодной тихой тревоги (потребляется при температуре или влажности)",
					"pt": "Duração do alarme silencioso do tempo (causado pela temperatura ou umidade)",
					"nl": "Verdrag van het weer rustig alarm",
					"fr": "Durée de l'alarme silencieuse (en raison de la température ou de l'humidité)",
					"it": "Durata del tempo allarme tranquillo (causato da temperatura o umidità)",
					"es": "Duración de la alarma silenciosa del tiempo (causada por temperatura o humedad)",
					"pl": "Pogoda spokojnego alarmu (ze względu na temperaturę lub wilgotność)",
					"uk": "Тривалість погоди тиха сигналізація (за умови температури або вологості)",
					"zh-cn": "气候静止警报(温度或湿度造成的)"
				},
				type: 'number',
				unit: 's',
				role: 'value.interval',
				min: 10,
				max: 3600,
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
	},
	AccesPointTimeout: {
		id: 'APT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Access Point timeout",
					"de": "Access Point Timeout",
					"ru": "Timeout точки доступа",
					"pt": "Ponto de acesso",
					"nl": "Acces Point time-out",
					"fr": "Access Point timeout",
					"it": "Access Point timeout",
					"es": "Tiempo de salida de puntos de acceso",
					"pl": "Data dostępu",
					"uk": "Час відправлення",
					"zh-cn": "进入时间"
				},
				desc: {
					"en": "Time until Access Point will be switched off. - 30…3600s (1h)",
					"de": "Zeit, bis der Access Point ausgeschaltet wird. - 30...3600s (1h)",
					"ru": "Время до отключения точки доступа. - 30...3600с (1ч)",
					"pt": "Tempo até o ponto de acesso será desligado. - 30...3600 (1h)",
					"nl": "Tijd tot Access Point wordt uitgeschakeld. - 30...3600",
					"fr": "Temps jusqu'à ce que Access Point soit désactivé. - 30...3600s (1h)",
					"it": "Tempo fino a quando Access Point sarà spento. - 30.3600 (1h)",
					"es": "Tiempo hasta que el punto de acceso se apagará. - 30... 3600s (1h)",
					"pl": "Czas do czasu, gdy zostanie przesunięty punkt dostępu. 30.3600 (1h)",
					"uk": "Час до точки доступу буде вимкнено. - 30...3600s (1 год)",
					"zh-cn": "在进入点之前,时间将取消。 - 30.30 600美元(1h)"
				},
				type: 'number',
				unit: 's',
				role: 'value.interval',
				min: 30,
				max: 3600,
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
	},
	EspMaxRunTime: {
		id: 'EMR',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "ESP Maximal run time",
					"de": "ESP Maximale Laufzeit",
					"ru": "ЭСП Максимальное время выполнения",
					"pt": "ESP Tempo de execução máximo",
					"nl": "ESP Maximale looptijd",
					"fr": "ESP Durée maximale",
					"it": "ESP Tempo di esecuzione massimo",
					"es": "ESP Tiempo máximo de ejecución",
					"pl": "ESP Maksymalny czas",
					"uk": "ЕСП Максимальний час запуску",
					"zh-cn": "ESP 管理时间"
				},
				desc: {
					"en": "Max time of trying connecting to Server by Floorsensor WiFi client.",
					"de": "Maximale Zeit, um sich mit dem Server mittels Floorsensor WiFi-Client zu verbinden.",
					"ru": "Максимальное время подключения к серверу от Floorsensor WiFi клиента.",
					"pt": "Tempo máximo de tentativa de conexão com o Servidor pelo cliente WiFi Floorsensor.",
					"nl": "Max tijd van het proberen contact te maken met Server door Floorsensor WiFi cliënt.",
					"fr": "Temps maximum d'essayer de se connecter à Server par client Floorsensor WiFi.",
					"it": "Tempo massimo di provare a connettersi a Server tramite client WiFi Floorsensor.",
					"es": "Max tiempo de intentar conectarse a Server por cliente WiFi Floorsensor.",
					"pl": "Max próbuje łączyć się z Serverem przez klienta firmy Floorsensor WiFi.",
					"uk": "Максимальний час намагатися з підключенням до сервера клієнтом Floorsensor WiFi.",
					"zh-cn": "Floorsensor WiFi客户试图与服务器联系的时间。."
				},
				type: 'number',
				unit: 's',
				role: 'value.interval',
				min: 30,
				max: 300,
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
	},
	MinimumTemperature: {
		id: 'MIT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Minimum Temperature alarm",
					"de": "Mindesttemperaturalarm",
					"ru": "Минимальная температура тревоги",
					"pt": "Alarme de temperatura mínima",
					"nl": "Minimum Temperatuur alarm",
					"fr": "Alarme de température minimale",
					"it": "Allarme di temperatura minimo",
					"es": "Alarma mínima de temperatura",
					"pl": "Minimum Temperatura alarmu",
					"uk": "Мінімальна сигналізація температури",
					"zh-cn": "最低程度的警觉"
				},
				desc: {
					"en": "Below this temperature low temperature alarm is set. To deactivate alarm, set it to -400",
					"de": "Unterhalb dieser Temperatur wird ein Temperaturalarm ausgelöst. Um den Alarm zu deaktivieren, setzen Sie den Wert auf -400",
					"ru": "Ниже приведена низкая температура сигнализации. Для деактивации тревоги установите его до -400",
					"pt": "Abaixo desta temperatura o alarme de baixa temperatura é definido. Para desativar o alarme, defina-o para -400",
					"nl": "Onder dit temperatuuralarm is geactiveerd. Om alarm te deactiveren, zet het op 400",
					"fr": "En dessous de cette température l'alarme basse température est réglée. Pour désactiver l'alarme, réglez-le à -400",
					"it": "Sotto questa temperatura è impostato l'allarme a bassa temperatura. Per disattivare l'allarme, impostarlo a -400",
					"es": "Debajo de esta alarma de temperatura baja se establece. Para desactivar la alarma, ponla en -400",
					"pl": "Poniżej znajduje się niski alarm temperatury. W celu dezaktywowania alarmu, ustawiono go do -400",
					"uk": "Нижче наведено низьку температурну сигналізацію. Для деактивації сигнальної сигналізації встановлюється -400",
					"zh-cn": "降温度低的冲击。 警告,将它定为-400人"
				},
				type: 'number',
				unit: '°C',
				role: 'value.temperature',
				min: -400,
				max: 500,
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
	},
	MaximumTemperature: {
		id: 'MXT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Maximum temperature alarm",
					"de": "Maximaltemperaturalarm",
					"ru": "Максимальная температура тревоги",
					"pt": "Alarme de temperatura máxima",
					"nl": "Maximum temperatuur alarm",
					"fr": "Alarme de température maximale",
					"it": "Allarme temperatura massima",
					"es": "Alarma de temperatura máxima",
					"pl": "Maksymalna temperatura alarmu",
					"uk": "Максимальна температура сигналу",
					"zh-cn": "Maxim温度"
				},
				desc: {
					"en": "Above this temperature low temperature alarm is set. To deactivate alarm, set it to 700",
					"de": "Oberhalb dieser Temperatur wird ein Temperaturalarm ausgelöst. Um den Alarm zu deaktivieren, setzen Sie den Wert auf 700",
					"ru": "Выше этой температуры низкая температура сигнализации установлен. Для деактивации тревоги установите его в 700",
					"pt": "Acima desta temperatura o alarme de baixa temperatura é definido. Para desativar o alarme, defina-o para 700",
					"nl": "Er is een temperatuursalarm vastgesteld. Om alarm te deactiveren, zet het op 700",
					"fr": "Au-dessus de cette température l'alarme basse température est réglée. Pour désactiver l'alarme, fixez-le à 700",
					"it": "Sopra questa temperatura è impostato l'allarme a bassa temperatura. Per disattivare l'allarme, impostarlo a 700",
					"es": "Sobre esta temperatura se establece la alarma de baja temperatura. Para desactivar la alarma, ponla a 700",
					"pl": "Na tej temperaturze znajduje się alarm o niskiej temperaturze. W celu dezaktywowania alarmu, ustawiono go do 700 osób",
					"uk": "Над цим температурою встановлюється низька температура. Щоб деактивувати сигналізацію, встановіть його до 700",
					"zh-cn": "消除这种温暖低的冲击。 令人感到震惊的是,这给了700人。"
				},
				type: 'number',
				unit: '°C',
				role: 'value.temperature',
				min: -300,
				max: 700,
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
	},
	MinimumHumidity: {
		id: 'MIH',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Minimum Humidity",
					"de": "Mindestluftfeuchtigkeit",
					"ru": "Минимальная влажность",
					"pt": "Umidade mínima",
					"nl": "Minimum Humid",
					"fr": "Humidité minimale",
					"it": "Umidità minima",
					"es": "Humedad mínima",
					"pl": "Minimum Humidy",
					"uk": "Мінімальна вологість",
					"zh-cn": "最低工资"
				},
				desc: {
					"en": "To deactivate low humidity check set it to 0",
					"de": "Um die Mindestluftfeuchtigkeit zu deaktivieren, setzen Sie den Wert auf 0",
					"ru": "Для деактивации проверки низкой влажности установите его на 0",
					"pt": "Para desativar a verificação de baixa umidade, defina-a para 0",
					"nl": "Om een lage vochtigheidscontrole te deactiveren zet het op 0",
					"fr": "Pour désactiver le contrôle de l'humidité basse, définissez-le à 0",
					"it": "Per disattivare il controllo dell'umidità bassa impostarlo a 0",
					"es": "Para desactivar el control de humedad baja lo establece a 0",
					"pl": "W celu deaktywacji niskiej wilgotności ustawiono ją 0",
					"uk": "Щоб деактивувати низьку вологість перевірте встановити її до 0",
					"zh-cn": "低湿度的检查规定,它必须达到0.0%"
				},
				type: 'number',
				unit: '%',
				role: 'value.humidity',
				min: 0,
				max: 100,
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
	},
	MaximumHumidity: {
		id: 'MXH',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Maximum Humidity",
					"de": "Maximalluftfeuchtigkeit",
					"ru": "Максимальная влажность",
					"pt": "Umidade máxima",
					"nl": "Maximum Humid",
					"fr": "Humidité maximale",
					"it": "Umidità massima",
					"es": "Humedad máxima",
					"pl": "Maximum Humidity",
					"uk": "Максимальна вологість",
					"zh-cn": "Maximum Humidity"
				},
				desc: {
					"en": "To deactivate high humidity check set it to 100",
					"de": "Um die Maximalluftfeuchtigkeit zu deaktivieren, setzen Sie den Wert auf 100",
					"ru": "Для деактивации проверки высокой влажности установите его до 100",
					"pt": "Para desativar a verificação de alta umidade, defina-a para 100",
					"nl": "Om hoge vochtigheidscontrole te deactiveren zet het tot 100",
					"fr": "Pour désactiver le contrôle de l'humidité élevée, définissez-le à 100",
					"it": "Per disattivare il controllo dell'umidità alta impostarlo a 100",
					"es": "Para desactivar el control de humedad alta lo establece a 100",
					"pl": "W celu dezaktywowania wysokiej wilgotności ustawiono go 100",
					"uk": "Для деактивації високої вологості перевірте її до 100",
					"zh-cn": "对高湿度的检查使它达到100个。"
				},
				type: 'number',
				unit: '%',
				role: 'value.humidity',
				min: 0,
				max: 100,
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
	},
	UtcTimeStamp: {
		id: 'RTC',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "UTC time stamp",
					"de": "UTC Zeitstempel",
					"ru": "UTC метка времени",
					"pt": "Selo de tempo UTC",
					"nl": "UTC tijdstempel",
					"fr": "Timbre horaire UTC",
					"it": "UTC timestamp",
					"es": "Sello de tiempo UTC",
					"pl": "UTC czasu",
					"uk": "Штамп часу UTC",
					"zh-cn": "大 会"
				},
				desc: {
					"en": "Local RTC clock, without additional battery. After battery insert, timestamp corresponds to year 1970.",
					"de": "Lokale RTC-Uhr, ohne zusätzlichen Akku. Nach Batterieeinsatz entspricht der Zeitstempel dem Jahr 1970.",
					"ru": "Местные часы RTC, без дополнительной батареи. После вставки батареи метеор соответствует 1970 год.",
					"pt": "Relógio RTC local, sem bateria adicional. Após a inserção da bateria, o timestamp corresponde ao ano 1970.",
					"nl": "Lokale RTC klok, zonder extra accu. Na batterij insert, komt tijdtamp overeen met jaar 1970.",
					"fr": "Horloge RTC locale, sans batterie supplémentaire. Après l'insert de la batterie, le timetamp correspond à l'année 1970.",
					"it": "Orologio locale RTC, senza batteria aggiuntiva. Dopo l'inserimento della batteria, il timestamp corrisponde all'anno 1970.",
					"es": "Reloj RTC local, sin batería adicional. Después de la inserción de la batería, el timetamp corresponde al año 1970.",
					"pl": "Lokalny zegar RTC bez dodatkowej baterii. Po wstawieniu baterii, czas odpowiada rok 1970.",
					"uk": "Місцевий годинник RTC, без додаткового акумулятора. Після вставки акумулятора, часовий апарат відповідає 1970 року.",
					"zh-cn": "当地劳资关系委员会锁定,不增加电池。 在电池插入后,时间与1970年相吻合。."
				},
				type: 'number',
				unit: 's',
				role: 'value.time',
				min: 1532689442,
				max: 2145959504,
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
	},
	IsolatedNetwork: {
		id: 'ISN',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Isolated network",
					"de": "Isoliertes Netz",
					"ru": "Изолированная сеть",
					"pt": "Rede isolada",
					"nl": "Isolatie netwerk",
					"fr": "Réseau isolé",
					"it": "Rete isolata",
					"es": "Red aislada",
					"pl": "Isolated network",
					"uk": "Ізольована мережа",
					"zh-cn": "网络"
				},
				desc: {
					"en": "0 – Connect (Report) to Internet Server; 1 – Only connect (Report) with other safetecs via LAN; 2 – Only Connect (Report) with other Safetecs via WiFi directly; 3 – No Connections (Alarm reported only by sound and light)",
					"de": "0 – Verbinde (Bericht) mit Internet Server; 1 – Verbinde (Report) mit anderen Safetecs über LAN; 2 – Verbinde (Report) mit anderen Safetecs über WiFi direkt; 3 – Nicht verbinden (nur von Ton und Licht gemeldet)",
					"ru": "0 – Подключение (отчет) к интернет-серверу; 1 – Только подключить (отчет) с другими безопасными устройствами через LAN; 2 – Только подключить (отчет) с другими Safetecs через WiFi напрямую; 3 – Нет соединений (будильник сообщается только звуком и светом)",
					"pt": "0 – Conectar (Relatório) ao Servidor Internet; 1 – Conecte-se apenas (Relatório) com outros cofres via LAN; 2 – Apenas Conecte (Relatório) com outros Safetecs via WiFi diretamente; 3 – Sem Conexões (Alarm reportado apenas pelo som e luz)",
					"nl": "Verbinding met internet Server. 1 - alleen connecties via WiFi. 3 - Geen connecties (Alarm gerapporteerd door geluid en licht)",
					"fr": "0 – Connecter (Signaler) à Internet Server; 1 – Connectez uniquement (Signal) avec d'autres Safetecs via LAN; 2 – Only Connect (Report) avec d'autres Safetecs via WiFi directement; 3 – Aucune connexion (alarme signalée uniquement par son et lumière)",
					"it": "0 – Collegare (Report) a Internet Server; 1 – Collegare solo (Report) con altri safetec via LAN; 2 – Collegare solo (Report) con altri Safetec tramite WiFi direttamente; 3 – Nessuna connessione (Allarme segnalato solo per suono e luce)",
					"es": "0 – Conectar (Informar) a Internet Server; 1 – Únicamente conectar (Informe) con otros equipos de seguridad a través de LAN; 2 – Sólo conectar (Informe) con otros Safetecs vía WiFi directamente; 3 – Sin conexiones (Alarm reportado sólo por sonido y luz)",
					"pl": "0 - strona (ang.) 1 – Tylko łącze (Report) z innymi zabezpieczeniami przez LAN; 2 – Only Connect (Report) z innymi Safetecami przez WiFi. 3 - No Connections (Alarm donosił wyłącznie dźwięk i światło)",
					"uk": "0 – Підключення (Report) до Інтернет-сервера; 1 - Тільки з'єднання (Report) з іншими Safetecs по локальній мережі; 2 - Тільки підключення (Report) з іншими Safetecs через WiFi безпосередньо; 3 - Ні З'єднання (Аларма повідомила тільки звуком і світлом)",
					"zh-cn": "因特网服务者: 1 只通过LAN与其他安全保护机构连接(报告);2台只与WFi直接接触的其他安全保护公司(报告); 3 排减量(仅以可靠和轻度报告)"
				},
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 3,
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
	},
	Alarms: {
		id: 'ALA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Alarms",
					"de": "Alarme",
					"ru": "Сигнализация",
					"pt": "Alarmes",
					"nl": "Alarm",
					"fr": "Alarmes",
					"it": "Allarmi",
					"es": "Alarmas",
					"pl": "Alarm",
					"uk": "Сигналізація",
					"zh-cn": "说明"
				},
				desc: {
					"en": "Alarms as bits in hex format, i.e A0x0002 (see Alarms description)",
					"de": "Alarme als Bits im Hex-Format, d.h. A0x0002 (siehe Alarmbeschreibung)",
					"ru": "Сигнализация как биты в формате hex, т.е. A0x0002 (см. описание сигнализации)",
					"pt": "Alarmes como bits no formato hex, ou seja, A0x0002 (veja Descrição de alarmes)",
					"nl": "Alarmen als stukjes in hex format, I.e A0x0002 (Zeee Alarms beschrijving)",
					"fr": "Alarmes en format hexagonal, c.-à-d. A0x0002 (voir la description des alarmes)",
					"it": "Allarmi come bit in formato esagonale, cioè A0x0002 (vedere la descrizione degli allarmi)",
					"es": "Alarmas como bits en formato hex, es decir A0x0002 (ver descripción de Alarmas)",
					"pl": "Alarms jako bity w formacie hex, tzn. A0x0002 (patrz opis Alarmsa)",
					"uk": "Пригнічує як укуси у форматі шнека, тобто A0x0002 (див. опис сигналів)",
					"zh-cn": "Alarms asbit in Hex格式, i.e A0x0002 (见Alarms说明)"
				},
				type: 'string',
				unit: null,
				role: 'indicator.alarm',
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
	BuzzerDeactivated: {
		id: 'BDE',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Buzzer deactivated",
					"de": "Summer deaktiviert",
					"ru": "Buzzer деактивирован",
					"pt": "Buzzer desativado",
					"nl": "Buzzer geactiveerd",
					"fr": "Buzzer désactivé",
					"it": "Buzzer disattivato",
					"es": "Buzzer desactivado",
					"pl": "Dezaktywacja",
					"uk": "Деактивований",
					"zh-cn": "Buzzer deactiv"
				},
				desc: {
					"en": "If set to 1 – only red Led blinks on alarm",
					"de": "Wenn auf 1 gesetzt – blinkt nur die rote Led bei Alarm",
					"ru": "При наборе на 1 – только красные светодиоды на сигнал тревоги",
					"pt": "Se definido para 1 – apenas piscagens LED vermelhas no alarme",
					"nl": "Als je naar 1 gaat - alleen rode Led knippert op alarm",
					"fr": "S'il est réglé à 1 – seulement rouge Led clignotent sur l'alarme",
					"it": "Se impostato su 1 – lampeggia solo rosso Led sull'allarme",
					"es": "Si se establece a 1 – sólo parpadea rojo Led en la alarma",
					"pl": "W przypadku 1 – tylko czerwony mrug na alarmie",
					"uk": "Якщо встановити до 1 - тільки червоний привід на тривогу",
					"zh-cn": "如果只规定1种烟雾剂,那么便会引起警觉。"
				},
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 1,
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
	},
	TurnOnAccessPointOnAlarm: {
		id: 'AOA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Turn on access point on alarm",
					"de": "Access Point bei Alarm aktivieren",
					"ru": "Поверните точку доступа на сигнал тревоги",
					"pt": "Ligue o ponto de acesso no alarme",
					"nl": "Zet het alarm aan",
					"fr": "Tournez le point d'accès sur l'alarme",
					"it": "Accendere il punto di accesso all'allarme",
					"es": "Gire el punto de acceso en la alarma",
					"pl": "Odwraca się do punktu dostępu do alarmu",
					"uk": "Увімкніть точку доступу на тривогу",
					"zh-cn": "关于进入警觉点的问题"
				},
				desc: {
					"en": "Short or long button press always turn on AP, but if this parameter is set to 1, also alarm turn on AP",
					"de": "Kurzes oder langes drücken der Taste schaltet immer den AP ein. Wenn dieser Parameter auf 1 gesetzt wird, wird der AP auch bei einem Alarm eingeschaltet.",
					"ru": "Короткая или длинная кнопка нажмите всегда включить AP, но если этот параметр установлен на 1, также сигнализация включить AP",
					"pt": "Pressione botão curto ou longo sempre ligar AP, mas se este parâmetro é definido para 1, também alarme ligar AP",
					"nl": "Korte of lange knop drukt altijd op de AP, maar als deze parameter op 1 staat, zet ook alarm af op AP",
					"fr": "Bouton court ou long appuyez toujours sur AP, mais si ce paramètre est défini à 1, tournez également alarme sur AP",
					"it": "Pulsante corto o lungo premere sempre su AP, ma se questo parametro è impostato a 1, anche allarme accendere AP",
					"es": "Pulsera de botón corto o largo siempre enciende AP, pero si este parámetro está fijado a 1, también la alarma de encendido AP",
					"pl": "Krótka lub długa prasa zawsze zmienia się na AP, ale jeśli ten parametr jest ustawiony do 1, również zawraca alarm na AP",
					"uk": "Короткий або довгий кнопковий прес завжди перетворюється на AP, але якщо цей параметр встановлюється до 1, також тривога повороту на AP",
					"zh-cn": "短期或长度的记者一向会,但如果这一参数被确定为1个,也对AP感到震惊。"
				},
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 1,
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
	},
	BatteryMinVoltage: {
		id: 'BMI',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Battery minimal voltage",
					"de": "Minimalspannung der Batterie",
					"ru": "Батарея минимальное напряжение",
					"pt": "Tensão mínima da bateria",
					"nl": "Batterij minimaal voltage",
					"fr": "Batterie de tension minimale",
					"it": "Tensione minima batteria",
					"es": "Tensión mínima de la batería",
					"pl": "Bateria minimalna",
					"uk": "Акумулятор мінімальної напруги",
					"zh-cn": "B. 最低火山"
				},
				desc: {
					"en": "Battery voltage 0% reference point",
					"de": "Batteriespannung 0% Referenzpunkt",
					"ru": "Напряжение батареи 0% точка справки",
					"pt": "Tensão da bateria 0% ponto de referência",
					"nl": "Vertaling:",
					"fr": "Tension de la batterie 0% point de référence",
					"it": "Tensione della batteria 0% punto di riferimento",
					"es": "Tensión de la batería 0% punto de referencia",
					"pl": "Napięcie baterii 0%",
					"uk": "Напруга акумулятора 0%",
					"zh-cn": "B. 包 耳"
				},
				type: 'number',
				unit: "V",
				role: 'state',
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
	},
	BatteryMaxVoltage: {
		id: 'BMA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Battery maximum voltage",
					"de": "Maximalspannung der Batterie",
					"ru": "Максимальное напряжение батареи",
					"pt": "Tensão máxima da bateria",
					"nl": "Batterij maximaal voltage",
					"fr": "Tension maximale de la batterie",
					"it": "Tensione massima batteria",
					"es": "Tensión máxima de la batería",
					"pl": "Bateria maksymalna",
					"uk": "Максимальна напруга акумулятора",
					"zh-cn": "最大火山"
				},
				desc: {
					"en": "Battery voltage 100% reference point.",
					"de": "Batteriespannung 100% Referenzpunkt.",
					"ru": "Напряжение батареи 100% точка справки.",
					"pt": "Tensão da bateria 100% ponto de referência.",
					"nl": "Batterij voltage 100% referentiepunt.",
					"fr": "Tension de la batterie 100% point de référence.",
					"it": "Tensione batteria 100% punto di riferimento.",
					"es": "Voltaje de batería 100% punto de referencia.",
					"pl": "Zawartość baterii wynosi 100% punktów odniesienia.",
					"uk": "Напруга акумулятора 100% довідкова точка.",
					"zh-cn": "Battery voltage 100%的参考点。."
				},
				type: 'number',
				unit: "V",
				role: 'state',
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
	},
	HumidityBuzzerEnabled: {
		id: 'HBE',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Humidity buzzer enable",
					"de": "Feuchtigkeits Alarm Summer aktiviert",
					"ru": "Humidity buzzer включить",
					"pt": "Buzzer de umidade activar",
					"nl": "Humiditybuzzer",
					"fr": "Le buzzer d'humidité permet",
					"it": "Il buzzer di umidità consente",
					"es": "El timbre de humedad permite",
					"pl": "Buzzer",
					"uk": "Увімкнення вологи",
					"zh-cn": "黑暗的藏信"
				},
				desc: {
					"en": "0 - buzzer disabled; 1 - buzzer enabled ",
					"de": "0 - Summer deaktiviert; 1 - Summer aktiviert",
					"ru": "0 - buzzer инвалид; 1 - buzzer включен",
					"pt": "0 - buzzer desativado; 1 - buzzer habilitado",
					"nl": "buzzer gehandicapt. 1 - buzzer in staat",
					"fr": "0 - buzzer désactivé; 1 - buzzer activé",
					"it": "0 - buzzer disabilitato; 1 - buzzer abilitato",
					"es": "0 - desactivado el timbre; 1 - zumbido habilitado",
					"pl": "0) – gąsienica niepełnosprawna. 1 - buzzer",
					"uk": "0 - відключення буфера; 1 - ввімкнено",
					"zh-cn": "残疾人: 1 - buzzer"
				},
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 1,
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
	},
	TemperatureBuzzerEnabled: {
		id: 'TBE',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Temperature buzzer enable",
					"de": "Temperatur Alarm Summer aktiviert",
					"ru": "Температурный зуммер позволяет",
					"pt": "Ativador de temperatura",
					"nl": "Temperatuurbuzzer in staat",
					"fr": "Déclencheur de température",
					"it": "Il buzzer di temperatura abilita",
					"es": "El timbre de temperatura permite",
					"pl": "Buzzer",
					"uk": "Температурний дросель",
					"zh-cn": "选民资格"
				},
				desc: {
					"en": "0 - buzzer disabled; 1 - buzzer enabled ",
					"de": "0 - Summer deaktiviert; 1 - Summer aktiviert",
					"ru": "0 - buzzer инвалид; 1 - buzzer включен",
					"pt": "0 - buzzer desativado; 1 - buzzer habilitado",
					"nl": "buzzer gehandicapt. 1 - buzzer in staat",
					"fr": "0 - buzzer désactivé; 1 - buzzer activé",
					"it": "0 - buzzer disabilitato; 1 - buzzer abilitato",
					"es": "0 - desactivado el timbre; 1 - zumbido habilitado",
					"pl": "0) – gąsienica niepełnosprawna. 1 - buzzer",
					"uk": "0 - відключення буфера; 1 - ввімкнено",
					"zh-cn": "残疾人: 1 - buzzer"
				},
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 1,
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
	},
	IPAddress: {
		id: 'WIP',
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
				desc: {
					"en": "Floor sensor IP address",
					"de": "Bodensensor IP-Adresse",
					"ru": "Датчик пола IP адрес",
					"pt": "Endereço IP do sensor de piso",
					"nl": "Vertaling:",
					"fr": "Capteur de sol Adresse IP",
					"it": "Sensore del pavimento Indirizzo IP",
					"es": "Sensor de piso Dirección IP",
					"pl": "Sensor IP address",
					"uk": "Датчик підлоги IP адреса",
					"zh-cn": "Floor感器地址"
				},
				type: 'string',
				unit: null,
				role: 'info.ip',
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
	DefaultGateway: {
		id: 'WGW',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'default gateway',
					'de': 'Standard-Gateway',
					'ru': 'шлюз по умолчанию',
					'pt': 'gateway padrão',
					'nl': 'standaard gateway',
					'fr': 'passerelle par défaut',
					'it': 'Gateway predefinito',
					'es': 'puerta de enlace predeterminada',
					'pl': 'Brama domyślna',
					'zh-cn': '默认网关'
				},
				desc: {
					"en": "Default gateway of this floor sensor",
					"de": "Default Gateway dieses Bodensensors",
					"ru": "По умолчанию шлюз этого датчика пола",
					"pt": "Gateway padrão deste sensor de piso",
					"nl": "Vertaling:",
					"fr": "Passerelle par défaut de ce capteur de plancher",
					"it": "Gateway predefinito di questo sensore del pavimento",
					"es": "Puerta por defecto de este sensor de piso",
					"pl": "Brama przedniego czujnika tego piętra",
					"uk": "За замовчуванням шлюз даного датчика підлоги",
					"zh-cn": "在这个楼里传感器的防火门"
				},
				type: 'string',
				unit: null,
				role: 'info.ip',
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
	WiFiModulFirmwareVersion: {
		id: 'EFV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "WiFi module firmware version",
					"de": "WiFi-Modul Firmware-Version",
					"ru": "WiFi модуль прошивки версия",
					"pt": "Versão de firmware do módulo WiFi",
					"nl": "WiFi module firmaware",
					"fr": "Version micrologiciel du module WiFi",
					"it": "Versione firmware del modulo WiFi",
					"es": "Versión de firmware del módulo WiFi",
					"pl": "WiFi",
					"uk": "Версія мікропрограми Wi-Fi",
					"zh-cn": "WFi单元公司软件版本"
				},
				desc: {
					"en": "Firmware version of floor sensor WiFi module",
					"de": "Firmware-Version des Bodensensor WiFi-Moduls",
					"ru": "Версия прошивки датчика пола WiFi модуль",
					"pt": "Versão de firmware do módulo WiFi do sensor do piso",
					"nl": "Vertaling:",
					"fr": "Version firmware de capteur de plancher Module WiFi",
					"it": "Versione firmware del sensore del pavimento modulo WiFi",
					"es": "Versión de firmware del módulo WiFi del sensor de piso",
					"pl": "Wersja oprogramowania na podłogę WiFi",
					"uk": "Версія мікропрограми Wi-Fi модуль",
					"zh-cn": "Frmware版本WFi模块"
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
	InternetConnectionState: {
		id: 'ICS',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Internet connection state",
					"de": "Internetverbindung",
					"ru": "Интернет-соединение состояние",
					"pt": "Estado de conexão à Internet",
					"nl": "Internet staat",
					"fr": "État de connexion Internet",
					"it": "Connessione Internet Stato",
					"es": "Estado de conexión a Internet",
					"pl": "Strona internetowa",
					"uk": "Стан підключення до Інтернету",
					"zh-cn": "因特网连接州"
				},
				desc: {
					"en": "1 – after successful connection to Internet; 0 – otherwise",
					"de": "1 – nach erfolgreicher Internetverbindung; – ansonsten 0",
					"ru": "1 – после успешного подключения к Интернету; 0 – в противном случае",
					"pt": "1 – depois da conexão bem sucedida à Internet; 0 – caso contrário",
					"nl": "1 - na succesvolle connectie met internet, 0 -",
					"fr": "1 – après une connexion réussie à Internet; 0 – autrement",
					"it": "1 – dopo la connessione di successo a Internet; 0 – altrimenti",
					"es": "1 – después de la conexión exitosa a Internet; 0 – de otro modo",
					"pl": "1 – pomyślnym połączeniu Internetu, 0 – inaczej",
					"uk": "1 – після успішного підключення до Інтернету; 0 – інше",
					"zh-cn": "1 在成功连接互联网后;另作:"
				},
				type: 'number',
				unit: null,
				role: 'indicator.connected',
				min: 0,
				max: 1,
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
	}
};

module.exports = {channelsRootNameFS, AdapterChannelsFS, DeviceParametetsFS};