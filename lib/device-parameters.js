/* eslint-disable quotes */

/**
 * [Objects] Adapter chanels definition
 * ==========================
 * SYR SaveTech Connect 2422
 * ==========================
 */
const adapterChannels = {
	DeviceControl: {
		path: 'Device.Device-Control',
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
	DeviceSelfLearning: {
		path: 'Device.SelfLearning',
		channel: {
			type: 'channel',
			common: {
				name: {
					'en': 'Self learning',
					'de': 'Selbstlernen',
					'ru': 'Самое обучение',
					'pt': 'Auto-aprendizagem',
					'nl': 'Zelf leren',
					'fr': 'Autoapprentissage',
					'it': 'Autoapprendimento',
					'es': 'Auto aprendizaje',
					'pl': 'Uczenie się',
					'zh-cn': '自我学习'
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

/**
 * [Objects] Calculatet values
 * including state definition
 */
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
				unit: '°dH',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterCondition.path,
		saveRawData: false,
		createOnStartup: false,
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
				role: 'value',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterCondition.path,
		saveRawData: false,
		createOnStartup: false,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
};

/**
 * [Objects] Calculatet statistic values
 * including state definition
 */
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
		saveRawData: false,
		createOnStartup: true,
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
		saveRawData: false,
		createOnStartup: true,
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
		saveRawData: false,
		createOnStartup: true,
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
		saveRawData: false,
		createOnStartup: true,
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
		saveRawData: false,
		createOnStartup: true,
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
		saveRawData: false,
		createOnStartup: true,
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
		saveRawData: false,
		createOnStartup: true,
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
		saveRawData: false,
		createOnStartup: true,
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
		saveRawData: false,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
};


//#############################################################################################
//####### TEMPLATES ###########################################################################
//#############################################################################################
/*
	EXAMPLE: {
		id: 'EXAMPLE',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "no name available",
					"de": "kein name verfügbar",
					"ru": "имя не доступно",
					"pt": "sem nome disponível",
					"nl": "geen naam",
					"fr": "pas de nom disponible",
					"it": "nessun nome disponibile",
					"es": "no hay nombre disponible",
					"pl": "niedostępna nazwa",
					"uk": "без назви",
					"zh-cn": "姓名"
				},
				desc: {
					"en": "no description available",
					"de": "keine Beschreibung verfügbar",
					"ru": "нет описания",
					"pt": "sem descrição disponível",
					"nl": "geen beschrijving beschikbaar",
					"fr": "aucune description disponible",
					"it": "nessuna descrizione disponibile",
					"es": "no hay descripción disponible",
					"pl": "niedostępny opis",
					"uk": "немає опису",
					"zh-cn": "无说明"
				},
				type: 'string', // boolean, number
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		rangevalues: {
			'FF': {
				"en": "OK",
				"de": "OKAY",
				"ru": "ОК",
				"pt": "ESTÁ BEM",
				"nl": "OKÉ",
				"fr": "OK",
				"it": "OK",
				"es": "OK",
				"pl": "OK",
				"uk": "ЗАРЕЄСТРУВАТИСЯ",
				"zh-cn": "OK"
			},
			'A1': {
				"en": "ALARM end switch",
				"de": "ALARM Endschalter",
				"ru": "ALARM конечный переключатель",
				"pt": "Interruptor de fim ALARM",
				"nl": "ALARM end schakel",
				"fr": "ALARM switch",
				"it": "Interruttore finale ALARM",
				"es": "Interruptor de extremo ALARM",
				"pl": "ALARM",
				"uk": "ALARM кінцевий вимикач",
				"zh-cn": "ALARM/2)"
			}
		},
		saveRawData: false,
		createOnStartup: false,
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	}
	*/

/**
 * [Objects] Device Settings and Parameter definitions
 * including state definition
 */
const DeviceParameters = {
	ALM: {
		id: 'ALM',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Alarm memory",
					"de": "Alarmspeicher",
					"ru": "Сигнализация памяти",
					"pt": "Memória de alarme",
					"nl": "Alarm geheugen",
					"fr": "Mémoire d ' alarme",
					"it": "Memoria di allarme",
					"es": "Memoria de alarma",
					"pl": "Pamięć Alarma",
					"uk": "Пам'ять сигналізації",
					"zh-cn": "宣 言"
				},
				desc: {
					"en": "Get alarm memory (eight alarms) with '->' before current alarm, FF = empty",
					"de": "Alarmspeicher (acht Alarme) mit '->' vor dem letzten, FF = leer",
					"ru": "Получить память тревоги (восемь сигналов) с '->' перед текущей сигнализацией, FF = пустой",
					"pt": "Obter memória de alarme (oito alarmes) com '->' antes do alarme atual, FF = vazio",
					"nl": "Vertaling:",
					"fr": "Récupérez la mémoire d'alarme (huit alarmes) avec '- alerte' avant l'alarme courante, FF = vide",
					"it": "Ottenere la memoria di allarme (otto allarmi) con '->' prima dell'allarme corrente, FF = vuoto",
					"es": "Obtenga memoria de alarma (ocho alarmas) con '- título' antes de alarma actual, FF = vacío",
					"pl": "Pamięć alarmowa (osiem alarmów) z '->' przed obecnym alarmem, FF = pusty",
					"uk": "Отримувати пам'ять сигналів (висотні сигнали) з '->' перед поточною тривожністю, FF = порожні",
					"zh-cn": "Get震惊记忆(英明的震惊)"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	BUP: {
		id: 'BUP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Buzzer parameters",
					"de": "Buzzer Parameter",
					"ru": "Параметры Buzzer",
					"pt": "Parâmetros do Buzzer",
					"nl": "Buzzer parameters",
					"fr": "Paramètres de bulle",
					"it": "Parametri Buzzer",
					"es": "Parámetros de Buzzer",
					"pl": "Parametr Buzzera",
					"uk": "Параметри Buzzer",
					"zh-cn": "Buzzer参数"
				},
				desc: {
					"en": "Buzzer parameters: X = duration of sound [100ms] Y = duration of repetition [100ms] BUZ: Puls[100ms]:X Periode[100ms]:Y, setX Y",
					"de": "Buzzer Parameter: X = Schalldauer [100ms] Y = Dauer der Wiederholung [100ms] BUZ: Puls[100ms]:X Zeit[100ms]:Y, setX Y",
					"ru": "Параметры Buzzer: X = длительность звучания [100ms] Y = продолжительность повторения [100ms] BUZ: Puls[100ms]:X Periode[100ms]:Y, setX Y",
					"pt": "Parâmetros do campainha: X = duração do som [100ms] Y = duração da repetição [100ms] BUZ: Puls[100ms]:X Periode[100ms]:Y, setX Y",
					"nl": "Vertaling: Y = plicht van herhaling X Periode:",
					"fr": "Paramètres d'émission: X = durée du son [100ms] Y = durée de répétition [100ms] BUZ: Puls[100ms]:X Periode[100ms]:Y, setX Y",
					"it": "Parametri Buzzer: X = durata del suono [100ms] Y = durata della ripetizione [100ms] BUZ: Puls[100ms]:X Periode[100ms]:Y, setX Y",
					"es": "Parámetros de buzzer: X = duración del sonido [100ms] Y = duración de la repetición [100ms] BUZ: Puls[100ms]:X Periode[100ms]:Y, setX Y",
					"pl": "Parametry buzzera: X = długość dźwięku 100 ms. Y = czas powtarzania (100ms). BUZ: Puls (100ms):X Periode100ms:Y, setX Y Y",
					"uk": "Параметри Buzzer: X = тривалість звучання [100ms] Y = тривалість повторення [100ms] BUZ: Puls[100ms]:X Період[100ms]:Y, setX Y",
					"zh-cn": "阿塞拜疆参数:十 = 稳健[100ms]的期限 Y = 重复的期限[100] BUZ: Puls[100ms]:X Periode[100ms]:Y, XY"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'FACTORY',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WFL: {
		id: 'WFL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "WiFi scan",
					"de": "WLAN-Scan",
					"ru": "WiFi сканирование",
					"pt": "Verificação de acesso",
					"nl": "WiFi scan",
					"fr": "WiFi scan",
					"it": "Scansione WiFi",
					"es": "Wi-Fi",
					"pl": "WiFi",
					"uk": "Відеоспостереження",
					"zh-cn": "WFi扫描"
				},
				desc: {
					"en": "WiFi list in JSON format",
					"de": "WLAN-Liste im JSON-Format",
					"ru": "Список WiFi в формате JSON",
					"pt": "Lista de Wi-Fi no formato JSON",
					"nl": "WiFi lijst in JSON formaat",
					"fr": "Liste WiFi en format JSON",
					"it": "Lista WiFi in formato JSON",
					"es": "Lista WiFi en formato JSON",
					"pl": "Strona internetowa formatu JSON",
					"uk": "Статус на сервери",
					"zh-cn": "IFi清单"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	FSL: {
		id: 'FSL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Paired Floorsensors list",
					"de": "Verbundene Bodensensoren",
					"ru": "Paired Floorsensors список",
					"pt": "Lista pareada de Floorsensors",
					"nl": "Vertaling:",
					"fr": "Liste des planchers paires",
					"it": "Elenco dei sensori per pavimenti accoppiati",
					"es": "Lista de pareados",
					"pl": "Paired Floorsensor lista",
					"uk": "Список пов'язаних підлог",
					"zh-cn": "Paired Floorsensors名单"
				},
				desc: {
					"en": "Paired Floorsensors list in JSON format",
					"de": "Liste der verbundene Bodensensoren im JSON-Format",
					"ru": "Список парных Floorsensors в формате JSON",
					"pt": "Lista pareada de Floorsensors em formato JSON",
					"nl": "Vertaling:",
					"fr": "Liste des planchers en format JSON",
					"it": "Elenco sensori per pavimenti abbinati in formato JSON",
					"es": "Lista de pareados en formato JSON",
					"pl": "Paired Floorsensor lista w formatach JSON",
					"uk": "Список пов'язаних підлог в форматі JSON",
					"zh-cn": "Paired Floorsensors List in JSON格式"
				},
				type: 'string',
				unit: null,
				role: 'json',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	FSA: {
		id: 'FSA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Add (Pair) Floorsensor",
					"de": "Bodensensor hinzufügen (Pair)",
					"ru": "Добавить (Pair) Floorsensor",
					"pt": "Adicionar (Pair) Floorsensor",
					"nl": "Vertaling:",
					"fr": "Ajouter (Pair)",
					"it": "Aggiungi (Pair) Floorsensor",
					"es": "Add (Pair) Floorsensor",
					"pl": "Addd (ang.)",
					"uk": "Додати (Pair) Підлога",
					"zh-cn": "增加(Pair) Floorsensor"
				},
				desc:{
					"en": "Command adds/pairs Floorsensor with the given serial number Get command returns actual state of the pairing: 0 - not paired 1 - pairing in progress (30s timeout) 2 - paired OK",
					"de": "Befehl addiert/pairs Bodensensor mit der angegebenen Seriennummer. Auslesen gibt den tatsächlichen Zustand der Paarung zurück: 0 - nicht gepaart 1 - Paarung im findet statt (30s Timeout) 2 - gepaart OK",
					"ru": "Команда добавляет/пары Floorsensor с заданным серийным номером Получить команду возвращает фактическое состояние пары: 0 - не спаренный 1 - пара в прогрессе (30s timeout) 2 - пару OK",
					"pt": "Comando adiciona / pares Floorsensor com o número de série dado Obter comando retorna estado real do emparelhamento: 0 - não emparelhado 1 - emparelhamento em progresso (30s timeout) 2 - emparelhado OK",
					"nl": "Commando plus/pairs Floorsensor met de gegeven serienummer Laat het commando terugkeren. 0 - niet gepubliceerd 1 - paring in progress (30s time-out) 2 --",
					"fr": "Command adds/pairs Floorsensor avec le numéro de série donné Obtenez la commande retourne l'état réel de la paire: 0 - pas apparié 1 - jumelage en cours (30s timeout) 2 - couplé OK",
					"it": "Comando aggiunge/pairs Floorsensor con il dato numero di serie Ottenere il comando restituisce stato effettivo dell'accoppiamento: 0 - non abbinato 1 - accoppiamento in corso (30s timeout) 2 - abbinato OK",
					"es": "Comando añade/pairs Floorsensor con el número de serie dado Obtener el comando devuelve el estado real de la pareja: 0 - no emparejado 1 - emparejando en progreso (30s timeout) 2 - emparejado OK",
					"pl": "Dowództwo dodaje czujnik / pary czujnik z danym numerem seryjnym. Pozwólcie doprowadzić do właściwego stanu parowania: Powracamy właściwe państwo parowania. 0 - nie parował 1 - parowanie w czasie (30 lat). 2 – parę z OK",
					"uk": "Команда додає / пари Підлога з заданим серійним номером Отримати команду повертається фактичний стан пари: 0 - не парі 1 - парі в прогресі (30s timeout) 2 - парований OK",
					"zh-cn": "指挥部增拨/营利器,附有特定的序号 指挥人员实际返回了结转: 导 言 A. 导 言"
				},
				type: 'number',
				unit: '',
				role: 'state',
				def: 0,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceControl.path,
		saveRawData: true,
		createOnStartup: true,
		readParameter: false,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	STH_GET: {
		id: 'STH',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Statistics history file",
					"de": "Statistiken Historie Datei",
					"ru": "Файл истории статистики",
					"pt": "Arquivo de histórico de estatísticas",
					"nl": "Statistieken geschiedenis",
					"fr": "Dossier historique des statistiques",
					"it": "File di storia delle statistiche",
					"es": "Historial de la estadística",
					"pl": "Statystyka",
					"uk": "Файл історії статистики",
					"zh-cn": "统计历史档案"
				},
				desc: {
					"en": "Last 0...100 entries in CSV format",
					"de": "Letzte 0...100 Einträge im CSV-Format",
					"ru": "Последние 0...100 записей в формате CSV",
					"pt": "Últimas 0...100 entradas em formato CSV",
					"nl": "Laatste 0.100 ingangen in CSV-vormat",
					"fr": "Dernières 0...100 entrées dans le format CSV",
					"it": "Ultimi 0...100 voci in formato CSV",
					"es": "Últimas 0...100 entradas en formato CSV",
					"pl": "0,100 w formacie CSV",
					"uk": "Останнє 0...100 записів в форматі CSV",
					"zh-cn": "最后一 0.100 中文"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	ALH_GET: {
		id: 'ALH',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Alarm history file",
					"de": "Alarmhistorie Datei",
					"ru": "Файл истории тревоги",
					"pt": "Arquivo de histórico de alarme",
					"nl": "Alarm",
					"fr": "Alarm history file",
					"it": "File storia dell'allarme",
					"es": "Archivo de historia de alarma",
					"pl": "Alarm History",
					"uk": "Файл історії сигналізації",
					"zh-cn": "宣 言"
				},
				desc: {
					"en": "Last 0...100 entries in CSV format",
					"de": "Letzte 0...100 Einträge im CSV-Format",
					"ru": "Последние 0...100 записей в формате CSV",
					"pt": "Últimas 0...100 entradas em formato CSV",
					"nl": "Laatste 0.100 ingangen in CSV-vormat",
					"fr": "Dernières 0...100 entrées dans le format CSV",
					"it": "Ultimi 0...100 voci in formato CSV",
					"es": "Últimas 0...100 entradas en formato CSV",
					"pl": "0,100 w formacie CSV",
					"uk": "Останнє 0...100 записів в форматі CSV",
					"zh-cn": "最后一 0.100 中文"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	PAH_GET: {
		id: 'PAH',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Parameters history file",
					"de": "Parameter Historie Datei",
					"ru": "Файл истории параметров",
					"pt": "Arquivo de histórico de parâmetros",
					"nl": "Parameters history file",
					"fr": "Fichier historique des paramètres",
					"it": "File di storia dei parametri",
					"es": "Archivo de historia de parámetros",
					"pl": "Parametry",
					"uk": "Файл історії параметрів",
					"zh-cn": "历史摘要"
				},
				desc: {
					"en": "Last 0...100 entries in CSV format",
					"de": "Letzte 0...100 Einträge im CSV-Format",
					"ru": "Последние 0...100 записей в формате CSV",
					"pt": "Últimas 0...100 entradas em formato CSV",
					"nl": "Laatste 0.100 ingangen in CSV-vormat",
					"fr": "Dernières 0...100 entrées dans le format CSV",
					"it": "Ultimi 0...100 voci in formato CSV",
					"es": "Últimas 0...100 entradas en formato CSV",
					"pl": "0,100 w formacie CSV",
					"uk": "Останнє 0...100 записів в форматі CSV",
					"zh-cn": "最后一 0.100 中文"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	DSV: {
		id: 'DSV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Micro-Leakage-Test state",
					"de": "Mikro Leckage Test Zustand",
					"ru": "Micro-Leakage-Test государство",
					"pt": "Estado de Micro-Leakage-Test",
					"nl": "Micro-Leakage-Test staat",
					"fr": "État de micro-détente",
					"it": "Micro-Leakage-Test stato",
					"es": "Micro-Leakage-Test state",
					"pl": "Micro-Leakage-Test state (ang.)",
					"uk": "Micro-Leakage-Test держава",
					"zh-cn": "微额教学国家"
				},
				desc:{
					"en": "Current MLT state: 0 MLT not active 1 MLT in progress 2 MLT stopped by pressure drop 3 MLT discarded (water flow)",
					"de": "Aktueller MLT Status: 0 MLT nicht aktiv 1 MLT aktiev 2 MLT gestoppt durch Druckabfall 3 MLT verworfen (Wasserfluss)",
					"ru": "Текущее состояние MLT 0 MLT неактивное 1 MLT в прогрессе 2 MLT остановилось на выпадении давления 3 MLT discarded (водопоток)",
					"pt": "Estado MLT atual 0 MLT não ativo 1 MLT em progresso 2 MLT interrompido por queda de pressão 3 MLT descartado (fluxo de água)",
					"nl": "Current MLT state 0 MLT not active 1 MLT in progress 2 MLT stopped by pressure drop 3 MLT discarded (water flow)",
					"fr": "État MLT actuel 0 MLT n'est pas actif 1 MLT en cours 2 MLT arrêtée par chute de pression 3 MLT rejetée (écoulement de l'eau)",
					"it": "Corrente stato MLT 0 MLT non attivo 1 MLT in corso 2 MLT fermato da caduta di pressione 3 MLT scartato (flusso di acqua)",
					"es": "Estado MLT actual 0 MLT no activo 1 MLT en progreso 2 MLT detenido por caída de presión 3 MLT descartado (flujo de agua)",
					"pl": "Aktualne stany MLT 0 MLT nie aktywne 1 MLT w postępach 2 MLT zaprzestano przez spadek ciśnienia 3 MLT (pływ wody)",
					"uk": "Поточний стан MLT 0 MLT не активний 1 MLT в прогресі 2 MLT припинив падіння тиску 3 MLT (водний потік)",
					"zh-cn": "目前,MLT国家0. MLT 未在2 MLT中积极活跃的1MLT,其压力下降3 MLT(水流)"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 0,
				max: 3,
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	MSC: {
		id: 'MSC',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Maintenance (Husty) server connection",
					"de": "Wartung (Husty)) Serververbindung",
					"ru": "Поддержка (Husty) соединения с сервером",
					"pt": "Conexão do servidor de manutenção (Husty)",
					"nl": "Verbinding met de server",
					"fr": "Maintenance (Husty) connexion du serveur",
					"it": "Connessione del server di manutenzione (Husty)",
					"es": "Mantenimiento (Husty) conexión servidor",
					"pl": "Strona internetowa serwera",
					"uk": "Обслуговування сервера (Husty)",
					"zh-cn": "维修(名誉)服务器"
				},
				desc:{
					"en": "0 Connection disabled 1 Connection enabled",
					"de": "0 Verbindung deaktiviert 1 Verbindung aktiviert",
					"ru": "0 Подключение отключено 1 подключение включено",
					"pt": "0 Conexão desativada 1 Conexão habilitada",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Connexion désactivée 1 Connexion activée",
					"it": "0 Connessione disabilitata 1 Connessione abilitata",
					"es": "0 Conexión desactivada 1 Conexión habilitada",
					"pl": "Złączony 1 Connection umożliwia użytkownikom 0",
					"uk": "0 Підключення вимкнено 1 Увімкнення",
					"zh-cn": "0 残疾人1个营救"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	MRT: {
		id: 'MRT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MQTT reconnect time",
					"de": "MQTT Wiederverbindunszeit nach Unterbrechung",
					"ru": "MQTT отсоединить время",
					"pt": "Tempo de reconectação MQTT",
					"nl": "MQTT reconnect time",
					"fr": "Temps de reconnectage MQTT",
					"it": "Tempo di riconnettere MQTT",
					"es": "Tiempo de reconexión MQTT",
					"pl": "MQTT reconnection time",
					"uk": "Час відключення MQTT",
					"zh-cn": "技 会"
				},
				desc:{
					"en": "MQTT reconnect time if was disconnected 0 disabled 1...60min",
					"de": "MQTT Wiederverbindunszeit wenn unterbrochen 0 deaktiviert 1...60min",
					"ru": "MQTT отсоединить время, если было отключено 0 отключено 1...60мин",
					"pt": "MQTT reconectar tempo se foi desconectado 0 desativado 1...60min",
					"nl": "MQTT verbindt de tijd als er geen 0 gehandicapten is",
					"fr": "Temps de reconnectage MQTT si a été déconnecté 0 désactivé 1...60min",
					"it": "MQTT riconnettere il tempo se è stato staccato 0 disabilitato 1...60min",
					"es": "MQTT tiempo de reconexión si se desconectó 0...60min",
					"pl": "MQTT przełączał czas, gdy został odłączony 0...60min",
					"uk": "Час відключення MQTT, якщо було вимкнено 0 вимкнено 1...60min",
					"zh-cn": "如果残疾0.1.60min脱钩,技合会重新连接时间。"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				min: 0,
				max: 60,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	MQT: {
		id: 'MQT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MQTT connection type",
					"de": "MQTT Verbindungssart",
					"ru": "Тип подключения MQTT",
					"pt": "Tipo de conexão MQTT",
					"nl": "MQT-verbinding",
					"fr": "Type de connexion MQTT",
					"it": "Tipo di connessione MQTT",
					"es": "Tipo de conexión MQTT",
					"pl": "MQTT",
					"uk": "Тип підключення MQTT",
					"zh-cn": "MQTT连接类型"
				},
				desc:{
					"en": "0 no MQTT (HTTPS) 1 MQTT",
					"de": "0 kein MQTT (HTTPS) 1 MQTT",
					"ru": "0 нет MQTT (HTTPS) 1 MQTT",
					"pt": "0 no MQTT (HTTPS) 1 MQTT",
					"nl": "0 no MQTT (HTPS)",
					"fr": "0 non MQTT (HTTPS) 1 MQTT",
					"it": "0 no MQTT (HTTPS) 1 MQTT",
					"es": "0 no MQTT (HTTPS) 1 MQTT",
					"pl": "0 no MQTT (ang.)",
					"uk": "0 немає MQTT (HTTPS) 1 MQTT",
					"zh-cn": "页:1"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	HTD: {
		id: 'HTD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Disable HTTPS connection (only MQTT)",
					"de": "HTTPS-Verbindung deaktivieren (nur MQTT)",
					"ru": "Отключить HTTPS соединение (только MQTT)",
					"pt": "Desativar a conexão HTTPS (somente MQTT)",
					"nl": "Verbinding met HTPS",
					"fr": "Désactiver la connexion HTTPS (seulement MQTT)",
					"it": "Disattivare la connessione HTTPS (solo MQTT)",
					"es": "Conexión HTTPS deshabilitada (sólo MQTT)",
					"pl": "Niedostępne połączenia HTTPS (na przykład MQTT)",
					"uk": "Вимкнути підключення HTTPS (тільки MQTT)",
					"zh-cn": "有害的HTTPS联系(即MQTT)"
				},
				desc:{
					"en": "0 HTTPS not disabled 1 HTTPS disabled (only MQTT)",
					"de": "0 HTTPS nicht deaktiviert 1 HTTPS deaktiviert (nur MQTT)",
					"ru": "0 HTTPS не инвалид 1 HTTPS (только MQTT)",
					"pt": "0 HTTPS não desativado 1 HTTPS desativado (apenas MQTT)",
					"nl": "0 HTPS niet gehandicapt 1 HTPS gehandhaafd (only MQTTT)",
					"fr": "0 HTTPS non désactivé 1 HTTPS désactivé (uniquement MQTT)",
					"it": "0 HTTPS non disabilitato 1 HTTPS disabilitato (solo MQTT)",
					"es": "0 HTTPS no discapacitados 1 HTTPS discapacitados (sólo MQTT)",
					"pl": "0 HTTPS nie uszkodził 1 HTTPS (nazywany MQTT)",
					"uk": "0 HTTPS не вимкнено 1 HTTPS вимкнено (тільки MQTT)",
					"zh-cn": "页:1"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DTT: {
		id: 'DTT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Micro-Leakage-Test start time",
					"de": "Micro-Leakage-Test Startzeit",
					"ru": "Micro-Leakage-Test время начала",
					"pt": "Tempo de início do Micro-Leakage-Test",
					"nl": "Micro-Leakage-Test starttijd",
					"fr": "Temps de démarrage de Micro-Leakage-Test",
					"it": "Micro-Leakage-Test tempo di inizio",
					"es": "Micro-Leakage-Test tiempo de inicio",
					"pl": "Mik-Leakage-Test rozpoczął się od czasu startu",
					"uk": "Час запуску Micro-Leakage-Test",
					"zh-cn": "微额车试验开始时间"
				},
				desc:{
					"en": "Hour and minute when the MLT starts 00:00...23:59",
					"de": "Stunde und Minute, wenn der MLT beginnt 00:00...23:59",
					"ru": "Час и минута, когда MLT начинается 00:00...23:59",
					"pt": "Hora e minuto quando o MLT começa 00:00...23:59",
					"nl": "Hour en minuut als de MLT 00..23:59",
					"fr": "Heure et minute quand le MLT commence 00:00...23:59",
					"it": "Ore e minuti quando il MLT inizia alle 00:00...23:59",
					"es": "Hora y minuto cuando el MLT comienza 00:00...23:59",
					"pl": "Godzina i minuta, kiedy MLT zaczyna się od 00:00...23:59",
					"uk": "Година і хвилина коли MLT розпочинає 00:00... 23:59",
					"zh-cn": "当MLT开始00:00时,电话和分钟:59:"
				},
				type: 'string',
				unit: 'time',
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DTC: {
		id: 'DTC',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MLT verification cycles",
					"de": "MLT Prüfzyklen",
					"ru": "Циклы проверки MLT",
					"pt": "Ciclos de verificação MLT",
					"nl": "MLT verificatie cyclus",
					"fr": "Cycles de vérification MLT",
					"it": "Cicli di verifica MLT",
					"es": "Ciclos de verificación MLT",
					"pl": "Cykl weryfikacji MLT",
					"uk": "Цикли перевірки MLT",
					"zh-cn": "MLT 核查周期"
				},
				desc:{
					"en": "1...20 cycles",
					"de": "1...20 Zyklen",
					"ru": "1...20 циклов",
					"pt": "1...20 ciclos",
					"nl": "1...20 cyclussen",
					"fr": "1 à 20 cycles",
					"it": "1...20 cicli",
					"es": "1...20 ciclos",
					"pl": "cykl 1..20",
					"uk": "1...20 цикли",
					"zh-cn": "1..20 周期"
				},
				type: 'number',
				unit: 'cycles',
				role: 'state',
				min: 1,
				max: 20,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DST: {
		id: 'DST',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MLT test time NOPULS",
					"de": "MLT Testzeit NOPULS",
					"ru": "Время теста MLT NOPULS",
					"pt": "MLT tempo de teste NOPULSOS",
					"nl": "MLT testtijd NOPUL",
					"fr": "MLT test time NOPULS",
					"it": "Tempo di prova MLT NOPULS",
					"es": "Tiempo de prueba MLT NOPULS",
					"pl": "MLT test time NOPULS (ang.)",
					"uk": "Час тестування MLT NOPULS",
					"zh-cn": "MLT试验时"
				},
				desc:{
					"en": "0 Deactivated 1…480min (8h)",
					"de": "0 deaktiviert 1...480min (8h)",
					"ru": "0 Отключено 1...480мин (8ч)",
					"pt": "0 Desativado 1...480min (8h)",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Désactivé 1...480min (8h)",
					"it": "0 Disattivato 1...480min (8h)",
					"es": "0 Desactivado 1...480min (8h)",
					"pl": "0 Dezaktywacja 1..480min (8h)",
					"uk": "0 Деактивований 1...480min (8h)",
					"zh-cn": "页:1"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				min: 0,
				max: 480,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DPL: {
		id: 'DPL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MLT pulses",
					"de": "MLT Impulse",
					"ru": "MLT пульсы",
					"pt": "Pulsações MLT",
					"nl": "MLT polsen",
					"fr": "MLT pulsations",
					"it": "Pulsanti MLT",
					"es": "Pulsores MLT",
					"pl": "Impulsy MLT",
					"uk": "MLT імпульси",
					"zh-cn": "MLT pulses"
				},
				desc:{
					"en": "3...99 pulses",
					"de": "3...99 Impulse",
					"ru": "3...99 импульсов",
					"pt": "3...99 pulsos",
					"nl": "3...99 polsen",
					"fr": "3...99 pouls",
					"it": "3...99 impulsi",
					"es": "3...99 pulsos",
					"pl": "3,99 impulsów",
					"uk": "3...99 імпульсів",
					"zh-cn": "3.99 发 动"
				},
				type: 'number',
				unit: 'pulses',
				role: 'state',
				min: 3,
				max: 99,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DOM: {
		id: 'DOM',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MLT test time open",
					"de": "MLT Testzeit offen",
					"ru": "Время теста MLT открыто",
					"pt": "MLT tempo de teste aberto",
					"nl": "MLT testtijd opent",
					"fr": "Temps d ' essai MLT ouvert",
					"it": "Tempo di prova MLT aperto",
					"es": "Tiempo de prueba MLT abierto",
					"pl": "MLT test",
					"uk": "Відкрито тестовий час MLT",
					"zh-cn": "MLT试验时间开放"
				},
				desc:{
					"en": "1...60s",
					"de": "1...60s",
					"ru": "1...60с",
					"pt": "1...60s",
					"nl": "1...60s",
					"fr": "1...60s",
					"it": "1...60s",
					"es": "1...60s",
					"pl": "1..60s",
					"uk": "1...60с",
					"zh-cn": "1.60s"
				},
				type: 'number',
				unit: 's',
				role: 'state',
				min: 1,
				max: 60,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DKI: {
		id: 'DKI',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Safe-Tec device kind ID",
					"de": "Safe-Tec Geräteart ID",
					"ru": "Безопасное устройство типа ID",
					"pt": "Identificação do tipo dispositivo Safe-Tec",
					"nl": "Safe-Tec identificatie",
					"fr": "Numéro de type de dispositif Safe-Tec",
					"it": "ID tipo dispositivo Safe-Tec",
					"es": "ID de tipo dispositivo Safe-Tec",
					"pl": "Safe-Tec – rodzaj ID",
					"uk": "Безпечний пристрій типу ID",
					"zh-cn": "安全装置种类"
				},
				desc:{
					"en": "0 return to default value 1-255 (not changeable whith default settings)",
					"de": "0 zurück zum standardwert 1-255 (nicht änderbar in Standardeinstellungen)",
					"ru": "0 вернуться к значения по умолчанию 1-255 (не изменяемые настройки по умолчанию)",
					"pt": "0 retornar ao valor padrão 1-255 (configurações padrão não mutáveis)",
					"nl": "0 keer terug naar defecte waarde 1-255 (niet veranderende zending)",
					"fr": "0 retour à la valeur par défaut 1-255 (pas de paramètres par défaut changeables)",
					"it": "0 ritorno al valore predefinito 1-255 (non modificabili impostazioni predefinite di whith)",
					"es": "0 retorno al valor predeterminado 1-255 (no modificable configuración predeterminada de whith)",
					"pl": "0 zwraca domyślną wartość 1-255 (nie zmieniające się domyślne ustawienia)",
					"uk": "0 повернення до значення за замовчуванням 1-255 (не змінні налаштування за замовчуванням)",
					"zh-cn": "0 返还1 1-255(未改变的违约情况)"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 0,
				max: 255,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	HWV: {
		id: 'HWV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Hardware version",
					"de": "Hardwareversion",
					"ru": "Hardware версия",
					"pt": "Versão de hardware",
					"nl": "Hardware",
					"fr": "Version matérielle",
					"it": "Versione hardware",
					"es": "Versión de hardware",
					"pl": "Wersja Hardware",
					"uk": "Версія обладнання",
					"zh-cn": "提高认识版本"
				},
				desc:{
					"en": "HW version without dot, e.g. 35 → v.3.5",
					"de": "HW-Version ohne Punkt, z.B. 35 → v.3.5",
					"ru": "Версия HW без точки, например 35 → v.3.5",
					"pt": "Versão HW sem ponto, por exemplo 35 → v.3.5",
					"nl": "HW versie zonder dosis 35",
					"fr": "Version HW sans point, p.ex. 35 → v.3.5",
					"it": "Versione HW senza punto, ad esempio 35 → v.3.5",
					"es": "HW versión sin puntos, por ejemplo 35 → v.3.5",
					"pl": "Wersja HW bez kropki, e.g 35 → v.3",
					"uk": "HW версія без точки, наприклад 35 → v.3.5",
					"zh-cn": "HW 没有作案,例如35----诉3.5"
				},
				type: 'number',
				unit: '',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WNS: {
		id: 'WNS',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "WiFi AP disabled",
					"de": "WiFi AP deaktiviert",
					"ru": "WiFi AP инвалид",
					"pt": "Acesso Wi-Fi",
					"nl": "WiFi AP gehandicapt",
					"fr": "WiFi AP désactivé",
					"it": "WiFi AP disabili",
					"es": "WiFi AP disabled",
					"pl": "WiFi AP (ang.)",
					"uk": "WiFi AP вимкнено",
					"zh-cn": "残疾人协会"
				},
				desc:{
					"en": "0 scan for AP before connection; 1 scan disabled before connection",
					"de": "0 Scan für AP vor der Verbindung; 1 Scan deaktiviert vor der Verbindung",
					"ru": "0 сканирование для AP перед подключением; 1 скан перед подключением",
					"pt": "0 digitalização para AP antes da conexão; 1 digitalização desativada antes da conexão",
					"nl": "0-scan voor verbinding, 1 scan gehandicapt voor de connectie",
					"fr": "0 scan pour AP avant connexion; 1 scan désactivé avant connexion",
					"it": "0 scansione per AP prima della connessione; 1 scansione disabilitata prima della connessione",
					"es": "0 escaneo para AP antes de la conexión; 1 escaneo deshabilitado antes de la conexión",
					"pl": "skanowanie AP przed połączeniem; 1 skanowanie niepełnosprawne przed połączeniem",
					"uk": "0 сканування для AP перед підключенням; 1 сканування вимкнено до підключення",
					"zh-cn": "209. 在联系前对AP进行扫描;在联系前,1名扫描残疾人"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	TYP: {
		id: 'TYP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Safe-Tec type",
					"de": "Safe-Tec Typ",
					"ru": "Тип Safe-Tec",
					"pt": "Tipo Safe-Tec",
					"nl": "Safe-Tec type",
					"fr": "Type Safe-Tec",
					"it": "Tipo Safe-Tec",
					"es": "Tipo Safe-Tec",
					"pl": "Safe-Tec",
					"uk": "Сейф-Тек тип",
					"zh-cn": "安全类型"
				},
				desc:{
					"en": "0 return to default value 1-255 (not changeable whith default settings)",
					"de": "0 zurück zum standardwert 1-255 (nicht änderbar in Standardeinstellungen)",
					"ru": "0 вернуться к значения по умолчанию 1-255 (не изменяемые настройки по умолчанию)",
					"pt": "0 retornar ao valor padrão 1-255 (configurações padrão não mutáveis)",
					"nl": "0 keer terug naar defecte waarde 1-255 (niet veranderende zending)",
					"fr": "0 retour à la valeur par défaut 1-255 (pas de paramètres par défaut changeables)",
					"it": "0 ritorno al valore predefinito 1-255 (non modificabili impostazioni predefinite di whith)",
					"es": "0 retorno al valor predeterminado 1-255 (no modificable configuración predeterminada de whith)",
					"pl": "0 zwraca domyślną wartość 1-255 (nie zmieniające się domyślne ustawienia)",
					"uk": "0 повернення до значення за замовчуванням 1-255 (не змінні налаштування за замовчуванням)",
					"zh-cn": "0 返还1 1-255(未改变的违约情况)"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 0,
				max: 255,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	TTM: {
		id: 'TTM',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Turbine no pulse max. time",
					"de": "Maximale Zeit für keine Impulse von Turbine",
					"ru": "Турбина без импульса макс. время",
					"pt": "Turbina sem pulso máximo. Tempo",
					"nl": "Turbine geen hartslag max. time",
					"fr": "Turbine pas de pouls max. temps",
					"it": "Tubino senza polso max. tempo",
					"es": "Turbina no pulso max. tiempo",
					"pl": "Turbine no pulse max (ang.). czas",
					"uk": "Турбіна без імпульсу макс. час",
					"zh-cn": "面粉没有降。 时间"
				},
				desc:{
					"en": "No flow max. time, exceeded value triggers Turbine Blocked Alarm 1...30 days",
					"de": "Maximale Zeit bis bei Überschreitung von 'keine Impulse von Turbine' ein blockiert Alarm ausgelöst wird (1...30 Tage)",
					"ru": "Отсутствие потока макс. время, превышенные значения триггеры Турбина заблокирована сигнализация 1...30 дней",
					"pt": "Sem fluxo máximo. tempo, gatilhos de valor excedido Turbina bloqueada alarme 1...30 dias",
					"nl": "Geen stroommax. Tijd, overgewaardeerde waarde triggers Turbine Blocked Alarm 1,30 dagen",
					"fr": "Pas de débit max. temps, déclencheurs de valeur dépassés Turbine Alarme bloquée 1...30 jours",
					"it": "Nessun flusso max. tempo, trigger di valore superiore Allarme 1...30 giorni",
					"es": "No hay flujo máximo. tiempo, gatillos de valor excedidos Alarma bloqueada de Turbina 1...30 días",
					"pl": "Brak przepływu. Czas przekroczenia wyzwalania wartości przekraczał Turbine Blocked Alarm 1..30 dni",
					"uk": "Немає потоку макс. час, перевищені коефіцієнти значення Турбіна блокована сигналізація 1...30 днів",
					"zh-cn": "无流通量。 A. 时间超过价值的触发情况 Turbine Blocked Alarm.30天"
				},
				type: 'number',
				unit: 'days',
				role: 'state',
				min: 1,
				max: 30,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	BFT: {
		id: 'BFT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Button filter threshold",
					"de": "Taste Filterschwelle",
					"ru": "Порог фильтра кнопки",
					"pt": "Limite de filtro de botão",
					"nl": "Button filter drempel",
					"fr": "Limite du filtre à bouton",
					"it": "Soglia del filtro del pulsante",
					"es": "Filtro de botón",
					"pl": "Filtr Buttona",
					"uk": "Button фільтр поріг",
					"zh-cn": "Bton过滤器"
				},
				desc:{
					"en": "100...1000",
					"de": "100...1000",
					"ru": "100...1000",
					"pt": "100...1000",
					"nl": "100...1000",
					"fr": "100...1000",
					"it": "100...1000",
					"es": "100...1000",
					"pl": "100...1000",
					"uk": "100...1000",
					"zh-cn": "页: 1"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 100,
				max: 1000,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	BPT: {
		id: 'BPT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Button proximity threshold",
					"de": "Button Näherungsschwelle",
					"ru": "Порог близости кнопки",
					"pt": "Limite de proximidade do botão",
					"nl": "Button nabijheidsdrempel",
					"fr": "Seuil de proximité de Button",
					"it": "Soglia di prossimità del pulsante",
					"es": "Umbral de proximidad de Button",
					"pl": "Button bliskości występowania",
					"uk": "Кнопка близькій поріг",
					"zh-cn": "通 约"
				},
				desc: {
					"en": "1...100",
					"de": "1...100",
					"ru": "1...100",
					"pt": "1...100",
					"nl": "1...100",
					"fr": "1..100",
					"it": "1...100",
					"es": "1..100",
					"pl": "1,100",
					"uk": "1...100",
					"zh-cn": "1..100"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 1,
				max: 100,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	CNF: {
		id: 'CNF',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Conductivity factor",
					"de": "Leitfähigkeitsfaktor",
					"ru": "Коэффициент проводимости",
					"pt": "Fator de condução",
					"nl": "Conductieve factor",
					"fr": "Facteur de conductivité",
					"it": "Fattore di conducibilità",
					"es": "Factor de conducta",
					"pl": "Współczynnik kondukcji",
					"uk": "Директивний фактор",
					"zh-cn": "行为因素"
				},
				desc: {
					"en": "Multiplier of conductivity value 0.5...5",
					"de": "Multiplikator des Leitfähigkeitswerts 0,5...5",
					"ru": "Множество значения проводимости 0.5...5",
					"pt": "Multiplicador de valor de condutividade 0.5...5",
					"nl": "Meerdere van gedragswaarde 0,5",
					"fr": "Multiplicateur de valeur de conductivité 0.5...5",
					"it": "Moltiplicatore del valore di conducibilità 0.5...5",
					"es": "Multiplicador del valor de conductividad 0.5...5",
					"pl": "Wielokrotny wskaźnik przewodności 0.5..5",
					"uk": "Множник значення провідності 0.5...5",
					"zh-cn": "多种行为价值0.5..5。"
				},
				type: 'number',
				unit: '',
				role: 'state',
				min: 5,
				max: 50,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	CNL: {
		id: 'CNL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Conductivity limit",
					"de": "Leitfähigkeitsgrenze",
					"ru": "Лимит поведения",
					"pt": "Limite de condutividade",
					"nl": "Beperkingslimiet",
					"fr": "Limite de la conductivité",
					"it": "Limite di conducibilità",
					"es": "Limite de la conducta",
					"pl": "Limitacja",
					"uk": "Обмеження провідності",
					"zh-cn": "行为限制"
				},
				desc: {
					"en": "Maximum water conductivity value Conductivity alarm if exceeded 0 Disabled 1...5000 uS/cm",
					"de": "Maximaler Wasserleitfähigkeitswert Leitfähigkeitsalarm bei Überschreiten von 0 Disable 1...5000 uS/cm",
					"ru": "Максимальная стоимость водной проводимости Система сигнализации при превышении 0 Отключение 1...5000 uS/cm",
					"pt": "Valor máximo de condutividade da água Alarme de condutividade se exceder 0 Desativado 1...5000 uS/cm",
					"nl": "Maximum waterdirigiteitswaarde Conductivity alarm is overschaduwd als 10.000 uS/cm",
					"fr": "Valeur maximale de conductivité de l'eau alarme de conductivité si dépassé 0 Handicapé 1...5000 uS/cm",
					"it": "Valore massimo di conducibilità dell'acqua Allarme di conducibilità se superato 0 Disabili 1...5000 uS/cm",
					"es": "Valor máximo de conductividad hídrica alarma de conductividad si excede 0 Discapacitados 1..5000 uS/cm",
					"pl": "Maksymalny alarm przewodności wody, jeśli przekroczy 0,5000 uS/cmmm",
					"uk": "Максимальна сигналізація витрати води при перевищенні 0 Вимкнено 1...5000 uS/см",
					"zh-cn": "如果超过0.0%的残疾人,水活动具有价值。"
				},
				type: 'number',
				unit: 'uS/cm',
				role: 'state',
				min: 0,
				max: 5000,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DBD: {
		id: 'DBD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MLT pressure drop",
					"de": "MLT Druckabfall",
					"ru": "Дроп давления MLT",
					"pt": "Queda de pressão MLT",
					"nl": "MLT druk",
					"fr": "Prise de pression MLT",
					"it": "Goccia di pressione MLT",
					"es": "Caída de presión MLT",
					"pl": "MLT Press",
					"uk": "Падіння тиску MLT",
					"zh-cn": "MLT压力下降"
				},
				desc: {
					"en": "0.5...3 bar (0.1 stepps)",
					"de": "0,5...3 bar (0,1 stepps)",
					"ru": "0,5...3 бар (0.1 ступени)",
					"pt": "0,5...3 bar (0.1 stepps)",
					"nl": "0.5...3 bar (0.1 stapels)",
					"fr": "0,5...3 bar (0,1 stepps)",
					"it": "0.5...3 bar (0.1 stepps)",
					"es": "0,5...3 bar (0,1 pasos)",
					"pl": "0,3 bar (0,1 pkt)",
					"uk": "0.5...3 бар (0.1 stepps)",
					"zh-cn": "页: 1"
				},
				type: 'number',
				unit: '1/10 bar',
				role: 'state',
				min: 5,
				max: 30,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DBT: {
		id: 'DBT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MLT pressure drop time",
					"de": "MLT Druckabfallzeit",
					"ru": "Время падения давления MLT",
					"pt": "Tempo de gota de pressão MLT",
					"nl": "MLT druk daalt tijd",
					"fr": "Temps de chute de pression MLT",
					"it": "Tempo di goccia di pressione MLT",
					"es": "Tiempo de caída de presión MLT",
					"pl": "MLT Press drop",
					"uk": "Час падіння тиску MLT",
					"zh-cn": "MLT压力降低时间"
				},
				desc: {
					"en": "1...15 seconds",
					"de": "1...15 Sekunden",
					"ru": "1...15 секунд",
					"pt": "1...15 segundos",
					"nl": "1...15 seconden",
					"fr": "1..15 secondes",
					"it": "1... 15 secondi",
					"es": "1..15 segundos",
					"pl": "1,15 sekundy",
					"uk": "1...15 секунд",
					"zh-cn": "1..15 第二期"
				},
				type: 'number',
				unit: 's',
				role: 'state',
				min: 1,
				max: 15,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DCM: {
		id: 'DCM',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "MLT test time close",
					"de": "MLT Testzeit schließen",
					"ru": "MLT тестовое время закрыть",
					"pt": "MLT tempo de teste fechar",
					"nl": "MLT testtijd",
					"fr": "Temps d ' essai MLT proche",
					"it": "Tempo di prova MLT vicino",
					"es": "Tiempo de prueba MLT cerca",
					"pl": "MLT test",
					"uk": "Час тестування MLT",
					"zh-cn": "MLT试验时间接近"
				},
				desc: {
					"en": "1...30 minutes",
					"de": "1...30 Minuten",
					"ru": "1...30 минут",
					"pt": "1...30 minutos",
					"nl": "1,30 minuten",
					"fr": "1...30 minutes",
					"it": "1...30 minuti",
					"es": "1..30 minutos",
					"pl": "30 minut",
					"uk": "1...30 хвилин",
					"zh-cn": "1.30分钟"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				min: 0,
				max: 30,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	RST: {
		id: 'RST',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Device reboot",
					"de": "Geräte neu starten",
					"ru": "Перезагрузка устройства",
					"pt": "Reiniciar dispositivo",
					"nl": "Device reboot",
					"fr": "Dispositif reboot",
					"it": "Riavvio del dispositivo",
					"es": "Reinicio de dispositivo",
					"pl": "Device reboot",
					"uk": "Перезавантаження пристроїв",
					"zh-cn": "Devic reboot"
				},
				desc: {
					"en": "set to 1 to reboot device",
					"de": "auf 1 setztzen, um das Gerät neu zu starten",
					"ru": "установить до 1 для перезагрузки устройства",
					"pt": "set to 1 para reiniciar dispositivo",
					"nl": "klaar om te herstarten",
					"fr": "set to 1 to reboot device",
					"it": "impostato su 1 per riavviare il dispositivo",
					"es": "establecido a 1 para reiniciar dispositivo",
					"pl": "uruchomiono 1 do rebootu",
					"uk": "встановити до 1 для перезавантаження пристрою",
					"zh-cn": "第1条 改用装置"
				},
				type: 'number',
				unit: null,
				role: 'button',
				def: 0,
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceControl.path,
		saveRawData: false,
		createOnStartup: true,
		initialValue: 0,
		levelRead: null,
		levelWrite: 'SERVICE',
		readCommand: null,
		writeCommand: 'set'
	},
	DEX: {
		id: 'DEX',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Micro Leakage Test start",
					"de": "Micro Leck Test starten",
					"ru": "Микро-утечка Тестовый старт",
					"pt": "Micro Vazamento Início do teste",
					"nl": "Micro Leakage Test",
					"fr": "Micro fuites Démarrage des essais",
					"it": "Micro Leakage Inizio test",
					"es": "Micro Leakage Comienzo de prueba",
					"pl": "Micro Leakage start",
					"uk": "Мікропробіг Почати тест",
					"zh-cn": "微额贷款 试验开始"
				},
				desc: {
					"en": "Start MLT test at any time",
					"de": "MLT-Test jederzeit starten",
					"ru": "Начните тест MLT в любое время",
					"pt": "Comece o teste MLT a qualquer momento",
					"nl": "Start MLT test op elk moment",
					"fr": "Commencer le test MLT à tout moment",
					"it": "Avviare il test MLT in qualsiasi momento",
					"es": "Comience la prueba MLT en cualquier momento",
					"pl": "Start MLT test",
					"uk": "Почати тест MLT в будь-який час",
					"zh-cn": "A. 任何时间开始MLT试验"
				},
				type: 'number',
				unit: null,
				role: 'button',
				def: 0,
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceControl.path,
		saveRawData: false,
		createOnStartup: true,
		initialValue: 0,
		levelRead: null,
		levelWrite: 'SERVICE',
		readCommand: null,
		writeCommand: 'set'
	},
	GHARDFACTOR: {
		id: 'GHARDFACTOR',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Cakculation factor for German water hardnes",
					"de": "Kakkulationsfaktor für deutsche Wasserhärten",
					"ru": "Каккуляторный фактор для немецких водных твердостей",
					"pt": "Cakculation factor for German water hardnes",
					"nl": "Cakculatie factor voor Duitse waterharnes",
					"fr": "Cakculation factor for German water hardnes",
					"it": "Fattore di cakculazione per i duri dell'acqua tedesca",
					"es": "Factor de cakculación para las dunas de agua alemanas",
					"pl": "Efekt kakkulacji niemieckiej wody",
					"zh-cn": "B. 德意志硬水的种植因素"
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
		saveRawData: false,
		createOnStartup: true
	},
	SRO: {
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
				desc: {
					"en": "0 Standard, 90 Rotated 90°, 180 Rotated 180°, 270 Rotated 270°",
					"de": "0 Standard, 90 Rotiert 90°, 180 Rotiert 180°, 270 Rotiert 270°",
					"ru": "0 Стандарт, 90 Вращение 90°, 180 Вращение 180°, 270 Вращение 270°",
					"pt": "0 Standard, 90 Rotated 90°, 180 Rotated 180°, 270 Rotated 270°",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Standard, 90 Rotated 90°, 180 Rotated 180°, 270 Rotated 270°",
					"it": "0 Standard, 90 Rotated 90°, 180 Rotated 180°, 270 Rotated 270°",
					"es": "0 Standard, 90 Rotated 90°, 180 Rotated 180°, 270 Rotated 270°",
					"pl": "0 Standard ↓, s. 90 Rotated 90°, 180 Rotated 180°",
					"uk": "0 Стандарт, 90 обертається 90°, 180 обертається 180°, 270 обертається 270°",
					"zh-cn": "0 标准,90°90°,180°180,270°270"
				},
				type: 'number',
				unit: '°',
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SFV: {
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
				desc: {
					"en": "0 – new firmware not available 1 – new firmware available Checked at startup and every 6h",
					"de": "0 – neue Firmware nicht verfügbar 1 – neue Firmware verfügbar Bei Start und alle 6h wird automatischgeprüft",
					"ru": "0 – новая прошивка не доступна 1 – новая прошивка доступна Проверено при запуске и каждые 6h",
					"pt": "0 – novo firmware não disponível 1 – novo firmware disponível Verificado na inicialização e a cada 6h",
					"nl": "Nieuwe firmaware niet beschikbaar. Nieuwe firmaware gecheckt bij de start",
					"fr": "0 – nouveau firmware non disponible 1 – nouveau firmware disponible Checked at startup and every 6h",
					"it": "0 – nuovo firmware non disponibile 1 – nuovo firmware disponibile Controllato all'avvio e ogni 6h",
					"es": "0 – nuevo firmware no disponible 1 – nuevo firmware disponible Comprobado al inicio y cada 6h",
					"pl": "0 - nowa firma firmware nie dostępna 1 - nowa firma Checked dostępna jest na początku i co 6h",
					"uk": "0 – нова прошивка не доступна 1 – нова прошивка, доступна в запуску та кожні 6h",
					"zh-cn": "开端和每六千名新警员"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	UPG: {
		id: 'UPG',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Firmware upgrade",
					"de": "Firmware-Upgrade",
					"ru": "Обновление прошивки",
					"pt": "Atualização de firmware",
					"nl": "Firmware upgrade",
					"fr": "Mise à niveau du firmware",
					"it": "Aggiornamento firmware",
					"es": "Actualización de firmware",
					"pl": "Aktualizacja",
					"uk": "Оновлення прошивки",
					"zh-cn": "导 言"
				},
				desc: {
					"en": "Starts firmware upgrade, device must be connected to the internet via WiFi network. Set to true to start upgrade.",
					"de": "Startet Firmware-Upgrade, das Gerät muss über WiFi-Netzwerk mit dem Internet verbunden werden. Setzen Sie auf true, um das Upgrade zu starten.",
					"ru": "Начинает обновление прошивки, устройство должно быть подключено к интернету через сеть WiFi. Установите для того, чтобы начать обновление.",
					"pt": "Inicia a atualização de firmware, o dispositivo deve estar conectado à Internet através da rede WiFi. Definido como verdadeiro para começar a atualização.",
					"nl": "Begint firmaware upgrade, apparaat moet verbonden zijn met het internet via WiFi netwerk. Klaar om te beginnen.",
					"fr": "Démarre la mise à niveau du micrologiciel, l'appareil doit être connecté à Internet via le réseau WiFi. Définir à vrai pour commencer la mise à niveau.",
					"it": "Avvia l'aggiornamento del firmware, il dispositivo deve essere collegato a Internet tramite la rete WiFi. Impostare a true per avviare l'aggiornamento.",
					"es": "Empieza la actualización de firmware, el dispositivo debe conectarse a Internet a través de red WiFi. Establece para comenzar la actualización.",
					"pl": "Począwszy od aktualizacji oprogramowania, urządzenie musi być połączone z internetem przez sieć WiFi. Ustanowić się, by rozpocząć modernizację.",
					"uk": "Почати оновлення мікропрограми, пристрій повинен бути підключений до Інтернету через мережу Wi-Fi. Налаштуйте вірне оновлення.",
					"zh-cn": "开始软件升级,装置必须通过WFi网络连接到互联网。 真正开始升级。."
				},
				type: 'boolean',
				unit: null,
				role: 'button',
				def: false,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceControl.path,
		saveRawData: false,
		createOnStartup: true,
		initialValue: false,
		levelRead: null,
		levelWrite: 'SERVICE',
		readCommand: null,
		writeCommand: 'set'
	},
	VTO: {
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
				desc: {
					"en": "0 inactive 1 active",
					"de": "0 inaktiv 1 aktiv",
					"ru": "0 неактивный 1 активный",
					"pt": "0 inativo 1 ativo",
					"nl": "0 inactief 1 actief",
					"fr": "0 inactif 1 actif",
					"it": "0 inattivo 1 attivo",
					"es": "0 inactivo 1 activo",
					"pl": "0 inactive 1 active",
					"uk": "0 неактивний 1 активний",
					"zh-cn": "导 言1"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	JPR: {
		id: 'JPR',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Main valve jam protection is running",
					"de": "Hauptventil Bewegungsfahrt läuft",
					"ru": "Основная защита клапана работает",
					"pt": "Proteção do engarrafamento da válvula principal está em execução",
					"nl": "Hoofdklep Jam bescherming loopt",
					"fr": "Protection de la confiture de la valve principale",
					"it": "La protezione principale della marmellata della valvola è in esecuzione",
					"es": "La protección de atascos de válvula principal está funcionando",
					"pl": "Ochrona zastrzeżenia jamy głównej",
					"uk": "Головний захист клапана працює",
					"zh-cn": "主要阀门保护正在进行中。"
				},
				type: 'boolean',
				unit: null,
				role: 'state',
				read: false,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		saveRawData: false,
		createOnStartup: true,
		levelRead: null,
		levelWrite: null,
		readCommand: null,
		writeCommand: null
	},
	JPE: {
		id: 'JPE',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Main valve jam protection activated",
					"de": "Hauptventil Verklemmschutz aktiviert",
					"ru": "Основная защита клапана активирована",
					"pt": "Proteção do engarrafamento da válvula principal ativada",
					"nl": "Hoofdklep Jam bescherming geactiveerd",
					"fr": "Protection de la pression de la valve principale activée",
					"it": "Protezione della marmellata della valvola principale attivata",
					"es": "Protección de bloqueo de válvula principal activada",
					"pl": "Główna ochrona zaworów jam aktywowana",
					"uk": "Головна захист клапана активоване",
					"zh-cn": "B. 主要阀门保护活动"
				},
				type: 'boolean',
				unit: null,
				role: 'state',
				read: false,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: false,
		createOnStartup: true,
		levelRead: null,
		levelWrite: null,
		readCommand: null,
		writeCommand: null
	},
	JPT: {
		id: 'JPT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Main valve jam protection timing",
					"de": "Hauptventil Verklemmschutz Zeitplan",
					"ru": "Главная клапан jam защита сроки",
					"pt": "Tempo de proteção de engarrafamento de válvula principal",
					"nl": "Hoofdklep jam beschermings timing",
					"fr": "Réglage de la protection de la valve principale",
					"it": "Tempi di protezione della valvola principale",
					"es": "Frecuencia de protección de la válvula principal",
					"pl": "Główna ochrona przedniej zastawki",
					"uk": "Головна затискач захисту клапана",
					"zh-cn": "主要保护时间"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: false,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: false,
		createOnStartup: true,
		levelRead: null,
		levelWrite: null,
		readCommand: null,
		writeCommand: null
	},
	NPS: {
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
				desc: {
					"en": "0...4294967295s",
					"de": "0...4294967295s",
					"ru": "0...4294967295s",
					"pt": "0...4294967295s",
					"nl": "0...4294967295s",
					"fr": "0...4294967295s",
					"it": "0...4294967295s",
					"es": "0...4294967295s",
					"pl": "0,4294967295s",
					"uk": "0...4294967295s",
					"zh-cn": "页:1"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	FLO: {
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
				desc: {
					"en": "0...6000 l/h",
					"de": "0...6000 l/h",
					"ru": "0...6000 л/ч",
					"pt": "0...6000 l/h",
					"nl": "0-6000 l/h",
					"fr": "0...6000 l/h",
					"it": "0...6000 l/h",
					"es": "0...6000 l/h",
					"pl": "0,6000 l/h",
					"uk": "0...6000 л/час",
					"zh-cn": "页: 1"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	LWT: {
		id: 'LWT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Leakage notification (warning) threshold (80 - 99%)',
					'de': 'Schwellenwert für Leckagebenachrichtigung (Warnung) (80 - 99%)',
					'ru': 'Порог уведомления (предупреждения) об утечке (80 - 99%)',
					'pt': 'Limite de notificação de vazamento (aviso) (80 - 99%)',
					'nl': 'Lekkage melding (waarschuwing) drempel (80 - 99%)',
					'fr': 'Seuil de notification de fuite (avertissement) (80 - 99%)',
					'it': 'Soglia di notifica di perdita (avviso) (80 - 99%)',
					'es': 'Umbral de notificación (advertencia) de fugas (80 - 99%)',
					'pl': 'Próg powiadomienia o wycieku (ostrzeżenie) (80 - 99%)',
					'zh-cn': '泄漏通知（警告）阈值 (80 - 99%)'
				},
				desc: {
					"en": "80...99 %",
					"de": "80...99 %",
					"ru": "80...99 %",
					"pt": "80...99 %",
					"nl": "80...99 %",
					"fr": "80...99 %",
					"it": "80...99 %",
					"es": "80...99 %",
					"pl": "80,99 proc",
					"uk": "80...99 %",
					"zh-cn": "80...99 %"
				},
				type: 'number',
				unit: '%',
				role: 'state',
				min: 80,
				max: 99,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	BUZ: {
		id: 'BUZ',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Buzzer on alarm (0 = Disabled, 1 = Enabled)",
					"de": "Summer bei Alarm (0 = deaktiviert, 1 = aktiviert)",
					"ru": "Buzzer на тревоге (0 = Отключено, 1 = Включено)",
					"pt": "Buzzer em alarme (0 = Desativado, 1 = Activado)",
					"nl": "Buzzer op alarm (0 = Disabled, 1 ♪",
					"fr": "Buzzer sur l'alarme (0 = Disabled, 1 = Enabled)",
					"it": "Cicalino all'allarme (0 = Disabili, 1 = Abilitato)",
					"es": "Buzzer on alarm (0 = Disabled, 1 = Enabled)",
					"pl": "Buzzer on alarm (0 = Disabled, 1 = Enabled) (ang.)",
					"zh-cn": "Buzzer on震惊(0 = 残疾人,1 = Enable)"
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
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
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DRP: {
		id: 'DRP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Micro leakage test period (0 = Always, 1 = Day, 2 = Week, 3 = Month)",
					"de": "Mikroleckprüfung (0 = Immer, 1 = Tag, 2 = Woche, 3 = Monat)",
					"ru": "Тестовый период Micro утечки (0 = Всегда, 1 = День, 2 = Неделя, 3 = Месяц)",
					"pt": "Micro período de teste de vazamento (0 = Sempre, 1 = Dia, 2 = Semana, 3 = Mês)",
					"nl": "Micro lekage testtijd Dag 1 2 = Week, 3 = Month ♪",
					"fr": "Période d ' essai d ' étanchéité (0 = Toujours, 1 = Jour, 2 = Semaine, 3 = mois",
					"it": "Micro periodo di prova di perdita (0 = Sempre, 1 = Giorno, 2 = settimana, 3 = mese)",
					"es": "Período de prueba de fugas micro (0 = Siempre, 1 = Día, 2 = semana, 3 = mes)",
					"pl": "Okres przecieku (0 = Always, 1 = Day). 2 = Week, 3 = Month",
					"zh-cn": "微额泄漏试验期 (0 = Always,1 =日 页: 1"
				},
				desc: {
					"en": "0 Always 1 Day 2 Week 3 Month",
					"de": "0 Immer 1 Tag 2 Woche 3 Monat",
					"ru": "0 Всегда 1 День 2 Неделя 3 Месяц",
					"pt": "0 Sempre 1 Dia 2 Semana 3 Mês",
					"nl": "Altijd 1 dag 2 weken",
					"fr": "0 Toujours 1 Jour 2 Semaine 3 mois",
					"it": "0 Sempre 1 giorno 2 settimana 3 mese",
					"es": "0 Siempre 1 Día 2 Semana 3 Mes",
					"pl": "Zawsze 1 dzień 2 Tydzień 3 miesiąca",
					"uk": "0 Завжди 1 день 2 тиждень 3 місяць",
					"zh-cn": "页 次"
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
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	DMA: {
		id: 'DMA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Micro leakage test (0 = Disabled, 1 = Warning, 2 = Shutoff)",
					"de": "Mikroleckprüfung (0 = deaktiviert, 1 = warnen, 2 = abgeschaltet)",
					"ru": "Микро-тест утечки (0 = Отключено, 1 = Предупреждение, 2 = Выключение)",
					"pt": "Micro teste de vazamento (0 = Desativado, 1 = Aviso, 2 = Desligamento)",
					"nl": "Micro lekage test Quality over Quantity (QoQ) Releases Vertaling: 2 =",
					"fr": "Essai de fuite de micro (0 = Handicapé, 1 = Avertissement, 2 = Arrêt",
					"it": "Test di micro perdite (0 = Disabili, 1 = Avvertenza, 2 = shutoff)",
					"es": "Prueba de fugas micro (0 = Discapacitados, 1 = Advertencia, 2 = desactivación)",
					"pl": "Micro leakage test (0 = Disabled, 1 = Warning). 2 = Shutoff (ang.)",
					"zh-cn": "微额泄漏试验 (0) 残疾人,1=战争 页:1"
				},
				desc: {
					"en": "0 Disabled, 1 Warning, 2 Shutoff",
					"de": "0 deaktiviert, 1 Warnung, 2 Abschaltung",
					"ru": "0 Отключено, 1 Предупреждение, 2 Shutoff",
					"pt": "0 Desativado, 1 Aviso, 2 Desativado",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Handicapés, 1 Avertissement, 2 Attaques",
					"it": "0 Disabili, 1 avvertimento, 2 shutoff",
					"es": "0 Discapacitados, 1 Advertencia, 2 desvíos",
					"pl": "1 Warning, 2 Shutoff (ang.)",
					"uk": "0 Вимкнено, 1 Попередження, 2 Відправлення",
					"zh-cn": "0 残疾人,1名警告,2名Shutoff"
				},
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 2,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	T2: {
		id: 'T2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Max flow leakage time (0 - 99min)",
					"de": "Maximale Leckzeit (0 - 99min)",
					"ru": "Максимальное время утечки потока (0 - 99min)",
					"pt": "Tempo máximo de vazamento de fluxo (0 - 99min)",
					"nl": "Max stroomlekagetijd (0 - 99min)",
					"fr": "Temps maximum de fuite (0 - 99min)",
					"it": "Tempo di perdita di portata massima (0 - 99min)",
					"es": "Tiempo máximo de fuga de flujo (0 - 99min)",
					"pl": "Czas przepływu Maxa (0 - 99min)",
					"zh-cn": "Max流泄漏时间(0-99min)"
				},
				desc: {
					"en": "0...99min",
					"de": "0...99min",
					"ru": "0...99мин",
					"pt": "0...99min",
					"nl": "0,99",
					"fr": "0...99min",
					"it": "0...99min",
					"es": "0...99min",
					"pl": "0,99 min",
					"uk": "0...99 хв",
					"zh-cn": "0.99min"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				min: 0,
				max: 99,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	TMP: {
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
				desc: {
					"en": "0 temporary deactivation disabled > 0 deactivated for n seconds",
					"de": "0 vorübergehende deaktivierung aus > 0 deaktiviert für n sekunden",
					"ru": "0 временное отключение > 0 деактивировано за n секунд",
					"pt": "0 desactivação temporária deficiente > 0 desativado por n segundos",
					"nl": "0 tijdelijke deactivatie gehandicapt 0 gedeactiveerd voor een seconde",
					"fr": "0 désactivation temporaire invalide 0 désactivé pour n secondes",
					"it": "0 disattivazione temporanea 0 disattivato per n secondi",
					"es": "0 desactivación temporal inhabilitado 0 desactivado por segundos",
					"pl": "0 tymczasowy dezaktywacja niepełnosprawnych. 0 dezaktywuje się do n sekundy",
					"uk": "0 тимчасової деактивації > 0 деактивований за секунди",
					"zh-cn": "0 暂时残疾 页:1"
				},
				type: 'number',
				unit: 's',
				role: 'level.timer',
				min: 0,
				max: 65535,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	AB: {
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
				desc:{
					"en": "1 Opened 2 Closed",
					"de": "1 Geöffnet 2 Geschlossen",
					"ru": "1 Открыто 2 Закрыто",
					"pt": "1 Aberto 2 Fechado",
					"nl": "1 open 2 gesloten",
					"fr": "1 Ouvert 2 fermés",
					"it": "1 Aperto 2 chiuso",
					"es": "1 Abierto 2 Cerrado",
					"pl": "1 Opening 2 Closed",
					"uk": "1 Відкритий 2 Закритий",
					"zh-cn": "1 开放的2人"
				},
				type: 'number',
				unit: null,
				role: 'level.valve',
				min: 1,
				max: 2,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	BSA: {
		id: 'BSA',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Floor sensor (0 = disabled, 1 = enabled)",
					"de": "Bodensensor (0 = deaktiviert, 1 = aktiviert)",
					"ru": "Датчик пола (0 = Отключено, 1 = Включено)",
					"pt": "Sensor de piso (0 = Desativado, 1 = Activado)",
					"nl": "Vertaling: Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "Capteur de sol (0 = Handicapé, 1 = Enabled)",
					"it": "Sensore del pavimento (0 = Disabili, 1 = Abilitato)",
					"es": "Sensor de piso (0 = Discapacitados, 1 = Habilitado)",
					"pl": "Sensor (0 = Disabled, 1 = Enabled)",
					"zh-cn": "Floor感器 (0 = 残疾人,1 = 可以使用)"
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
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
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	UNI: {
		id: 'UNI',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Units (0 = metric, 1 = imperial)",
					"de": "Einheiten (0 = metrisch, 1 = imperial)",
					"ru": "Единицы (0 = метрические, 1 = императорские)",
					"pt": "Unidades (0 = métrica, 1 = imperial)",
					"nl": "Units (0 = metrisch, 1 = Imperial)",
					"fr": "Unités (0 = métrique, 1 = impériale)",
					"it": "Unità (0 = metrica, 1 = imperiale)",
					"es": "Unidades (0 = métrica, 1 = imperial)",
					"pl": "Jednostki (0 = metryka, 1 = imperialna)",
					"zh-cn": "单位(0 = 指标,1=零)"
				},
				desc: {
					"en": "0 °C/bar/Liter 1 °F/psi/US.liq.gal",
					"de": "0 °C/Bar/Liter 1 °F/psi/US.liq.gal",
					"ru": "0 °C/бар/литр 1 °F/psi/US.liq.gal",
					"pt": "0 °C/bar/Liter 1 °F/psi/US.liq.gal",
					"nl": "0 graden C/bar/Liter 1 °F/psi/US.liq",
					"fr": "0 °C/bar/Liter 1 °F/psi/US.liq.gal",
					"it": "0 °C/bar/Litro 1 °F/psi/US.liq.gal",
					"es": "0 °C/bar/Liter 1 °F/psi/US.liq.gal",
					"pl": "0 °C/bar/Liter 1 °F/psi/US.liq.gal",
					"uk": "0 °C/бар/Літера 1 °F/psi/US.liq.gal",
					"zh-cn": "页:1"
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
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	LNG: {
		id: 'LNG',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Language setting (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"de": "Sprache (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"ru": "Языковая настройка (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"pt": "Definição da língua (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"nl": "Taal  (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"fr": "Réglage linguistique (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"it": "Impostazione della lingua (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"es": "Ajuste del idioma (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"pl": "Ustawa językowa (0 = DE, 1 = EN, 2 = ES, 3 = IT, 4 = PL)",
					"zh-cn": "语文结构 (0 = DE,1 = EN,2=ES,3=信息技术,4=PL)"
				},
				desc: {
					"en": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"de": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"ru": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"pt": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"nl": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"fr": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"it": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"es": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"pl": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"uk": "0 DE 1 EN 2 ES 3 IT 4 PL",
					"zh-cn": "0 DE 1 EN 2 ES 3 IT 4 PL"
				},
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 4,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	CSD: {
		id: 'CSD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Deactivate conductivity sensor (0 = active, 1 = deactivated)",
					"de": "Leitfähigkeitssensor deaktivieren (0 = aktiv, 1 = deaktiviert)",
					"ru": "Деактивированный датчик проводимости (0 = активный, 1 = деактивированный)",
					"pt": "Desativar o sensor de condutividade (0 = ativo, 1 = desativado)",
					"nl": "Deactiveer gedragssensor (0) actief, 1 = gedeactiveerd",
					"fr": "Désactiver le capteur de conductivité (0 = actif, 1 = désactivé)",
					"it": "Disattivare il sensore di conducibilità (0 = attivo, 1 = disattivato)",
					"es": "Sensor de conductividad desactivado (0 = activo, 1 = desactivado)",
					"pl": "Deaktywacja czujnika (0 = aktywne, 1 = deaktywowane)",
					"zh-cn": "活性传感器(0 = 积极,1 = 活性)"
				},
				desc: {
					"en": "0 Active 1 Deactivated (not changeable whith default settings)",
					"de": "0 Aktiv 1 deaktiviert (nicht änderbar mit Standardeinstellungen)",
					"ru": "0 Активный 1 Деактивированный (не изменяемые настройки по умолчанию)",
					"pt": "0 Ativo 1 Desativado (configurações padrão não mutáveis)",
					"nl": "0 Active 1 gedeactiveerd (niet veranderende zee defecte settings)",
					"fr": "0 Active 1 Désactivé (pas de réglages modifiables par défaut)",
					"it": "0 Active 1 Disattivato (non modificabili impostazioni predefinite di whith)",
					"es": "0 Active 1 Ajustes predeterminados (no cambiantes)",
					"pl": "0 Aktywna 1 Deaktywowana (bez zmian domyślnych ustawień)",
					"uk": "0 Активний 1 Deactivated (не змінні налаштування за замовчуванням)",
					"zh-cn": "页: 1"
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
		statePath: adapterChannels.DeviceSettingsSensors.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	TSD: {
		id: 'TSD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Deactivate temperature sensor (0 = active, 1 = deactivated)",
					"de": "Temperaturfühler deaktivieren (0 = aktiv, 1 = deaktiviert)",
					"ru": "Датчик температуры деактивации (0 = активный, 1 = деактивированный)",
					"pt": "Desativar o sensor de temperatura (0 = ativo, 1 = desativado)",
					"nl": "Deactiveer de temperatuursensor (0) actief, 1 = gedeactiveerd",
					"fr": "Désactiver le capteur de température (0 = actif, 1 = désactivé)",
					"it": "Disattivare il sensore di temperatura (0 = attivo, 1 = disattivato)",
					"es": "Sensor de temperatura desactivado (0 = activo, 1 = desactivado)",
					"pl": "Deaktywowany czujnik temperatury (0 = aktywne, 1 = deaktywowane)",
					"zh-cn": "降温传感器(0 = 积极,1 = 降解)"
				},
				desc: {
					"en": "0 Active 1 Deactivated (not changeable whith default settings)",
					"de": "0 Aktiv 1 deaktiviert (nicht änderbar in Standardeinstellungen)",
					"ru": "0 Активный 1 Деактивированный (не изменяемые настройки по умолчанию)",
					"pt": "0 Ativo 1 Desativado (configurações padrão não mutáveis)",
					"nl": "0 Active 1 gedeactiveerd (niet veranderende zee defecte settings)",
					"fr": "0 Active 1 Désactivé (pas de réglages modifiables par défaut)",
					"it": "0 Active 1 Disattivato (non modificabili impostazioni predefinite di whith)",
					"es": "0 Active 1 Ajustes predeterminados (no cambiantes)",
					"pl": "0 Aktywna 1 Deaktywowana (bez zmian domyślnych ustawień)",
					"uk": "0 Активний 1 Deactivated (не змінні налаштування за замовчуванням)",
					"zh-cn": "页: 1"
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
		statePath: adapterChannels.DeviceSettingsSensors.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PSD: {
		id: 'PSD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Deactivate pressure sensor (0 = active, 1 = deactivated)",
					"de": "Drucksensor deaktivieren (0 = aktiv, 1 = deaktiviert)",
					"ru": "Деактивированный датчик давления (0 = активный, 1 = деактивированный)",
					"pt": "Desativar o sensor de pressão (0 = ativo, 1 = desativado)",
					"nl": "Deactiveer druksensor (0) actief, 1 = gedeactiveerd",
					"fr": "Désactiver le capteur de pression (0 = actif, 1 = désactivé)",
					"it": "Disattivare il sensore di pressione (0 = attivo, 1 = disattivato)",
					"es": "Desactivar el sensor de presión (0 = activo, 1 = desactivado)",
					"pl": "Zjawisko czujnika ciśnienia (0 = aktywne, 1 = deaktywowane)",
					"zh-cn": "压力传感器(0 = 积极,1 = 活性)"
				},
				desc: {
					"en": "0 Active 1 Deactivated (not changeable whith default settings)",
					"de": "0 Aktiv 1 deaktiviert (nicht änderbar in Standardeinstellungen)",
					"ru": "0 Активный 1 Деактивированный (не изменяемые настройки по умолчанию)",
					"pt": "0 Ativo 1 Desativado (configurações padrão não mutáveis)",
					"nl": "0 Active 1 gedeactiveerd (niet veranderende zee defecte settings)",
					"fr": "0 Active 1 Désactivé (pas de réglages modifiables par défaut)",
					"it": "0 Active 1 Disattivato (non modificabili impostazioni predefinite di whith)",
					"es": "0 Active 1 Ajustes predeterminados (no cambiantes)",
					"pl": "0 Aktywna 1 Deaktywowana (bez zmian domyślnych ustawień)",
					"uk": "0 Активний 1 Deactivated (не змінні налаштування за замовчуванням)",
					"zh-cn": "页: 1"
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
		statePath: adapterChannels.DeviceSettingsSensors.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	AVO: {
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
				desc: {
					"en": "Volume of the current consumption process, Resets after finish, in mililiters",
					"de": "Volumen des aktuellen Verbrauchs, 0 nach dem Ende der Wasserentnahme, in Mililitern",
					"ru": "Объем текущего процесса потребления, Сбросы после финиша, в милилилитрах",
					"pt": "Volume do processo de consumo atual, Resets após o acabamento, em mililitros",
					"nl": "Volume van het huidige consumptieproces, Resets na afloop, in mililiters",
					"fr": "Volume du processus de consommation actuel, Réinitialisation après finition, en mililiters",
					"it": "Volume del processo di consumo attuale, Reimposta dopo la finitura, in millilitri",
					"es": "Volumen del proceso de consumo actual, Reinicia después del final, en mililitros",
					"pl": "Po zakończeniu procesu konsumenckiego, Resets, w mililiterach",
					"uk": "Об'єм поточного процесу споживання, Залишки після закінчення, в мілілітрів",
					"zh-cn": "目前的消费过程,在完成之后的重整,在微量剂中"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	VOL: {
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
				desc: {
					"en": "Vol[L] 0...4294967295",
					"de": "Vol[L] 0...4294967295",
					"ru": "Том [L] 0...4294967295",
					"pt": "Vol[L] 0...4294967295",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "Vol[L] 0...4294967295",
					"it": "Vol[L] 0...4294967295",
					"es": "Vol[L] 0...4294967295",
					"pl": "VolL 0,4294967295 (ang.)",
					"uk": "Воль [L] 0...4294967295",
					"zh-cn": "同上。"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: null,
		levelClear: 'FACTORY',
		readCommand: 'get',
		writeCommand: null,
		clearCommand: 'clr'
	},
	LTV: {
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
				desc: {
					"en": "in liters",
					"de": "in Litern",
					"ru": "в литрах",
					"pt": "em litros",
					"nl": "in literatuur",
					"fr": "en litres",
					"it": "in litri",
					"es": "en litros",
					"pl": "w literach",
					"uk": "в літрах",
					"zh-cn": "导 言"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	IDS: {
		id: 'IDS',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Daylight saving time (0 = disabled, 1 = enabled)",
					"de": "Sommerzeit (0 = deaktiviert, 1 = aktiviert)",
					"ru": "Дневное время сбережения (0 = отключено, 1 = включено)",
					"pt": "Hora de verão (0 = desativado, 1 = habilitado)",
					"nl": "Daylight spaartijd (0 = gehandicapt, 1 = gehandicapte",
					"fr": "Temps d'économie de jour (0 = désactivé, 1 = activé)",
					"it": "Tempo di risparmio giornaliero (0 = disabilitato, 1 = abilitato)",
					"es": "Tiempo de verano (0 = discapacitados, 1 = activado)",
					"pl": "Czas oszczędnościowy (0 = niepełnosprawny, 1)",
					"zh-cn": "纪念日(0 = 残疾,1 = 允许)"
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
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
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	NET: {
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
				desc: {
					"en": "in 1/100V, format x.xx",
					"de": "in 1/100V, Format x.xx",
					"ru": "в 1/100V, формат x.xx",
					"pt": "em 1/100V, formato x.xx",
					"nl": "in 1/100V, format x.xx",
					"fr": "en 1/100V, format x.xx",
					"it": "in 1/100V, formato x.xx",
					"es": "en 1/100V, formato x.xx",
					"pl": "1/100V format x.xx",
					"uk": "в 1/100В, формат x.xx",
					"zh-cn": "1/100V,格式×xx"
				},
				type: 'number',
				unit: 'V',
				role: 'value.voltage',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	BAT: {
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
				desc: {
					"en": "in 1/100V, format x.xx",
					"de": "in 1/100V, Format x.xx",
					"ru": "в 1/100V, формат x.xx",
					"pt": "em 1/100V, formato x.xx",
					"nl": "in 1/100V, format x.xx",
					"fr": "en 1/100V, format x.xx",
					"it": "in 1/100V, formato x.xx",
					"es": "en 1/100V, formato x.xx",
					"pl": "1/100V format x.xx",
					"uk": "в 1/100В, формат x.xx",
					"zh-cn": "1/100V,格式×xx"
				},
				type: 'number',
				unit: 'V',
				role: 'value.battery',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceConditions.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WFS: {
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
				desc: {
					"en": "0 Disconnected 1 Connecting 2 Connected",
					"de": "0 Nicht verbunden 1 Am verbinden 2 Verbunden",
					"ru": "0 Отключено 1 Подключение 2 Подключено",
					"pt": "0 Desconectado 1 Conectando 2 Conectado",
					"nl": "0 Disconnected 1 Connecting 2 Connected",
					"fr": "0 Déconnecté 1 Connexion 2 Connecté",
					"it": "0 Discollegato 1 Collegamento 2 Collegato",
					"es": "0 Desconectado 1 Conexión 2 Conectado",
					"pl": "0 Disconnection 1 (ang.)",
					"uk": "0 Вимкнено 1 Підключення 2",
					"zh-cn": "0 Disconnected 1 Connecting 2 Connected"
				},
				type: 'string',
				unit: null,
				role: 'indicator.reachable',
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	DWL: {
		id: 'DWL',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "WiFi deactivate (0 = aktive, 1 = deaktivated 'not allowed here')",
					"de": "WiFi deaktiviert (0 = Aktiv, 1 = deaktiviert 'hier nicht erlaubt) '",
					"ru": "Wi-Fi деактивировать (0 = aktive, 1 = deaktivated 'не разрешено здесь) « »",
					"pt": "Wi-Fi desativar (0 = aktive, 1 = deaktivated 'não permitido aqui) '",
					"nl": "WiFi deactive (0 = = = = = deaktivatie 'niet toegestaan hier '",
					"fr": "Désactivation de la WiFi (0 = aktive, 1 = déaktivée 'non autorisée ici) '",
					"it": "WiFi disattivare (0 = aktive, 1 = deaktivated 'non consentito qui) '",
					"es": "WiFi desactivar (0 = aktive, 1 = deaktivated 'not allowed here) '",
					"pl": "WiFi deaktywuje (0 = aktywne, 1 = deaktywowane) tutaj. '",
					"zh-cn": "WiFi deactivate (0 = 缺陷,1 = 这里允许的注释) 评 注"
				},
				desc: {
					"en": "Deactivate WLAN interface (not changeable whith default settings) 0 active (default) 1 deactivated",
					"de": "Deaktivieren der WLAN-Schnittstelle (nicht änderbare mit Standardeinstellungen) 0 aktiv (Standard) 1 deaktiviert",
					"ru": "Деактивировать интерфейс WLAN (не изменяемые настройки по умолчанию) 0 активный (по умолчанию) 1 деактивированный",
					"pt": "Desativar a interface WLAN (configurações padrão não mutáveis) 0 active (padrão) 1 desativado",
					"nl": "Deactiveer WLAN interface (niet veranderende zenddefecties) 0 actief (default) 1 gedeactiveerd",
					"fr": "Désactiver l'interface WLAN (pas de réglages modifiables par défaut) 0 actif (par défaut) 1 désactivé",
					"it": "Disattivare l'interfaccia WLAN (non modificabile con impostazioni predefinite) 0 attivo (default) 1 disattivato",
					"es": "Desactivar la interfaz WLAN (no cambiar la configuración predeterminada de Whith) 0 activa (por defecto) 1 desactivada",
					"pl": "Interfejs De WLAN (nie zmieniających się domyślnych ustawień) 0 aktywne (default) 1 deaktywowane",
					"uk": "Deactivate інтерфейс WLAN (не змінні налаштування за замовчуванням) 0 активний (за замовчуванням) 1 деактивований",
					"zh-cn": "世界公路网的界面(无可改变的违约情况) 0 活(坏) 1"
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
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'FACTORY',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	APT: {
		id: 'APT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "WiFi AP timeout (0 = timeout not active,  disabled after 1 - 3600 seconds after internet connection)",
					"de": "WiFi AP Timeout (0 = Timeout nicht aktiv, nach 1-3600 Sekunden nach Internetverbindung deaktiviert)",
					"ru": "WiFi AP timeout (0 = timeout не активный, отключен после 1 - 3600 секунд после подключения к Интернету)",
					"pt": "Acesso Wi-Fi AP timeout (0 = timeout não ativo, desativado após 1 - 3600 segundos após conexão à internet)",
					"nl": "Wifi AP timeout (0 = time-out niet actief, gehandicapt na 1 - 3600 seconden na internet verbinding",
					"fr": "WiFi AP timeout (0 = timeout not active, disabled after 1 - 3600 seconds after internet connection)",
					"it": "WiFi AP timeout (0 = timeout non attivo, disabilitato dopo 1 - 3600 secondi dopo la connessione internet)",
					"es": "Tiempo de AP WiFi (0 = tiempo de salida no activo, discapacitados después de 1 - 3600 segundos después de la conexión a Internet)",
					"pl": "Timeout WiFi (0 = timeout) nie jest aktywny, niepełnosprawny po 1 – 3600 sekundach po łączeniu internetowym",
					"zh-cn": "WiFi AP Timeout(0 = 时间不活跃,在互联网连接之后的1-3600秒钟)"
				},
				desc:{
					"en": "0 AP timeout not active >0 AP disabled after x seconds after internet connection",
					"de": "0 AP Timeout nicht aktiv >0 AP deaktiviert nach x Sekunden nach Internetverbindung",
					"ru": "0 AP timeout не активен >0 AP отключен после x секунд после подключения к Интернету",
					"pt": "0 tempo limite AP não ativo >0 AP desativado após x segundos após conexão à internet",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Temps d'arrêt AP non actif ACIA0 AP désactivé après x secondes après connexion internet",
					"it": "0 AP timeout non attivo >0 AP disabilitato dopo x secondi dopo connessione internet",
					"es": "0 AP timeout not active √0 AP disabled after x segundos after internet connection",
					"pl": "Czas AP nie jest aktywny >0 AP niepełnosprawny po x sekundach",
					"uk": "0 AP таймер не активний >0 AP вимкнено після підключення до Інтернету",
					"zh-cn": "在互联网连接之后的x倍后,计划时间没有积极残疾。"
				},
				type: 'number',
				unit: 's',
				role: 'state',
				min: 0,
				max: 3600,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	WAD: {
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
				desc: {
					"en": "0 AP not disabled 1 AP disabled",
					"de": "0 AP nicht deaktiviert 1 AP deaktiviert",
					"ru": "0 AP не инвалид 1 AP инвалид",
					"pt": "0 AP não desativado 1 AP desativado",
					"nl": "AP niet uitgeschakeld",
					"fr": "0 AP non handicapés 1 AP handicapés",
					"it": "0 AP non disabilitato 1 AP disabilitato",
					"es": "0 AP no discapacitados 1 AP discapacitados",
					"pl": "0 AP nie jest zdezaktywowane 1 AP",
					"uk": "0 AP не вимкнено 1 AP вимкнено",
					"zh-cn": "残疾人1"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	WAH: {
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
				desc: {
					"en": "0 AP not hidden (visible) 1 AP hidden",
					"de": "0 AP nicht versteckt (sichtbar) 1 AP versteckt",
					"ru": "0 AP не скрыт (видимый) 1 AP скрыт",
					"pt": "0 AP não escondido (visível) 1 AP escondido",
					"nl": "AP niet verborgen. 1 AP verborgen",
					"fr": "0 AP non caché (visible) 1 AP caché",
					"it": "0 AP non nascosto (visibile) 1 AP nascosto",
					"es": "0 AP no ocultos (visible) 1 AP ocultos",
					"pl": "0 AP nie jest ukryta (widoczna) 1 AP ukryta",
					"uk": "0 AP не прихований (видимий) 1 AP прихований",
					"zh-cn": "0 AP不隐藏(无形) 1 AP"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SRV: {
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
				desc: {
					"en": "dd.mm.yyyy",
					"de": "TT.MM.JJJJ",
					"ru": "dd.mm.yyyy",
					"pt": "dd.mm.yyyy",
					"nl": "dd.mm.yyyy",
					"fr": "dd.mm.yyyy",
					"it": "dd.mm.yyyy",
					"es": "dd.mm.yyyy",
					"pl": "dd.mm.yyyy",
					"uk": "dd.mm.yyyy",
					"zh-cn": "dd.mm.yyyy"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WFC: {
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
					"en": "Set WiFi SSID (1-32 characters) and connects to network Get command returns current saved SSID",
					"de": "WLAN SSID (1-32 Zeichen) verbindet mit dem entsprechenden Netzwerk. Beim Auslesen erhält man die aktuelle gespeicherte SSID zurück",
					"ru": "Установите WiFi SSID (1-32 символа) и подключается к сети Получить команду возвращает ток сохраненный SSID",
					"pt": "Definir SSID WiFi (1-32 caracteres) e se conecta à rede Obter comando retorna corrente salva SSID",
					"nl": "Zet WiFi SSID (1-32 personages en verbinding met netwerk Laat het commando terugkeren",
					"fr": "Set WiFi SSID (1-32 caractères) et connecte au réseau Obtenir la commande retours courant enregistré SSID",
					"it": "Impostare WiFi SSID (1-32 caratteri) e connettersi alla rete Ricevi il comando restituisce la corrente salvata SSID",
					"es": "Establecer WiFi SSID (1-32 caracteres) y se conecta a la red Obtener comando devuelve la corriente salva SSID",
					"pl": "Set WiFi SSID (1-32 postaci) i łączy się z siecią. Dostarczenie komendy zabezpieczało SSID",
					"uk": "Встановити WiFi SSID (1-32 символів) і підключитися до мережі Отримати команду повертає поточний збережений SSID",
					"zh-cn": "A. 建立WFi SSID(1-32特征)和连接网络 杰特指挥部目前储蓄的回返"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WFR: {
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
				desc: {
					"en": "1...100%",
					"de": "1...100%",
					"ru": "1...100%",
					"pt": "1...100%",
					"nl": "1...100%",
					"fr": "1,100%",
					"it": "1...100%",
					"es": "1...100%",
					"pl": "1,100%",
					"uk": "1...100%",
					"zh-cn": "1.100%"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	CNO: {
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
		statePath: adapterChannels.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	SRN: {
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
				desc: {
					"en": "9 digits",
					"de": "9 Ziffern",
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
		statePath: adapterChannels.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WGW: {
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
					"en": "Def. gateway obtained from DHCP in format w.x.y.z",
					"de": "Def. Gateway von DHCP im Format w.x.y.z",
					"ru": "Def. шлюз получен из DHCP в формате w.x.y.z",
					"pt": "Def. gateway obtido a partir de DHCP em formato w.x.y.z",
					"nl": "Def. gateway obtained from DHCP in format w.x.y.z",
					"fr": "Def. gateway obtained from DHCP in format w.x.y.z",
					"it": "Def. gateway ottenuto da DHCP in formato w.x.y.z",
					"es": "Def. gateway obtained from DHCP in format w.x.y.z",
					"pl": "Obrona bramy uzyskana z DHCP w formacie w.x.y.z",
					"uk": "Захисні ворота, отримані від DHCP у форматі w.x.y.z",
					"zh-cn": "定义. 从人权观察处以形式取得的门户。"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	MAC: {
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
		statePath: adapterChannels.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	WIP: {
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
					"en": "IP address obtained from DHCP in format w.x.y.z",
					"de": "IP-Adresse von DHCP im Format w.x.y.z",
					"ru": "IP адрес получен из DHCP в формате w.x.y.z",
					"pt": "Endereço IP obtido a partir de DHCP em formato w.x.y.z",
					"nl": "IP-adres verkregen van DHCP in format w",
					"fr": "Adresse IP obtenue de DHCP en format w.x.y.z",
					"it": "Indirizzo IP ottenuto da DHCP in formato w.x.y.z",
					"es": "Dirección IP obtenida de DHCP en formato w.x.y.z",
					"pl": "Adres IP otrzymany od DHCP w formacie w.x.y.z",
					"uk": "IP-адреса, отримана від DHCP у форматі w.x.y.z",
					"zh-cn": "人权观察社以形式从人权观察社获得的地址。"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	VER: {
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
				desc: {
					"en": "Safe-Tech (version number)",
					"de": "Safe-Tech (Versionsnummer)",
					"ru": "Safe-Tech (номер версии)",
					"pt": "Safe-Tech (número de versão)",
					"nl": "Safe-Tech (versie nummer)",
					"fr": "Safe-Tech (numéro de version)",
					"it": "Safe-Tech (numero di conversione)",
					"es": "Safe-Tech (número de versión)",
					"pl": "Safe-Tech (pol.)",
					"uk": "Сейф-Тех (версія)",
					"zh-cn": "安全与技术(更替人数)"
				},
				type: 'string',
				unit: null,
				role: 'info.firmware',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceInfo.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	CND: {
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
				desc: {
					"en": "0...5000 uS/cm",
					"de": "0...5000 uS/cm",
					"ru": "0...5000 уС/см",
					"pt": "0...5000 uS/cm",
					"nl": "0,5000 US/Cm",
					"fr": "0...5000 uS/cm",
					"it": "0...5000 uS/cm",
					"es": "0...5000 uS/cm",
					"pl": "0,5000 US/cmmm",
					"uk": "0...5000 уС/км",
					"zh-cn": "页: 1"
				},
				type: 'number',
				unit: 'µS/cm',
				role: 'value',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.WaterCondition.path,
		saveRawData: true,
		createOnStartup: false,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	CEL: {
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
				desc: {
					"en": "0.0...100.0°C (0….1000)",
					"de": "0,0...100.0°C (0....1000)",
					"ru": "0.0...100.0°C (0....1000)",
					"pt": "0.0...100.0°C (0....1000)",
					"nl": "0.0...100.0 GRADEN",
					"fr": "0,0...100.0°C (0...1000)",
					"it": "0.0...100.0°C (0....1000)",
					"es": "0,0...100.0°C (0....1000)",
					"pl": "0,0..100.0°C (0...1000) (ANG.)",
					"uk": "0.0...100.0°C (0....1000)",
					"zh-cn": "0.0..100.0°C(0..1000)"
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
		saveRawData: true,
		createOnStartup: false,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	BAR: {
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
				desc: {
					"en": "In mbar, format x mbar",
					"de": "In mbar, Format x mbar",
					"ru": "В мбаре, формат x мбар",
					"pt": "Em mbar, formato x mbar",
					"nl": "In mbar, format x mbar",
					"fr": "Dans mbar, format x mbar",
					"it": "In mbar, formato x mbar",
					"es": "En mbar, formato x mbar",
					"pl": "W mbarze format x mbar",
					"uk": "У барі формат x mbar",
					"zh-cn": "在米巴拉,格式×米"
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
		saveRawData: true,
		createOnStartup: false,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	VLV: {
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
				desc: {
					"en": "10 Closed 11 Closing 20 Open 21 Opening 30 Undefined",
					"de": "10 Geschlossen 11 Am schliessen 20 Offen 21 Am öffnen 30 Undefiniert",
					"ru": "10 Закрыто 11 Закрытие 20 Открыто 21 Открытие 30 Не определено",
					"pt": "10 Fechado 11 Fechamento 20 Aberto 21 Abertura 30 Indefinido",
					"nl": "10 gesloten 11 Closing 20 Open 21 Opening 30 Undefin",
					"fr": "10 Fermé 11 Fermeture 20 Ouvert 21 Ouverture 30 Non défini",
					"it": "10 Chiuso 11 Chiusura 20 Aperto 21 Apertura 30 Non definita",
					"es": "10 Cerrado 11 Cierre 20 Abierto 21 Apertura 30 Indefinido",
					"pl": "10 Zamknięć nr 20 Otwarty 30 Nieokreślony",
					"uk": "10 Закрити 11 Закриття 20 Відкрито 21 Відкриття 30 Не визначено",
					"zh-cn": "10 近11个Clos 20个开放 21"
				},
				type: 'string',
				unit: null,
				role: 'value.valve',
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	ALA: {
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
				desc: {
					"en": "Gets current alarm, FF- no alarm, A1...AB see description",
					"de": "Holt Alarmstatus, FF- kein Alarm, A1... AB siehe Beschreibung",
					"ru": "Получает текущую тревогу, FF- без тревоги, A1... AB см. описание",
					"pt": "Obtém alarme, FF- nenhum alarme, A1... AB veja descrição",
					"nl": "Krijgt het huidige alarm, geen alarm, A1... AB ziet beschrijving",
					"fr": "L'alarme actuelle, FF- pas d'alarme, A1... AB voir la description",
					"it": "Ricevi l'allarme corrente, FF- nessun allarme, A1... AB vedi descrizione",
					"es": "Consigue alarma actual, FF- no alarma, A1... AB ver descripción",
					"pl": "Nie ma alarmu, FF- no alarm, A1. AB",
					"uk": "Отримує поточну сигналізацію, FF-без сигналу, A1 ... AB Переглянути опис",
					"zh-cn": "Gets 目前震惊,森林论坛-无警觉,A1。 评 注"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	RTC: {
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
				desc: {
					"en": "Linux Epoch format, e.g. 1517389637",
					"de": "Linux Epoch Format, z.B. 1517389637",
					"ru": "Формат Linux Epoch, например 1517389637",
					"pt": "Linux Epoch formato, por exemplo 1517389637",
					"nl": "Linux Epoch format, e.g. 1517389637",
					"fr": "Format Epoch Linux, p.ex. 1517389637",
					"it": "Formato Linux Epoch, ad esempio 1517389637",
					"es": "Formato Linux Epoch, por ejemplo 1517389637",
					"pl": "Linuks Epoch: e.g 151738963737",
					"uk": "English, Українська, Français..",
					"zh-cn": "图瓦卢"
				},
				type: 'string',
				unit: null,
				role: 'value.time',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PRN: {
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
				desc: {
					"en": "0...8",
					"de": "0...8",
					"ru": "0...8",
					"pt": "0...8",
					"nl": "0...8",
					"fr": "0...8",
					"it": "0...8",
					"es": "0...8",
					"pl": "0...8",
					"uk": "0 р. 8 хв",
					"zh-cn": "页:1 第8条"
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	PRF: {
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
				desc: {
					"en": "1...8",
					"de": "1...8",
					"ru": "1...8",
					"pt": "1...8",
					"nl": "1,8",
					"fr": "1..8",
					"it": "1... 8",
					"es": "1...8",
					"pl": "1...8",
					"uk": "1...8",
					"zh-cn": "1..8"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofiles.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SLP: {
		id: 'SLP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Self learning phase. 0 deaktivated, 1-28 days',
					'de': 'Selbstlernende Phase. 0 deaktiviert, 1-28 Tage',
					'ru': 'Самообучение фазы. 0 deaktivated, 1-28 дней',
					'pt': 'Fase de auto-aprendizagem. 0 desativado, 1-28 dias',
					'nl': 'Zelf leren fase. 0 deaktivatie, 1-28 dagen',
					'fr': 'Phase d\'autoapprentissage. 0 daktivated, 1-28 jours',
					'it': 'Fase di autoapprendimento. 0 deaktivated, 1-28 giorni',
					'es': 'Fase de aprendizaje propio. 0 deaktivado, 1-28 días',
					'pl': 'Faza uczenia się. Zdeaktywowany 1-28 dni',
					'zh-cn': '自我学习阶段。 页: 1'
				},
				desc: {
					"en": "Self learning function 0 Disabled 1...28days",
					"de": "Selbstlernende Funktion 0 deaktiviert 1...28days",
					"ru": "Функция самостоятельного обучения 0 Отключено 1...28дней",
					"pt": "Função de aprendizagem automática 0 Desativado 1...28days",
					"nl": "Zelf leren functioneren Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "Fonction d ' apprentissage autonome 0 Handicapés 1...28jours",
					"it": "Funzione di autoapprendimento 0 Disabili 1...28days",
					"es": "Función de aprendizaje autónomo 0 Discapacitados 1...28 días",
					"pl": "Funkcja uczenia się 0:28 dni",
					"uk": "Функція самостійного навчання 0 Вимкнено 1...28days",
					"zh-cn": "自我学习职能 0 残疾人1.28天"
				},
				type: 'number',
				unit: 'days',
				role: 'state',
				min: 0,
				max: 28,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSelfLearning.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SLO: {
		id: 'SLO',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Self learning values (volume, time) surplus (5-20%)',
					'de': 'Selbstlernende Werte (Volumen, Zeit) Überschuss (5-20%)',
					'ru': 'Значения самообучения (объем, время) излишки (5-20%)',
					'pt': 'Valores de autoaprendizagem (volume, tempo) excedente (5-20%)',
					'nl': 'Zelf leren waarden (volume, tijd) (5-20%)',
					'fr': 'Valeurs d\'autoapprentissage (volume, temps) excédentaire (5-20%)',
					'it': 'Valori di autoapprendimento (volume, tempo) surplus (5-20%)',
					'es': 'Superávit de los valores de autoaprendizaje (volumen, tiempo) (5-20%)',
					'pl': 'Wartość uczenia się (ang.) (5-20%)',
					'zh-cn': '自我学习价值(周转时间)盈余 (5-20%)'
				},
				desc: {
					"en": "Self Learning values (volume, time) surplus in percentages",
					"de": "Selbstlernende Werte (Volumen, Zeit) Überschuss in Prozent",
					"ru": "Значения самообучения (объем, время) излишки в процентах",
					"pt": "Valores de aprendizagem automática (volume, tempo) excedente em percentagens",
					"nl": "Self Learning waarden (volume, tijd) overleving in percentages",
					"fr": "Valeurs d'autoapprentissage (volume, temps) en pourcentages",
					"it": "Valori di autoapprendimento (volume, tempo) eccedenza in percentuali",
					"es": "Superávit de los valores de autoaprendizaje (volumen, tiempo) en porcentajes",
					"pl": "Wartość samouczynienia (ang. Self Learning value, volume, time)",
					"uk": "Значення самовдосконалення (об’єм, час) надлишок у відсотках",
					"zh-cn": "自我学习价值(数量、时间)盈余百分比"
				},
				type: 'number',
				unit: '%',
				role: 'state',
				min: 5,
				max: 20,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSelfLearning.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SOF: {
		id: 'SOF',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Self learning max flow surplus (5-50%)',
					'de': 'Selbstlernen max Flussüberschuss (5-50%)',
					'ru': 'Самое обучение Макс поток излишки (5-50%)',
					'pt': 'Excedente de fluxo máximo de aprendizagem automática (5-50%)',
					'nl': 'Egoïstisch leren (5-50%)',
					'fr': 'Autoapprentissage max débit excédent (5-50%)',
					'it': 'Self learning max flusso surplus (5-50%)',
					'es': 'Superávit de flujo máximo de aprendizaje (5-50%)',
					'pl': 'Same uczenie się przepływu maksimum (5-50%)',
					'zh-cn': '自营职业者 (5-50%)'
				},
				desc: {
					"en": "Self Learning max flow surplus in percentages",
					"de": "Selbstlernen max Flussüberschuss in Prozent",
					"ru": "Self Learning max поток излишки в процентах",
					"pt": "Excedente de fluxo máximo de autoaprendizagem em percentagens",
					"nl": "Self Learning Max vloeistof in percentages",
					"fr": "Autoapprentissage max débit excédentaire en pourcentages",
					"it": "Eccedenza di flusso max di apprendimento in percentuali",
					"es": "Superávit de flujo de autoaprendizaje máximo en porcentajes",
					"pl": "Podwyżki przepływu maksimum w odsetkach",
					"uk": "Самовчищення максимального потоку надлишок у відсотках",
					"zh-cn": "自营职业者"
				},
				type: 'number',
				unit: '%',
				role: 'state',
				min: 5,
				max: 50,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSelfLearning.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SMF: {
		id: 'SMF',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Self learning minimum flow (0-5000l/h)',
					'de': 'Selbstlernender Mindestfluss (0-5000l/h)',
					'ru': 'Самое обучение минимального потока (0-5000l/h)',
					'pt': 'Fluxo mínimo de aprendizagem automática (0-5000l/h)',
					'nl': 'Zelf leren minimumstroom (0-5000l/h)',
					'fr': 'Débit minimum d \' apprentissage autonome (0-5000l/h)',
					'it': 'Flusso minimo di autoapprendimento (0-5000l/h)',
					'es': 'Flujo mínimo de aprendizaje autónomo (0-5000l/h)',
					'pl': 'Minimalny przepływ (0-5000l/h)',
					'zh-cn': '自我学习最低限度流动 (0-5000l/h)'
				},
				desc: {
					"en": "Placeholder of the self Learning flow value",
					"de": "Platzhalter des Selbstlernflusses",
					"ru": "Placeholder of the self Изучение стоимости потока",
					"pt": "Placeholder of the self Valor de fluxo de aprendizagem",
					"nl": "Plaatsvervanger van de zelfbeheersing van de vloed",
					"fr": "Placeholder of the self Learning flow value",
					"it": "Titolare del valore del flusso di autoapprendimento",
					"es": "Titular del valor de flujo de aprendizaje propio",
					"pl": "Zamknięcie wartości przepływu samochodowego",
					"uk": "Місцевласник вартості самовстановлення",
					"zh-cn": "自我学习流量价值的持有人"
				},
				type: 'number',
				unit: 'l/h',
				role: 'state',
				min: 0,
				max: 5000,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSelfLearning.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SLE: {
		id: 'SLE',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Seconds remeaning to the end of self learning',
					'de': 'Sekunden bis zum Ende des Selbstlernens',
					'ru': 'Секунды воспоминаются к концу самообучения',
					'pt': 'Segundos remeaning ao fim do auto-aprendizagem',
					'nl': 'Twee seconden die zich tot het einde van zelf leren',
					'fr': 'Seconds remeaning to the end of self learning',
					'it': 'Secondi che si rifanno alla fine dell\'autoapprendimento',
					'es': 'Segundos que significan el final del aprendizaje propio',
					'pl': 'Drugie znaczenie ma koniec uczenia się ',
					'zh-cn': '结束自学'
				},
				desc: {
					"en": "Seconds remaining to the end of SLP",
					"de": "Verbleibende Sekunden bis SPL Ende",
					"ru": "Секунды, оставшиеся до конца SLP",
					"pt": "Segundos restantes até o final do SLP",
					"nl": "Seconds remaining to the end of SLP",
					"fr": "Seconds remaining to the end of SLP",
					"it": "Secondi rimasti alla fine del SLP",
					"es": "Segundos pendientes al final del SLP",
					"pl": "Druga pozostała do końca SLP",
					"uk": "Други, що залишилися в кінці SLP",
					"zh-cn": "五. 留在SLP月底的第二个项目"
				},
				type: 'number',
				unit: 's',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSelfLearning.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: 'set'
	},
	SLV: {
		id: 'SLV',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Current volume during self learning',
					'de': 'Aktuelles Volumen während des Selbstlernens',
					'ru': 'Текущий объем во время самостоятельного обучения',
					'pt': 'Volume atual durante a auto-aprendizagem',
					'nl': 'Vertaling:',
					'fr': 'Volume actuel pendant l\'autoapprentissage',
					'it': 'Volume attuale durante l\'autoapprendimento',
					'es': 'Volumen actual durante el auto aprendizaje',
					'pl': 'Aktualny tom w czasie uczenia się się samochodowego',
					'zh-cn': '目前在自学期间'
				},
				desc: {
					"en": "Current volume value during SLP [l]",
					"de": "Aktueller Volumenwert während SLP [l]",
					"ru": "Текущая объемная стоимость во время SLP [l]",
					"pt": "Valor de volume atual durante SLP [l]",
					"nl": "Current volume value during SLP [l]",
					"fr": "Valeur du volume actuel pendant SLP [l]",
					"it": "Valore di volume attuale durante SLP [l]",
					"es": "Valor de volumen actual durante SLP [l]",
					"pl": "Aktualna wartość objętościowa w SLP (ang.)",
					"uk": "Поточне значення обсягу при SLP [l]",
					"zh-cn": "A. 目前在SLP[l]期间的数额"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSelfLearning.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: 'set'
	},
	SLT: {
		id: 'SLT',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Current time value during self learning',
					'de': 'Aktueller Zeitwert beim Selbstlernen',
					'ru': 'Текущее значение времени во время самостоятельного обучения',
					'pt': 'Valor de tempo atual durante a aprendizagem automática',
					'nl': 'Kwellingswaarde tijdens zelf leren',
					'fr': 'Valeur de l\'heure actuelle pendant l\'autoapprentissage',
					'it': 'Valore attuale del tempo durante l\'autoapprendimento',
					'es': 'Valor de tiempo actual durante el aprendizaje automático',
					'pl': 'Czas trwania nauki',
					'zh-cn': '当前学习期间的时间价值'
				},
				desc: {
					"en": "Current time value during SLP [s]",
					"de": "Aktueller Zeitwert während SLP [s]",
					"ru": "Текущее значение времени во время SLP [s]",
					"pt": "Valor de tempo atual durante SLP [s]",
					"nl": "Tijdstipwaarde tijdens SLP",
					"fr": "Valeur de l'heure actuelle pendant SLP [s]",
					"it": "Valore attuale del tempo durante SLP [s]",
					"es": "Valor de tiempo actual durante SLP [s]",
					"pl": "Aktualna wartość czasu w SLP (ang.)",
					"uk": "Поточне значення часу при SLP [s]",
					"zh-cn": "二. 目前在SLP[s]期间的价值"
				},
				type: 'number',
				unit: 's',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSelfLearning.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: 'set'
	},
	SLF: {
		id: 'SLF',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Current max flow value during self learning',
					'de': 'Aktueller Maximalflusswert beim Selbstlernen',
					'ru': 'Текущее значение максимального потока во время самостоятельного обучения',
					'pt': 'Valor de fluxo máximo atual durante a autoaprendizagem',
					'nl': 'Vertaling:',
					'fr': 'Valeur de débit max courant pendant l\'autoapprentissage',
					'it': 'Valore di flusso massimo attuale durante l\'autoapprendimento',
					'es': 'Valor de flujo máximo actual durante el aprendizaje automático',
					'pl': 'Aktualna wartość przepływu maksimum podczas uczenia się samochodowego',
					'zh-cn': '目前在自学期间的可变性'
				},
				desc: {
					"en": "Current max. flow value during SLP [l/h]",
					"de": "Maximaler Durchflusswert während SLP [l/h]",
					"ru": "Текущий максимум. значение потока во время SLP [l/h]",
					"pt": "Max actual. valor de fluxo durante SLP [l/h]",
					"nl": "Current Max. vloeistofwaarde tijdens SLP",
					"fr": "Courant max. valeur de débit pendant SLP [l/h]",
					"it": "Corrente max. valore di flusso durante SLP [l/h]",
					"es": "Max actual. valor de flujo durante SLP [l/h]",
					"pl": "Aktualny max. Wartość przepływu w SLP/h (ang.)",
					"uk": "Поточний макс. значення потоку при SLP [l/h]",
					"zh-cn": "目前最高限额。 SLP[l/h]期间的流动价值"
				},
				type: 'number',
				unit: 'l/h',
				role: 'state',
				read: true,
				write: false
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSelfLearning.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: 'set'
	},
	TMZ: {
		id: 'TMZ',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time zone (UTC-11 ... UTC+12) 15min steps (-44...84)',
					'de': 'Zeitzone (UTC-11 ... UTC+12) 15min Schritte (-44...84)',
					'ru': 'Часовой пояс (UTC-11 ... UTC+12) 15 минут (-44...84)',
					'pt': 'Fuso horário (UTC-11 ... UTC+12) 15min passos (-44...84)',
					'nl': 'Tijdzone (UTC-11 ... UTC +12) 15 minuten stappen (-44...84)',
					'fr': 'Zone temporelle (UTC-11 ... UTC+12) (-44...84)',
					'it': 'Fuso orario (UTC-11 ... UTC+12) passi 15min (-44...84)',
					'es': 'Zona horaria (UTC-11 ... UTC+12) 15min pasos (-44...84)',
					'pl': 'Strefa czasu (UTC-11 ... UTC+12) (-44...84)',
					'zh-cn': '时间区(UTC-11 ... UTC+12) 15分钟 (-44...84)'
				},
				desc: {
					"en": "UTC-11...UTC+12 Every 15min",
					"de": "UTC-11...UTC+12 Alle 15min",
					"ru": "UTC-11...UTC+12 Каждые 15мин",
					"pt": "UTC-11...UTC+12 Cada 15min",
					"nl": "UTC-11...UTC+12 Every 15min",
					"fr": "UTC-11...UTC+12 Tous les 15min",
					"it": "UTC-11...UTC+12 Ogni 15min",
					"es": "UTC-11...UTC+12 Cada 15min",
					"pl": "UTC-11...UTC+12 Every 15min (ang.)",
					"uk": "UTC-11...UTC+12 Кожен 15 хв",
					"zh-cn": "UTC-11.UTC+12 每15分钟"
				},
				type: 'number',
				role: 'state',
				min: -44,
				max: 48,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	TN: {
		id: 'TN',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Moter overrun in 1/10 seconds after a limit switch has been reached (0.0...2.0s)',
					'de': 'Moter-Überlauf in 1/10 Sekunden nach Erreichen eines Grenzwertschalters (0.0...2.0s)',
					'ru': 'Мотер перевернут через 1/10 секунд после того как переключатель предела был достигнут (0.0...2.0s)',
					'pt': 'Moter superado em 1/10 segundos após um interruptor de limite foi alcançado (0.0...2.0s)',
					'nl': 'Moter overreden in 1/10 seconden na een limietschakelaar is bereikt (0.0...2.0s)',
					'fr': 'Moteur débordé en 1/10 secondes après un interrupteur de limite (0.0...2.0s)',
					'it': 'Moter in esecuzione in 1/10 secondi dopo che è stato raggiunto un interruttore limite (0.0...2.0s)',
					'es': 'Sobrecosto de motero en 1/10 segundos después de que se haya alcanzado un interruptor límite (0.0...2.0s)',
					'pl': 'Moter przejechał w ciągu 1/10 sekund po osiągnięciu przełącznika granicznego (0,0...2.0s)',
					'zh-cn': '在1/10秒之后(0.0...2.0s)摩特超支。'
				},
				desc: {
					"en": "Motor overrun in 1/10-second after a limit switch has been reached 0.0...2.0s",
					"de": "Motorüberlauf in 1/10 Sekunden nach Erreichen des Grenzwertschalters 0,0...2.0s",
					"ru": "Перебег двигателя в 1/10-секунде после переключения лимита был достигнут 0.0...2.0s",
					"pt": "Motor superado em 1/10-segundo após um interruptor de limite foi alcançado 0,0...2.0s",
					"nl": "Motor overreden in 1/10-second nadat een limietschakelaar is bereikt 0.0...2.0",
					"fr": "Débordement de moteur en 1/10-seconde après un interrupteur...2.0",
					"it": "Motor overrun in 1/10-secondo dopo che un interruttore di limite è stato raggiunto 0.0...2.0s",
					"es": "Sobrecosto de motor en 1/10 segundos después de un interruptor de límite se ha alcanzado 0.0...2.0s",
					"pl": "Przewoźnik samochodowy w ciągu 1/10 sekundy po osiągnięciu przełącznika limitowego..2.0s",
					"uk": "Перепуск двигуна в 1/10-секунді після обмеження перемикача досягається 0.0...2.0s",
					"zh-cn": "在1/10-二年之后,摩托管理人已达到0.0.2.0。"
				},
				type: 'number',
				unit: '1/10s',
				role: 'state',
				min: 0,
				max: 20,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'FACTORY',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	P71: {
		id: '71',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Leakage protection deactivated",
					"de": "Leckageschutz deaktiviert",
					"ru": "Защита от утечки деактивирована",
					"pt": "Proteção de vazamento desativada",
					"nl": "Beveiliging gedeactiveerd",
					"fr": "Protection des fuites désactivées",
					"it": "Protezione delle perdite disattivata",
					"es": "Protección de almacenamiento desactivado",
					"pl": "Ochrona Leakage dezaktywowała",
					"uk": "Охорона праці",
					"zh-cn": "保护动植物"
				},
				desc: {
					"en": "Leakage protection deactivation 0 Nein 1 Ja",
					"de": "Leckageschutz 0 Nein 1 Ja",
					"ru": "Защита от утечки деактивация 0 Nein 1 Ja",
					"pt": "Desativação da proteção da fuga 0 Nein 1 Ja",
					"nl": "Vertaling:",
					"fr": "Désactivation de la protection des fuites 0 Nein 1 Ja",
					"it": "Disattivazione della protezione contro le perdite 0 Nein 1 Ja",
					"es": "Desactivación de la protección de Leakage 0 Nein 1 Ja",
					"pl": "Deektywacja 0 Nein 1 Ja",
					"uk": "Деактивація захисту від відходу 0 Nein 1 Ja",
					"zh-cn": "A. 保护动产 0 Nein 1 Ja"
				},
				type: 'number',
				role: 'state',
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceControl.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'FACTORY',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	ALD: {
		id: 'ALD',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Alarm duration (signaling time) (0 = unlimited 1...3600s)',
					'de': 'Alarmdauer (Signalzeit) (0 = unbegrenzt 1...3600s)',
					'ru': 'Продолжительность сигнализации (время регистрации) (0 = не ограничено 1...3600s)',
					'pt': 'Duração do alarme (tempo de sinalização) (0 = ilimitado 1...3600s)',
					'nl': 'Alarm duration (signaling time) (0 = onbeperkt 1...3600)',
					'fr': 'Durée de l\'alarme (temps de signature) (0 = illimité 1...3600s)',
					'it': 'Durata dell\'allarme (orario di firma) (0 = illimitato 1...3600s)',
					'es': 'Duración del alarma (tiempo de firma) (0 = ilimitado 1...3600s)',
					'pl': 'Czas trwania sygnału (odpowiednik) (0 = nieograniczony 1..3600)',
					'zh-cn': '期限(分配时间)(0 = 无限制的 1...3600 美元)'
				},
				desc:{
					"en": "0 Unlimited 1...3600s",
					"de": "0 Unbegrenzte 1...3600s",
					"ru": "0 Неограниченный 1...3600s",
					"pt": "0 Ilimitado 1...3600s",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Unlimited 1...3600s",
					"it": "0 illimitato 1...3600",
					"es": "0 Unlimited 1...3600s",
					"pl": "0 Unlimited 1..3600",
					"uk": "0 Необмежений 1...3600s",
					"zh-cn": "页:1"
				},
				type: 'number',
				role: 'state',
				unit: 's',
				min: 0,
				max: 3600,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	CLP: {
		id: 'CLP',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "show profile names or cluster (0 = names, 1 = cluster)",
					"de": "Profilnamen oder Gruppe anzeigen (0 = Namen, 1 = Gruppe)",
					"ru": "показать имена профилей или кластер (0 = имена, 1 = кластер)",
					"pt": "mostrar nomes de perfil ou cluster (0 = nomes, 1 = cluster)",
					"nl": "toon profielnamen of cluster (0 = namen, 1 = = cluster)",
					"fr": "afficher les noms de profil ou de groupe (0 = noms, 1 = groupement)",
					"it": "mostrare nomi di profilo o cluster (0 = nomi, 1 = cluster)",
					"es": "mostrar nombres de perfil o grupo (0 = nombres, 1 = grupo)",
					"pl": "nazwy profilowe lub klaster (0 = nazwy, 1 = klaster)",
					"zh-cn": "图像名称或集群(0 =名称,1=集群)"
				},
				desc: {
					"en": "0 Shows profile name 1 Shows „Cluster” instead of profile name",
					"de": "0 Zeigt Profilname 1 Zeigt „Cluster“ anstelle des Profilnamens",
					"ru": "0 0 Показать название профиля 1 Показать „Кластер” вместо названия профиля",
					"pt": "0 Mostra o nome do perfil 1 Mostra „Cluster” em vez do nome do perfil",
					"nl": "_ Toont profiel naam 1 \"Coollu\" in plaats van profiel naam",
					"fr": "0 Affiche le nom de profil 1 Affiche „Cluster” au lieu du nom de profil",
					"it": "0 Mostra il nome del profilo 1 Mostra \"Cluster\" invece del nome del profilo",
					"es": "0 Muestra el nombre del perfil 1 Shows „Cluster” en lugar de nombre del perfil",
					"pl": "0 Profil na 1 Shows „Cluster” zamiast nazwy profilowej",
					"uk": "0 товар(ов) - 0.00 р. Показує назву профілю 1 Shows \"Cluster\" замість назви профілю",
					"zh-cn": "0% 导 言"
				},
				type: 'number',
				role: 'state',
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	BPB: {
		id: 'BPB',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Enable profile changes by button (0 = blocked, 1 = possible)",
					"de": "Profiländerungen per Knopf aktivieren (0 = blockiert, 1 = möglich)",
					"ru": "Включить изменения профиля по кнопке (0 = заблокирован, 1 = возможно)",
					"pt": "Habilitar alterações de perfil por botão (0 = bloqueado, 1 = possível)",
					"nl": "In staatsprofiel verandert door knop",
					"fr": "Activer les changements de profil par bouton (0 = bloqué, 1 = possible)",
					"it": "Attivare le modifiche del profilo per pulsante (0 = bloccato, 1 = possibile)",
					"es": "Activar cambios de perfil por botón (0 = bloqueado, 1 = posible)",
					"pl": "Zmiany profilu przez przycisk (0 = blocked, 1 = możliwa)",
					"zh-cn": "德顿的可观变化(0 = 锁定,1=可能)"
				},
				desc:{
					"en": "0 Profile change blocked 1 Profile change possible",
					"de": "0 Profiländerung blockiert 1 Profiländerung möglich",
					"ru": "0 Изменение профиля заблокировано 1 изменение профиля возможно",
					"pt": "0 Troca de perfil bloqueada 1 Alteração de perfil possível",
					"nl": "Quality over Quantity (QoQ) Releases Vertaling:",
					"fr": "0 Changement de profil bloqué 1 Changement de profil possible",
					"it": "0 Modifica del profilo bloccato 1 Modifica del profilo possibile",
					"es": "0 Cambio de perfil bloqueado 1 Cambio de perfil posible",
					"pl": "Zmiana pliku 0 blokuje zmianę 1 Profile",
					"uk": "0 Доступна зміна профілю",
					"zh-cn": "导 言"
				},
				type: 'number',
				role: 'state',
				unit: null,
				min: 0,
				max: 1,
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DeviceSettings.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PA1: {
		id: 'PA1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile available (0) no, (1) yes',
					'de': 'Profil verfügbar (0) nein, (1) ja',
					'ru': 'Профиль доступен (0) нет, (1) да',
					'pt': 'Perfil disponível (0) não, (1) sim',
					'nl': 'Profile beschikbaar (0) nee; (1) ja',
					'fr': 'Profil disponible (0) non, (1) oui',
					'it': 'Profilo disponibile (0) no, (1) sì',
					'es': 'Perfil disponible (0) no, (1) sí',
					'pl': 'Profil na stronie (0) nie; (1) dostępny',
					'zh-cn': '简介 (0) 无; (1) 否'
				},
				desc:{
					"en": "0 Profile not available 1 Profile available\n",
					"de": "0 Profil nicht verfügbar 1 Profil verfügbar\n",
					"ru": "0 Профиль недоступен 1 Профиль доступен\n",
					"pt": "0 Perfil não disponível 1 Perfil disponível\n",
					"nl": "0 Profile niet beschikbaar 1 Profil\n",
					"fr": "0 Profil non disponible 1 Profil disponible\n",
					"it": "0 Profilo non disponibile 1 Profilo disponibile\n",
					"es": "0 Perfil no disponible 1 Perfil disponible\n",
					"pl": "0 Profil nie jest dostępny na stronie 1\n",
					"uk": "0 Профіль не доступний 1 Профіль\n",
					"zh-cn": "目录\n"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PA2: {
		id: 'PA2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile available (0) no, (1) yes',
					'de': 'Profil verfügbar (0) nein, (1) ja',
					'ru': 'Профиль доступен (0) нет, (1) да',
					'pt': 'Perfil disponível (0) não, (1) sim',
					'nl': 'Profile beschikbaar (0) nee; (1) ja',
					'fr': 'Profil disponible (0) non, (1) oui',
					'it': 'Profilo disponibile (0) no, (1) sì',
					'es': 'Perfil disponible (0) no, (1) sí',
					'pl': 'Profil na stronie (0) nie; (1) dostępny',
					'zh-cn': '简介 (0) 无; (1) 否'
				},
				desc:{
					"en": "0 Profile not available 1 Profile available\n",
					"de": "0 Profil nicht verfügbar 1 Profil verfügbar\n",
					"ru": "0 Профиль недоступен 1 Профиль доступен\n",
					"pt": "0 Perfil não disponível 1 Perfil disponível\n",
					"nl": "0 Profile niet beschikbaar 1 Profil\n",
					"fr": "0 Profil non disponible 1 Profil disponible\n",
					"it": "0 Profilo non disponibile 1 Profilo disponibile\n",
					"es": "0 Perfil no disponible 1 Perfil disponible\n",
					"pl": "0 Profil nie jest dostępny na stronie 1\n",
					"uk": "0 Профіль не доступний 1 Профіль\n",
					"zh-cn": "目录\n"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PA3: {
		id: 'PA3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile available (0) no, (1) yes',
					'de': 'Profil verfügbar (0) nein, (1) ja',
					'ru': 'Профиль доступен (0) нет, (1) да',
					'pt': 'Perfil disponível (0) não, (1) sim',
					'nl': 'Profile beschikbaar (0) nee; (1) ja',
					'fr': 'Profil disponible (0) non, (1) oui',
					'it': 'Profilo disponibile (0) no, (1) sì',
					'es': 'Perfil disponible (0) no, (1) sí',
					'pl': 'Profil na stronie (0) nie; (1) dostępny',
					'zh-cn': '简介 (0) 无; (1) 否'
				},
				desc:{
					"en": "0 Profile not available 1 Profile available\n",
					"de": "0 Profil nicht verfügbar 1 Profil verfügbar\n",
					"ru": "0 Профиль недоступен 1 Профиль доступен\n",
					"pt": "0 Perfil não disponível 1 Perfil disponível\n",
					"nl": "0 Profile niet beschikbaar 1 Profil\n",
					"fr": "0 Profil non disponible 1 Profil disponible\n",
					"it": "0 Profilo non disponibile 1 Profilo disponibile\n",
					"es": "0 Perfil no disponible 1 Perfil disponible\n",
					"pl": "0 Profil nie jest dostępny na stronie 1\n",
					"uk": "0 Профіль не доступний 1 Профіль\n",
					"zh-cn": "目录\n"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PA4: {
		id: 'PA4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile available (0) no, (1) yes',
					'de': 'Profil verfügbar (0) nein, (1) ja',
					'ru': 'Профиль доступен (0) нет, (1) да',
					'pt': 'Perfil disponível (0) não, (1) sim',
					'nl': 'Profile beschikbaar (0) nee; (1) ja',
					'fr': 'Profil disponible (0) non, (1) oui',
					'it': 'Profilo disponibile (0) no, (1) sì',
					'es': 'Perfil disponible (0) no, (1) sí',
					'pl': 'Profil na stronie (0) nie; (1) dostępny',
					'zh-cn': '简介 (0) 无; (1) 否'
				},
				desc:{
					"en": "0 Profile not available 1 Profile available\n",
					"de": "0 Profil nicht verfügbar 1 Profil verfügbar\n",
					"ru": "0 Профиль недоступен 1 Профиль доступен\n",
					"pt": "0 Perfil não disponível 1 Perfil disponível\n",
					"nl": "0 Profile niet beschikbaar 1 Profil\n",
					"fr": "0 Profil non disponible 1 Profil disponible\n",
					"it": "0 Profilo non disponibile 1 Profilo disponibile\n",
					"es": "0 Perfil no disponible 1 Perfil disponible\n",
					"pl": "0 Profil nie jest dostępny na stronie 1\n",
					"uk": "0 Профіль не доступний 1 Профіль\n",
					"zh-cn": "目录\n"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PA5: {
		id: 'PA5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile available (0) no, (1) yes',
					'de': 'Profil verfügbar (0) nein, (1) ja',
					'ru': 'Профиль доступен (0) нет, (1) да',
					'pt': 'Perfil disponível (0) não, (1) sim',
					'nl': 'Profile beschikbaar (0) nee; (1) ja',
					'fr': 'Profil disponible (0) non, (1) oui',
					'it': 'Profilo disponibile (0) no, (1) sì',
					'es': 'Perfil disponible (0) no, (1) sí',
					'pl': 'Profil na stronie (0) nie; (1) dostępny',
					'zh-cn': '简介 (0) 无; (1) 否'
				},
				desc:{
					"en": "0 Profile not available 1 Profile available\n",
					"de": "0 Profil nicht verfügbar 1 Profil verfügbar\n",
					"ru": "0 Профиль недоступен 1 Профиль доступен\n",
					"pt": "0 Perfil não disponível 1 Perfil disponível\n",
					"nl": "0 Profile niet beschikbaar 1 Profil\n",
					"fr": "0 Profil non disponible 1 Profil disponible\n",
					"it": "0 Profilo non disponibile 1 Profilo disponibile\n",
					"es": "0 Perfil no disponible 1 Perfil disponible\n",
					"pl": "0 Profil nie jest dostępny na stronie 1\n",
					"uk": "0 Профіль не доступний 1 Профіль\n",
					"zh-cn": "目录\n"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PA6: {
		id: 'PA6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile available (0) no, (1) yes',
					'de': 'Profil verfügbar (0) nein, (1) ja',
					'ru': 'Профиль доступен (0) нет, (1) да',
					'pt': 'Perfil disponível (0) não, (1) sim',
					'nl': 'Profile beschikbaar (0) nee; (1) ja',
					'fr': 'Profil disponible (0) non, (1) oui',
					'it': 'Profilo disponibile (0) no, (1) sì',
					'es': 'Perfil disponible (0) no, (1) sí',
					'pl': 'Profil na stronie (0) nie; (1) dostępny',
					'zh-cn': '简介 (0) 无; (1) 否'
				},
				desc:{
					"en": "0 Profile not available 1 Profile available\n",
					"de": "0 Profil nicht verfügbar 1 Profil verfügbar\n",
					"ru": "0 Профиль недоступен 1 Профиль доступен\n",
					"pt": "0 Perfil não disponível 1 Perfil disponível\n",
					"nl": "0 Profile niet beschikbaar 1 Profil\n",
					"fr": "0 Profil non disponible 1 Profil disponible\n",
					"it": "0 Profilo non disponibile 1 Profilo disponibile\n",
					"es": "0 Perfil no disponible 1 Perfil disponible\n",
					"pl": "0 Profil nie jest dostępny na stronie 1\n",
					"uk": "0 Профіль не доступний 1 Профіль\n",
					"zh-cn": "目录\n"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PA7: {
		id: 'PA7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile available (0) no, (1) yes',
					'de': 'Profil verfügbar (0) nein, (1) ja',
					'ru': 'Профиль доступен (0) нет, (1) да',
					'pt': 'Perfil disponível (0) não, (1) sim',
					'nl': 'Profile beschikbaar (0) nee; (1) ja',
					'fr': 'Profil disponible (0) non, (1) oui',
					'it': 'Profilo disponibile (0) no, (1) sì',
					'es': 'Perfil disponible (0) no, (1) sí',
					'pl': 'Profil na stronie (0) nie; (1) dostępny',
					'zh-cn': '简介 (0) 无; (1) 否'
				},
				desc:{
					"en": "0 Profile not available 1 Profile available\n",
					"de": "0 Profil nicht verfügbar 1 Profil verfügbar\n",
					"ru": "0 Профиль недоступен 1 Профиль доступен\n",
					"pt": "0 Perfil não disponível 1 Perfil disponível\n",
					"nl": "0 Profile niet beschikbaar 1 Profil\n",
					"fr": "0 Profil non disponible 1 Profil disponible\n",
					"it": "0 Profilo non disponibile 1 Profilo disponibile\n",
					"es": "0 Perfil no disponible 1 Perfil disponible\n",
					"pl": "0 Profil nie jest dostępny na stronie 1\n",
					"uk": "0 Профіль не доступний 1 Профіль\n",
					"zh-cn": "目录\n"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PA8: {
		id: 'PA8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile available (0) no, (1) yes',
					'de': 'Profil verfügbar (0) nein, (1) ja',
					'ru': 'Профиль доступен (0) нет, (1) да',
					'pt': 'Perfil disponível (0) não, (1) sim',
					'nl': 'Profile beschikbaar (0) nee; (1) ja',
					'fr': 'Profil disponible (0) non, (1) oui',
					'it': 'Profilo disponibile (0) no, (1) sì',
					'es': 'Perfil disponible (0) no, (1) sí',
					'pl': 'Profil na stronie (0) nie; (1) dostępny',
					'zh-cn': '简介 (0) 无; (1) 否'
				},
				desc:{
					"en": "0 Profile not available 1 Profile available\n",
					"de": "0 Profil nicht verfügbar 1 Profil verfügbar\n",
					"ru": "0 Профиль недоступен 1 Профиль доступен\n",
					"pt": "0 Perfil não disponível 1 Perfil disponível\n",
					"nl": "0 Profile niet beschikbaar 1 Profil\n",
					"fr": "0 Profil non disponible 1 Profil disponible\n",
					"it": "0 Profilo non disponibile 1 Profilo disponibile\n",
					"es": "0 Perfil no disponible 1 Perfil disponible\n",
					"pl": "0 Profil nie jest dostępny na stronie 1\n",
					"uk": "0 Профіль не доступний 1 Профіль\n",
					"zh-cn": "目录\n"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PB1: {
		id: 'PB1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'buzzer, 0 = disabled, 1 = enabled',
					'de': 'Summer, 0 = deaktiviert, 1 = aktiviert',
					'ru': 'buzzer, 0 = отключен, 1 = включен',
					'pt': 'buzzer, 0 = desativado, 1 = habilitado',
					'nl': 'buzzer, 0 = gehandicapt, 1 gehandicapten',
					'fr': 'Bourdonneur, 0 = désactivé, 1 = activé',
					'it': 'buzzer, 0 = disabilitato, 1 = abilitato',
					'es': 'Zumbido, 0 = discapacitado, 1 = activado',
					'pl': 'buzzer, 0 = niepełnosprawny, 1 = umożliwiany',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PB2: {
		id: 'PB2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'buzzer, 0 = disabled, 1 = enabled',
					'de': 'Summer, 0 = deaktiviert, 1 = aktiviert',
					'ru': 'buzzer, 0 = отключен, 1 = включен',
					'pt': 'buzzer, 0 = desativado, 1 = habilitado',
					'nl': 'buzzer, 0 = gehandicapt, 1 gehandicapten',
					'fr': 'Bourdonneur, 0 = désactivé, 1 = activé',
					'it': 'buzzer, 0 = disabilitato, 1 = abilitato',
					'es': 'Zumbido, 0 = discapacitado, 1 = activado',
					'pl': 'buzzer, 0 = niepełnosprawny, 1 = umożliwiany',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PB3: {
		id: 'PB3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'buzzer, 0 = disabled, 1 = enabled',
					'de': 'Summer, 0 = deaktiviert, 1 = aktiviert',
					'ru': 'buzzer, 0 = отключен, 1 = включен',
					'pt': 'buzzer, 0 = desativado, 1 = habilitado',
					'nl': 'buzzer, 0 = gehandicapt, 1 gehandicapten',
					'fr': 'Bourdonneur, 0 = désactivé, 1 = activé',
					'it': 'buzzer, 0 = disabilitato, 1 = abilitato',
					'es': 'Zumbido, 0 = discapacitado, 1 = activado',
					'pl': 'buzzer, 0 = niepełnosprawny, 1 = umożliwiany',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PB4: {
		id: 'PB4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'buzzer, 0 = disabled, 1 = enabled',
					'de': 'Summer, 0 = deaktiviert, 1 = aktiviert',
					'ru': 'buzzer, 0 = отключен, 1 = включен',
					'pt': 'buzzer, 0 = desativado, 1 = habilitado',
					'nl': 'buzzer, 0 = gehandicapt, 1 gehandicapten',
					'fr': 'Bourdonneur, 0 = désactivé, 1 = activé',
					'it': 'buzzer, 0 = disabilitato, 1 = abilitato',
					'es': 'Zumbido, 0 = discapacitado, 1 = activado',
					'pl': 'buzzer, 0 = niepełnosprawny, 1 = umożliwiany',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PB5: {
		id: 'PB5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'buzzer, 0 = disabled, 1 = enabled',
					'de': 'Summer, 0 = deaktiviert, 1 = aktiviert',
					'ru': 'buzzer, 0 = отключен, 1 = включен',
					'pt': 'buzzer, 0 = desativado, 1 = habilitado',
					'nl': 'buzzer, 0 = gehandicapt, 1 gehandicapten',
					'fr': 'Bourdonneur, 0 = désactivé, 1 = activé',
					'it': 'buzzer, 0 = disabilitato, 1 = abilitato',
					'es': 'Zumbido, 0 = discapacitado, 1 = activado',
					'pl': 'buzzer, 0 = niepełnosprawny, 1 = umożliwiany',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PB6: {
		id: 'PB6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'buzzer, 0 = disabled, 1 = enabled',
					'de': 'Summer, 0 = deaktiviert, 1 = aktiviert',
					'ru': 'buzzer, 0 = отключен, 1 = включен',
					'pt': 'buzzer, 0 = desativado, 1 = habilitado',
					'nl': 'buzzer, 0 = gehandicapt, 1 gehandicapten',
					'fr': 'Bourdonneur, 0 = désactivé, 1 = activé',
					'it': 'buzzer, 0 = disabilitato, 1 = abilitato',
					'es': 'Zumbido, 0 = discapacitado, 1 = activado',
					'pl': 'buzzer, 0 = niepełnosprawny, 1 = umożliwiany',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PB7: {
		id: 'PB7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'buzzer, 0 = disabled, 1 = enabled',
					'de': 'Summer, 0 = deaktiviert, 1 = aktiviert',
					'ru': 'buzzer, 0 = отключен, 1 = включен',
					'pt': 'buzzer, 0 = desativado, 1 = habilitado',
					'nl': 'buzzer, 0 = gehandicapt, 1 gehandicapten',
					'fr': 'Bourdonneur, 0 = désactivé, 1 = activé',
					'it': 'buzzer, 0 = disabilitato, 1 = abilitato',
					'es': 'Zumbido, 0 = discapacitado, 1 = activado',
					'pl': 'buzzer, 0 = niepełnosprawny, 1 = umożliwiany',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PB8: {
		id: 'PB8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'buzzer, 0 = disabled, 1 = enabled',
					'de': 'Summer, 0 = deaktiviert, 1 = aktiviert',
					'ru': 'buzzer, 0 = отключен, 1 = включен',
					'pt': 'buzzer, 0 = desativado, 1 = habilitado',
					'nl': 'buzzer, 0 = gehandicapt, 1 gehandicapten',
					'fr': 'Bourdonneur, 0 = désactivé, 1 = activé',
					'it': 'buzzer, 0 = disabilitato, 1 = abilitato',
					'es': 'Zumbido, 0 = discapacitado, 1 = activado',
					'pl': 'buzzer, 0 = niepełnosprawny, 1 = umożliwiany',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PF1: {
		id: 'PF1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'maximum flow (0) deactivated 1...5000l/h)',
					'de': 'maximaler Durchfluss (0) deaktiviert 1...5000l/h)',
					'ru': 'максимальный поток (0) деактивирован 1...5000л/ч)',
					'pt': 'fluxo máximo (0) desativado 1...5000l/h)',
					'nl': 'maximale stroom (0) gedeactiveerd 1...5000/h ♪',
					'fr': 'débit maximal (0) désactivé 1...5000l/h)',
					'it': 'flusso massimo (0) disattivato 1...5000l/h)',
					'es': 'flujo máximo (0) desactivado 1...5000l/h)',
					'pl': 'maksymalny przepływ (0) deaktywowany 1..5000l/h)',
					'zh-cn': '最大流量 (0) 失职 1...5000l/h)'
				},
				desc: {
					"en": "0 Disabled 1…5000l/h",
					"de": "0 deaktiviert 1...5000l/h",
					"ru": "0 Отключено 1...5000l/h",
					"pt": "0 Desativado 1...5000l/h",
					"nl": "0 Disabled 1…5000l/h",
					"fr": "0 Handicapés 1...5000l/h",
					"it": "0 Disabili 1...5000l/h",
					"es": "0 Discapacitados 1..5000l/h",
					"pl": "0:5000l/h",
					"uk": "0 Вимкнено 1...5000л/час",
					"zh-cn": "0 残疾人1. 000l/h"
				},
				type: 'number',
				role: 'state',
				unit: 'l/h',
				read: true,
				write: true,
				min: 0,
				max: 5000
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PF2: {
		id: 'PF2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'maximum flow (0) deactivated 1...5000l/h)',
					'de': 'maximaler Durchfluss (0) deaktiviert 1...5000l/h)',
					'ru': 'максимальный поток (0) деактивирован 1...5000л/ч)',
					'pt': 'fluxo máximo (0) desativado 1...5000l/h)',
					'nl': 'maximale stroom (0) gedeactiveerd 1...5000/h ♪',
					'fr': 'débit maximal (0) désactivé 1...5000l/h)',
					'it': 'flusso massimo (0) disattivato 1...5000l/h)',
					'es': 'flujo máximo (0) desactivado 1...5000l/h)',
					'pl': 'maksymalny przepływ (0) deaktywowany 1..5000l/h)',
					'zh-cn': '最大流量 (0) 失职 1...5000l/h)'
				},
				desc: {
					"en": "0 Disabled 1…5000l/h",
					"de": "0 deaktiviert 1...5000l/h",
					"ru": "0 Отключено 1...5000l/h",
					"pt": "0 Desativado 1...5000l/h",
					"nl": "0 Disabled 1…5000l/h",
					"fr": "0 Handicapés 1...5000l/h",
					"it": "0 Disabili 1...5000l/h",
					"es": "0 Discapacitados 1..5000l/h",
					"pl": "0:5000l/h",
					"uk": "0 Вимкнено 1...5000л/час",
					"zh-cn": "0 残疾人1. 000l/h"
				},
				type: 'number',
				role: 'state',
				unit: 'l/h',
				read: true,
				write: true,
				min: 0,
				max: 5000
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PF3: {
		id: 'PF3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'maximum flow (0) deactivated 1...5000l/h)',
					'de': 'maximaler Durchfluss (0) deaktiviert 1...5000l/h)',
					'ru': 'максимальный поток (0) деактивирован 1...5000л/ч)',
					'pt': 'fluxo máximo (0) desativado 1...5000l/h)',
					'nl': 'maximale stroom (0) gedeactiveerd 1...5000/h ♪',
					'fr': 'débit maximal (0) désactivé 1...5000l/h)',
					'it': 'flusso massimo (0) disattivato 1...5000l/h)',
					'es': 'flujo máximo (0) desactivado 1...5000l/h)',
					'pl': 'maksymalny przepływ (0) deaktywowany 1..5000l/h)',
					'zh-cn': '最大流量 (0) 失职 1...5000l/h)'
				},
				desc: {
					"en": "0 Disabled 1…5000l/h",
					"de": "0 deaktiviert 1...5000l/h",
					"ru": "0 Отключено 1...5000l/h",
					"pt": "0 Desativado 1...5000l/h",
					"nl": "0 Disabled 1…5000l/h",
					"fr": "0 Handicapés 1...5000l/h",
					"it": "0 Disabili 1...5000l/h",
					"es": "0 Discapacitados 1..5000l/h",
					"pl": "0:5000l/h",
					"uk": "0 Вимкнено 1...5000л/час",
					"zh-cn": "0 残疾人1. 000l/h"
				},
				type: 'number',
				role: 'value.max',
				read: true,
				write: true,
				min: 0,
				max: 5000
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PF4: {
		id: 'PF4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'maximum flow (0) deactivated 1...5000l/h)',
					'de': 'maximaler Durchfluss (0) deaktiviert 1...5000l/h)',
					'ru': 'максимальный поток (0) деактивирован 1...5000л/ч)',
					'pt': 'fluxo máximo (0) desativado 1...5000l/h)',
					'nl': 'maximale stroom (0) gedeactiveerd 1...5000/h ♪',
					'fr': 'débit maximal (0) désactivé 1...5000l/h)',
					'it': 'flusso massimo (0) disattivato 1...5000l/h)',
					'es': 'flujo máximo (0) desactivado 1...5000l/h)',
					'pl': 'maksymalny przepływ (0) deaktywowany 1..5000l/h)',
					'zh-cn': '最大流量 (0) 失职 1...5000l/h)'
				},
				desc: {
					"en": "0 Disabled 1…5000l/h",
					"de": "0 deaktiviert 1...5000l/h",
					"ru": "0 Отключено 1...5000l/h",
					"pt": "0 Desativado 1...5000l/h",
					"nl": "0 Disabled 1…5000l/h",
					"fr": "0 Handicapés 1...5000l/h",
					"it": "0 Disabili 1...5000l/h",
					"es": "0 Discapacitados 1..5000l/h",
					"pl": "0:5000l/h",
					"uk": "0 Вимкнено 1...5000л/час",
					"zh-cn": "0 残疾人1. 000l/h"
				},
				type: 'number',
				role: 'state',
				unit: 'l/h',
				read: true,
				write: true,
				min: 0,
				max: 5000
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PF5: {
		id: 'PF5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'maximum flow (0) deactivated 1...5000l/h)',
					'de': 'maximaler Durchfluss (0) deaktiviert 1...5000l/h)',
					'ru': 'максимальный поток (0) деактивирован 1...5000л/ч)',
					'pt': 'fluxo máximo (0) desativado 1...5000l/h)',
					'nl': 'maximale stroom (0) gedeactiveerd 1...5000/h ♪',
					'fr': 'débit maximal (0) désactivé 1...5000l/h)',
					'it': 'flusso massimo (0) disattivato 1...5000l/h)',
					'es': 'flujo máximo (0) desactivado 1...5000l/h)',
					'pl': 'maksymalny przepływ (0) deaktywowany 1..5000l/h)',
					'zh-cn': '最大流量 (0) 失职 1...5000l/h)'
				},
				desc: {
					"en": "0 Disabled 1…5000l/h",
					"de": "0 deaktiviert 1...5000l/h",
					"ru": "0 Отключено 1...5000l/h",
					"pt": "0 Desativado 1...5000l/h",
					"nl": "0 Disabled 1…5000l/h",
					"fr": "0 Handicapés 1...5000l/h",
					"it": "0 Disabili 1...5000l/h",
					"es": "0 Discapacitados 1..5000l/h",
					"pl": "0:5000l/h",
					"uk": "0 Вимкнено 1...5000л/час",
					"zh-cn": "0 残疾人1. 000l/h"
				},
				type: 'number',
				role: 'state',
				unit: 'l/h',
				read: true,
				write: true,
				min: 0,
				max: 5000
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PF6: {
		id: 'PF6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'maximum flow (0) deactivated 1...5000l/h)',
					'de': 'maximaler Durchfluss (0) deaktiviert 1...5000l/h)',
					'ru': 'максимальный поток (0) деактивирован 1...5000л/ч)',
					'pt': 'fluxo máximo (0) desativado 1...5000l/h)',
					'nl': 'maximale stroom (0) gedeactiveerd 1...5000/h ♪',
					'fr': 'débit maximal (0) désactivé 1...5000l/h)',
					'it': 'flusso massimo (0) disattivato 1...5000l/h)',
					'es': 'flujo máximo (0) desactivado 1...5000l/h)',
					'pl': 'maksymalny przepływ (0) deaktywowany 1..5000l/h)',
					'zh-cn': '最大流量 (0) 失职 1...5000l/h)'
				},
				desc: {
					"en": "0 Disabled 1…5000l/h",
					"de": "0 deaktiviert 1...5000l/h",
					"ru": "0 Отключено 1...5000l/h",
					"pt": "0 Desativado 1...5000l/h",
					"nl": "0 Disabled 1…5000l/h",
					"fr": "0 Handicapés 1...5000l/h",
					"it": "0 Disabili 1...5000l/h",
					"es": "0 Discapacitados 1..5000l/h",
					"pl": "0:5000l/h",
					"uk": "0 Вимкнено 1...5000л/час",
					"zh-cn": "0 残疾人1. 000l/h"
				},
				type: 'number',
				role: 'state',
				unit: 'l/h',
				read: true,
				write: true,
				min: 0,
				max: 5000
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PF7: {
		id: 'PF7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'maximum flow (0) deactivated 1...5000l/h)',
					'de': 'maximaler Durchfluss (0) deaktiviert 1...5000l/h)',
					'ru': 'максимальный поток (0) деактивирован 1...5000л/ч)',
					'pt': 'fluxo máximo (0) desativado 1...5000l/h)',
					'nl': 'maximale stroom (0) gedeactiveerd 1...5000/h ♪',
					'fr': 'débit maximal (0) désactivé 1...5000l/h)',
					'it': 'flusso massimo (0) disattivato 1...5000l/h)',
					'es': 'flujo máximo (0) desactivado 1...5000l/h)',
					'pl': 'maksymalny przepływ (0) deaktywowany 1..5000l/h)',
					'zh-cn': '最大流量 (0) 失职 1...5000l/h)'
				},
				desc: {
					"en": "0 Disabled 1…5000l/h",
					"de": "0 deaktiviert 1...5000l/h",
					"ru": "0 Отключено 1...5000l/h",
					"pt": "0 Desativado 1...5000l/h",
					"nl": "0 Disabled 1…5000l/h",
					"fr": "0 Handicapés 1...5000l/h",
					"it": "0 Disabili 1...5000l/h",
					"es": "0 Discapacitados 1..5000l/h",
					"pl": "0:5000l/h",
					"uk": "0 Вимкнено 1...5000л/час",
					"zh-cn": "0 残疾人1. 000l/h"
				},
				type: 'number',
				role: 'state',
				unit: 'l/h',
				read: true,
				write: true,
				min: 0,
				max: 5000
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PF8: {
		id: 'PF8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'maximum flow (0) deactivated 1...5000l/h)',
					'de': 'maximaler Durchfluss (0) deaktiviert 1...5000l/h)',
					'ru': 'максимальный поток (0) деактивирован 1...5000л/ч)',
					'pt': 'fluxo máximo (0) desativado 1...5000l/h)',
					'nl': 'maximale stroom (0) gedeactiveerd 1...5000/h ♪',
					'fr': 'débit maximal (0) désactivé 1...5000l/h)',
					'it': 'flusso massimo (0) disattivato 1...5000l/h)',
					'es': 'flujo máximo (0) desactivado 1...5000l/h)',
					'pl': 'maksymalny przepływ (0) deaktywowany 1..5000l/h)',
					'zh-cn': '最大流量 (0) 失职 1...5000l/h)'
				},
				desc: {
					"en": "0 Disabled 1…5000l/h",
					"de": "0 deaktiviert 1...5000l/h",
					"ru": "0 Отключено 1...5000l/h",
					"pt": "0 Desativado 1...5000l/h",
					"nl": "0 Disabled 1…5000l/h",
					"fr": "0 Handicapés 1...5000l/h",
					"it": "0 Disabili 1...5000l/h",
					"es": "0 Discapacitados 1..5000l/h",
					"pl": "0:5000l/h",
					"uk": "0 Вимкнено 1...5000л/час",
					"zh-cn": "0 残疾人1. 000l/h"
				},
				type: 'number',
				role: 'state',
				unit: 'l/h',
				read: true,
				write: true,
				min: 0,
				max: 5000
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PM1: {
		id: 'PM1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'micro leakage detection (0) no, (1) yes',
					'de': 'Mikroleckerkennung (0) nein, (1) ja',
					'ru': 'обнаружение микро утечки (0) нет, (1) да',
					'pt': 'micro detecção de vazamento (0) não, (1) sim',
					'nl': 'microlekage detectie (0) nee; (1) ja',
					'fr': 'micro détection des fuites (0) non, (1) oui',
					'it': 'rilevamento micro perdite (0) no, (1) sì',
					'es': 'detección de micro fugas (0) no, (1) sí',
					'pl': 'wykrywanie mikroszczelności (0) nie; (1) dostępny',
					'zh-cn': '微额泄露 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PM2: {
		id: 'PM2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'micro leakage detection (0) no, (1) yes',
					'de': 'Mikroleckerkennung (0) nein, (1) ja',
					'ru': 'обнаружение микро утечки (0) нет, (1) да',
					'pt': 'micro detecção de vazamento (0) não, (1) sim',
					'nl': 'microlekage detectie (0) nee; (1) ja',
					'fr': 'micro détection des fuites (0) non, (1) oui',
					'it': 'rilevamento micro perdite (0) no, (1) sì',
					'es': 'detección de micro fugas (0) no, (1) sí',
					'pl': 'wykrywanie mikroszczelności (0) nie; (1) dostępny',
					'zh-cn': '微额泄露 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PM3: {
		id: 'PM3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'micro leakage detection (0) no, (1) yes',
					'de': 'Mikroleckerkennung (0) nein, (1) ja',
					'ru': 'обнаружение микро утечки (0) нет, (1) да',
					'pt': 'micro detecção de vazamento (0) não, (1) sim',
					'nl': 'microlekage detectie (0) nee; (1) ja',
					'fr': 'micro détection des fuites (0) non, (1) oui',
					'it': 'rilevamento micro perdite (0) no, (1) sì',
					'es': 'detección de micro fugas (0) no, (1) sí',
					'pl': 'wykrywanie mikroszczelności (0) nie; (1) dostępny',
					'zh-cn': '微额泄露 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PM4: {
		id: 'PM4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'micro leakage detection (0) no, (1) yes',
					'de': 'Mikroleckerkennung (0) nein, (1) ja',
					'ru': 'обнаружение микро утечки (0) нет, (1) да',
					'pt': 'micro detecção de vazamento (0) não, (1) sim',
					'nl': 'microlekage detectie (0) nee; (1) ja',
					'fr': 'micro détection des fuites (0) non, (1) oui',
					'it': 'rilevamento micro perdite (0) no, (1) sì',
					'es': 'detección de micro fugas (0) no, (1) sí',
					'pl': 'wykrywanie mikroszczelności (0) nie; (1) dostępny',
					'zh-cn': '微额泄露 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PM5: {
		id: 'PM5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'micro leakage detection (0) no, (1) yes',
					'de': 'Mikroleckerkennung (0) nein, (1) ja',
					'ru': 'обнаружение микро утечки (0) нет, (1) да',
					'pt': 'micro detecção de vazamento (0) não, (1) sim',
					'nl': 'microlekage detectie (0) nee; (1) ja',
					'fr': 'micro détection des fuites (0) non, (1) oui',
					'it': 'rilevamento micro perdite (0) no, (1) sì',
					'es': 'detección de micro fugas (0) no, (1) sí',
					'pl': 'wykrywanie mikroszczelności (0) nie; (1) dostępny',
					'zh-cn': '微额泄露 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PM6: {
		id: 'PM6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'micro leakage detection (0) no, (1) yes',
					'de': 'Mikroleckerkennung (0) nein, (1) ja',
					'ru': 'обнаружение микро утечки (0) нет, (1) да',
					'pt': 'micro detecção de vazamento (0) não, (1) sim',
					'nl': 'microlekage detectie (0) nee; (1) ja',
					'fr': 'micro détection des fuites (0) non, (1) oui',
					'it': 'rilevamento micro perdite (0) no, (1) sì',
					'es': 'detección de micro fugas (0) no, (1) sí',
					'pl': 'wykrywanie mikroszczelności (0) nie; (1) dostępny',
					'zh-cn': '微额泄露 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PM7: {
		id: 'PM7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'micro leakage detection (0) no, (1) yes',
					'de': 'Mikroleckerkennung (0) nein, (1) ja',
					'ru': 'обнаружение микро утечки (0) нет, (1) да',
					'pt': 'micro detecção de vazamento (0) não, (1) sim',
					'nl': 'microlekage detectie (0) nee; (1) ja',
					'fr': 'micro détection des fuites (0) non, (1) oui',
					'it': 'rilevamento micro perdite (0) no, (1) sì',
					'es': 'detección de micro fugas (0) no, (1) sí',
					'pl': 'wykrywanie mikroszczelności (0) nie; (1) dostępny',
					'zh-cn': '微额泄露 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PM8: {
		id: 'PM8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'micro leakage detection (0) no, (1) yes',
					'de': 'Mikroleckerkennung (0) nein, (1) ja',
					'ru': 'обнаружение микро утечки (0) нет, (1) да',
					'pt': 'micro detecção de vazamento (0) não, (1) sim',
					'nl': 'microlekage detectie (0) nee; (1) ja',
					'fr': 'micro détection des fuites (0) non, (1) oui',
					'it': 'rilevamento micro perdite (0) no, (1) sì',
					'es': 'detección de micro fugas (0) no, (1) sí',
					'pl': 'wykrywanie mikroszczelności (0) nie; (1) dostępny',
					'zh-cn': '微额泄露 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PN1: {
		id: 'PN1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile name',
					'de': 'Profilname',
					'ru': 'Имя профиля',
					'pt': 'Nome do perfil',
					'nl': 'Profile naam',
					'fr': 'Nom du profil',
					'it': 'Nome del profilo',
					'es': 'Nombre del perfil',
					'pl': 'Profil',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "max. 31 characters name",
					"de": "max. 31 Zeichen",
					"ru": "макс. имя символов 31",
					"pt": "max. 31 caracteres nome",
					"nl": "max. 31 personages noemen",
					"fr": "max. 31 caractères nom",
					"it": "max. 31 caratteri nome",
					"es": "max. 31 caracteres nombre",
					"pl": "max. 31 nazwisk",
					"uk": "макс. 31 ім'я символів",
					"zh-cn": "最高。 31 姓名"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PN2: {
		id: 'PN2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile name',
					'de': 'Profilname',
					'ru': 'Имя профиля',
					'pt': 'Nome do perfil',
					'nl': 'Profile naam',
					'fr': 'Nom du profil',
					'it': 'Nome del profilo',
					'es': 'Nombre del perfil',
					'pl': 'Profil',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "max. 31 characters name",
					"de": "max. 31 Zeichen",
					"ru": "макс. имя символов 31",
					"pt": "max. 31 caracteres nome",
					"nl": "max. 31 personages noemen",
					"fr": "max. 31 caractères nom",
					"it": "max. 31 caratteri nome",
					"es": "max. 31 caracteres nombre",
					"pl": "max. 31 nazwisk",
					"uk": "макс. 31 ім'я символів",
					"zh-cn": "最高。 31 姓名"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PN3: {
		id: 'PN3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile name',
					'de': 'Profilname',
					'ru': 'Имя профиля',
					'pt': 'Nome do perfil',
					'nl': 'Profile naam',
					'fr': 'Nom du profil',
					'it': 'Nome del profilo',
					'es': 'Nombre del perfil',
					'pl': 'Profil',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "max. 31 characters name",
					"de": "max. 31 Zeichen",
					"ru": "макс. имя символов 31",
					"pt": "max. 31 caracteres nome",
					"nl": "max. 31 personages noemen",
					"fr": "max. 31 caractères nom",
					"it": "max. 31 caratteri nome",
					"es": "max. 31 caracteres nombre",
					"pl": "max. 31 nazwisk",
					"uk": "макс. 31 ім'я символів",
					"zh-cn": "最高。 31 姓名"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PN4: {
		id: 'PN4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile name',
					'de': 'Profilname',
					'ru': 'Имя профиля',
					'pt': 'Nome do perfil',
					'nl': 'Profile naam',
					'fr': 'Nom du profil',
					'it': 'Nome del profilo',
					'es': 'Nombre del perfil',
					'pl': 'Profil',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "max. 31 characters name",
					"de": "max. 31 Zeichen",
					"ru": "макс. имя символов 31",
					"pt": "max. 31 caracteres nome",
					"nl": "max. 31 personages noemen",
					"fr": "max. 31 caractères nom",
					"it": "max. 31 caratteri nome",
					"es": "max. 31 caracteres nombre",
					"pl": "max. 31 nazwisk",
					"uk": "макс. 31 ім'я символів",
					"zh-cn": "最高。 31 姓名"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PN5: {
		id: 'PN5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile name',
					'de': 'Profilname',
					'ru': 'Имя профиля',
					'pt': 'Nome do perfil',
					'nl': 'Profile naam',
					'fr': 'Nom du profil',
					'it': 'Nome del profilo',
					'es': 'Nombre del perfil',
					'pl': 'Profil',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "max. 31 characters name",
					"de": "max. 31 Zeichen",
					"ru": "макс. имя символов 31",
					"pt": "max. 31 caracteres nome",
					"nl": "max. 31 personages noemen",
					"fr": "max. 31 caractères nom",
					"it": "max. 31 caratteri nome",
					"es": "max. 31 caracteres nombre",
					"pl": "max. 31 nazwisk",
					"uk": "макс. 31 ім'я символів",
					"zh-cn": "最高。 31 姓名"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PN6: {
		id: 'PN6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile name',
					'de': 'Profilname',
					'ru': 'Имя профиля',
					'pt': 'Nome do perfil',
					'nl': 'Profile naam',
					'fr': 'Nom du profil',
					'it': 'Nome del profilo',
					'es': 'Nombre del perfil',
					'pl': 'Profil',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "max. 31 characters name",
					"de": "max. 31 Zeichen",
					"ru": "макс. имя символов 31",
					"pt": "max. 31 caracteres nome",
					"nl": "max. 31 personages noemen",
					"fr": "max. 31 caractères nom",
					"it": "max. 31 caratteri nome",
					"es": "max. 31 caracteres nombre",
					"pl": "max. 31 nazwisk",
					"uk": "макс. 31 ім'я символів",
					"zh-cn": "最高。 31 姓名"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PN7: {
		id: 'PN7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile name',
					'de': 'Profilname',
					'ru': 'Имя профиля',
					'pt': 'Nome do perfil',
					'nl': 'Profile naam',
					'fr': 'Nom du profil',
					'it': 'Nome del profilo',
					'es': 'Nombre del perfil',
					'pl': 'Profil',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "max. 31 characters name",
					"de": "max. 31 Zeichen",
					"ru": "макс. имя символов 31",
					"pt": "max. 31 caracteres nome",
					"nl": "max. 31 personages noemen",
					"fr": "max. 31 caractères nom",
					"it": "max. 31 caratteri nome",
					"es": "max. 31 caracteres nombre",
					"pl": "max. 31 nazwisk",
					"uk": "макс. 31 ім'я символів",
					"zh-cn": "最高。 31 姓名"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PN8: {
		id: 'PN8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Profile name',
					'de': 'Profilname',
					'ru': 'Имя профиля',
					'pt': 'Nome do perfil',
					'nl': 'Profile naam',
					'fr': 'Nom du profil',
					'it': 'Nome del profilo',
					'es': 'Nombre del perfil',
					'pl': 'Profil',
					'zh-cn': '导 言'
				},
				desc: {
					"en": "max. 31 characters name",
					"de": "max. 31 Zeichen",
					"ru": "макс. имя символов 31",
					"pt": "max. 31 caracteres nome",
					"nl": "max. 31 personages noemen",
					"fr": "max. 31 caractères nom",
					"it": "max. 31 caratteri nome",
					"es": "max. 31 caracteres nombre",
					"pl": "max. 31 nazwisk",
					"uk": "макс. 31 ім'я символів",
					"zh-cn": "最高。 31 姓名"
				},
				type: 'string',
				unit: null,
				role: 'state',
				read: true,
				write: true
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PR1: {
		id: 'PR1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time back to standard profile (0) deaktivated 1 - 720 h (30 days)',
					'de': 'Zurück zum Standardprofil (0) deaktiviert 1 - 720 h (30 Tage)',
					'ru': 'Время обратно в стандартный профиль (0) άτομα με ειδικές ανάγκες 1 - 720 ч (30 дней)',
					'pt': 'Tempo de volta ao perfil padrão (0) descativado 1 - 720 h (30 dias)',
					'nl': 'Terug naar standaard profiel (0) Deaktivatie 1 - 720 h (30 dagen)',
					'fr': 'Retour au profil standard (0) inactiver 1 - 720 h (30 jours)',
					'it': 'Tempo di ritorno al profilo standard (0) disattivare 1 - 720 h (30 giorni)',
					'es': 'Tiempo de regreso al perfil estándar (0) desactivar 1 - 720 h (30 días)',
					'pl': 'Time back to standard profile (0) dezaktywować 1 – 720 h (30 dni)',
					'zh-cn': 'B. 标准概况的及时性 (0) 减少 1 - 720 h(30天)'
				},
				desc: {
					"en": "1-720h (30 days)",
					"de": "1-720h (30 Tage)",
					"ru": "1-720h (30 дней)",
					"pt": "1-720h (30 dias)",
					"nl": "1-720h (30 dagen)",
					"fr": "1-720h (30 jours)",
					"it": "1-720h (30 giorni)",
					"es": "1-720h (30 días)",
					"pl": "1-720h (30 dni)",
					"uk": "1-720h (30 днів)",
					"zh-cn": "1-720h(30天)"
				},
				type: 'number',
				unit: 'h',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 720
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PR2: {
		id: 'PR2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time back to standard profile (0) deaktivated 1 - 720 h (30 days)',
					'de': 'Zurück zum Standardprofil (0) deaktiviert 1 - 720 h (30 Tage)',
					'ru': 'Время обратно в стандартный профиль (0) άτομα με ειδικές ανάγκες 1 - 720 ч (30 дней)',
					'pt': 'Tempo de volta ao perfil padrão (0) descativado 1 - 720 h (30 dias)',
					'nl': 'Terug naar standaard profiel (0) Deaktivatie 1 - 720 h (30 dagen)',
					'fr': 'Retour au profil standard (0) inactiver 1 - 720 h (30 jours)',
					'it': 'Tempo di ritorno al profilo standard (0) disattivare 1 - 720 h (30 giorni)',
					'es': 'Tiempo de regreso al perfil estándar (0) desactivar 1 - 720 h (30 días)',
					'pl': 'Time back to standard profile (0) dezaktywować 1 – 720 h (30 dni)',
					'zh-cn': 'B. 标准概况的及时性 (0) 减少 1 - 720 h(30天)'
				},
				desc: {
					"en": "1-720h (30 days)",
					"de": "1-720h (30 Tage)",
					"ru": "1-720h (30 дней)",
					"pt": "1-720h (30 dias)",
					"nl": "1-720h (30 dagen)",
					"fr": "1-720h (30 jours)",
					"it": "1-720h (30 giorni)",
					"es": "1-720h (30 días)",
					"pl": "1-720h (30 dni)",
					"uk": "1-720h (30 днів)",
					"zh-cn": "1-720h(30天)"
				},
				type: 'number',
				unit: 'h',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 720
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PR3: {
		id: 'PR3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time back to standard profile (0) deaktivated 1 - 720 h (30 days)',
					'de': 'Zurück zum Standardprofil (0) deaktiviert 1 - 720 h (30 Tage)',
					'ru': 'Время обратно в стандартный профиль (0) άτομα με ειδικές ανάγκες 1 - 720 ч (30 дней)',
					'pt': 'Tempo de volta ao perfil padrão (0) descativado 1 - 720 h (30 dias)',
					'nl': 'Terug naar standaard profiel (0) Deaktivatie 1 - 720 h (30 dagen)',
					'fr': 'Retour au profil standard (0) inactiver 1 - 720 h (30 jours)',
					'it': 'Tempo di ritorno al profilo standard (0) disattivare 1 - 720 h (30 giorni)',
					'es': 'Tiempo de regreso al perfil estándar (0) desactivar 1 - 720 h (30 días)',
					'pl': 'Time back to standard profile (0) dezaktywować 1 – 720 h (30 dni)',
					'zh-cn': 'B. 标准概况的及时性 (0) 减少 1 - 720 h(30天)'
				},
				desc: {
					"en": "1-720h (30 days)",
					"de": "1-720h (30 Tage)",
					"ru": "1-720h (30 дней)",
					"pt": "1-720h (30 dias)",
					"nl": "1-720h (30 dagen)",
					"fr": "1-720h (30 jours)",
					"it": "1-720h (30 giorni)",
					"es": "1-720h (30 días)",
					"pl": "1-720h (30 dni)",
					"uk": "1-720h (30 днів)",
					"zh-cn": "1-720h(30天)"
				},
				type: 'number',
				unit: 'h',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 720
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PR4: {
		id: 'PR4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time back to standard profile (0) deaktivated 1 - 720 h (30 days)',
					'de': 'Zurück zum Standardprofil (0) deaktiviert 1 - 720 h (30 Tage)',
					'ru': 'Время обратно в стандартный профиль (0) άτομα με ειδικές ανάγκες 1 - 720 ч (30 дней)',
					'pt': 'Tempo de volta ao perfil padrão (0) descativado 1 - 720 h (30 dias)',
					'nl': 'Terug naar standaard profiel (0) Deaktivatie 1 - 720 h (30 dagen)',
					'fr': 'Retour au profil standard (0) inactiver 1 - 720 h (30 jours)',
					'it': 'Tempo di ritorno al profilo standard (0) disattivare 1 - 720 h (30 giorni)',
					'es': 'Tiempo de regreso al perfil estándar (0) desactivar 1 - 720 h (30 días)',
					'pl': 'Time back to standard profile (0) dezaktywować 1 – 720 h (30 dni)',
					'zh-cn': 'B. 标准概况的及时性 (0) 减少 1 - 720 h(30天)'
				},
				desc: {
					"en": "1-720h (30 days)",
					"de": "1-720h (30 Tage)",
					"ru": "1-720h (30 дней)",
					"pt": "1-720h (30 dias)",
					"nl": "1-720h (30 dagen)",
					"fr": "1-720h (30 jours)",
					"it": "1-720h (30 giorni)",
					"es": "1-720h (30 días)",
					"pl": "1-720h (30 dni)",
					"uk": "1-720h (30 днів)",
					"zh-cn": "1-720h(30天)"
				},
				type: 'number',
				unit: 'h',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 720
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PR5: {
		id: 'PR5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time back to standard profile (0) deaktivated 1 - 720 h (30 days)',
					'de': 'Zurück zum Standardprofil (0) deaktiviert 1 - 720 h (30 Tage)',
					'ru': 'Время обратно в стандартный профиль (0) άτομα με ειδικές ανάγκες 1 - 720 ч (30 дней)',
					'pt': 'Tempo de volta ao perfil padrão (0) descativado 1 - 720 h (30 dias)',
					'nl': 'Terug naar standaard profiel (0) Deaktivatie 1 - 720 h (30 dagen)',
					'fr': 'Retour au profil standard (0) inactiver 1 - 720 h (30 jours)',
					'it': 'Tempo di ritorno al profilo standard (0) disattivare 1 - 720 h (30 giorni)',
					'es': 'Tiempo de regreso al perfil estándar (0) desactivar 1 - 720 h (30 días)',
					'pl': 'Time back to standard profile (0) dezaktywować 1 – 720 h (30 dni)',
					'zh-cn': 'B. 标准概况的及时性 (0) 减少 1 - 720 h(30天)'
				},
				desc: {
					"en": "1-720h (30 days)",
					"de": "1-720h (30 Tage)",
					"ru": "1-720h (30 дней)",
					"pt": "1-720h (30 dias)",
					"nl": "1-720h (30 dagen)",
					"fr": "1-720h (30 jours)",
					"it": "1-720h (30 giorni)",
					"es": "1-720h (30 días)",
					"pl": "1-720h (30 dni)",
					"uk": "1-720h (30 днів)",
					"zh-cn": "1-720h(30天)"
				},
				type: 'number',
				unit: 'h',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 720
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PR6: {
		id: 'PR6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time back to standard profile (0) deaktivated 1 - 720 h (30 days)',
					'de': 'Zurück zum Standardprofil (0) deaktiviert 1 - 720 h (30 Tage)',
					'ru': 'Время обратно в стандартный профиль (0) άτομα με ειδικές ανάγκες 1 - 720 ч (30 дней)',
					'pt': 'Tempo de volta ao perfil padrão (0) descativado 1 - 720 h (30 dias)',
					'nl': 'Terug naar standaard profiel (0) Deaktivatie 1 - 720 h (30 dagen)',
					'fr': 'Retour au profil standard (0) inactiver 1 - 720 h (30 jours)',
					'it': 'Tempo di ritorno al profilo standard (0) disattivare 1 - 720 h (30 giorni)',
					'es': 'Tiempo de regreso al perfil estándar (0) desactivar 1 - 720 h (30 días)',
					'pl': 'Time back to standard profile (0) dezaktywować 1 – 720 h (30 dni)',
					'zh-cn': 'B. 标准概况的及时性 (0) 减少 1 - 720 h(30天)'
				},
				desc: {
					"en": "1-720h (30 days)",
					"de": "1-720h (30 Tage)",
					"ru": "1-720h (30 дней)",
					"pt": "1-720h (30 dias)",
					"nl": "1-720h (30 dagen)",
					"fr": "1-720h (30 jours)",
					"it": "1-720h (30 giorni)",
					"es": "1-720h (30 días)",
					"pl": "1-720h (30 dni)",
					"uk": "1-720h (30 днів)",
					"zh-cn": "1-720h(30天)"
				},
				type: 'number',
				unit: 'h',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 720
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PR7: {
		id: 'PR7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time back to standard profile (0) deaktivated 1 - 720 h (30 days)',
					'de': 'Zurück zum Standardprofil (0) deaktiviert 1 - 720 h (30 Tage)',
					'ru': 'Время обратно в стандартный профиль (0) άτομα με ειδικές ανάγκες 1 - 720 ч (30 дней)',
					'pt': 'Tempo de volta ao perfil padrão (0) descativado 1 - 720 h (30 dias)',
					'nl': 'Terug naar standaard profiel (0) Deaktivatie 1 - 720 h (30 dagen)',
					'fr': 'Retour au profil standard (0) inactiver 1 - 720 h (30 jours)',
					'it': 'Tempo di ritorno al profilo standard (0) disattivare 1 - 720 h (30 giorni)',
					'es': 'Tiempo de regreso al perfil estándar (0) desactivar 1 - 720 h (30 días)',
					'pl': 'Time back to standard profile (0) dezaktywować 1 – 720 h (30 dni)',
					'zh-cn': 'B. 标准概况的及时性 (0) 减少 1 - 720 h(30天)'
				},
				desc: {
					"en": "1-720h (30 days)",
					"de": "1-720h (30 Tage)",
					"ru": "1-720h (30 дней)",
					"pt": "1-720h (30 dias)",
					"nl": "1-720h (30 dagen)",
					"fr": "1-720h (30 jours)",
					"it": "1-720h (30 giorni)",
					"es": "1-720h (30 días)",
					"pl": "1-720h (30 dni)",
					"uk": "1-720h (30 днів)",
					"zh-cn": "1-720h(30天)"
				},
				type: 'number',
				unit: 'h',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 720
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PR8: {
		id: 'PR8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time back to standard profile (0) deaktivated 1 - 720 h (30 days)',
					'de': 'Zurück zum Standardprofil (0) deaktiviert 1 - 720 h (30 Tage)',
					'ru': 'Время обратно в стандартный профиль (0) άτομα με ειδικές ανάγκες 1 - 720 ч (30 дней)',
					'pt': 'Tempo de volta ao perfil padrão (0) descativado 1 - 720 h (30 dias)',
					'nl': 'Terug naar standaard profiel (0) Deaktivatie 1 - 720 h (30 dagen)',
					'fr': 'Retour au profil standard (0) inactiver 1 - 720 h (30 jours)',
					'it': 'Tempo di ritorno al profilo standard (0) disattivare 1 - 720 h (30 giorni)',
					'es': 'Tiempo de regreso al perfil estándar (0) desactivar 1 - 720 h (30 días)',
					'pl': 'Time back to standard profile (0) dezaktywować 1 – 720 h (30 dni)',
					'zh-cn': 'B. 标准概况的及时性 (0) 减少 1 - 720 h(30天)'
				},
				desc: {
					"en": "1-720h (30 days)",
					"de": "1-720h (30 Tage)",
					"ru": "1-720h (30 дней)",
					"pt": "1-720h (30 dias)",
					"nl": "1-720h (30 dagen)",
					"fr": "1-720h (30 jours)",
					"it": "1-720h (30 giorni)",
					"es": "1-720h (30 días)",
					"pl": "1-720h (30 dni)",
					"uk": "1-720h (30 днів)",
					"zh-cn": "1-720h(30天)"
				},
				type: 'number',
				unit: 'h',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 720
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PT1: {
		id: 'PT1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time limit  (0) deactivated 1...1500min (25h))',
					'de': 'Zeitlimit (0) deaktiviert 1...1500min (25h))',
					'ru': 'Ограничение по времени (0) деактивирован 1...1500min (25h))',
					'pt': 'Limite de tempo (0) desativado 1...1500min (25h))',
					'nl': 'Tijdslimiet (0) gedeactiveerd 1...1500min (25h))',
					'fr': 'Délai  (0) désactivé 1...1500min (25h))',
					'it': 'Limiti di tempo  (0) disattivato 1...1500min (25h))',
					'es': 'Plazo límite (0) desactivado 1...1500min (25h))',
					'pl': 'Limit czasowy (0) deaktywowany 1...1500min (25h))',
					'zh-cn': '时限 (0) 失职 1...1500min (25h))'
				},
				desc: {
					"en": "0 Disabled 1...1500min (25h)",
					"de": "0 deaktiviert 1...1500min (25h)",
					"ru": "0 Отключено 1...1500min (25h)",
					"pt": "0 Desativado 1...1500min (25h)",
					"nl": "0 Disabled 1...1500min (25h)",
					"fr": "0 Handicapés 1...1500min (25h)",
					"it": "0 Disabili 1...1500min (25h)",
					"es": "0 Discapacitados 1...1500min (25h)",
					"pl": "0:1500min (25h) (ang.)",
					"uk": "0 Вимкнено 1...1500min (25h)",
					"zh-cn": "0 残疾人1.1.1500min(25h)"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1500
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PT2: {
		id: 'PT2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time limit  (0) deactivated 1...1500min (25h))',
					'de': 'Zeitlimit (0) deaktiviert 1...1500min (25h))',
					'ru': 'Ограничение по времени (0) деактивирован 1...1500min (25h))',
					'pt': 'Limite de tempo (0) desativado 1...1500min (25h))',
					'nl': 'Tijdslimiet (0) gedeactiveerd 1...1500min (25h))',
					'fr': 'Délai  (0) désactivé 1...1500min (25h))',
					'it': 'Limiti di tempo  (0) disattivato 1...1500min (25h))',
					'es': 'Plazo límite (0) desactivado 1...1500min (25h))',
					'pl': 'Limit czasowy (0) deaktywowany 1...1500min (25h))',
					'zh-cn': '时限 (0) 失职 1...1500min (25h))'
				},
				desc: {
					"en": "0 Disabled 1...1500min (25h)",
					"de": "0 deaktiviert 1...1500min (25h)",
					"ru": "0 Отключено 1...1500min (25h)",
					"pt": "0 Desativado 1...1500min (25h)",
					"nl": "0 Disabled 1...1500min (25h)",
					"fr": "0 Handicapés 1...1500min (25h)",
					"it": "0 Disabili 1...1500min (25h)",
					"es": "0 Discapacitados 1...1500min (25h)",
					"pl": "0:1500min (25h) (ang.)",
					"uk": "0 Вимкнено 1...1500min (25h)",
					"zh-cn": "0 残疾人1.1.1500min(25h)"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1500
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PT3: {
		id: 'PT3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time limit  (0) deactivated 1...1500min (25h))',
					'de': 'Zeitlimit (0) deaktiviert 1...1500min (25h))',
					'ru': 'Ограничение по времени (0) деактивирован 1...1500min (25h))',
					'pt': 'Limite de tempo (0) desativado 1...1500min (25h))',
					'nl': 'Tijdslimiet (0) gedeactiveerd 1...1500min (25h))',
					'fr': 'Délai  (0) désactivé 1...1500min (25h))',
					'it': 'Limiti di tempo  (0) disattivato 1...1500min (25h))',
					'es': 'Plazo límite (0) desactivado 1...1500min (25h))',
					'pl': 'Limit czasowy (0) deaktywowany 1...1500min (25h))',
					'zh-cn': '时限 (0) 失职 1...1500min (25h))'
				},
				desc: {
					"en": "0 Disabled 1...1500min (25h)",
					"de": "0 deaktiviert 1...1500min (25h)",
					"ru": "0 Отключено 1...1500min (25h)",
					"pt": "0 Desativado 1...1500min (25h)",
					"nl": "0 Disabled 1...1500min (25h)",
					"fr": "0 Handicapés 1...1500min (25h)",
					"it": "0 Disabili 1...1500min (25h)",
					"es": "0 Discapacitados 1...1500min (25h)",
					"pl": "0:1500min (25h) (ang.)",
					"uk": "0 Вимкнено 1...1500min (25h)",
					"zh-cn": "0 残疾人1.1.1500min(25h)"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1500
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PT4: {
		id: 'PT4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time limit  (0) deactivated 1...1500min (25h))',
					'de': 'Zeitlimit (0) deaktiviert 1...1500min (25h))',
					'ru': 'Ограничение по времени (0) деактивирован 1...1500min (25h))',
					'pt': 'Limite de tempo (0) desativado 1...1500min (25h))',
					'nl': 'Tijdslimiet (0) gedeactiveerd 1...1500min (25h))',
					'fr': 'Délai  (0) désactivé 1...1500min (25h))',
					'it': 'Limiti di tempo  (0) disattivato 1...1500min (25h))',
					'es': 'Plazo límite (0) desactivado 1...1500min (25h))',
					'pl': 'Limit czasowy (0) deaktywowany 1...1500min (25h))',
					'zh-cn': '时限 (0) 失职 1...1500min (25h))'
				},
				desc: {
					"en": "0 Disabled 1...1500min (25h)",
					"de": "0 deaktiviert 1...1500min (25h)",
					"ru": "0 Отключено 1...1500min (25h)",
					"pt": "0 Desativado 1...1500min (25h)",
					"nl": "0 Disabled 1...1500min (25h)",
					"fr": "0 Handicapés 1...1500min (25h)",
					"it": "0 Disabili 1...1500min (25h)",
					"es": "0 Discapacitados 1...1500min (25h)",
					"pl": "0:1500min (25h) (ang.)",
					"uk": "0 Вимкнено 1...1500min (25h)",
					"zh-cn": "0 残疾人1.1.1500min(25h)"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1500
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PT5: {
		id: 'PT5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time limit  (0) deactivated 1...1500min (25h))',
					'de': 'Zeitlimit (0) deaktiviert 1...1500min (25h))',
					'ru': 'Ограничение по времени (0) деактивирован 1...1500min (25h))',
					'pt': 'Limite de tempo (0) desativado 1...1500min (25h))',
					'nl': 'Tijdslimiet (0) gedeactiveerd 1...1500min (25h))',
					'fr': 'Délai  (0) désactivé 1...1500min (25h))',
					'it': 'Limiti di tempo  (0) disattivato 1...1500min (25h))',
					'es': 'Plazo límite (0) desactivado 1...1500min (25h))',
					'pl': 'Limit czasowy (0) deaktywowany 1...1500min (25h))',
					'zh-cn': '时限 (0) 失职 1...1500min (25h))'
				},
				desc: {
					"en": "0 Disabled 1...1500min (25h)",
					"de": "0 deaktiviert 1...1500min (25h)",
					"ru": "0 Отключено 1...1500min (25h)",
					"pt": "0 Desativado 1...1500min (25h)",
					"nl": "0 Disabled 1...1500min (25h)",
					"fr": "0 Handicapés 1...1500min (25h)",
					"it": "0 Disabili 1...1500min (25h)",
					"es": "0 Discapacitados 1...1500min (25h)",
					"pl": "0:1500min (25h) (ang.)",
					"uk": "0 Вимкнено 1...1500min (25h)",
					"zh-cn": "0 残疾人1.1.1500min(25h)"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1500
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PT6: {
		id: 'PT6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time limit  (0) deactivated 1...1500min (25h))',
					'de': 'Zeitlimit (0) deaktiviert 1...1500min (25h))',
					'ru': 'Ограничение по времени (0) деактивирован 1...1500min (25h))',
					'pt': 'Limite de tempo (0) desativado 1...1500min (25h))',
					'nl': 'Tijdslimiet (0) gedeactiveerd 1...1500min (25h))',
					'fr': 'Délai  (0) désactivé 1...1500min (25h))',
					'it': 'Limiti di tempo  (0) disattivato 1...1500min (25h))',
					'es': 'Plazo límite (0) desactivado 1...1500min (25h))',
					'pl': 'Limit czasowy (0) deaktywowany 1...1500min (25h))',
					'zh-cn': '时限 (0) 失职 1...1500min (25h))'
				},
				desc: {
					"en": "0 Disabled 1...1500min (25h)",
					"de": "0 deaktiviert 1...1500min (25h)",
					"ru": "0 Отключено 1...1500min (25h)",
					"pt": "0 Desativado 1...1500min (25h)",
					"nl": "0 Disabled 1...1500min (25h)",
					"fr": "0 Handicapés 1...1500min (25h)",
					"it": "0 Disabili 1...1500min (25h)",
					"es": "0 Discapacitados 1...1500min (25h)",
					"pl": "0:1500min (25h) (ang.)",
					"uk": "0 Вимкнено 1...1500min (25h)",
					"zh-cn": "0 残疾人1.1.1500min(25h)"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1500
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PT7: {
		id: 'PT7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time limit  (0) deactivated 1...1500min (25h))',
					'de': 'Zeitlimit (0) deaktiviert 1...1500min (25h))',
					'ru': 'Ограничение по времени (0) деактивирован 1...1500min (25h))',
					'pt': 'Limite de tempo (0) desativado 1...1500min (25h))',
					'nl': 'Tijdslimiet (0) gedeactiveerd 1...1500min (25h))',
					'fr': 'Délai  (0) désactivé 1...1500min (25h))',
					'it': 'Limiti di tempo  (0) disattivato 1...1500min (25h))',
					'es': 'Plazo límite (0) desactivado 1...1500min (25h))',
					'pl': 'Limit czasowy (0) deaktywowany 1...1500min (25h))',
					'zh-cn': '时限 (0) 失职 1...1500min (25h))'
				},
				desc: {
					"en": "0 Disabled 1...1500min (25h)",
					"de": "0 deaktiviert 1...1500min (25h)",
					"ru": "0 Отключено 1...1500min (25h)",
					"pt": "0 Desativado 1...1500min (25h)",
					"nl": "0 Disabled 1...1500min (25h)",
					"fr": "0 Handicapés 1...1500min (25h)",
					"it": "0 Disabili 1...1500min (25h)",
					"es": "0 Discapacitados 1...1500min (25h)",
					"pl": "0:1500min (25h) (ang.)",
					"uk": "0 Вимкнено 1...1500min (25h)",
					"zh-cn": "0 残疾人1.1.1500min(25h)"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1500
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PT8: {
		id: 'PT8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Time limit  (0) deactivated 1...1500min (25h))',
					'de': 'Zeitlimit (0) deaktiviert 1...1500min (25h))',
					'ru': 'Ограничение по времени (0) деактивирован 1...1500min (25h))',
					'pt': 'Limite de tempo (0) desativado 1...1500min (25h))',
					'nl': 'Tijdslimiet (0) gedeactiveerd 1...1500min (25h))',
					'fr': 'Délai  (0) désactivé 1...1500min (25h))',
					'it': 'Limiti di tempo  (0) disattivato 1...1500min (25h))',
					'es': 'Plazo límite (0) desactivado 1...1500min (25h))',
					'pl': 'Limit czasowy (0) deaktywowany 1...1500min (25h))',
					'zh-cn': '时限 (0) 失职 1...1500min (25h))'
				},
				desc: {
					"en": "0 Disabled 1...1500min (25h)",
					"de": "0 deaktiviert 1...1500min (25h)",
					"ru": "0 Отключено 1...1500min (25h)",
					"pt": "0 Desativado 1...1500min (25h)",
					"nl": "0 Disabled 1...1500min (25h)",
					"fr": "0 Handicapés 1...1500min (25h)",
					"it": "0 Disabili 1...1500min (25h)",
					"es": "0 Discapacitados 1...1500min (25h)",
					"pl": "0:1500min (25h) (ang.)",
					"uk": "0 Вимкнено 1...1500min (25h)",
					"zh-cn": "0 残疾人1.1.1500min(25h)"
				},
				type: 'number',
				unit: 'min',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1500
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PV1: {
		id: 'PV1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Quantity limitation (0) deaktivated 1 - 1900l)',
					'de': 'Mengenbegrenzung (0) deaktiviert 1 - 1900l)',
					'ru': 'Ограничение количества (0) άτομα με ειδικές ανάγκες 1 - 1900l)',
					'pt': 'Limitação de quantidade (0) descativado 1 - 1900l)',
					'nl': 'Quantity beperking (0) Deaktivatie 1 - 1900l)',
					'fr': 'Limite de la quantité (0) inactiver 1 - 1900l)',
					'it': 'Limiti di quantità (0) disattivare 1 - 1900l)',
					'es': 'Limitación de la cantidad (0) desactivar 1 - 1900l)',
					'pl': 'Granica graniczna (0) dezaktywować 1 – 1900l)',
					'zh-cn': '资格限制 (0) 减少 1-1900l)'
				},
				desc: {
					"en": "0 Disabled 1…9000l",
					"de": "0 deaktiviert 1...9000l",
					"ru": "0 Отключено 1...9000l",
					"pt": "0 Desativado 1...9000l",
					"nl": "Quantity beperking (0) Deaktivatie 1 - 1900l)",
					"fr": "0 Handicapés 1...9000l",
					"it": "0 Disabili 1...9000l",
					"es": "0 Discapacitados 1..9000l",
					"pl": "0 Disabled 1.9000l (ang.)",
					"uk": "0 Вимкнено 1...9000л",
					"zh-cn": "0 残疾人1.9000l"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1900
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PV2: {
		id: 'PV2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Quantity limitation (0) deaktivated 1 - 1900l)',
					'de': 'Mengenbegrenzung (0) deaktiviert 1 - 1900l)',
					'ru': 'Ограничение количества (0) άτομα με ειδικές ανάγκες 1 - 1900l)',
					'pt': 'Limitação de quantidade (0) descativado 1 - 1900l)',
					'nl': 'Quantity beperking (0) Deaktivatie 1 - 1900l)',
					'fr': 'Limite de la quantité (0) inactiver 1 - 1900l)',
					'it': 'Limiti di quantità (0) disattivare 1 - 1900l)',
					'es': 'Limitación de la cantidad (0) desactivar 1 - 1900l)',
					'pl': 'Granica graniczna (0) dezaktywować 1 – 1900l)',
					'zh-cn': '资格限制 (0) 减少 1-1900l)'
				},
				desc: {
					"en": "0 Disabled 1…9000l",
					"de": "0 deaktiviert 1...9000l",
					"ru": "0 Отключено 1...9000l",
					"pt": "0 Desativado 1...9000l",
					"nl": "Quantity beperking (0) Deaktivatie 1 - 1900l)",
					"fr": "0 Handicapés 1...9000l",
					"it": "0 Disabili 1...9000l",
					"es": "0 Discapacitados 1..9000l",
					"pl": "0 Disabled 1.9000l (ang.)",
					"uk": "0 Вимкнено 1...9000л",
					"zh-cn": "0 残疾人1.9000l"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1900
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PV3: {
		id: 'PV3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Quantity limitation (0) deaktivated 1 - 1900l)',
					'de': 'Mengenbegrenzung (0) deaktiviert 1 - 1900l)',
					'ru': 'Ограничение количества (0) άτομα με ειδικές ανάγκες 1 - 1900l)',
					'pt': 'Limitação de quantidade (0) descativado 1 - 1900l)',
					'nl': 'Quantity beperking (0) Deaktivatie 1 - 1900l)',
					'fr': 'Limite de la quantité (0) inactiver 1 - 1900l)',
					'it': 'Limiti di quantità (0) disattivare 1 - 1900l)',
					'es': 'Limitación de la cantidad (0) desactivar 1 - 1900l)',
					'pl': 'Granica graniczna (0) dezaktywować 1 – 1900l)',
					'zh-cn': '资格限制 (0) 减少 1-1900l)'
				},
				desc: {
					"en": "0 Disabled 1…9000l",
					"de": "0 deaktiviert 1...9000l",
					"ru": "0 Отключено 1...9000l",
					"pt": "0 Desativado 1...9000l",
					"nl": "Quantity beperking (0) Deaktivatie 1 - 1900l)",
					"fr": "0 Handicapés 1...9000l",
					"it": "0 Disabili 1...9000l",
					"es": "0 Discapacitados 1..9000l",
					"pl": "0 Disabled 1.9000l (ang.)",
					"uk": "0 Вимкнено 1...9000л",
					"zh-cn": "0 残疾人1.9000l"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1900
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PV4: {
		id: 'PV4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Quantity limitation (0) deaktivated 1 - 1900l)',
					'de': 'Mengenbegrenzung (0) deaktiviert 1 - 1900l)',
					'ru': 'Ограничение количества (0) άτομα με ειδικές ανάγκες 1 - 1900l)',
					'pt': 'Limitação de quantidade (0) descativado 1 - 1900l)',
					'nl': 'Quantity beperking (0) Deaktivatie 1 - 1900l)',
					'fr': 'Limite de la quantité (0) inactiver 1 - 1900l)',
					'it': 'Limiti di quantità (0) disattivare 1 - 1900l)',
					'es': 'Limitación de la cantidad (0) desactivar 1 - 1900l)',
					'pl': 'Granica graniczna (0) dezaktywować 1 – 1900l)',
					'zh-cn': '资格限制 (0) 减少 1-1900l)'
				},
				desc: {
					"en": "0 Disabled 1…9000l",
					"de": "0 deaktiviert 1...9000l",
					"ru": "0 Отключено 1...9000l",
					"pt": "0 Desativado 1...9000l",
					"nl": "Quantity beperking (0) Deaktivatie 1 - 1900l)",
					"fr": "0 Handicapés 1...9000l",
					"it": "0 Disabili 1...9000l",
					"es": "0 Discapacitados 1..9000l",
					"pl": "0 Disabled 1.9000l (ang.)",
					"uk": "0 Вимкнено 1...9000л",
					"zh-cn": "0 残疾人1.9000l"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1900
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PV5: {
		id: 'PV5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Quantity limitation (0) deaktivated 1 - 1900l)',
					'de': 'Mengenbegrenzung (0) deaktiviert 1 - 1900l)',
					'ru': 'Ограничение количества (0) άτομα με ειδικές ανάγκες 1 - 1900l)',
					'pt': 'Limitação de quantidade (0) descativado 1 - 1900l)',
					'nl': 'Quantity beperking (0) Deaktivatie 1 - 1900l)',
					'fr': 'Limite de la quantité (0) inactiver 1 - 1900l)',
					'it': 'Limiti di quantità (0) disattivare 1 - 1900l)',
					'es': 'Limitación de la cantidad (0) desactivar 1 - 1900l)',
					'pl': 'Granica graniczna (0) dezaktywować 1 – 1900l)',
					'zh-cn': '资格限制 (0) 减少 1-1900l)'
				},
				desc: {
					"en": "0 Disabled 1…9000l",
					"de": "0 deaktiviert 1...9000l",
					"ru": "0 Отключено 1...9000l",
					"pt": "0 Desativado 1...9000l",
					"nl": "Quantity beperking (0) Deaktivatie 1 - 1900l)",
					"fr": "0 Handicapés 1...9000l",
					"it": "0 Disabili 1...9000l",
					"es": "0 Discapacitados 1..9000l",
					"pl": "0 Disabled 1.9000l (ang.)",
					"uk": "0 Вимкнено 1...9000л",
					"zh-cn": "0 残疾人1.9000l"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1900
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PV6: {
		id: 'PV6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Quantity limitation (0) deaktivated 1 - 1900l)',
					'de': 'Mengenbegrenzung (0) deaktiviert 1 - 1900l)',
					'ru': 'Ограничение количества (0) άτομα με ειδικές ανάγκες 1 - 1900l)',
					'pt': 'Limitação de quantidade (0) descativado 1 - 1900l)',
					'nl': 'Quantity beperking (0) Deaktivatie 1 - 1900l)',
					'fr': 'Limite de la quantité (0) inactiver 1 - 1900l)',
					'it': 'Limiti di quantità (0) disattivare 1 - 1900l)',
					'es': 'Limitación de la cantidad (0) desactivar 1 - 1900l)',
					'pl': 'Granica graniczna (0) dezaktywować 1 – 1900l)',
					'zh-cn': '资格限制 (0) 减少 1-1900l)'
				},
				desc: {
					"en": "0 Disabled 1…9000l",
					"de": "0 deaktiviert 1...9000l",
					"ru": "0 Отключено 1...9000l",
					"pt": "0 Desativado 1...9000l",
					"nl": "Quantity beperking (0) Deaktivatie 1 - 1900l)",
					"fr": "0 Handicapés 1...9000l",
					"it": "0 Disabili 1...9000l",
					"es": "0 Discapacitados 1..9000l",
					"pl": "0 Disabled 1.9000l (ang.)",
					"uk": "0 Вимкнено 1...9000л",
					"zh-cn": "0 残疾人1.9000l"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1900
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PV7: {
		id: 'PV7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Quantity limitation (0) deaktivated 1 - 1900l)',
					'de': 'Mengenbegrenzung (0) deaktiviert 1 - 1900l)',
					'ru': 'Ограничение количества (0) άτομα με ειδικές ανάγκες 1 - 1900l)',
					'pt': 'Limitação de quantidade (0) descativado 1 - 1900l)',
					'nl': 'Quantity beperking (0) Deaktivatie 1 - 1900l)',
					'fr': 'Limite de la quantité (0) inactiver 1 - 1900l)',
					'it': 'Limiti di quantità (0) disattivare 1 - 1900l)',
					'es': 'Limitación de la cantidad (0) desactivar 1 - 1900l)',
					'pl': 'Granica graniczna (0) dezaktywować 1 – 1900l)',
					'zh-cn': '资格限制 (0) 减少 1-1900l)'
				},
				desc: {
					"en": "0 Disabled 1…9000l",
					"de": "0 deaktiviert 1...9000l",
					"ru": "0 Отключено 1...9000l",
					"pt": "0 Desativado 1...9000l",
					"nl": "Quantity beperking (0) Deaktivatie 1 - 1900l)",
					"fr": "0 Handicapés 1...9000l",
					"it": "0 Disabili 1...9000l",
					"es": "0 Discapacitados 1..9000l",
					"pl": "0 Disabled 1.9000l (ang.)",
					"uk": "0 Вимкнено 1...9000л",
					"zh-cn": "0 残疾人1.9000l"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1900
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PV8: {
		id: 'PV8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Quantity limitation (0) deaktivated 1 - 1900l)',
					'de': 'Mengenbegrenzung (0) deaktiviert 1 - 1900l)',
					'ru': 'Ограничение количества (0) άτομα με ειδικές ανάγκες 1 - 1900l)',
					'pt': 'Limitação de quantidade (0) descativado 1 - 1900l)',
					'nl': 'Quantity beperking (0) Deaktivatie 1 - 1900l)',
					'fr': 'Limite de la quantité (0) inactiver 1 - 1900l)',
					'it': 'Limiti di quantità (0) disattivare 1 - 1900l)',
					'es': 'Limitación de la cantidad (0) desactivar 1 - 1900l)',
					'pl': 'Granica graniczna (0) dezaktywować 1 – 1900l)',
					'zh-cn': '资格限制 (0) 减少 1-1900l)'
				},
				desc: {
					"en": "0 Disabled 1…9000l",
					"de": "0 deaktiviert 1...9000l",
					"ru": "0 Отключено 1...9000l",
					"pt": "0 Desativado 1...9000l",
					"nl": "Quantity beperking (0) Deaktivatie 1 - 1900l)",
					"fr": "0 Handicapés 1...9000l",
					"it": "0 Disabili 1...9000l",
					"es": "0 Discapacitados 1..9000l",
					"pl": "0 Disabled 1.9000l (ang.)",
					"uk": "0 Вимкнено 1...9000л",
					"zh-cn": "0 残疾人1.9000l"
				},
				type: 'number',
				unit: 'l',
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1900
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PW1: {
		id: 'PW1',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'leakage warning (0) no, (1) yes',
					'de': 'Leckagewarnung (0) nein, (1) ja',
					'ru': 'предупреждение утечки (0) нет, (1) да',
					'pt': 'aviso de fuga (0) não, (1) sim',
					'nl': 'vertaling: (0) nee; (1) ja',
					'fr': 'avertissement de fuite (0) non, (1) oui',
					'it': 'avvertimento perdite (0) no, (1) sì',
					'es': 'advertencia de fugas (0) no, (1) sí',
					'pl': 'ostrzeżenie (0) nie; (1) dostępny',
					'zh-cn': '泄漏警告 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile1.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PW2: {
		id: 'PW2',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'leakage warning (0) no, (1) yes',
					'de': 'Leckagewarnung (0) nein, (1) ja',
					'ru': 'предупреждение утечки (0) нет, (1) да',
					'pt': 'aviso de fuga (0) não, (1) sim',
					'nl': 'vertaling: (0) nee; (1) ja',
					'fr': 'avertissement de fuite (0) non, (1) oui',
					'it': 'avvertimento perdite (0) no, (1) sì',
					'es': 'advertencia de fugas (0) no, (1) sí',
					'pl': 'ostrzeżenie (0) nie; (1) dostępny',
					'zh-cn': '泄漏警告 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile2.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PW3: {
		id: 'PW3',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'leakage warning (0) no, (1) yes',
					'de': 'Leckagewarnung (0) nein, (1) ja',
					'ru': 'предупреждение утечки (0) нет, (1) да',
					'pt': 'aviso de fuga (0) não, (1) sim',
					'nl': 'vertaling: (0) nee; (1) ja',
					'fr': 'avertissement de fuite (0) non, (1) oui',
					'it': 'avvertimento perdite (0) no, (1) sì',
					'es': 'advertencia de fugas (0) no, (1) sí',
					'pl': 'ostrzeżenie (0) nie; (1) dostępny',
					'zh-cn': '泄漏警告 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile3.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PW4: {
		id: 'PW4',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'leakage warning (0) no, (1) yes',
					'de': 'Leckagewarnung (0) nein, (1) ja',
					'ru': 'предупреждение утечки (0) нет, (1) да',
					'pt': 'aviso de fuga (0) não, (1) sim',
					'nl': 'vertaling: (0) nee; (1) ja',
					'fr': 'avertissement de fuite (0) non, (1) oui',
					'it': 'avvertimento perdite (0) no, (1) sì',
					'es': 'advertencia de fugas (0) no, (1) sí',
					'pl': 'ostrzeżenie (0) nie; (1) dostępny',
					'zh-cn': '泄漏警告 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile4.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PW5: {
		id: 'PW5',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'leakage warning (0) no, (1) yes',
					'de': 'Leckagewarnung (0) nein, (1) ja',
					'ru': 'предупреждение утечки (0) нет, (1) да',
					'pt': 'aviso de fuga (0) não, (1) sim',
					'nl': 'vertaling: (0) nee; (1) ja',
					'fr': 'avertissement de fuite (0) non, (1) oui',
					'it': 'avvertimento perdite (0) no, (1) sì',
					'es': 'advertencia de fugas (0) no, (1) sí',
					'pl': 'ostrzeżenie (0) nie; (1) dostępny',
					'zh-cn': '泄漏警告 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile5.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PW6: {
		id: 'PW6',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'leakage warning (0) no, (1) yes',
					'de': 'Leckagewarnung (0) nein, (1) ja',
					'ru': 'предупреждение утечки (0) нет, (1) да',
					'pt': 'aviso de fuga (0) não, (1) sim',
					'nl': 'vertaling: (0) nee; (1) ja',
					'fr': 'avertissement de fuite (0) non, (1) oui',
					'it': 'avvertimento perdite (0) no, (1) sì',
					'es': 'advertencia de fugas (0) no, (1) sí',
					'pl': 'ostrzeżenie (0) nie; (1) dostępny',
					'zh-cn': '泄漏警告 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile6.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PW7: {
		id: 'PW7',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'leakage warning (0) no, (1) yes',
					'de': 'Leckagewarnung (0) nein, (1) ja',
					'ru': 'предупреждение утечки (0) нет, (1) да',
					'pt': 'aviso de fuga (0) não, (1) sim',
					'nl': 'vertaling: (0) nee; (1) ja',
					'fr': 'avertissement de fuite (0) non, (1) oui',
					'it': 'avvertimento perdite (0) no, (1) sì',
					'es': 'advertencia de fugas (0) no, (1) sí',
					'pl': 'ostrzeżenie (0) nie; (1) dostępny',
					'zh-cn': '泄漏警告 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile7.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
	PW8: {
		id: 'PW8',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'leakage warning (0) no, (1) yes',
					'de': 'Leckagewarnung (0) nein, (1) ja',
					'ru': 'предупреждение утечки (0) нет, (1) да',
					'pt': 'aviso de fuga (0) não, (1) sim',
					'nl': 'vertaling: (0) nee; (1) ja',
					'fr': 'avertissement de fuite (0) non, (1) oui',
					'it': 'avvertimento perdite (0) no, (1) sì',
					'es': 'advertencia de fugas (0) no, (1) sí',
					'pl': 'ostrzeżenie (0) nie; (1) dostępny',
					'zh-cn': '泄漏警告 (0) 无; (1) 否'
				},
				desc: {
					"en": "0 Disabled 1 Enabled",
					"de": "0 deaktiviert 1 aktiviert",
					"ru": "0 Отключено 1 Включено",
					"pt": "0 Desativado 1 habilitado",
					"nl": "0 Disabled 1 Enabled",
					"fr": "0 Handicapés 1 Enabled",
					"it": "0 Disabili 1 Abilitato",
					"es": "0 Discapacitados 1 habilitado",
					"pl": "0 Disabled 1 Enabled (ang.)",
					"uk": "0 Вимкнено 1 Увімкнено",
					"zh-cn": "0 残疾人 1"
				},
				type: 'number',
				unit: null,
				role: 'state',
				read: true,
				write: true,
				min: 0,
				max: 1
			},
			native: {}
		},
		statePath: adapterChannels.DevicePofile8.path,
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: 'USER',
		readCommand: 'get',
		writeCommand: 'set'
	},
};


/**
 * Array of 'DeviceParameters' objects
 * This parameters indicate the presence of several sensors
 * and during "Very long timer" event
 */
const sensorPresence = [
	DeviceParameters.PSD,
	DeviceParameters.CSD,
	DeviceParameters.TSD
];

/**
 * Array of 'DeviceParameters' objects
 * This states and parameters will be pulled / calculated during adapter startup
 * and during "Very long timer" event
 */
const initStates = [
	DeviceParameters.ALM,
	DeviceParameters.BUP,
	DeviceParameters.WFL,
	DeviceParameters.FSL,
	DeviceParameters.STH_GET,
	DeviceParameters.ALH_GET,
	DeviceParameters.PAH_GET,
	DeviceParameters.DSV,
	DeviceParameters.MSC,
	DeviceParameters.MRT,
	DeviceParameters.MQT,
	DeviceParameters.HTD,
	DeviceParameters.DTT,
	DeviceParameters.DTC,
	DeviceParameters.DST,
	DeviceParameters.DPL,
	DeviceParameters.DOM,
	DeviceParameters.DKI,
	DeviceParameters.HWV,
	DeviceParameters.WNS,
	DeviceParameters.TYP,
	DeviceParameters.TTM,
	DeviceParameters.BPT,
	DeviceParameters.BFT,
	DeviceParameters.CNF,
	DeviceParameters.CNL,
	DeviceParameters.DBD,
	DeviceParameters.DBT,
	DeviceParameters.DCM,
	DeviceParameters.VER,
	DeviceParameters.WIP,
	DeviceParameters.MAC,
	DeviceParameters.WGW,
	DeviceParameters.SRN,
	DeviceParameters.CNO,
	DeviceParameters.WFR,
	DeviceParameters.WFC,
	DeviceParameters.SRV,
	DeviceParameters.WAH,
	DeviceParameters.WAD,
	DeviceParameters.APT,
	DeviceParameters.DWL,
	DeviceParameters.WFS,
	DeviceParameters.BAT,
	DeviceParameters.NET,
	DeviceParameters.IDS,
	DeviceParameters.PSD,
	DeviceParameters.CSD,
	DeviceParameters.TSD,
	DeviceParameters.PRF,
	DeviceParameters.PRN,
	DeviceParameters.LNG,
	DeviceParameters.UNI,
	DeviceParameters.BSA,
	DeviceParameters.T2,
	DeviceParameters.DMA,
	DeviceParameters.DRP,
	DeviceParameters.BUZ,
	DeviceParameters.LWT,
	DeviceParameters.SLP,
	DeviceParameters.SLO,
	DeviceParameters.SOF,
	DeviceParameters.SMF,
	DeviceParameters.SLE,
	DeviceParameters.SLV,
	DeviceParameters.SLT,
	DeviceParameters.SLF,
	DeviceParameters.TMZ,
	DeviceParameters.TN,
	DeviceParameters.P71,
	DeviceParameters.ALD,
	DeviceParameters.CLP,
	DeviceParameters.BPB
];

/**
 * Array of 'DeviceParameters' objects
 * This states and parameters will be pulled / calculated
 * during "Alarm timer" event
 */
const alarmPeriod = [
	DeviceParameters.FSA,
	DeviceParameters.ALA,
	DeviceParameters.VLV,
	DeviceParameters.AB
];

/**
 * Array of 'DeviceParameters' objects
 * This states and parameters will be pulled / calculated
 * during "Short timer" event
 */
const shortPeriod = [
	DeviceParameters.P71,
	DeviceParameters.FSA,
	DeviceParameters.DSV,
	DeviceParameters.CEL,
	DeviceParameters.CND,
	DeviceParameters.BAR,
	DeviceParameters.LTV,
	DeviceParameters.VOL,
	DeviceParameters.AVO,
	DeviceParameters.FLO,
	DeviceParameters.NPS
];

/**
 * Array of 'DeviceParameters' objects
 * This states and parameters will be pulled / calculated
 * during "Long timer" event
 */
const longPeriode = [
	DeviceParameters.SRO,
	DeviceParameters.SFV,
	DeviceParameters.RTC,
	DeviceParameters.WFR,
	DeviceParameters.BAT,
	DeviceParameters.NET,
	DeviceParameters.TMP,
	DeviceParameters.T2,
	DeviceParameters.DMA,
	DeviceParameters.DRP,
	DeviceParameters.BUZ,
	DeviceParameters.LWT,
	DeviceParameters.VTO,
	DeviceParameters.SLP
];

module.exports = {adapterChannels, calculatedStates, StatisticStates, DeviceParameters, initStates, alarmPeriod, shortPeriod, longPeriode, sensorPresence};