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

/**
 * [Objects] Device Settings and Parameter definitions
 * including state definition
 */
const DeviceParameters = {
	systemRestart: {
		id: 'RST',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					"en": "Device reboot (set to 1 to reboot device)",
					"de": "Gerät neu starten (auf 1 setztzen, um das Gerät neu zu starten)",
					"ru": "Перезагрузка устройства (настройка до 1 для перезагрузки устройства)",
					"pt": "Reiniciar dispositivo (definido para 1 para reiniciar dispositivo)",
					"nl": "Device reboot (set to 1 to reboot apparaat)",
					"fr": "Reboot d'appareil (réglage à 1 pour redémarrer l'appareil)",
					"it": "Riavvio del dispositivo (set to 1 to reboot device)",
					"es": "Reinicio de dispositivo (configurado a 1 para reiniciar el dispositivo)",
					"pl": "Device reboot (odcinek 1 do rebootu)",
					"zh-cn": "Devic reboot(改为1)"
				},
				type: 'number',
				unit: null,
				role: 'button',
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
	gerWaterHardnessFactor: {
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
		levelRead: 'USER',
		levelWrite: null,
		readCommand: 'get',
		writeCommand: null
	},
	JamProtectionOngoing: {
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
	JamProtectionEnabled: {
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
	JamProtectionTiming: {
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
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
	BuzzerOnAlarm: {
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
	MicroLeakageTestPeriod: {
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
	MicroLeakageTest: {
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
	MaxFlowLeakageTime: {
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
	FlorSensor: {
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
	Units: {
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
	Language: {
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
	DeactivateConductivitySensor: {
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
	DeactivateTemperatureSensor: {
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
	DeactivatePressureSensor: {
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
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
	WiFiDeaktivate: {
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
				type: 'number',
				unit: null,
				role: 'state',
				min: 0,
				max: 1,
				read: true,
				write: false	// could be changed in FACTORY Mode, but we don't allow this in our adapter
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
	APTimeout: {
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
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
		statePath: adapterChannels.DeviceInfo.path,
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: false,
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
		saveRawData: true,
		createOnStartup: false,
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
		saveRawData: true,
		createOnStartup: true,
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
		saveRawData: true,
		createOnStartup: true,
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
	SelfLearningPhase: {
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
	SelfLearningOffset: {
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
	SelfLearningFlowOffset: {
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
	SelfLearningMinimumFlow: {
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
		levelRead: 'SERVICE',
		levelWrite: 'SERVICE',
		readCommand: 'get',
		writeCommand: 'set'
	},
	SelfLearningTimeToEnd: {
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
	SelfLearningVolumeValue: {
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
	SelfLearningTimeValue: {
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
	SelfLearningFlowValue: {
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
	TimeZone: {
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
	MotorOverrun: {
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
	LeakageProtectionDeactivated: {
		id: '71',
		objectdefinition: {
			type: 'state',
			common: {
				name: {
					'en': 'Leakage protection is deactivated (0=no 1=yes)',
					'de': 'Leckageschutz deaktiviert (0=nein 1=ja)',
					'ru': 'Защита от утечки деактивируется (0=нет 1=да)',
					'pt': 'Proteção contra vazamentos é desativada (0=no 1=yes)',
					'nl': 'Lekbescherming wordt gedeactiveerd',
					'fr': 'La protection des fuites est désactivée (0=no 1=oui)',
					'it': 'La protezione contro le perdite viene disattivata (0=no 1=yes)',
					'es': 'La protección de la fuga está desactivada (0=no 1=yes)',
					'pl': 'Ochrona przedszkola jest deaktywowana (0=no 1=yes)',
					'zh-cn': '保护渗漏(0=no 1=yes)'
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
		levelRead: 'FACTORY',
		levelWrite: 'FACTORY',
		readCommand: 'get',
		writeCommand: 'set'
	},
	AlarmDuration: {
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
	ClusterProfile: {
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
	ButtonProfileChange: {
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
	Profile_PA1: {
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
	Profile_PA2: {
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
	Profile_PA3: {
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
	Profile_PA4: {
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
	Profile_PA5: {
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
	Profile_PA6: {
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
	Profile_PA7: {
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
	Profile_PA8: {
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
	Profile_PB1: {
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
	Profile_PB2: {
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
	Profile_PB3: {
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
	Profile_PB4: {
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
	Profile_PB5: {
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
	Profile_PB6: {
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
	Profile_PB7: {
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
	Profile_PB8: {
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
	Profile_PF1: {
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
	Profile_PF2: {
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
	Profile_PF3: {
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
	Profile_PF4: {
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
	Profile_PF5: {
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
	Profile_PF6: {
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
	Profile_PF7: {
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
	Profile_PF8: {
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
	Profile_PM1: {
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
	Profile_PM2: {
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
	Profile_PM3: {
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
	Profile_PM4: {
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
	Profile_PM5: {
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
	Profile_PM6: {
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
	Profile_PM7: {
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
	Profile_PM8: {
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
	Profile_PN1: {
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
	Profile_PN2: {
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
	Profile_PN3: {
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
	Profile_PN4: {
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
	Profile_PN5: {
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
	Profile_PN6: {
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
	Profile_PN7: {
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
	Profile_PN8: {
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
	Profile_PR1: {
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
	Profile_PR2: {
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
	Profile_PR3: {
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
	Profile_PR4: {
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
	Profile_PR5: {
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
	Profile_PR6: {
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
	Profile_PR7: {
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
	Profile_PR8: {
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
	Profile_PT1: {
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
	Profile_PT2: {
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
	Profile_PT3: {
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
	Profile_PT4: {
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
	Profile_PT5: {
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
	Profile_PT6: {
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
	Profile_PT7: {
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
	Profile_PT8: {
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
	Profile_PV1: {
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
	Profile_PV2: {
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
	Profile_PV3: {
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
	Profile_PV4: {
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
	Profile_PV5: {
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
	Profile_PV6: {
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
	Profile_PV7: {
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
	Profile_PV8: {
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
	Profile_PW1: {
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
	Profile_PW2: {
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
	Profile_PW3: {
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
	Profile_PW4: {
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
	Profile_PW5: {
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
	Profile_PW6: {
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
	Profile_PW7: {
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
	Profile_PW8: {
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
	DeviceParameters.DeactivatePressureSensor,
	DeviceParameters.DeactivateConductivitySensor,
	DeviceParameters.DeactivateTemperatureSensor
];

/**
 * Array of 'DeviceParameters' objects
 * This states and parameters will be pulled / calculated during adapter startup
 * and during "Very long timer" event
 */
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
	DeviceParameters.LeakageNotificationWarningThreshold,
	DeviceParameters.SelfLearningPhase,
	DeviceParameters.SelfLearningOffset,
	DeviceParameters.SelfLearningFlowOffset,
	DeviceParameters.SelfLearningMinimumFlow,
	DeviceParameters.SelfLearningTimeToEnd,
	DeviceParameters.SelfLearningVolumeValue,
	DeviceParameters.SelfLearningTimeValue,
	DeviceParameters.SelfLearningFlowValue,
	DeviceParameters.TimeZone,
	DeviceParameters.MotorOverrun,
	DeviceParameters.LeakageProtectionDeactivated,
	DeviceParameters.AlarmDuration,
	DeviceParameters.ClusterProfile,
	DeviceParameters.ButtonProfileChange
];

/**
 * Array of 'DeviceParameters' objects
 * This states and parameters will be pulled / calculated
 * during "Alarm timer" event
 */
const alarmPeriod = [
	DeviceParameters.CurrentAlarmStatus,
	DeviceParameters.CurrentValveStatus,
	DeviceParameters.ShutOff
];

/**
 * Array of 'DeviceParameters' objects
 * This states and parameters will be pulled / calculated
 * during "Short timer" event
 */
const shortPeriod = [
	DeviceParameters.WaterTemperature,
	DeviceParameters.WaterConductivity,
	DeviceParameters.WaterPressure,
	DeviceParameters.WaterPressure,
	DeviceParameters.LastTappedVolume,
	DeviceParameters.TotalVolume,
	DeviceParameters.CurrentVolume,
	DeviceParameters.WaterFlow,
	DeviceParameters.TurbineNoPulseTime
];

/**
 * Array of 'DeviceParameters' objects
 * This states and parameters will be pulled / calculated
 * during "Long timer" event
 */
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
	DeviceParameters.ValveTestOngoing,
	DeviceParameters.SelfLearningPhase
];

module.exports = {adapterChannels, calculatedStates, StatisticStates, DeviceParameters, initStates, alarmPeriod, shortPeriod, longPeriode, sensorPresence};