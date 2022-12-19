export const SYSTEM_MAIN_SETTINGS_CHANGE_TEXT =
    'SystemMainSettings/textSettings/change_option'
export const SYSTEM_MAIN_SETTINGS_CHANGE_CHECKBOX =
    'SystemMainSettings/checkboxSettings/change_option'
export const SYSTEM_MAIN_SETTINGS_CHANGE_RADIOGROUP =
    'SystemMainSettings/radioSettings/change_option'
export const SYSTEM_MAIN_SETTINGS_CHANGE_DROPDOWN =
    'SystemMainSettings/dropdownSettings/change_option'
export const SYSTEM_MAIN_SETTINGS_CHANGE_SLIDER =
    'SystemMainSettings/slidersSettings/change_option'

export function SystemMainSettings(store) {
    store.on('@init', () => ({
        SystemMainSettings: {
            radioSettings: {
                wdr_option: 'high',
                day_time: 'day',
            },
            dropdownSettings: {
                option_language: {
                    options: [
                        {
                            value: 'one',
                            label: 'Русский',
                        },
                        {
                            value: 'two',
                            label: 'English',
                        },
                    ],
                    value: 'one',
                    name: 'option_language',
                    label: 'Язык интерфейса',
                },
                option_date_format: {
                    options: [
                        {
                            value: '123',
                            label: 'ГГГГ / ММ / ДД',
                        },
                        {
                            value: '321',
                            label: 'ДД.ММ.ГГГГ',
                        },
                    ],
                    value: '123',
                    name: 'option_date_format',
                    label: 'Формат даты',
                },
                option_date_offset: {
                    options: [
                        {
                            value: '123',
                            label: 'GTM+08:00',
                        },
                        {
                            value: '321',
                            label: 'GTM+06:00',
                        },
                    ],
                    value: '123',
                    name: 'option_date_offset',
                    label: 'Часовой пояс',
                },
            },
            slidersSettings: {
                option_brightness: {
                    min_value: 0,
                    max_value: 100,
                    step: 1,
                    value: 0,
                    name: 'option_brightness',
                    label: 'Яркость',
                },
                option_contrast: {
                    min_value: 0,
                    max_value: 100,
                    step: 1,
                    value: 0,
                    name: 'option_contrast',
                    label: 'Контрастность',
                },
                option_tint: {
                    min_value: 0,
                    max_value: 100,
                    step: 1,
                    value: 0,
                    name: 'option_tint',
                    label: 'Тон',
                },
                option_saturation: {
                    min_value: 0,
                    max_value: 100,
                    step: 1,
                    value: 0,
                    name: 'option_saturation',
                    label: 'Насыщенность',
                },
                option_exposition: {
                    min_value: 0,
                    max_value: 100,
                    step: 1,
                    value: 0,
                    name: 'option_exposition',
                    label: 'Экспозиция',
                },
                option_whitebalance: {
                    min_value: 0,
                    max_value: 100,
                    step: 1,
                    value: 0,
                    name: 'option_whitebalance',
                    label: 'Баланс белого',
                },
            },
            checkboxSettings: {
                sync_ntp_server: false,
            },
            textSettings: {
                ntp_server_name: '',
                ntp_server_port: '',
                ntp_server_sync_period: '',
            },
        },
    }))

    store.on(
        SYSTEM_MAIN_SETTINGS_CHANGE_TEXT,
        ({ SystemMainSettings }, option) => {
            return {
                SystemMainSettings: {
                    ...SystemMainSettings,
                    textSettings: {
                        ...SystemMainSettings.textSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_MAIN_SETTINGS_CHANGE_CHECKBOX,
        ({ SystemMainSettings }, option) => {
            return {
                SystemMainSettings: {
                    ...SystemMainSettings,
                    checkboxSettings: {
                        ...SystemMainSettings.checkboxSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_MAIN_SETTINGS_CHANGE_RADIOGROUP,
        ({ SystemMainSettings }, option) => {
            return {
                SystemMainSettings: {
                    ...SystemMainSettings,
                    radioSettings: {
                        ...SystemMainSettings.radioSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_MAIN_SETTINGS_CHANGE_DROPDOWN,
        ({ SystemMainSettings }, option) => {
            console.log(option, 'dropdownchange')
            return {
                SystemMainSettings: {
                    ...SystemMainSettings,
                    dropdownSettings: {
                        ...SystemMainSettings.dropdownSettings,
                        [option.name]: {
                            ...SystemMainSettings.dropdownSettings[option.name],
                            value: option.value,
                        },
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_MAIN_SETTINGS_CHANGE_SLIDER,
        ({ SystemMainSettings }, option) => {
            return {
                SystemMainSettings: {
                    ...SystemMainSettings,
                    slidersSettings: {
                        ...SystemMainSettings.slidersSettings,
                        [option.name]: {
                            ...SystemMainSettings.slidersSettings[option.name],
                            value: option.value,
                        },
                    },
                },
            }
        },
    )
}
