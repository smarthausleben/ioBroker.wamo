'use strict';

/*
 * Created with @iobroker/create-adapter v2.1.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
const axios = require('axios').default;
const schedule = require('node-schedule');
const { join } = require('path');
const { stringify } = require('querystring');

const adapterName = require('./package.json').name.split('.').pop();

/* cron definitions for the varius cron timers.
(cron timers are for statistik data collection) */
const cron_Year = '0 0 1 1 *';
const cron_Month = '0 0 1 * *';
const cron_Week = '0 0 * * 1';
const cron_Day = '0 0 * * *';

const Parameter_FACTORY_Mode = '(2)f';
const Parameter_SERVICE_Mode = '(1)';

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

let sensor_temperature_present = false;
let sensor_pressure_present = false;
let sensor_conductivity_present = false;

let moreMessages = true;

let pingOK = false;
let device_responsive = false;
let interfaceBussy;
let SystemLanguage;

// number of connection attemts before throwing an error and exiting
const connectionRetrys = 5;
const connectionRetryPause = 3000;

const adapterChannels = {
	DeviceRawData: {
		path: 'Device.RawData',
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
		path: 'Device.Info',
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
	DeviceSettingsSensors: {
		path: 'Device.Settings.Sensors',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Sensors',
					'de': 'Sensoren',
					'ru': 'Датчики',
					'pt': 'Sensores',
					'nl': 'Sensoren',
					'fr': 'Capteurs',
					'it': 'Sensori',
					'es': 'Sensores',
					'pl': 'Czujniki',
					'zh-cn': '传感器'
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
		path: 'Device.Water-Conditions',
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
	WaterStatistic: {
		path: 'Device.Statistics',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Statistics',
					'de': 'Statistiken',
					'ru': 'Статистика',
					'pt': 'Estatisticas',
					'nl': 'Statistieken',
					'fr': 'Statistiques',
					'it': 'Statistiche',
					'es': 'Estadísticas',
					'pl': 'Statystyka',
					'zh-cn': '统计数据'
				},
			},
			native: {}
		}
	},
};

const calculatedStates = {
	germanWaterHardness: {
		id: 'GHARDNESS',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'German water hardness',
					'de': 'Deutsche Wasserhärte',
					'ru': 'Немецкая жесткость воды',
					'pt': 'Dureza da água alemã',
					'nl': 'Duitse waterhardheid',
					'fr': "Dureté de l'eau allemande",
					'it': "Durezza dell'acqua tedesca",
					'es': 'Dureza del agua alemana',
					'pl': 'Niemiecka twardość wody',
					'zh-cn': '德国水质硬度'
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterCondition.path,
	},
	conductivityEC25: {
		id: 'CNDEC25',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'EC25 Water conductivity',
					'de': 'EC25 Wasserleitfähigkeit',
					'ru': 'EC25 Проводимость воды',
					'pt': 'Condutividade da água EC25',
					'nl': 'EC25 Water geleidbaarheid',
					'fr': "Conductivité de l'eau EC25",
					'it': "EC25 Conducibilità dell'acqua",
					'es': 'Conductividad del agua EC25',
					'pl': 'EC25 Przewodność wody',
					'zh-cn': 'EC25 水电导率'
				},
				type: 'number',
				unit: 'µS/cm',
				role: 'value.conductivity',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterCondition.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
};

const StatisticStates = {
	TotalLastValue: {
		id: 'TLV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'last total value',
					'de': 'letzter Gesamtwert',
					'ru': 'последнее общее значение',
					'pt': 'último valor total',
					'nl': 'laatste totale waarde',
					'fr': 'dernière valeur totale',
					'it': 'ultimo valore totale',
					'es': 'último valor total',
					'pl': 'ostatnia łączna wartość',
					'zh-cn': '最后总价值'
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalDay: {
		id: 'TCD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'total current day',
					'de': 'insgesamt aktueller Tag',
					'ru': 'общий текущий день',
					'pt': 'dia atual total',
					'nl': 'totale huidige dag',
					'fr': 'total du jour en cours',
					'it': 'giorno corrente totale',
					'es': 'dia actual total',
					'pl': 'całkowity bieżący dzień',
					'zh-cn': '当日总计'
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalWeek: {
		id: 'TCW',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'total current week',
					'de': 'insgesamt aktuelle Woche',
					'ru': 'всего за текущую неделю',
					'pt': 'semana atual total',
					'nl': 'totale huidige week',
					'fr': 'total semaine en cours',
					'it': 'totale settimana corrente',
					'es': 'total de la semana actual',
					'pl': 'całkowity bieżący tydzień',
					'zh-cn': '本周总计'
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalMonth: {
		id: 'TCM',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'total current month',
					'de': 'insgesamt aktueller Monat',
					'ru': 'всего за текущий месяц',
					'pt': 'total do mês atual',
					'nl': 'totale huidige maand',
					'fr': 'total du mois en cours',
					'it': 'mese corrente totale',
					'es': 'total del mes actual',
					'pl': 'całkowity bieżący miesiąc',
					'zh-cn': '本月总计'
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalYear: {
		id: 'TCY',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'total current year',
					'de': 'insgesamt laufendes Jahr',
					'ru': 'всего за текущий год',
					'pt': 'total do ano atual',
					'nl': 'totaal huidig jaar',
					'fr': "total de l'année en cours",
					'it': 'totale anno in corso',
					'es': 'total del año en curso',
					'pl': 'całkowity bieżący rok',
					'zh-cn': '本年度总计'
				},
				type: 'number',
				unit: 'm3',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalPastDay: {
		id: 'TPD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'total past day',
					'de': 'total vergangener tag',
					'ru': 'всего за прошедший день',
					'pt': 'total do dia anterior',
					'nl': 'totaal afgelopen dag',
					'fr': 'total de la journée passée',
					'it': 'giorno passato totale',
					'es': 'días pasados totales',
					'pl': 'łącznie miniony dzień',
					'zh-cn': '过去的总天数'
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalPastWeek: {
		id: 'TPW',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'total past week',
					'de': 'insgesamt vergangene Woche',
					'ru': 'всего за прошлую неделю',
					'pt': 'total da semana passada',
					'nl': 'totaal afgelopen week',
					'fr': 'total de la semaine dernière',
					'it': 'totale della scorsa settimana',
					'es': 'semana pasada total',
					'pl': 'łącznie zeszły tydzień',
					'zh-cn': '过去一周总计'
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalPastMonth: {
		id: 'TPM',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'total past month',
					'de': 'insgesamt letzten Monat',
					'ru': 'всего за прошлый месяц',
					'pt': 'total do mês passado',
					'nl': 'totaal afgelopen maand',
					'fr': 'total du mois passé',
					'it': 'totale del mese scorso',
					'es': 'mes pasado total',
					'pl': 'łącznie ostatni miesiąc',
					'zh-cn': '过去一个月总计'
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalPastYear: {
		id: 'TPY',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'total past year',
					'de': 'insgesamt vergangenes Jahr',
					'ru': 'всего за прошлый год',
					'pt': 'total do ano passado',
					'nl': 'totaal afgelopen jaar',
					'fr': "total de l'année écoulée",
					'it': "totale dell'anno passato",
					'es': 'total del año pasado',
					'pl': 'łącznie ubiegły rok',
					'zh-cn': '过去一年总计'
				},
				type: 'number',
				unit: 'm3',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterStatistic.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
};
// Object all possible device commands
const DeviceParameters = {
	ScreenRotation: {
		id: 'SRO',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Screen rotation',
					'de': 'Bildschirm Rotation',
					'ru': 'Поворот экрана',
					'pt': 'Rotação da tela',
					'nl': 'Schermrotatie',
					'fr': "Rotation de l'écran",
					'it': 'Rotazione dello schermo',
					'es': 'Rotacion de pantalla',
					'pl': 'Obrót ekranu',
					'zh-cn': '屏幕旋转'
				},
				type: 'number',
				unit: '°',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	FirmwareCheck: {
		id: 'SFV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Firmware check',
					'de': 'Firmware-Check',
					'ru': 'Проверка прошивки',
					'pt': 'Verificação de firmware',
					'nl': 'Firmwarecontrole',
					'fr': 'Vérification du micrologiciel',
					'it': 'Verifica del firmware',
					'es': 'Comprobación de firmware',
					'pl': 'Sprawdzanie oprogramowania',
					'zh-cn': '固件检查'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
		rangevalues: {
			'0': {
				'en': 'new firmware not available',
				'de': 'neue Firmware nicht verfügbar',
				'ru': 'новая прошивка недоступна',
				'pt': 'novo firmware não disponível',
				'nl': 'nieuwe firmware niet beschikbaar',
				'fr': 'nouveau firmware non disponible',
				'it': 'nuovo firmware non disponibile',
				'es': 'nuevo firmware no disponible',
				'pl': 'nowe oprogramowanie nie jest dostępne',
				'zh-cn': '新固件不可用'
			},
			'1': {
				'en': 'new firmware available',
				'de': 'neue Firmware verfügbar',
				'ru': 'доступна новая прошивка',
				'pt': 'novo firmware disponível',
				'nl': 'nieuwe firmware beschikbaar',
				'fr': 'nouveau firmware disponible',
				'it': 'nuovo firmware disponibile',
				'es': 'nuevo firmware disponible',
				'pl': 'dostępne nowe oprogramowanie',
				'zh-cn': '新固件可用'
			}
		},
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	ValveTestOngoing: {
		id: 'VTO',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Valve test ongoing',
					'de': 'Ventiltest läuft',
					'ru': 'Продолжается испытание клапана',
					'pt': 'Teste de válvula em andamento',
					'nl': 'Ventieltest aan de gang',
					'fr': 'Test de soupape en cours',
					'it': 'Test valvole in corso',
					'es': 'Prueba de válvula en curso',
					'pl': 'Trwa test zaworu',
					'zh-cn': '阀门测试正在进行中'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		rangevalues: {
			'0': {
				'en': 'inactive',
				'de': 'inaktiv',
				'ru': 'неактивный',
				'pt': 'inativo',
				'nl': 'inactief',
				'fr': 'inactif',
				'it': 'inattivo',
				'es': 'inactivo',
				'pl': 'nieaktywny',
				'zh-cn': '不活跃'
			},
			'1': {
				'en': 'active',
				'de': 'aktiv',
				'ru': 'активный',
				'pt': 'ativo',
				'nl': 'actief',
				'fr': 'actif',
				'it': 'attivo',
				'es': 'activo',
				'pl': 'aktywny',
				'zh-cn': '积极的'
			}
		},
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TurbineNoPulseTime: {
		id: 'NPS',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Turbine no pulse time',
					'de': 'Keine Impulse von Turbine',
					'ru': 'Турбина без импульса',
					'pt': 'Turbina sem tempo de pulso',
					'nl': 'Turbine geen pulstijd',
					'fr': "Turbine sans temps d'impulsion",
					'it': 'Turbina senza tempo di impulso',
					'es': 'Turbina sin tiempo de pulso',
					'pl': 'Turbina bez czasu impulsu',
					'zh-cn': '涡轮无脉冲时间'
				},
				type: 'number',
				unit: 's',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterConumption.path,
		levelRead: 'SERVICE',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WaterFlow: {
		id: 'FLO',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Water flow',
					'de': 'Wasserfluss',
					'ru': 'Поток воды',
					'pt': 'Fluxo de água',
					'nl': 'Waterstroom',
					'fr': "L'écoulement de l'eau",
					'it': "Flusso d'acqua",
					'es': 'Flujo de agua',
					'pl': 'Przepływ wody',
					'zh-cn': '水流'
				},
				type: 'number',
				unit: 'l/h',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterConumption.path,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	LeakageNotificationWarningThreshold: {
		id: 'LWT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Leakage notification (warning) threshold',
					'de': 'Schwellenwert für Leckagebenachrichtigung (Warnung).',
					'ru': 'Порог уведомления (предупреждения) об утечке',
					'pt': 'Limite de notificação de vazamento (aviso)',
					'nl': 'Lekkage melding (waarschuwing) drempel',
					'fr': 'Seuil de notification de fuite (avertissement)',
					'it': 'Soglia di notifica di perdita (avviso).',
					'es': 'Umbral de notificación (advertencia) de fugas',
					'pl': 'Próg powiadomienia o wycieku (ostrzeżenie)',
					'zh-cn': '泄漏通知（警告）阈值'
				},
				type: 'number',
				unit: '%',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	BuzzerOnAlarm: {
		id: 'BUZ',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Buzzer on alarm',
					'de': 'Summer bei Alarm',
					'ru': 'Зуммер при тревоге',
					'pt': 'Campainha em alarme',
					'nl': 'Zoemer bij alarm',
					'fr': 'Buzzer en alarme',
					'it': 'Cicalino in allarme',
					'es': 'Zumbador en alarma',
					'pl': 'Brzęczyk alarmu',
					'zh-cn': '蜂鸣器报警'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'Buzzer disabled',
				'de': 'Summer deaktiviert',
				'ru': 'Зуммер отключен',
				'pt': 'Campainha desabilitada',
				'nl': 'Zoemer uitgeschakeld',
				'fr': 'Buzzer désactivé',
				'it': 'Cicalino disabilitato',
				'es': 'Zumbador deshabilitado',
				'pl': 'Brzęczyk wyłączony',
				'zh-cn': '蜂鸣器已禁用'
			},
			'1': {
				'en': 'Buzzer enabled',
				'de': 'Summer aktiviert',
				'ru': 'Зуммер включен',
				'pt': 'Campainha ativada',
				'nl': 'Zoemer ingeschakeld',
				'fr': 'Buzzer activé',
				'it': 'Buzzer abilitato',
				'es': 'Zumbador habilitado',
				'pl': 'Włączony brzęczyk',
				'zh-cn': '启用蜂鸣器'
			}
		},
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	MicroLeakageTestPeriod: {
		id: 'DRP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Micro leakage test period',
					'de': 'Testzeitraum für Mikroleckagen',
					'ru': 'Период испытания микроутечек',
					'pt': 'Período de teste de micro vazamento',
					'nl': 'Micro lekkage testperiode',
					'fr': 'Période de test de micro-fuites',
					'it': 'Periodo di prova di micro perdite',
					'es': 'Período de prueba de microfugas',
					'pl': 'Okres testu mikroprzecieków',
					'zh-cn': '微漏测试期'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'always',
				'de': 'immer',
				'ru': 'всегда',
				'pt': 'sempre',
				'nl': 'altijd',
				'fr': 'toujours',
				'it': 'sempre',
				'es': 'siempre',
				'pl': 'zawsze',
				'zh-cn': '总是'
			},
			'1': {
				'en': 'day',
				'de': 'Tag',
				'ru': 'день',
				'pt': 'dia',
				'nl': 'dag',
				'fr': 'journée',
				'it': 'giorno',
				'es': 'día',
				'pl': 'dzień',
				'zh-cn': '天'
			},
			'2': {
				'en': 'week',
				'de': 'Woche',
				'ru': 'неделю',
				'pt': 'semana',
				'nl': 'week',
				'fr': 'la semaine',
				'it': 'settimana',
				'es': 'semana',
				'pl': 'tydzień',
				'zh-cn': '星期'
			},
			'3': {
				'en': 'month',
				'de': 'Monat',
				'ru': 'месяц',
				'pt': 'mês',
				'nl': 'maand',
				'fr': 'mois',
				'it': 'mese',
				'es': 'mes',
				'pl': 'miesiąc',
				'zh-cn': '月'
			}
		},
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	MicroLeakageTest: {
		id: 'DMA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Micro leakage test',
					'de': 'Mikrolecktest',
					'ru': 'Тест на микроутечку',
					'pt': 'Teste de micro vazamento',
					'nl': 'Micro lekkage test',
					'fr': 'Test de micro-fuite',
					'it': 'Prova di microperdita',
					'es': 'Prueba de microfugas',
					'pl': 'Test mikroszczelności',
					'zh-cn': '微量泄漏测试'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'disabled',
				'de': 'deaktiviert',
				'ru': 'Отключено',
				'pt': 'Desativado',
				'nl': 'gehandicapt',
				'fr': 'désactivé',
				'it': 'Disabilitato',
				'es': 'desactivado',
				'pl': 'niepełnosprawny',
				'zh-cn': '禁用'
			},
			'1': {
				'en': 'Warning',
				'de': 'Warnung',
				'ru': 'Предупреждение',
				'pt': 'Aviso',
				'nl': 'Waarschuwing',
				'fr': 'Avertissement',
				'it': 'Avvertimento',
				'es': 'Advertencia',
				'pl': 'Ostrzeżenie',
				'zh-cn': '警告'
			},
			'2': {
				'en': 'shutoff',
				'de': 'Abschaltung',
				'ru': 'выключить',
				'pt': 'desligar',
				'nl': 'uitzetten',
				'fr': 'éteindre',
				'it': 'spegnimento',
				'es': 'apagar',
				'pl': 'wyłączyć',
				'zh-cn': '关闭'
			}
		},
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	MaxFlowLeakageTime: {
		id: 'T2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'max flow leakage time',
					'de': 'maximale Leckagezeit',
					'ru': 'максимальное время утечки потока',
					'pt': 'tempo máximo de vazamento de fluxo',
					'nl': 'max. stroomlekkagetijd:',
					'fr': 'temps de fuite de débit max',
					'it': 'tempo massimo di perdita di flusso',
					'es': 'tiempo máximo de fuga de flujo',
					'pl': 'maksymalny czas wycieku przepływu',
					'zh-cn': '最大流量泄漏时间'
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	LeakProtectionTemporaryDeactivation: {
		id: 'TMP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Leakage protection temporary deactivation',
					'de': 'Leckageschutz vorübergehende Deaktivierung',
					'ru': 'Временное отключение защиты от протечек',
					'pt': 'Desativação temporária de proteção contra vazamento',
					'nl': 'Lekkagebescherming tijdelijke deactivering',
					'fr': 'Désactivation temporaire de la protection contre les fuites',
					'it': 'Disattivazione temporanea della protezione contro le perdite',
					'es': 'Desactivación temporal de la protección contra fugas',
					'pl': 'Tymczasowa dezaktywacja ochrony przed wyciekiem',
					'zh-cn': '漏电保护暂时停用'
				},
				type: 'number',
				unit: 's',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ShutOff: {
		id: 'AB',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Shutoff',
					'de': 'Absperrung',
					'ru': 'Выключить',
					'pt': 'Desligar',
					'nl': 'Uitzetten',
					'fr': 'Éteindre',
					'it': 'Spegnimento',
					'es': 'Apagar',
					'pl': 'Wyłączyć',
					'zh-cn': '关闭'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		rangevalues: {
			'1': {
				'en': 'Shutoff opened',
				'de': 'Absperrung geöffnet',
				'ru': 'Отключение открыто',
				'pt': 'Desligamento aberto',
				'nl': 'Afsluiting geopend',
				'fr': 'Arrêt ouvert',
				'it': 'Chiusura aperta',
				'es': 'Cierre abierto',
				'pl': 'Odcięcie otwarte',
				'zh-cn': '关闭已打开'
			},
			'2': {
				'en': 'Shutoff closed',
				'de': 'Absperrung geschlossen',
				'ru': 'Отключение закрыто',
				'pt': 'Desligamento fechado',
				'nl': 'Afsluiting gesloten',
				'fr': 'Arrêt fermé',
				'it': 'Chiusura chiusa',
				'es': 'Cierre cerrado',
				'pl': 'Odcięcie zamknięte',
				'zh-cn': '关闭关闭'
			}
		},
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	FlorSensor: {
		id: 'BSA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Floor sensor',
					'de': 'Bodensensor',
					'ru': 'Датчик пола',
					'pt': 'Sensor de piso',
					'nl': 'Vloersensor',
					'fr': 'Capteur de sol',
					'it': 'Sensore da pavimento',
					'es': 'sensor de suelo',
					'pl': 'Czujnik podłogowy',
					'zh-cn': '地板传感器'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'Floor sensor disabled',
				'de': 'Bodensensor deaktiviert',
				'ru': 'Датчик пола отключен',
				'pt': 'Sensor de piso desativado',
				'nl': 'Vloersensor uitgeschakeld',
				'fr': 'Capteur de sol désactivé',
				'it': 'Sensore pavimento disabilitato',
				'es': 'Sensor de suelo desactivado',
				'pl': 'Czujnik podłogowy wyłączony',
				'zh-cn': '地板传感器禁用'
			},
			'1': {
				'en': 'Floor sensor enabled',
				'de': 'Bodensensor aktiviert',
				'ru': 'Датчик пола включен',
				'pt': 'Sensor de piso ativado',
				'nl': 'Vloersensor ingeschakeld',
				'fr': 'Capteur de sol activé',
				'it': 'Sensore pavimento abilitato',
				'es': 'Sensor de suelo habilitado',
				'pl': 'Czujnik podłogowy włączony',
				'zh-cn': '地板传感器启用'
			}
		},
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ServiceMode: {
		id: 'ADM',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Service Mode',
					'de': 'Servicemodus',
					'ru': 'Сервисный режим',
					'pt': 'Modo de serviço',
					'nl': 'Onderhoudsinstelling',
					'fr': 'Mode de service',
					'it': 'Modalità servizio',
					'es': 'Modo de servicio',
					'pl': 'Tryb serwisowy',
					'zh-cn': '服务模式'
				},
				type: 'boolean',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		levelRead: null,
		levelWrite: 'USER',
		readCommand: null,
		writeCommand: 'set'
	},
	Units: {
		id: 'UNI',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'units',
					'de': 'Einheiten',
					'ru': 'единицы',
					'pt': 'unidades',
					'nl': 'eenheden',
					'fr': 'unités',
					'it': 'unità',
					'es': 'unidades',
					'pl': 'jednostki',
					'zh-cn': '单位'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'metric units',
				'de': 'metrische Einheiten',
				'ru': 'метрические единицы',
				'pt': 'unidades métricas',
				'nl': 'metrische eenheden',
				'fr': 'unités métriques',
				'it': 'unità metrica',
				'es': 'unidades metricas',
				'pl': 'jednostki metryczne',
				'zh-cn': '公制单位'
			},
			'1': {
				'en': 'imperial units',
				'de': 'imperiale Einheiten',
				'ru': 'имперские единицы',
				'pt': 'unidades imperiais',
				'nl': 'keizerlijke eenheden',
				'fr': 'unités impériales',
				'it': 'unità imperiali',
				'es': 'unidades imperiales',
				'pl': 'jednostki imperialne',
				'zh-cn': '英制单位'
			}
		},
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	Language: {
		id: 'LNG',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'language setting',
					'de': 'Spracheinstellungen',
					'ru': 'языковые настройки',
					'pt': 'configuração de idioma',
					'nl': 'taalinstelling',
					'fr': 'Paramètres de langue',
					'it': 'impostazione della lingua',
					'es': 'configuración de idioma',
					'pl': 'ustawienie języka',
					'zh-cn': '语言设置'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	AvailableProfiles: {
		id: 'PRN',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Amount available profiles',
					'de': 'Anzahl verfügbarer Profile',
					'ru': 'Количество доступных профилей',
					'pt': 'Quantidade de perfis disponíveis',
					'nl': 'Aantal beschikbare profielen',
					'fr': 'Montant des profils disponibles',
					'it': 'Quantità profili disponibili',
					'es': 'Cantidad perfiles disponibles',
					'pl': 'Ilość dostępnych profili',
					'zh-cn': '可用配置文件数量'
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofiles.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	SelectedProfile: {
		id: 'PRF',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Selected profile number',
					'de': 'Ausgewählte Profilnummer',
					'ru': 'Выбранный номер профиля',
					'pt': 'Número do perfil selecionado',
					'nl': 'Geselecteerd profielnummer',
					'fr': 'Numéro de profil sélectionné',
					'it': 'Numero di profilo selezionato',
					'es': 'Número de perfil seleccionado',
					'pl': 'Wybrany numer profilu',
					'zh-cn': '选择的个人资料编号'
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofiles.path,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DeactivateConductivitySensor: {
		id: 'CSD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Deactivate conductivity sensor',
					'de': 'Leitfähigkeitssensor deaktivieren',
					'ru': 'Отключить датчик проводимости',
					'pt': 'Desativar sensor de condutividade',
					'nl': 'Geleidbaarheidssensor deactiveren',
					'fr': 'Désactiver le capteur de conductivité',
					'it': 'Disattiva il sensore di conducibilità',
					'es': 'Desactivar sensor de conductividad',
					'pl': 'Dezaktywuj czujnik przewodności',
					'zh-cn': '停用电导率传感器'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettingsSensors.path,
		rangevalues: {
			'0': {
				'en': 'conductivity sensor activated',
				'de': 'Leitfähigkeitssensor aktiviert',
				'ru': 'активирован датчик электропроводности',
				'pt': 'sensor de condutividade ativado',
				'nl': 'geleidbaarheidssensor geactiveerd',
				'fr': 'capteur de conductivité activé',
				'it': 'sensore di conducibilità attivato',
				'es': 'sensor de conductividad activado',
				'pl': 'czujnik przewodności aktywowany',
				'zh-cn': '电导率传感器激活'
			},
			'1': {
				'en': 'conductivity sensor deactivated',
				'de': 'Leitfähigkeitssensor deaktiviert',
				'ru': 'датчик проводимости деактивирован',
				'pt': 'sensor de condutividade desativado',
				'nl': 'geleidbaarheidssensor gedeactiveerd',
				'fr': 'capteur de conductivité désactivé',
				'it': 'sensore di conducibilità disattivato',
				'es': 'sensor de conductividad desactivado',
				'pl': 'czujnik przewodności wyłączony',
				'zh-cn': '电导率传感器停用'
			}
		},
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DeactivateTemperatureSensor: {
		id: 'TSD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Deactivate temperature sensor',
					'de': 'Temperatursensor deaktivieren',
					'ru': 'Деактивировать датчик температуры',
					'pt': 'Desativar sensor de temperatura',
					'nl': 'Temperatuursensor deactiveren',
					'fr': 'Désactiver le capteur de température',
					'it': 'Disattiva il sensore di temperatura',
					'es': 'Desactivar sensor de temperatura',
					'pl': 'Dezaktywuj czujnik temperatury',
					'zh-cn': '停用温度传感器'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettingsSensors.path,
		rangevalues: {
			'0': {
				'en': 'temperature sensor activated',
				'de': 'Temperatursensor aktiviert',
				'ru': 'датчик температуры активирован',
				'pt': 'sensor de temperatura ativado',
				'nl': 'temperatuursensor geactiveerd',
				'fr': 'capteur de température activé',
				'it': 'sensore di temperatura attivato',
				'es': 'sensor de temperatura activado',
				'pl': 'czujnik temperatury aktywowany',
				'zh-cn': '温度传感器激活'
			},
			'1': {
				'en': 'temperature sensor deactivated',
				'de': 'Temperatursensor deaktiviert',
				'ru': 'датчик температуры деактивирован',
				'pt': 'sensor de temperatura desativado',
				'nl': 'temperatuursensor gedeactiveerd',
				'fr': 'capteur de température désactivé',
				'it': 'sensore di temperatura disattivato',
				'es': 'sensor de temperatura desactivado',
				'pl': 'czujnik temperatury wyłączony',
				'zh-cn': '温度传感器已停用'
			}
		},
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DeactivatePressureSensor: {
		id: 'PSD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Deactivate pressure sensor',
					'de': 'Drucksensor deaktivieren',
					'ru': 'Деактивировать датчик давления',
					'pt': 'Desativar sensor de pressão',
					'nl': 'Druksensor deactiveren',
					'fr': 'Désactiver le capteur de pression',
					'it': 'Disattiva sensore di pressione',
					'es': 'Desactivar sensor de presión',
					'pl': 'Dezaktywuj czujnik ciśnienia',
					'zh-cn': '停用压力传感器（0=激活 1=停用）'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettingsSensors.path,
		rangevalues: {
			'0': {
				'en': 'pressure sensor activated',
				'de': 'Drucksensor aktiviert',
				'ru': 'датчик давления активирован',
				'pt': 'sensor de pressão ativado',
				'nl': 'druksensor geactiveerd',
				'fr': 'capteur de pression activé',
				'it': 'sensore di pressione attivato',
				'es': 'sensor de presión activado',
				'pl': 'czujnik ciśnienia aktywowany',
				'zh-cn': '压力传感器激活'
			},
			'1': {
				'en': 'pressure sensor deactivated',
				'de': 'Drucksensor deaktiviert',
				'ru': 'датчик давления деактивирован',
				'pt': 'sensor de pressão desativado',
				'nl': 'druksensor gedeactiveerd',
				'fr': 'capteur de pression désactivé',
				'it': 'sensore di pressione disattivato',
				'es': 'sensor de presión desactivado',
				'pl': 'czujnik ciśnienia wyłączony',
				'zh-cn': '压力传感器已停用'
			}
		},
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	CurrentVolume: {
		id: 'AVO',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Volume of the current water consumption',
					'de': 'Volumen des aktuellen Wasserverbrauchs',
					'ru': 'Объем текущего водопотребления',
					'pt': 'Volume do consumo de água atual',
					'nl': 'Volume van het huidige waterverbruik',
					'fr': "Volume de la consommation d'eau actuelle",
					'it': 'Volume del consumo idrico attuale',
					'es': 'Volumen del consumo de agua actual',
					'pl': 'Wielkość aktualnego zużycia wody',
					'zh-cn': '当前用水量'
				},
				type: 'number',
				unit: 'ml',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterConumption.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	TotalVolume: {
		id: 'VOL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Cumulative water volume',
					'de': 'Kumuliertes Wasservolumen',
					'ru': 'Совокупный объем воды',
					'pt': 'Volume acumulado de água',
					'nl': 'Cumulatief watervolume',
					'fr': "Volume d'eau cumulé",
					'it': "Volume d'acqua cumulativo",
					'es': 'Volumen de agua acumulado',
					'pl': 'Skumulowana objętość wody',
					'zh-cn': '累计水量'
				},
				type: 'number',
				unit: 'm3',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterConumption.path,
		levelRead: 'SERVICE',
		levelWrite: null,
		levelClear: 'FACTORY',
		readCommand: 'get',
		writeCommand: null,
		clearCommand: 'clr'
	},
	LastTappedVolume: {
		id: 'LTV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'last tapped water',
					'de': 'letztes gezapftes Wasser',
					'ru': 'последняя вода из-под крана',
					'pt': 'última água encanada',
					'nl': 'laatst getapt water',
					'fr': 'dernière eau du robinet',
					'it': 'ultima acqua spillata',
					'es': 'última agua del grifo',
					'pl': 'ostatnia woda z kranu',
					'zh-cn': '最后自来水'
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterConumption.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	DaylightSavingTime: {
		id: 'IDS',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Daylight saving time',
					'de': 'Sommerzeit',
					'ru': 'Летнее время',
					'pt': 'Horário de verão',
					'nl': 'Zomertijd',
					'fr': "Heure d'été",
					'it': 'Ora legale',
					'es': 'Horario de verano',
					'pl': 'Czas letni',
					'zh-cn': '夏令时'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'disabled',
				'de': 'deaktiviert',
				'ru': 'инвалид',
				'pt': 'Desativado',
				'nl': 'gehandicapt',
				'fr': 'désactivé',
				'it': 'Disabilitato',
				'es': 'discapacitado',
				'pl': 'wyłączone',
				'zh-cn': '禁用'
			},
			'1': {
				'en': 'enabled',
				'de': 'aktiviert',
				'ru': 'включено',
				'pt': 'ativado',
				'nl': 'ingeschakeld',
				'fr': 'autorisé',
				'it': 'abilitato',
				'es': 'activado',
				'pl': 'włączony',
				'zh-cn': '启用'
			}
		},
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PowerAdapterVoltage: {
		id: 'NET',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Power adaptor voltage',
					'de': 'Netzteilspannung',
					'ru': 'Напряжение адаптера питания',
					'pt': 'Voltagem do adaptador de energia',
					'nl': 'Spanning voedingsadapter',
					'fr': "Tension de l'adaptateur secteur",
					'it': "Tensione dell'adattatore di alimentazione",
					'es': 'Voltaje del adaptador de corriente',
					'pl': 'Napięcie zasilacza',
					'zh-cn': '电源适配器电压'
				},
				type: 'number',
				unit: 'V',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	BatteryVoltage: {
		id: 'BAT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Battery voltage',
					'de': 'Batteriespannung',
					'ru': 'Напряжение батареи',
					'pt': 'Voltagem da bateria',
					'nl': 'Batterij voltage',
					'fr': 'Voltage de batterie',
					'it': 'Voltaggio batteria',
					'es': 'Voltaje de la batería',
					'pl': 'Napięcie baterii',
					'zh-cn': '电池电压'
				},
				type: 'number',
				unit: 'V',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
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
					'zh-cn': 'WiFi 状态'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
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
				'zh-cn': '已连接'
			}
		},
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WiFiDeaktivate: {
		id: 'DWL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'WiFi deactivate',
					'de': 'WLAN deaktivieren',
					'ru': 'Wi-Fi деактивировать',
					'pt': 'Desativar Wi-Fi',
					'nl': 'WiFi deactiveren',
					'fr': 'Wi-Fi désactiver',
					'it': 'Wi-Fi disattivato',
					'es': 'WiFi desactivar',
					'pl': 'Wyłącz Wi-Fi',
					'zh-cn': 'WiFi 停用'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'active (default)',
				'de': 'aktiv (Standard)',
				'ru': 'активен (по умолчанию)',
				'pt': 'ativo (padrão)',
				'nl': 'actief (standaard)',
				'fr': 'actif (par défaut)',
				'it': 'attivo (predefinito)',
				'es': 'activo (predeterminado)',
				'pl': 'aktywny (domyślnie)',
				'zh-cn': '活动（默认）'
			},
			'1': {
				'en': 'deactivated',
				'de': 'deaktiviert',
				'ru': 'деактивирован',
				'pt': 'desativado',
				'nl': 'gedeactiveerd',
				'fr': 'désactivé',
				'it': 'disattivato',
				'es': 'desactivado',
				'pl': 'dezaktywowany',
				'zh-cn': '停用'
			}
		},
		levelRead: 'FACTORY',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	APTimeout: {
		id: 'APT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'WiFi AP timeout',
					'de': 'WLAN-AP-Zeitüberschreitung',
					'ru': 'Тайм-аут точки доступа Wi-Fi',
					'pt': 'Tempo limite do AP Wi-Fi',
					'nl': 'Time-out wifi AP',
					'fr': "Délai d'expiration du point d'accès Wi-Fi",
					'it': "Timeout dell'AP Wi-Fi",
					'es': 'Tiempo de espera de WiFi AP',
					'pl': 'Limit czasu punktu dostępu Wi-Fi',
					'zh-cn': 'WiFi AP 超时'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'AP timeout not active',
				'de': 'AP-Timeout nicht aktiv',
				'ru': 'Тайм-аут AP не активен',
				'pt': 'Tempo limite do AP não ativo',
				'nl': 'AP time-out niet actief',
				'fr': "Délai d'attente AP non actif",
				'it': 'Timeout AP non attivo',
				'es': 'Tiempo de espera de AP no activo',
				'pl': 'Limit czasu AP nieaktywny',
				'zh-cn': 'AP 超时未激活'
			},
			'else': {
				'en': 'AP disabled after XX seconds after internet connection',
				'de': 'AP XX Sekunden nach Internetverbindung deaktiviert',
				'ru': 'AP отключается через XX секунд после подключения к интернету',
				'pt': 'AP desabilitado após XX segundos após a conexão com a internet',
				'nl': 'AP uitgeschakeld na XX seconden na internetverbinding',
				'fr': 'AP désactivé après XX secondes après la connexion Internet',
				'it': 'AP disabilitato dopo XX secondi dalla connessione a Internet',
				'es': 'AP deshabilitado después de XX segundos después de la conexión a Internet',
				'pl': 'AP wyłączony po XX sekundach od połączenia z internetem',
				'zh-cn': '连接互联网 XX 秒后 AP 禁用'
			}
		},
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	APDisabled: {
		id: 'WAD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'WiFi AP disabled',
					'de': 'WiFi-AP deaktiviert',
					'ru': 'Точка доступа Wi-Fi отключена',
					'pt': 'Wi-Fi AP desativado',
					'nl': 'WiFi AP uitgeschakeld',
					'fr': "Point d'accès Wi-Fi désactivé",
					'it': 'Punto di accesso Wi-Fi disabilitato',
					'es': 'WiFi AP deshabilitado',
					'pl': 'AP Wi-Fi wyłączony',
					'zh-cn': 'WiFi AP 已禁用'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'AP not disabled',
				'de': 'AP nicht deaktiviert',
				'ru': 'точка доступа не отключена',
				'pt': 'AP não desativado',
				'nl': 'AP niet uitgeschakeld',
				'fr': 'AP non désactivé',
				'it': 'AP non disabilitato',
				'es': 'AP no deshabilitado',
				'pl': 'AP nie jest wyłączony',
				'zh-cn': 'AP 未禁用'
			},
			'1': {
				'en': 'AP disabled',
				'de': 'AP deaktiviert',
				'ru': 'точка доступа отключена',
				'pt': 'AP desativado',
				'nl': 'AP uitgeschakeld',
				'fr': 'PA désactivé',
				'it': 'AP disabilitato',
				'es': 'AP deshabilitado',
				'pl': 'AP wyłączony',
				'zh-cn': '已禁用 AP'
			}
		},
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	APHidden: {
		id: 'WAH',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'WiFi AP hidden',
					'de': 'WiFi-AP versteckt',
					'ru': 'Точка доступа Wi-Fi скрыта',
					'pt': 'Wi-Fi AP escondido',
					'nl': 'WiFi AP verborgen',
					'fr': "Point d'accès Wi-Fi caché",
					'it': 'Punto di accesso Wi-Fi nascosto',
					'es': 'WiFi AP oculto',
					'pl': 'Ukryto punkt dostępu Wi-Fi',
					'zh-cn': 'WiFi AP隐藏'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		rangevalues: {
			'0': {
				'en': 'AP not hidden (visible)',
				'de': 'AP nicht versteckt (sichtbar)',
				'ru': 'ТД не скрыта (видима)',
				'pt': 'AP não oculto (visível)',
				'nl': 'AP niet verborgen (zichtbaar)',
				'fr': 'AP non caché (visible)',
				'it': 'AP non nascosto (visibile)',
				'es': 'AP no oculto (visible)',
				'pl': 'AP nie jest ukryty (widoczny)',
				'zh-cn': 'AP 未隐藏（可见）'
			},
			'1': {
				'en': 'AP hidden',
				'de': 'AP versteckt',
				'ru': 'точка доступа скрыта',
				'pt': 'AP oculto',
				'nl': 'AP verborgen',
				'fr': 'PA caché',
				'it': 'AP nascosto',
				'es': 'AP oculto',
				'pl': 'AP ukryty',
				'zh-cn': 'AP隐藏'
			}
		},
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	NextMaintenance: {
		id: 'SRV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Next maintenance',
					'de': 'Nächste Wartung',
					'ru': 'Следующее обслуживание',
					'pt': 'Próxima manutenção',
					'nl': 'Volgende onderhoud',
					'fr': 'Prochain entretien',
					'it': 'Prossima manutenzione',
					'es': 'Próximo mantenimiento',
					'pl': 'Następna konserwacja',
					'zh-cn': '下次维护'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
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
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
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
					'zh-cn': '无线RSSI'
				},
				type: 'string',
				unit: '%',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
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
		statePath: adapterChannels.DeviceInfo.path,
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
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
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
				type: 'string',
				unit: null,
				role: 'info.address',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
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
		statePath: adapterChannels.DeviceInfo.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
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
				type: 'string',
				unit: null,
				role: 'info.ip',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
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
					'zh-cn': '固件版本'
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WaterConductivity: {
		id: 'CND',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Water conductivity',
					'de': 'Wasserleitfähigkeit',
					'ru': 'Проводимость воды',
					'pt': 'Condutividade da água',
					'nl': 'Water geleidbaarheid',
					'fr': "Conductivité de l'eau",
					'it': "Conducibilità dell'acqua",
					'es': 'Conductividad del agua',
					'pl': 'Przewodność wody',
					'zh-cn': '水电导率'
				},
				type: 'number',
				unit: 'µS/cm',
				role: 'value.conductivity',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterCondition.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WaterTemperature: {
		id: 'CEL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Water temperature',
					'de': 'Wassertemperatur',
					'ru': 'Температура воды',
					'pt': 'Temperatura da água',
					'nl': 'Water temperatuur',
					'fr': "La température de l'eau",
					'it': "Temperatura dell'acqua",
					'es': 'Temperatura de agua',
					'pl': 'Temperatura wody',
					'zh-cn': '水温'
				},
				type: 'number',
				unit: '°C',
				role: 'value.temperature',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterCondition.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WaterPressure: {
		id: 'BAR',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Waterr pressure',
					'de': 'Wasserdruck',
					'ru': 'Давление воды',
					'pt': 'Pressão da água',
					'nl': 'Waterdruk',
					'fr': "Pression d'eau",
					'it': "Pressione dell'acqua",
					'es': 'Presión de agua',
					'pl': 'Ciśnienie wody',
					'zh-cn': '水压'
				},
				type: 'number',
				unit: 'mbar',
				role: 'value.pressure',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterCondition.path,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
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
				unit: null,
				role: 'info.code',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		rangevalues: {
			'10': {
				'en': 'closed',
				'de': 'geschlossen',
				'ru': 'закрыто',
				'pt': 'fechado',
				'nl': 'gesloten',
				'fr': 'fermé',
				'it': 'Chiuso',
				'es': 'cerrado',
				'pl': 'Zamknięte',
				'zh-cn': '关闭'
			},
			'11': {
				'en': 'is closing',
				'de': 'schließt',
				'ru': 'закрывается',
				'pt': 'está fechando',
				'nl': 'gaat sluiten',
				'fr': 'se ferme',
				'it': 'sta chiudendo',
				'es': 'está cerrando',
				'pl': 'zamyka się',
				'zh-cn': '正在关闭'
			},
			'20': {
				'en': 'open',
				'de': 'offen',
				'ru': 'открытым',
				'pt': 'abrir',
				'nl': 'open',
				'fr': 'ouvrir',
				'it': 'aprire',
				'es': 'abierto',
				'pl': 'otwarty',
				'zh-cn': '打开'
			},
			'21': {
				'en': 'is opening',
				'de': 'öffnet',
				'ru': 'открывается',
				'pt': 'está abrindo',
				'nl': 'gaat open',
				'fr': "s'ouvre",
				'it': 'sta aprendo',
				'es': 'Esta abierto',
				'pl': 'otwiera się',
				'zh-cn': '正在打开'
			},
			'30': {
				'en': 'undefined',
				'de': 'nicht definiert',
				'ru': 'неопределенный',
				'pt': 'Indefinido',
				'nl': 'ongedefinieerd',
				'fr': 'indéfini',
				'it': 'non definito',
				'es': 'indefinido',
				'pl': 'nieokreślony',
				'zh-cn': '不明确的'
			}
		},
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
				unit: null,
				role: 'indicator.alarm',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		rangevalues: {
			'FF': {
				'en': 'OK',
				'de': 'OK',
				'ru': 'Ok',
				'pt': 'OK',
				'nl': 'Oke',
				'fr': "d'accord",
				'it': 'ok',
				'es': 'OK',
				'pl': 'ok',
				'zh-cn': '好的'
			},
			'A1': {
				'en': 'ALARM end switch',
				'de': 'ALARM-Endschalter',
				'ru': 'концевой выключатель ТРЕВОГА',
				'pt': 'Interruptor final de ALARME',
				'nl': 'ALARM eindschakelaar',
				'fr': 'Fin de course ALARME',
				'it': 'Finecorsa ALLARME',
				'es': 'Final de carrera de ALARMA',
				'pl': 'Wyłącznik krańcowy ALARM',
				'zh-cn': '报警结束开关'
			},
			'A2': {
				'en': 'no network',
				'de': 'kein Netzwerk',
				'ru': 'нет сети',
				'pt': 'sem rede',
				'nl': 'geen netwerk',
				'fr': 'pas de réseau',
				'it': 'nessuna rete',
				'es': 'sin red',
				'pl': 'brak sieci',
				'zh-cn': '没有网络'
			},
			'A3': {
				'en': 'ALARM volume leakage',
				'de': 'ALARM Volumenleckage',
				'ru': 'СИГНАЛИЗАЦИЯ Объемная утечка',
				'pt': 'Vazamento de volume de ALARME',
				'nl': 'ALARM volume lekkage',
				'fr': 'ALARME fuite de volume',
				'it': 'ALLARME perdita di volume',
				'es': 'ALARMA fuga de volumen',
				'pl': 'Wyciek objętości ALARM',
				'zh-cn': 'ALARM 体积泄漏'
			},
			'A4': {
				'en': 'ALARM time leakage',
				'de': 'ALARM Zeitleckage',
				'ru': 'Утечка времени ТРЕВОГИ',
				'pt': 'Fuga de tempo de ALARME',
				'nl': 'ALARM tijd lekkage',
				'fr': 'ALARME temps de fuite',
				'it': 'Perdita di tempo di ALLARME',
				'es': 'Fuga de tiempo de ALARMA',
				'pl': 'Upływ czasu ALARM',
				'zh-cn': '报警时间泄漏'
			},
			'A5': {
				'en': 'ALARM max flow leakage',
				'de': 'ALARM max. Durchflussleckage',
				'ru': 'АВАРИЙНЫЙ СИГНАЛ Макс. утечка потока',
				'pt': 'ALARME vazamento de fluxo máximo',
				'nl': 'ALARM max. stroomlekkage',
				'fr': 'ALARME débit max fuite',
				'it': 'ALLARME massima perdita di flusso',
				'es': 'ALARMA fuga de caudal máx.',
				'pl': 'ALARM maks. wyciek przepływu',
				'zh-cn': 'ALARM 最大流量泄漏'
			},
			'A6': {
				'en': 'ALARM micro leakage',
				'de': 'ALARM Mikroleckage',
				'ru': 'СИГНАЛИЗАЦИЯ микроутечка',
				'pt': 'ALARME micro vazamento',
				'nl': 'ALARM microlekkage',
				'fr': 'ALARME micro fuite',
				'it': 'ALLARME microperdita',
				'es': 'ALARMA microfuga',
				'pl': 'ALARM mikroprzeciek',
				'zh-cn': 'ALARM 微泄漏'
			},
			'A7': {
				'en': 'ALARM external sensor leakage',
				'de': 'ALARM Leckag von externem Sensors',
				'ru': 'АВАРИЙНЫЙ СИГНАЛ: утечка внешнего датчика',
				'pt': 'ALARME vazamento do sensor externo',
				'nl': 'ALARM lekkage externe sensor',
				'fr': 'ALARME fuite capteur externe',
				'it': 'ALLARME perdita sensore esterno',
				'es': 'ALARMA fuga del sensor externo',
				'pl': 'ALARM wyciek z czujnika zewnętrznego',
				'zh-cn': 'ALARM 外部传感器泄漏'
			},
			'A8': {
				'en': 'ALARM turbine blocked',
				'de': 'ALARM Turbine blockiert',
				'ru': 'СИГНАЛИЗАЦИЯ турбина заблокирована',
				'pt': 'ALARME turbina bloqueada',
				'nl': 'ALARM turbine geblokkeerd',
				'fr': 'ALARME turbine bloquée',
				'it': 'ALLARME turbina bloccata',
				'es': 'ALARMA turbina bloqueada',
				'pl': 'ALARM turbina zablokowana',
				'zh-cn': '警报 涡轮阻塞'
			},
			'A9': {
				'en': 'ALARM pressure sensor error',
				'de': 'ALARM Drucksensorfehler',
				'ru': 'АВАРИЙНЫЙ СИГНАЛ Ошибка датчика давления',
				'pt': 'Erro do sensor de pressão ALARME',
				'nl': 'ALARM druksensor fout',
				'fr': 'ALARME erreur capteur de pression',
				'it': 'Errore sensore di pressione ALLARME',
				'es': 'ALARMA error sensor presión',
				'pl': 'Błąd czujnika ciśnienia ALARM',
				'zh-cn': '报警压力传感器错误'
			},
			'AA': {
				'en': 'ALARM temperature sensor error',
				'de': 'ALARM Temperatursensorfehler',
				'ru': 'АВАРИЙНЫЙ СИГНАЛ Ошибка датчика температуры',
				'pt': 'Erro do sensor de temperatura ALARME',
				'nl': 'ALARM temperatuursensor fout',
				'fr': 'ALARME erreur du capteur de température',
				'it': 'Errore sensore temperatura ALLARME',
				'es': 'ALARMA error sensor temperatura',
				'pl': 'Błąd czujnika temperatury ALARM',
				'zh-cn': 'ALARM 温度传感器错误'
			},
			'AB': {
				'en': 'ALARM conductivity sensor error',
				'de': 'ALARM Leitfähigkeitssensorfehler',
				'ru': 'СИГНАЛИЗАЦИЯ Ошибка датчика проводимости',
				'pt': 'Erro do sensor de condutividade do ALARME',
				'nl': 'ALARM geleidbaarheidssensor fout',
				'fr': 'ALARME erreur du capteur de conductivité',
				'it': 'ALLARME errore sensore di conducibilità',
				'es': 'ALARMA error sensor conductividad',
				'pl': 'ALARM błąd czujnika przewodności',
				'zh-cn': '报警电导率传感器错误'
			},
			'AC': {
				'en': 'ALARM conductivity to high',
				'de': 'ALARM Leitfähigkeit zu hoch',
				'ru': 'ALARM электропроводность слишком высокая',
				'pt': 'Condutividade do ALARME para alta',
				'nl': 'ALARM geleidbaarheid te hoog',
				'fr': 'ALARME conductivité trop élevée',
				'it': 'ALLARME conducibilità elevata',
				'es': 'ALARMA conductividad demasiado alta',
				'pl': 'Przewodność ALARM za wysoka',
				'zh-cn': '报警电导率高'
			},
			'AD': {
				'en': 'low battery',
				'de': 'niedriger Batteriestatus',
				'ru': 'низкий заряд батареи',
				'pt': 'Bateria Fraca',
				'nl': 'lage batterij',
				'fr': 'batterie faible',
				'it': 'batteria scarica',
				'es': 'batería baja',
				'pl': 'niski poziom baterii',
				'zh-cn': '低电量'
			},
			'AE': {
				'en': 'WARNING volume leakage',
				'de': 'WARNUNG Volumenleckage',
				'ru': 'ПРЕДУПРЕЖДЕНИЕ объемная утечка',
				'pt': 'AVISO vazamento de volume',
				'nl': 'WAARSCHUWING volumelekkage',
				'fr': 'AVERTISSEMENT fuite de volume',
				'it': 'AVVERTENZA perdita di volume',
				'es': 'ADVERTENCIA fuga de volumen',
				'pl': 'OSTRZEŻENIE wyciek objętości',
				'zh-cn': '警告 体积泄漏'
			},
			'AF': {
				'en': 'ALARM no power supply',
				'de': 'ALARM keine Stromversorgung',
				'ru': 'СИГНАЛИЗАЦИЯ Нет питания',
				'pt': 'ALARME sem alimentação',
				'nl': 'ALARM geen voeding',
				'fr': "ALARME pas d'alimentation",
				'it': 'ALLARME mancanza di alimentazione',
				'es': 'ALARMA sin alimentación',
				'pl': 'ALARM brak zasilania',
				'zh-cn': '报警无电源'
			}
		},
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
				unit: null,
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
};

const initStates = [
	DeviceParameters.FirmwareVersion,
	DeviceParameters.IPAddress,
	DeviceParameters.MACAddress,
	DeviceParameters.DefaultGateway,
	DeviceParameters.SerialNumber,
	DeviceParameters.CodeNumber,
	DeviceParameters.WiFiRSSI,
	DeviceParameters.WiFiSSID,
	DeviceParameters.NextMaintenance,
	DeviceParameters.APHidden,
	DeviceParameters.APDisabled,
	DeviceParameters.APTimeout,
	DeviceParameters.WiFiDeaktivate,
	DeviceParameters.WiFiState,
	DeviceParameters.BatteryVoltage,
	DeviceParameters.PowerAdapterVoltage,
	DeviceParameters.DaylightSavingTime,
	DeviceParameters.DeactivatePressureSensor,
	DeviceParameters.DeactivateConductivitySensor,
	DeviceParameters.DeactivateTemperatureSensor,
	DeviceParameters.SelectedProfile,
	DeviceParameters.AvailableProfiles,
	DeviceParameters.Language,
	DeviceParameters.Units,
	DeviceParameters.FlorSensor,
	DeviceParameters.MaxFlowLeakageTime,
	DeviceParameters.MicroLeakageTest,
	DeviceParameters.MicroLeakageTestPeriod,
	DeviceParameters.BuzzerOnAlarm,
	DeviceParameters.LeakageNotificationWarningThreshold];

const alarmPeriod = [
	DeviceParameters.CurrentAlarmStatus,
	DeviceParameters.CurrentValveStatus,
	DeviceParameters.ShutOff
];

const shortPeriod = [
	DeviceParameters.WaterTemperature,
	DeviceParameters.WaterConductivity,
	DeviceParameters.WaterPressure,
	DeviceParameters.WaterPressure,
	DeviceParameters.LastTappedVolume,
	DeviceParameters.TotalVolume,
	DeviceParameters.CurrentVolume,
	DeviceParameters.WaterFlow,
	DeviceParameters.TurbineNoPulseTime];

const longPeriode = [
	DeviceParameters.ScreenRotation,
	DeviceParameters.FirmwareCheck,
	DeviceParameters.SystemTime,
	DeviceParameters.WiFiRSSI,
	DeviceParameters.BatteryVoltage,
	DeviceParameters.PowerAdapterVoltage,
	DeviceParameters.LeakProtectionTemporaryDeactivation,
	DeviceParameters.MaxFlowLeakageTime,
	DeviceParameters.MicroLeakageTest,
	DeviceParameters.MicroLeakageTestPeriod,
	DeviceParameters.BuzzerOnAlarm,
	DeviceParameters.LeakageNotificationWarningThreshold,
	DeviceParameters.ValveTestOngoing];

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
		/* Umrechnung in Härte
		eine Quelle besagt, dass 33µS/cm in etwa 1° deutscher Härte entspricht
		*/

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		this.log.debug('config Device IP: ' + this.config.device_ip);
		this.log.debug('config Device Port: ' + this.config.device_port);
		moreMessages = this.config.moremessages;

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
		//===  Create device object and all channel objects												===
		//=================================================================================================
		try {
			await this.initDevicesAndChanels();
		} catch (err) {
			this.log.error('Error from initStatesAndChanels : ' + err);
		}


		//=================================================================================================
		// Test if Device is responding
		//=================================================================================================
		pingOK = false;
		while (!pingOK) {
			try {
				await this.devicePing(this.config.device_ip, this.config.device_port);
				device_responsive = true;	// global flag if device is responsive
				pingOK = true;
			}
			catch (err) {
				this.log.error(err);
			}
		}

		//=================================================================================================
		//===  Connection LED to Green																	===
		//=================================================================================================
		try {
			await this.setStateAsync('info.connection', { val: true, ack: true });
			this.log.debug('info.connection gesetzt');
		}
		catch (err) {
			this.log.warn('Error at: await this.setStateAsync(\'info.connection\', { val: true, ack: true }) Error Message: ' + err);
		}

		//=================================================================================================
		//===  Getting device data																		===
		//=================================================================================================
		let gotDeviceData = false;
		while (!gotDeviceData) {
			try {
				this.log.info('async onReady() - initComckeck -> Getting data from device at ' + this.config.device_ip + ':' + this.config.device_port);
				const responseInit = await this.initDevice();
				this.log.debug(`[async onReady() - initComckeck -> initDevice] Response:  ${responseInit}`);
				gotDeviceData = true;
			}
			catch (err) {
				this.log.error('initDevice() ERROR: ' + err);

				//=================================================================================================
				// Waiting till device is responding again
				//=================================================================================================
				pingOK = false;
				while (!pingOK) {
					try {
						await this.devicePing(this.config.device_ip, this.config.device_port);
						device_responsive = true;	// global flag if device is responsive
						pingOK = true;
					}
					catch (err) {
						this.log.error(err);
					}
				}
			}
		}

		//=================================================================================================
		//===  Getting device Profiles data																===
		//=================================================================================================
		let gotDeviceProfileData = false;
		while (!gotDeviceProfileData) {
			try {
				// Device Profiles Initialisation
				this.log.info('async onReady() - initDeviceProfiles -> Getting Profiles data from device at ' + this.config.device_ip + ':' + this.config.device_port);
				const responseInitProfiles = await this.initDeviceProfiles(this.config.device_ip, this.config.device_port);
				this.log.debug(`[async onReady() - initDeviceProfiles -> initDeviceProfiles] Response:  ${responseInitProfiles}`);
				gotDeviceProfileData = true;
			}
			catch (err) {
				this.log.error('initDeviceProfiles() ERROR: ' + err);

				//=================================================================================================
				// Waiting till device is responding again
				//=================================================================================================
				pingOK = false;
				while (!pingOK) {
					try {
						await this.devicePing(this.config.device_ip, this.config.device_port);
						device_responsive = true;	// global flag if device is responsive
						pingOK = true;
					}
					catch (err) {
						this.log.error(err);
					}
				}
			}
		}

		//=================================================================================================
		//===  Timer starten																			===
		//=================================================================================================
		try {
			const tmstarted = await this.timerStarts();
			this.log.debug('Timers started - result: ' + String(tmstarted));
		} catch (err) {
			this.log.error('Timer start error ... exit');
			// we throw an exception causing Adaper to restart
			throw 'timerStarts() ERROR;' + err;
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
		try {
			const result = await this.checkPasswordAsync('admin', 'iobroker');
			this.log.debug('check user admin pw iobroker: ' + result);
		}
		catch (err) {
			this.log.error('checkPasswordAsync -> ERROR: ' + err);
		}

		try {
			const result = await this.checkGroupAsync('admin', 'admin');
			this.log.debug('check group user admin group admin: ' + result);
		}
		catch (err) {
			this.log.error('checkGroupAsync -> ERROR: ' + err);
		}

		// reference to Adapter
		myAdapter = this;

		this.log.info('Adapter is running');

	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		this.log.warn('[onUnload(callback)] was hit');
		try {
			schedule.gracefulShutdown();
		} catch (err) {
			this.log.error('Error disabeling cron jobs' + err);
		}

		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...

			clearInterval(alarm_Intervall_ID);
			clearInterval(short_Intervall_ID);
			clearInterval(long_Intervall_ID);
			clearInterval(very_long_Intervall_ID);

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
				schedule.scheduleJob(cron_Day, cron_poll_day);
				schedule.scheduleJob(cron_Week, cron_poll_week);
				schedule.scheduleJob(cron_Month, cron_poll_month);
				schedule.scheduleJob(cron_Year, cron_poll_year);
				this.log.debug('Cron timer started');
			} catch (err) {
				this.log.error('Cron timer start error: ' + err);
			}
			try {

				// Die Timer für das Polling starten
				alarm_Intervall_ID = this.setInterval(alarm_poll, parseInt(this.config.device_alarm_poll_interval) * 1000);
				this.log.debug('Alarm timer initialized');
				try {
					await sleep(3000); // Warten um einen Versatz zu erzeugen
				}
				catch (err) {
					this.log.error('await sleep(3000) ERROR: ' + err);
				}
				short_Intervall_ID = this.setInterval(short_poll, parseInt(this.config.device_short_poll_interval) * 1000);
				this.log.debug('Short timer initialized');

				try {
					await sleep(3000); // Warten um einen Versatz zu erzeugen
				}
				catch (err) {
					this.log.error('await sleep(3000) ERROR: ' + err);
				}
				long_Intervall_ID = this.setInterval(long_poll, parseInt(this.config.device_long_poll_interval) * 1000);
				this.log.debug('Long timer initialized');

				try {
					await sleep(2000); // Warten um einen Versatz zu erzeugen
				}
				catch (err) {
					this.log.error('await sleep(3000) ERROR: ' + err);
				}
				very_long_Intervall_ID = this.setInterval(very_long_poll, parseInt(this.config.device_very_long_poll_interval) * 1000);
				this.log.debug('Very Long timer initialized');
				resolve('Alarm timer ID = ' + alarm_Intervall_ID + ' / Short timer ID = ' + short_Intervall_ID + ' / Long timer ID = ' + long_Intervall_ID+ ' / Very long timer ID = ' + very_long_Intervall_ID);
			} catch (err) {
				reject(err);
			}
		});
	}

	//===================================================
	// Cron EVENTS
	async alarm_cron_day_Tick() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.debug('Cron day tick');

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
				try {
					await this.setObjectNotExistsAsync(StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id, StatisticStates.TotalPastDay.objectdefinition);
				}
				catch (err) {
					this.log.error('await this.setObjectNotExistsAsync(' + StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id + ',' + StatisticStates.TotalPastDay.objectdefinition + ' ) ERROR: ' + err);
				}
				try {
					await this.setStateAsync(StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id, { val: parseFloat(TotalDayState.val), ack: true });
				}
				catch (err) {
					this.log.error('setStateAsync(' + StatisticStates.TotalPastDay.statePath + '.' + StatisticStates.TotalPastDay.id + ',' + '{ val: parseFloat(' + TotalDayState.val + '), ack: true }) ERROR: ' + err);
				}

				// resetting sum to 0
				try {
					await this.setObjectNotExistsAsync(StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id, StatisticStates.TotalDay.objectdefinition);
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

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async alarm_cron_week_Tick() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.warn('Cron week tick');

				// ================================================
				// Week sum reset
				// ================================================
				// here we save the sumary and the we reset it to 0
				// ================================================

				// getting saved Total state
				const TotalWeekState = await this.getStateAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id);

				// saving sum to "past" State
				await this.setObjectNotExistsAsync(StatisticStates.TotalPastWeek.statePath + '.' + StatisticStates.TotalPastWeek.id, StatisticStates.TotalPastWeek.objectdefinition);
				await this.setStateAsync(StatisticStates.TotalPastWeek.statePath + '.' + StatisticStates.TotalPastWeek.id, { val: parseFloat(TotalWeekState.val), ack: true });

				// resetting sum to 0
				await this.setObjectNotExistsAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id, StatisticStates.TotalWeek.objectdefinition);
				await this.setStateAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id, { val: 0, ack: true });

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async alarm_cron_month_Tick() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.warn('Cron month tick');

				// ================================================
				// Month sum reset
				// ================================================
				// here we save the sumary and the we reset it to 0
				// ================================================

				// getting saved Total state
				const TotalMonthState = await this.getStateAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id);

				// saving sum to "past" State
				await this.setObjectNotExistsAsync(StatisticStates.TotalPastMonth.statePath + '.' + StatisticStates.TotalPastMonth.id, StatisticStates.TotalPastMonth.objectdefinition);
				await this.setStateAsync(StatisticStates.TotalPastMonth.statePath + '.' + StatisticStates.TotalPastMonth.id, { val: parseFloat(TotalMonthState.val), ack: true });

				// resetting sum to 0
				await this.setObjectNotExistsAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id, StatisticStates.TotalMonth.objectdefinition);
				await this.setStateAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id, { val: 0, ack: true });

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async alarm_cron_year_Tick() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.warn('Cron year tick');

				// ================================================
				// Year sum reset
				// ================================================
				// here we save the sumary and the we reset it to 0
				// ================================================

				// getting saved Total state
				const TotalYearState = await this.getStateAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id);

				// saving sum to "past" State
				await this.setObjectNotExistsAsync(StatisticStates.TotalPastYear.statePath + '.' + StatisticStates.TotalPastYear.id, StatisticStates.TotalPastYear.objectdefinition);
				await this.setStateAsync(StatisticStates.TotalPastYear.statePath + '.' + StatisticStates.TotalPastYear.id, { val: parseFloat(TotalYearState.val), ack: true });

				// resetting sum to 0
				await this.setObjectNotExistsAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id, StatisticStates.TotalYear.objectdefinition);
				await this.setStateAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id, { val: 0, ack: true });

				resolve(true);
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
				this.log.debug('Alarm Timer tick');
				// get alarmPeriode data
				if (!interfaceBussy) {
					await this.getData(alarmPeriod);
					resolve(true);
				}
				else {
					this.log.warn('Interface bussy during ALARM TIMER data request');
					resolve(false);
				}
			} catch (err) {
				interfaceBussy = false;	// CLEAR flag that device interface is bussy
				reject(err);
			}
		});
	}

	async short_TimerTick() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.debug('Short Timer tick');
				// get longPeriode data
				if (!interfaceBussy) {
					await this.getData(shortPeriod);
					try {
						await this.updateStatistics();
					} catch (err) {
						this.log.error('Statistics Error: ' + err);
					}
					resolve(true);
				}
				else {
					this.log.warn('Interface bussy during SHORT TIMER data request');
					resolve(false);
				}
			}
			catch (err) {
				interfaceBussy = false;	// CLEAR flag that device interface is bussy
				reject(err);
			}
		});
	}

	async long_TimerTick() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.debug('Long Timer tick');
				// get longPeriode data
				if (!interfaceBussy) {
					await this.getData(longPeriode);
					resolve(true);
				}
				else {
					this.log.warn('Interface bussy during LONG TIMER data request');
					resolve(false);
				}
			} catch (err) {
				interfaceBussy = false;	// CLEAR flag that device interface is bussy
				reject(err);
			}
		});
	}

	async very_long_TimerTick() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.debug('Very Long Timer tick');
				// get longPeriode data
				if (!interfaceBussy) {
					await this.getData(initStates);
					resolve(true);
				}
				else {
					this.log.warn('Interface bussy during VERY LONG TIMER data request');
					resolve(false);
				}
			} catch (err) {
				interfaceBussy = false;	// CLEAR flag that device interface is bussy
				reject(err);
			}
		});
	}
	//===================================================
	// testing if device ist responding
	async devicePing(IPadress, Port) {
		return new Promise(async (resolve, reject) => {
			interfaceBussy = true;
			axios({ method: 'get', url: 'Http://' + String(IPadress) + ':' + String(Port) + '/safe-tec/get/', timeout: 10000, responseType: 'json' }
			).then(async (response) => {
				interfaceBussy = false;
				this.log.debug('Device http://' + String(IPadress) + ':' + String(Port) + ' OK');
				resolve(response);
			}
			).catch(async (err) => {
				interfaceBussy = false;
				this.log.error('devicePing() -> Device http://' + String(IPadress) + ':' + String(Port) + ' is NOT reachable -> ERROR: ' + err);
				reject(err);
			});
		});
	}


	async getData(statesToGet) {
		return new Promise(async (resolve, reject) => {
			let parnumber = 0;
			try {
				// iterate through all requested Parameters
				for (let i = 0; i < statesToGet.length; i++) {
					parnumber = i;
					let DeviceParameterReturn = null;
					let gotDeviceParameter = false;
					while (!gotDeviceParameter) {
						// Read out parameter from device
						try {
							DeviceParameterReturn = await this.get_DevieParameter(statesToGet[i], this.config.device_ip, this.config.device_port);
							gotDeviceParameter = true;
						}
						catch (err) {
							this.log.error('async getData('+ statesToGet[i].id + ', ' + this.config.device_ip + ':' + this.config.device_port + ' ERROR: ' + err);
							//=================================================================================================
							// Waiting till device is responding again
							//=================================================================================================
							pingOK = false;
							while (!pingOK) {
								try {
									await this.devicePing(this.config.device_ip, this.config.device_port);
									device_responsive = true;	// global flag if device is responsive
									pingOK = true;
								}
								catch (err) {
									this.log.error(err);
								}
							}
						}
					}
					// Update object states
					try {
						await this.updateState(statesToGet[i], DeviceParameterReturn);
					}
					catch (err) {
						// something went wrong during state update
						this.log.error('Error [updateState] ('+ statesToGet[i].id +', ' + DeviceParameterReturn + ') within [getData] ERROR: ' + err);
					}
				}
				resolve(true);
			} catch (err) {
				// something else and unhandled went wrong
				this.log.error('getData(statesToGet) -> somthing else went wrong at ID '+ statesToGet[parnumber].id +'! ERROR: ' + err);
				reject(err);
			}
		});
	}

	//===================================================
	// Creating device object and all channel objects
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
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	//===================================================
	// Divice Initialisation (called on Adapter Start)
	async initDevice() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.debug('Long Timer tick');
				// get longPeriode data
				await this.getData(initStates);
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async initDeviceProfiles(DeviceIP, DevicePort,) {
		return new Promise(async (resolve, reject) => {
			try {

				// alle 8 möglichen Profile durchlaufen
				for (let ProfileNumber = 1; ProfileNumber < 9; ProfileNumber++) {

					this.log.debug('[async initDeviceProfiles(DeviceIP, DevicePort)] Profil ' + ProfileNumber);

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

					this.log.debug(`[initDeviceProfiles()] Profil ` + ProfileNumber);
					for (const stateID of listOfParameter) {
						const parameterIDs = stateID.split('.');
						this.log.debug('current Parameter ID: ' + parameterIDs[parameterIDs.length - 1]);
						let result = null;
						try {
							result = await this.get_DevieProfileParameter(ProfileNumber, parameterIDs[parameterIDs.length - 1], DeviceIP, DevicePort);
							this.log.debug('[' + parameterIDs[parameterIDs.length - 1] + '] : ' + String(JSON.stringify(result)));
						}
						catch (err) {
							this.log.error('initDeviceProfiles -> Error from get_DevieProfileParameter Profile Number:' + String(ProfileNumber) + ' ParameterID:' + String(parameterIDs[parameterIDs.length - 1]));
						}
						try {
							await this.UpdateProfileState(ProfileNumber, stateID, result);
							this.log.debug('Profil ' + ProfileNumber + ' Parameter ' + parameterIDs[parameterIDs.length - 1]);
						}
						catch (err) {
							this.log.error('initDeviceProfiles -> Error from UpdateProfileState -> Profile Number:' + String(ProfileNumber) + ' stateID:' + String(stateID) + ' ParameterID:' + String(parameterIDs[parameterIDs.length - 1]));
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

	//=============================================================================
	// Diese Funktion speichert das übergebene'Value' im entsprechenden State
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

				// Path for state object
				const state_ID = cur_StatePath + '.' + cur_ParameterID;

				let skipp = false;

				if (cur_ParameterID === DeviceParameters.WaterConductivity.id && sensor_conductivity_present === false) { skipp = true; }
				else if (cur_ParameterID === DeviceParameters.WaterPressure.id && sensor_pressure_present === false) { skipp = true; }
				else if (cur_ParameterID === DeviceParameters.WaterTemperature.id && sensor_temperature_present === false) { skipp = true; }

				if (skipp) {
					this.log.debug('Sensor not Present ... skipped');
					resolve(true);
					return;
				}

				try {
					await this.setObjectNotExistsAsync(state_ID, stateID.objectdefinition);
					this.log.debug('stateID.objectdefinition.common.type = ' + stateID.objectdefinition.common.type);
				}
				catch (err) {
					this.log.error('updateState -> await this.setObjectNotExistsAsync(state_ID, stateID.objectdefinition) returned ERROR: ' + err);
				}
				// Path for RAW state object
				const state_ID_RAW = adapterChannels.DeviceRawData.path + '.' + cur_ParameterID;

				// RAW object handling
				const raw_objectdefinition = {
					type: 'state',
					common: {
						name: {
						},
						type: 'json',
						unit: null,
						role: 'state',
						read: true,
						write: false
					},
					native: {}
				};
				raw_objectdefinition.common.name = stateID.objectdefinition.common.name;
				try {
					await this.setObjectNotExistsAsync(state_ID_RAW, Object(raw_objectdefinition));
					this.log.debug('RAW stateID.objectdefinition.common.type = ' + raw_objectdefinition);
				}
				catch (err) {
					this.log.error('updateState -> await this.setObjectNotExistsAsync(state_ID_RAW, Object(raw_objectdefinition) returned ERROR: ' + err);
				}
				// save RAW State
				try {
					this.setStateAsync(state_ID_RAW, { val: JSON.stringify(value), ack: true });
				}
				catch (err) {
					this.log.error('[async updateState(stateID, value)] ERROR saving RAW state. State ID=' + String(state_ID_RAW) + ' Value=' + String(value));
				}

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

				if (stateID.objectdefinition.common.unit !== null) {
					this.log.debug('[async updateState(stateID, value)] info: ' + String(cur_StatePath) + ' ' + String(cur_ParameterID) + ' ' + String(finalValue) + ' ' + String(stateID.objectdefinition.common.unit));
				}
				else {
					this.log.debug('[async updateState(stateID, value)] info: ' + String(cur_StatePath) + ' ' + String(cur_ParameterID) + ' ' + String(finalValue));
				}
				resolve(true);
			} catch (err) {
				this.log.error('[async updateState(stateID, value)] Error: ' + String(err));
				reject(err);
			}
		});
	}

	//=============================================================================
	// returns a globalised value if defined in the parameter Structure
	//=============================================================================
	async getGlobalisedValue(ParameterObject, value) {
		return new Promise(async (resolve, reject) => {
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
				resolve(result);
			} catch (err) {
				reject(err);
			}
		});
	}

	//================================================================================
	// here we convert the raw values from the device into final values for the states
	//================================================================================
	async convertDeviceReturnValue(valueKey, value) {
		return new Promise(async (resolve, reject) => {
			try {
				let finalValue;
				switch (String(valueKey)) {
					case DeviceParameters.Units.id:						// UNI - Units
						finalValue = await this.getGlobalisedValue(DeviceParameters.Units, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) === 0) {
								finalValue = 'metric units';
							} else {
								finalValue = 'imperial units';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.Units, finalValue); }
						break;
					case DeviceParameters.Language.id:					// LNG - Language
						finalValue = await this.getGlobalisedValue(DeviceParameters.Language, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							switch (parseInt(String(value).substring(0, 1))) {
								case 0:
									finalValue = 'de';
									break;
								case 1:
									finalValue = 'en';
									break;
								case 2:
									finalValue = 'es';
									break;
								case 3:
									finalValue = 'it';
									break;
								case 4:
									finalValue = 'pl';
									break;
								default:
									this.log.warn('[async convertDeviceReturnValue(valueKey, value)] Value (' + String(value) + ') for Key (' + String(valueKey) + ') is not defined!');
									finalValue = null;
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.Language, finalValue); }
						break;
					case DeviceParameters.AvailableProfiles.id: 		// PRN - available profiles
						finalValue = await this.getGlobalisedValue(DeviceParameters.AvailableProfiles, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = parseInt(value);
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.AvailableProfiles, finalValue); }
						break;
					case DeviceParameters.SelectedProfile.id: 			// PRF - selected profile
						finalValue = await this.getGlobalisedValue(DeviceParameters.SelectedProfile, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = parseInt(value);
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.SelectedProfile, finalValue); }
						break;
					case DeviceParameters.DeactivateTemperatureSensor.id:	// TSD - Temp sensor present
						if (parseInt(value) == 0) { sensor_temperature_present = true; } else { sensor_temperature_present = false; }
						finalValue = await this.getGlobalisedValue(DeviceParameters.DeactivateTemperatureSensor, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) == 0) {
								sensor_temperature_present = true;
								finalValue = 'Sensor active';
							} else {
								sensor_temperature_present = false;
								finalValue = 'Sensor deactivated';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.DeactivateTemperatureSensor, finalValue); }
						break;
					case DeviceParameters.DeactivateConductivitySensor.id:	// CSD - conductivity sensor present
						if (parseInt(value) == 0) { sensor_conductivity_present = true; } else { sensor_conductivity_present = false; }
						finalValue = await this.getGlobalisedValue(DeviceParameters.DeactivateConductivitySensor, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) == 0) {
								sensor_conductivity_present = true;
								finalValue = 'Sensor active';
							} else {
								sensor_conductivity_present = false;
								finalValue = 'Sensor deactivated';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.DeactivateConductivitySensor, finalValue); }
						break;
					case DeviceParameters.DeactivatePressureSensor.id:	// PSD - Pressure sensor present
						if (parseInt(value) == 0) { sensor_pressure_present = true; } else { sensor_pressure_present = false; }
						finalValue = await this.getGlobalisedValue(DeviceParameters.DeactivatePressureSensor, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) == 0) {
								sensor_pressure_present = true;
								finalValue = 'Sensor active';
							} else {
								sensor_pressure_present = false;
								finalValue = 'Sensor deactivated';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.DeactivatePressureSensor, finalValue); }
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
						if (moreMessages) { await this.moremessages(DeviceParameters.CurrentAlarmStatus, finalValue); }
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
						if (moreMessages) { await this.moremessages(DeviceParameters.CurrentValveStatus, finalValue); }
						break;
					case DeviceParameters.SystemTime.id:				// RTC - System Time
						finalValue = await this.getGlobalisedValue(DeviceParameters.SystemTime, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = (new Date(parseInt(value) * 1000)).toLocaleString();
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.SystemTime, finalValue); }
						break;
					case DeviceParameters.WaterTemperature.id:			// CEL - Water temperature
						if (sensor_temperature_present) {
							finalValue = await this.getGlobalisedValue(DeviceParameters.WaterTemperature, value);
							if (finalValue === null) {	// did we get a globalised Value back?
								finalValue = parseFloat(value) / 10;
								_WaterTemperature = finalValue;
							}
							if (moreMessages) { await this.moremessages(DeviceParameters.WaterTemperature, finalValue); }
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
							if (moreMessages) { await this.moremessages(DeviceParameters.WaterPressure, finalValue); }
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
										try {await this.updateEC25conductivity();}catch (err) {this.log.error('convertDeviceReturnValue -> WaterConductivity -> updateEC25conductivity ERROR: ' + err);}
									}
									try{await this.updateGermanWaterHardnes();}catch (err) {this.log.error('convertDeviceReturnValue -> WaterConductivity -> updateGermanWaterHardnes ERROR: ' + err);}
								}
								if (moreMessages) { try{await this.moremessages(DeviceParameters.WaterConductivity, _WaterConductivity);}catch(err){this.log.error('convertDeviceReturnValue -> WaterConductivity -> moremessages ERROR: '+ err);} }
							}catch(err) {
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
						if (moreMessages) { await this.moremessages(DeviceParameters.BatteryVoltage, finalValue); }
						break;
					case DeviceParameters.PowerAdapterVoltage.id:		// NET - DC voltage (power adaptor)
						value = parseFloat(String(value).replace(',', '.'));
						finalValue = await this.getGlobalisedValue(DeviceParameters.PowerAdapterVoltage, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = parseFloat(value);
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.PowerAdapterVoltage, finalValue); }
						break;
					case DeviceParameters.LastTappedVolume.id:			// LTV - Last tapped Volume
						value = parseFloat(String(value).replace(',', '.'));
						finalValue = await this.getGlobalisedValue(DeviceParameters.LastTappedVolume, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = parseFloat(value);
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.LastTappedVolume, finalValue); }
						break;
					case DeviceParameters.TotalVolume.id:				// VOL - total consumed water
						value = parseFloat(String(value).replace(',', '.').replace('Vol[L]', '')) / 1000;
						finalValue = await this.getGlobalisedValue(DeviceParameters.TotalVolume, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = parseFloat(value);
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.TotalVolume, finalValue); }
						break;
					case DeviceParameters.CurrentVolume.id:				// AVO - current water volume
						value = parseFloat(String(value).replace(',', '.').replace('mL', ''));
						finalValue = await this.getGlobalisedValue(DeviceParameters.CurrentVolume, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = parseFloat(value);
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.CurrentVolume, finalValue); }
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
						if (moreMessages) { await this.moremessages(DeviceParameters.APHidden, finalValue); }
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
						if (moreMessages) { await this.moremessages(DeviceParameters.APDisabled, finalValue); }
						break;
					case DeviceParameters.APTimeout.id:					// APT - WiFi AP timeout
						if (parseInt(value) == 0) {
							finalValue = await this.getGlobalisedValue(DeviceParameters.APTimeout, 0);
							if (finalValue === null) {	// did we get a globalised Value back?
								finalValue = 'AP timeout not active';
							}
						} else {
							finalValue = await this.getGlobalisedValue(DeviceParameters.APTimeout, 'else');
							if (finalValue === null) {	// did we get a globalised Value back?
								finalValue = 'AP disabled after ' + String(value) + ' seconds after internet connection';
							}
							else {
								finalValue = String(finalValue).replace('XX', String(value));
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.APTimeout, finalValue); }
						break;
					case DeviceParameters.WiFiDeaktivate.id:			// DWL - WiFi deactivated
						finalValue = await this.getGlobalisedValue(DeviceParameters.WiFiDeaktivate, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) == 0) {
								finalValue = 'active (default)';
							} else {
								finalValue = 'deactivated';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.WiFiDeaktivate, finalValue); }
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
						if (moreMessages) { await this.moremessages(DeviceParameters.WiFiState, finalValue); }
						break;
					case DeviceParameters.DaylightSavingTime.id:		// IDS - Daylight saving time
						finalValue = await this.getGlobalisedValue(DeviceParameters.DaylightSavingTime, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) == 0) {
								finalValue = 'disabled';
							} else {
								finalValue = 'enabled';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.DaylightSavingTime, finalValue); }
						break;
					case DeviceParameters.FirmwareVersion.id:			// VER -Firmware Version
						finalValue = await this.getGlobalisedValue(DeviceParameters.FirmwareVersion, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.FirmwareVersion, finalValue); }
						break;
					case DeviceParameters.IPAddress.id: 				// WIP - IP address
						finalValue = await this.getGlobalisedValue(DeviceParameters.IPAddress, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.IPAddress, finalValue); }
						break;
					case DeviceParameters.MACAddress.id:				// MAC -MAC address
						finalValue = await this.getGlobalisedValue(DeviceParameters.MACAddress, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.MACAddress, finalValue); }
						break;
					case DeviceParameters.DefaultGateway.id:			// WGW - Default gateway
						finalValue = await this.getGlobalisedValue(DeviceParameters.DefaultGateway, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.DefaultGateway, finalValue); }
						break;
					case DeviceParameters.SerialNumber.id:				// SRN - Device serial number
						finalValue = await this.getGlobalisedValue(DeviceParameters.SerialNumber, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.SerialNumber, finalValue); }
						break;
					case DeviceParameters.CodeNumber.id:				// CNO - Code Number
						finalValue = await this.getGlobalisedValue(DeviceParameters.CodeNumber, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.CodeNumber, finalValue); }
						break;
					case DeviceParameters.WiFiRSSI.id:					// WFR - WiFi RSSI
						finalValue = await this.getGlobalisedValue(DeviceParameters.WiFiRSSI, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.WiFiRSSI, finalValue); }
						break;
					case DeviceParameters.WiFiSSID.id:					// WFC - WiFi SSID
						finalValue = await this.getGlobalisedValue(DeviceParameters.WiFiSSID, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.WiFiSSID, finalValue); }
						break;
					case DeviceParameters.NextMaintenance.id:			// SRV - Next Maintenance
						finalValue = await this.getGlobalisedValue(DeviceParameters.NextMaintenance, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.NextMaintenance, finalValue); }
						break;
					case DeviceParameters.FlorSensor.id:				// BSA - Floor Sensor
						finalValue = await this.getGlobalisedValue(DeviceParameters.FlorSensor, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) == 0) {
								finalValue = 'Floor sensor disabled';
							} else {
								finalValue = 'Floor sensor enabled';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.FlorSensor, finalValue); }
						break;
					case DeviceParameters.ShutOff.id:					// AB - Shutoff state
						finalValue = await this.getGlobalisedValue(DeviceParameters.ShutOff, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) == 1) {
								finalValue = 'Shutoff opened';
							} else if (parseInt(value) == 2) {
								finalValue = 'Shutoff closed';
							}
							else {
								finalValue = 'Shutoff undefined';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.ShutOff, finalValue); }
						break;
					case DeviceParameters.LeakProtectionTemporaryDeactivation.id:	// TMP Leackage protection temporary deactivation
						finalValue = await this.getGlobalisedValue(DeviceParameters.LeakProtectionTemporaryDeactivation, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.LeakProtectionTemporaryDeactivation, finalValue); }
						break;
					case DeviceParameters.MaxFlowLeakageTime.id:		// T2 - Max flow leakage time
						finalValue = await this.getGlobalisedValue(DeviceParameters.MaxFlowLeakageTime, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.MaxFlowLeakageTime, finalValue); }
						break;
					case DeviceParameters.MicroLeakageTest.id:			// DMA - Micro leakage test
						finalValue = await this.getGlobalisedValue(DeviceParameters.MicroLeakageTest, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							switch (String(value)) {
								case '0':
									finalValue = 'Disabled';
									break;
								case '1':
									finalValue = 'Warning';
									break;
								case '2':
									finalValue = 'Shutoff';
									break;
								default:
									this.log.warn('[async convertDeviceReturnValue(valueKey, value)] Value (' + String(value) + ') for Key (' + String(valueKey) + ') is not defined!');
									finalValue = null;
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.MicroLeakageTest, finalValue); }
						break;
					case DeviceParameters.MicroLeakageTestPeriod.id:	// DRP - Micro leakage test period
						finalValue = await this.getGlobalisedValue(DeviceParameters.MicroLeakageTestPeriod, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							switch (String(value)) {
								case '0':
									finalValue = 'always';
									break;
								case '1':
									finalValue = 'day';
									break;
								case '2':
									finalValue = 'week';
									break;
								case '3':
									finalValue = 'month';
									break;
								default:
									this.log.warn('[async convertDeviceReturnValue(valueKey, value)] Value (' + String(value) + ') for Key (' + String(valueKey) + ') is not defined!');
									finalValue = null;
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.MicroLeakageTestPeriod, finalValue); }
						break;
					case DeviceParameters.BuzzerOnAlarm.id:				// BUZ - Buzzer on alarm
						finalValue = await this.getGlobalisedValue(DeviceParameters.BuzzerOnAlarm, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							if (parseInt(value) == 0) {
								finalValue = 'Buzzer disabled';
							} else {
								finalValue = 'Buzzer enabled';
							}
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.BuzzerOnAlarm, finalValue); }
						break;
					case DeviceParameters.LeakageNotificationWarningThreshold.id:	// LWT - Leakage notification (warning) threshold
						finalValue = await this.getGlobalisedValue(DeviceParameters.LeakageNotificationWarningThreshold, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.LeakageNotificationWarningThreshold, finalValue); }
						break;
					case DeviceParameters.WaterFlow.id:					// FLO - Water flow
						finalValue = await this.getGlobalisedValue(DeviceParameters.WaterFlow, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.WaterFlow, finalValue); }
						break;
					case DeviceParameters.TurbineNoPulseTime.id:		// NPS - Turbine no pulse time
						finalValue = await this.getGlobalisedValue(DeviceParameters.TurbineNoPulseTime, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.TurbineNoPulseTime, finalValue); }
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
						if (moreMessages) { await this.moremessages(DeviceParameters.ValveTestOngoing, finalValue); }
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
						if (moreMessages) { await this.moremessages(DeviceParameters.FirmwareCheck, finalValue); }
						break;
					case DeviceParameters.ScreenRotation.id:			// SRO - Screen rotation
						finalValue = await this.getGlobalisedValue(DeviceParameters.ScreenRotation, value);
						if (finalValue === null) {	// did we get a globalised Value back?
							finalValue = value;
						}
						if (moreMessages) { await this.moremessages(DeviceParameters.ScreenRotation, finalValue); }
						break;
					default:
						this.log.warn('[async convertDeviceReturnValue(valueKey, value)] Key (' + String(valueKey) + ') is not valid!');
						finalValue = value;
				}
				resolve(finalValue);
			} catch (err) {
				reject(err);
			}
		});
	}

	async set_FACTORY_Mode() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.set_DevieParameter(DeviceParameters.ServiceMode, Parameter_FACTORY_Mode, this.config.device_ip, this.config.device_port);
				this.log.debug('FACTORY Mode aktiv');
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async set_SERVICE_Mode() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.set_DevieParameter(DeviceParameters.ServiceMode.id, Parameter_SERVICE_Mode, this.config.device_ip, this.config.device_port);
				this.log.debug('SERVICE Mode aktiv');
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	async clear_SERVICE_FACTORY_Mode() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.clr_DevieParameter(DeviceParameters.ServiceMode.id, this.config.device_ip, this.config.device_port);
				this.log.debug('SERVICE or FACTORY Mode cleared');

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	//=============================================================================
	// here we generate the additional messages if this option is aktive in the
	// adapter settings
	//=============================================================================
	async moremessages(ParameterStruct, value) {
		return new Promise(async (resolve, reject) => {
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
					this.log.info(ID + ' - ' + Name + ': ' + String(value) + ' ' + Unit);
				} else {
					this.log.info(ID + ' - ' + Name + ': ' + String(value));
				}
				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}
	//=============================================================================
	// here we do a part of the math for the statistics
	//=============================================================================
	async updateStatistics() {
		return new Promise(async (resolve, reject) => {
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
					// pulling values from state if state already existed
					lastTotalValue = parseFloat(lastTotalvalueState.val);
				}
				catch (err) {
					this.log.error('async updateStatistics() -> lastTotalvalueState = await this.getStateAsync(StatisticStates.TotalLastValue.statePath + \'.\' + StatisticStates.TotalLastValue.id) -> returned ERROR: ' + err);
				}

				try {
					currentTotalvalueState = await this.getStateAsync(DeviceParameters.TotalVolume.statePath + '.' + DeviceParameters.TotalVolume.id);
					// pulling values from state if state already existed
					currentTotalValue = parseFloat(currentTotalvalueState.val) * 1000;
				}
				catch (err) {
					this.log.error('async updateStatistics() -> currentTotalvalueState = await this.getStateAsync(DeviceParameters.TotalVolume.statePath + \'.\' + DeviceParameters.TotalVolume.id) -> returned ERROR: ' + err);
				}

				try {
					current_Day_valueState = await this.getStateAsync(StatisticStates.TotalDay.statePath + '.' + StatisticStates.TotalDay.id);
					// pulling values from state if state already existed
					current_Day = parseFloat(current_Day_valueState.val);
				}
				catch (err) {
					this.log.error('async updateStatistics() -> current_Day_valueState = await this.getStateAsync(StatisticStates.TotalDay.statePath + \'.\' + StatisticStates.TotalDay.id) -> returned ERROR: ' + err);
				}

				try {
					current_Week_valueState = await this.getStateAsync(StatisticStates.TotalWeek.statePath + '.' + StatisticStates.TotalWeek.id);
					// pulling values from state if state already existed
					current_Week = parseFloat(current_Week_valueState.val);
				}
				catch (err) {
					this.log.error('async updateStatistics() -> current_Week_valueState = await this.getStateAsync(StatisticStates.TotalWeek.statePath + \'.\' + StatisticStates.TotalWeek.id) -> returned ERROR: ' + err);
				}

				try {
					current_Month_valueState = await this.getStateAsync(StatisticStates.TotalMonth.statePath + '.' + StatisticStates.TotalMonth.id);
					// pulling values from state if state already existed
					current_Month = parseFloat(current_Month_valueState.val);
				}
				catch (err) {
					this.log.error('async updateStatistics() -> current_Month_valueState = await this.getStateAsync(StatisticStates.TotalMonth.statePath + \'.\' + StatisticStates.TotalMonth.id) -> returned ERROR: ' + err);
				}

				try {
					current_Year_valueState = await this.getStateAsync(StatisticStates.TotalYear.statePath + '.' + StatisticStates.TotalYear.id);
					// pulling values from state if state already existed
					current_Year = parseFloat(current_Year_valueState.val);
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

				resolve(true);
			} catch (err) {
				reject(err);
			}
		});
	}

	//=============================================================================
	// here we calculate Water conductivity -> German water hardness
	//=============================================================================
	async updateGermanWaterHardnes() {
		return new Promise(async (resolve, reject) => {
			try {
				this.log.debug('calculating german water hardness ...');
				if((_WaterConductivity === 0) || _WaterConductivity === null){reject('updateGermanWaterHardnes -> No valid water conductivity value');}
				let german_hardnes = 0;

				if(_WaterConductivity_EC25 === 0)
				{
					// Water hardnes NOT temperatur compensated
					german_hardnes = parseFloat((_WaterConductivity * parseFloat(this.config.factor_german_water_hardnes)).toFixed(2));
					if(moreMessages){this.log.info('German water hardness: ' + german_hardnes + ' (NOT temperature compensated)');}
				}else{
					// Water hardnes temperatur compensated
					german_hardnes = parseFloat((_WaterConductivity_EC25 * parseFloat(this.config.factor_german_water_hardnes)).toFixed(2));
					if(moreMessages){this.log.info('German water hardness: ' + german_hardnes + ' (Temperature compensated)');}
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
				resolve(true);
			}
			catch (err) {
				reject(err);
			}
		});
	}

	async updateEC25conductivity(){
		return new Promise(async (resolve, reject) => {
			// The formula is:
			// EC25 = EC / (1 + 0.020 * (t - 25))
			// EC25: COnductivity at 25°C
			// EC: Measured conductivity at Temperature t
			// t: Temperature in °C
			try {
				if((_WaterConductivity === 0) || _WaterConductivity === null){reject('updateEC25conductivity -> No valid water conductivity value');}
				if((_WaterTemperature === 0) || _WaterTemperature === null){reject('updateEC25conductivity -> No valid water temperature value');}

				_WaterConductivity_EC25 = parseFloat((_WaterConductivity / (1 + 0.02 * (_WaterTemperature -25)) ).toFixed(2));

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
				resolve(true);
			}
			catch (err) {
				reject(err);
			}
		});
	}
	//#########################################################################
	// OBSOLETE ?
	//#########################################################################
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
	async get_DevieParameter(Parameter, IPadress, Port) {
		return new Promise(async (resolve, reject) => {

			// Flag indicating if we had to modifiy Admin Mode
			let readModeChanged = false;
			this.log.debug(`[getDevieParameter(ParameterID)] ${Parameter.id}`);

			// is parameter readable?
			if (Parameter.readCommand === null) {
				this.log.warn('[async get_DevieParameter(Parameter, IPadress, Port)] Parameter ID ' + String(Parameter.id) + ' can\'t be read!');
				reject('Parameter ID ' + String(Parameter.id) + ' can\'t be read!');
			}

			// Do we need special permission to read this parameter?
			if (Parameter.levelRead === 'SERVICE') {
				try{
					await this.set_SERVICE_Mode();
					readModeChanged = true;
				}
				catch(err){
					this.log.error('get_DevieParameter -> set_SERVICE_Mode() ERROR: ' + err);
				}
			}
			else if (Parameter.levelRead === 'FACTORY') {
				try{
					await this.set_FACTORY_Mode();
					readModeChanged = true;
				}
				catch(err){
					this.log.error('get_DevieParameter -> set_FACTORY_Mode() ERROR: ' + err);
				}
			}
			interfaceBussy = true;
			axios({ method: 'get', url: 'Http://' + String(IPadress) + ':' + String(Port) + '/safe-tec/get/' + String(Parameter.id), timeout: 10000, responseType: 'json' }
			).then(async (response) => {
				interfaceBussy = false;
				const content = response.data;
				this.log.debug(`[getSensorData] local request done after ${response.responseTime / 1000}s - received data (${response.status}): ${JSON.stringify(content)}`);

				if (readModeChanged) {
					try {
						await this.clear_SERVICE_FACTORY_Mode();
					}
					catch (err) {
						this.log.error('async get_DevieParameter(Parameter, IPadress, Port) -> await this.clear_SERVICE_FACTORY_Mode() - ERROR: ' + err);
					}
				}
				resolve(response.data);
			}
			).catch(async (error) => {
				if (error.response) {
					// The request was made and the server responded with a status code
					this.log.error('async get_DevieParameter(Parameter, IPadress, Port): Response Code: ' + String(error.message));
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js<div></div>
					this.log.error('async get_DevieParameter(Parameter, IPadress, Port): Request got no response: ' + error.message);
				} else {
					// Something happened in setting up the request that triggered an Error
					this.log.error('async get_DevieParameter(Parameter, IPadress, Port): Error: ' + error.message);
				}
				interfaceBussy = false;
				reject('axios ERROR: ' + error.message);
			});
		});
	}

	//===================================================
	// Pulls the Information from the Device
	// ParameterID: API command Parameter (last instance of the State path)
	// IPadress: Device IP Adress
	// Port: Device Port
	//===================================================
	// Return: Readed Value from Device (JSON Format)
	async set_DevieParameter(Parameter, Value, IPadress, Port) {
		return new Promise(async (resolve, reject) => {
			// Flag indicating if we had to modifiy Admin Mode
			let writeModeChanged = false;

			this.log.debug(`[set_DevieParameter(ParameterID)] ${Parameter.id} Value: ${Value}`);

			// is parameter readable?
			if (Parameter.writeCommand === null) {
				this.log.warn('[async set_DevieParameter(Parameter, IPadress, Port)] Parameter ID ' + String(Parameter.id) + ' can not be written!');
				reject('Parameter ID ' + String(Parameter.id) + ' can not be written!');
			}

			// Do we need special permission to read this parameter?
			if (Parameter.levelWrite === 'SERVICE') {
				await this.set_SERVICE_Mode();
				writeModeChanged = true;
			}
			else if (Parameter.levelWrite === 'FACTORY') {
				await this.set_FACTORY_Mode();
				writeModeChanged = true;
			}

			axios({
				method: 'get', url: 'http://' + String(IPadress) + ':' + String(Port) + '/safe-tec/set/' + String(Parameter.id) + '/' + String(Value), timeout: 10000, responseType: 'json'
			}
			).then(async (response) => {
				const content = response.data;
				this.log.debug(`[setDeviceParameter] local request done after ${response.responseTime / 1000}s - received data (${response.status}): ${JSON.stringify(content)}`);

				if (writeModeChanged) {
					try {
						await this.clear_SERVICE_FACTORY_Mode();
					}
					catch (err) {
						this.log.error('async set_DevieParameter(Parameter, Value, IPadress, Port) -> await this.clear_SERVICE_FACTORY_Mode() - ERROR: ' + err);
					}
				}

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
	// Pulls the Information from the Device
	// ParameterID: API command Parameter (last instance of the State path)
	// IPadress: Device IP Adress
	// Port: Device Port
	//===================================================
	// Return: Readed Value from Device (JSON Format)
	async clr_DevieParameter(Parameter, IPadress, Port) {
		return new Promise(async (resolve, reject) => {

			this.log.debug(`[set_DevieParameter(ParameterID)] ${Parameter.id}`);

			axios({
				method: 'get', url: 'http://' + String(IPadress) + ':' + String(Port) + '/safe-tec/clr/' + String(Parameter.id), timeout: 10000, responseType: 'json'
			}
			).then(async (response) => {
				const content = response.data;
				this.log.debug(`[setDeviceParameter] local request done after ${response.responseTime / 1000}s - received data (${response.status}): ${JSON.stringify(content)}`);

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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PA' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							'en': 'Profile ' + String(ProfileNumber) + ' available',
							'de': 'Profil ' + String(ProfileNumber) + ' verfügbar',
							'ru': 'Профиль ' + String(ProfileNumber) + ' доступен',
							'pt': 'Perfil ' + String(ProfileNumber) + ' disponível',
							'nl': 'Profiel ' + String(ProfileNumber) + ' beschikbaar',
							'fr': 'Profil ' + String(ProfileNumber) + ' disponible',
							'it': 'Profilo ' + String(ProfileNumber) + ' disponibile',
							'es': 'Perfil ' + String(ProfileNumber) + ' disponible',
							'pl': 'Profil ' + String(ProfileNumber) + ' dostępny',
							'zh-cn': '配置文件 ' + String(ProfileNumber) + ' 可用'
						},
						type: 'boolean',
						role: 'indicator.available',
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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PN' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							'en': 'Profile ' + String(ProfileNumber) + ' name',
							'de': 'Profil ' + String(ProfileNumber) + ' Name',
							'ru': 'Имя профиля ' + String(ProfileNumber) + '',
							'pt': 'Nome do perfil ' + String(ProfileNumber) + '',
							'nl': 'Profiel ' + String(ProfileNumber) + ' naam',
							'fr': 'Nom du profil ' + String(ProfileNumber) + '',
							'it': 'Nome del profilo ' + String(ProfileNumber) + '',
							'es': 'Perfil ' + String(ProfileNumber) + ' nombre',
							'pl': 'Nazwa profilu ' + String(ProfileNumber) + '',
							'zh-cn': '配置文件 ' + String(ProfileNumber) + ' 名称'
						},
						type: 'string',
						role: 'info.name',
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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PV' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							'en': 'Profile ' + String(ProfileNumber) + ' quantity limitation (0 = disabled 1...1900l)',
							'de': 'Profil ' + String(ProfileNumber) + ' Mengenbegrenzung (0 = deaktiviert 1...1900l)',
							'ru': 'Ограничение количества профиля ' + String(ProfileNumber) + ' (0 = отключено 1...1900l)',
							'pt': 'Limitação de quantidade do perfil ' + String(ProfileNumber) + ' (0 = desabilitado 1...1900l)',
							'nl': 'Profiel ' + String(ProfileNumber) + ' hoeveelheidsbeperking (0 = uitgeschakeld 1...1900l)',
							'fr': 'Limitation de quantité profil ' + String(ProfileNumber) + ' (0 = désactivé 1...1900l)',
							'it': 'Limitazione quantità profilo ' + String(ProfileNumber) + ' (0 = disabilitato 1...1900l)',
							'es': 'Limitación de cantidad perfil ' + String(ProfileNumber) + ' (0 = deshabilitado 1...1900l)',
							'pl': 'Ograniczenie ilości profilu ' + String(ProfileNumber) + ' (0 = wyłączone 1...1900l)',
							'zh-cn': '配置文件 ' + String(ProfileNumber) + ' 数量限制（0 = 禁用 1...1900l）'
						},
						type: 'number',
						role: 'value.info',
						unit: 'l',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: parseFloat(value['getPV' + String(ProfileNumber)]), ack: true });
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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PT' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							'en': 'Profile ' + String(ProfileNumber) + ' time limit (0 = disabled 1...1500min (25h)',
							'de': 'Profil ' + String(ProfileNumber) + ' Zeitlimit (0 = deaktiviert 1...1500min (25h)',
							'ru': 'Ограничение времени профиля ' + String(ProfileNumber) + ' (0 = отключено 1...1500 мин (25 ч)',
							'pt': 'Limite de tempo do perfil ' + String(ProfileNumber) + ' (0 = desabilitado 1...1500min (25h)',
							'nl': 'Tijdslimiet profiel ' + String(ProfileNumber) + ' (0 = uitgeschakeld 1...1500min (25h)',
							'fr': 'Limite de temps profil ' + String(ProfileNumber) + ' (0 = désactivé 1...1500min (25h)',
							'it': 'Limite di tempo del profilo ' + String(ProfileNumber) + ' (0 = disabilitato 1...1500min (25h)',
							'es': 'Perfil ' + String(ProfileNumber) + ' límite de tiempo (0 = deshabilitado 1...1500min (25h)',
							'pl': 'Limit czasu profilu ' + String(ProfileNumber) + ' (0 = wyłączone 1...1500min (25h)',
							'zh-cn': '配置文件 ' + String(ProfileNumber) + ' 时间限制（0 = 禁用 1...1500min (25h)'
						},
						type: 'number',
						role: 'value.info',
						unit: 'min',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: parseFloat(value['getPT' + String(ProfileNumber)]), ack: true });
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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PF' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							'en': 'Profile ' + String(ProfileNumber) + ' maximum flow (0 = deaktiviert 1...5000l/h)',
							'de': 'Profil ' + String(ProfileNumber) + ' maximaler Durchfluss (0 = deaktiviert 1...5000l/h)',
							'ru': 'Максимальный расход профиля ' + String(ProfileNumber) + ' (0 = деактивировать 1...5000 л/ч)',
							'pt': 'Fluxo máximo do perfil ' + String(ProfileNumber) + ' (0 = inativo 1...5000l/h)',
							'nl': 'Profiel ' + String(ProfileNumber) + ' maximaal debiet (0 = deaktiviert 1...5000l/h)',
							'fr': 'Profil ' + String(ProfileNumber) + ' débit maximum (0 = désactivation 1...5000l/h)',
							'it': 'Portata massima profilo ' + String(ProfileNumber) + ' (0 = deaktiviert 1...5000l/h)',
							'es': 'Perfil ' + String(ProfileNumber) + ' caudal máximo (0 = desactivado 1...5000l/h)',
							'pl': 'Profil ' + String(ProfileNumber) + ' maksymalny przepływ (0 = deaktiviert 1...5000l/h)',
							'zh-cn': '轮廓 ' + String(ProfileNumber) + ' 最大流量 (0 = 失职 1...5000l/h)'
						},
						type: 'number',
						role: 'value.max',
						unit: 'l/h',
						read: true,
						write: false
					},
					native: {}
				});
				this.setStateAsync(state_ID, { val: parseFloat(value['getPF' + String(ProfileNumber)]), ack: true });
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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PM' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							'en': 'Profile ' + String(ProfileNumber) + ' microleak detektion',
							'de': 'Profil ' + String(ProfileNumber) + ' Mikroleckerkennung',
							'ru': 'Профиль ' + String(ProfileNumber) + ' обнаружение микроутечек',
							'pt': 'Detecção de microvazamento de perfil ' + String(ProfileNumber) + '',
							'nl': 'Profiel ' + String(ProfileNumber) + ' microlekdetectie',
							'fr': 'Détection de microfuite profil ' + String(ProfileNumber) + '',
							'it': 'Rilevamento microperdite del profilo ' + String(ProfileNumber) + '',
							'es': 'Perfil ' + String(ProfileNumber) + ' detección de microfugas',
							'pl': 'Profil ' + String(ProfileNumber) + ' wykrywanie mikroprzecieków',
							'zh-cn': '轮廓 ' + String(ProfileNumber) + ' 微泄漏检测'
						},
						type: 'string',
						role: 'info.status',
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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PR' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							en: 'Profile ' + String(ProfileNumber) + ' Return Time to standard Profile (1...720h (30 Days))',
							de: 'Profil ' + String(ProfileNumber) + ' Zeit bis zur Rückkehr zum Standardprofil (1...720h (30 Tage))'
						},
						type: 'string',
						role: 'value.info',
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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PB' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							'en': 'Profile ' + String(ProfileNumber) + ' Buzzer',
							'de': 'Profil ' + String(ProfileNumber) + ' Summer',
							'ru': 'Профиль ' + String(ProfileNumber) + ' Зуммер',
							'pt': 'Campainha do Perfil ' + String(ProfileNumber),
							'nl': 'Profiel ' + String(ProfileNumber) + ' zoemer',
							'fr': 'Profil ' + String(ProfileNumber) + ' Buzzer',
							'it': 'Cicalino di profilo ' + String(ProfileNumber),
							'es': 'Perfil ' + String(ProfileNumber) + ' Zumbador',
							'pl': 'Profil ' + String(ProfileNumber) + ' Brzęczyk',
							'zh-cn': '配置文件 ' + String(ProfileNumber) + ' 蜂鸣器'
						},
						type: 'string',
						role: 'info.status',
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
				const state_ID = 'Device.Profiles.' + String(ProfileNumber) + '.PW' + String(ProfileNumber);
				await this.setObjectNotExistsAsync(state_ID, {
					type: 'state',
					common: {
						name: {
							'en': 'Profile ' + String(ProfileNumber) + ' leakage warning',
							'de': 'Profil ' + String(ProfileNumber) + ' Leckagewarnung',
							'ru': 'Предупреждение об утечке профиля ' + String(ProfileNumber),
							'pt': 'Aviso de vazamento do perfil ' + String(ProfileNumber),
							'nl': 'Lekkagewaarschuwing profiel ' + String(ProfileNumber),
							'fr': 'Alerte fuite profil ' + String(ProfileNumber),
							'it': 'Avviso di perdita del profilo ' + String(ProfileNumber),
							'es': 'Advertencia de fuga del perfil ' + String(ProfileNumber),
							'pl': 'Ostrzeżenie o wycieku profilu ' + String(ProfileNumber),
							'zh-cn': 'Profile ' + String(ProfileNumber) + ' 泄漏警告'
						},
						type: 'string',
						role: 'info.status',
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
//===================================================
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

async function very_long_poll() {
	try {
		await myAdapter.very_long_TimerTick();
	} catch (err) {
		//throw new Error(err);
	}
}

async function cron_poll_day() {
	try {
		await myAdapter.alarm_cron_day_Tick();
	} catch (err) {
		//throw new Error(err);
	}

}

async function cron_poll_week() {
	try {
		await myAdapter.alarm_cron_week_Tick();
	} catch (err) {
		//throw new Error(err);
	}

}

async function cron_poll_month() {
	try {
		await myAdapter.alarm_cron_month_Tick();
	} catch (err) {
		//throw new Error(err);
	}

}

async function cron_poll_year() {
	try {
		await myAdapter.alarm_cron_year_Tick();
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


