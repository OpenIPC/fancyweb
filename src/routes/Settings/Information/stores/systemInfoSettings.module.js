export const SYSTEM_INFO_SETTINGS_CHANGE_TEXT =
    'systemInfoSettings/textSettings/change_option'
export const SYSTEM_INFO_SETTINGS_CHANGE_CHECKBOX =
    'systemInfoSettings/checkboxSettings/change_option'
export const SYSTEM_INFO_SETTINGS_CHANGE_RADIOGROUP =
    'systemInfoSettings/radioSettings/change_option'
export const SYSTEM_INFO_SETTINGS_CHANGE_DROPDOWN =
    'systemInfoSettings/dropdownSettings/change_option'
export const SYSTEM_INFO_SETTINGS_CHANGE_SLIDER =
    'systemInfoSettings/slidersSettings/change_option'

export function systemInfoSettings(store) {
    store.on('@init', () => ({
        systemInfoSettings: {
            radioSettings: {
                wdr_option: 'high',
                day_time: 'day',
            },
            dropdownSettings: {
                option_rotation: {
                    options: [
                        { value: 'one', label: 'One label' },
                        { value: 'two', label: 'Two label 2' },
                    ],
                    value: 'one',
                    name: 'option_rotation',
                    label: 'Поворот изображения',
                },
                option_angle: {
                    options: [
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                    ],
                    value: 0,
                    name: 'option_angle',
                    label: 'Угол',
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
                mirrored: false,
            },
            textSettings: {
                host_name: '',
            },
        },
    }))

    store.on(
        SYSTEM_INFO_SETTINGS_CHANGE_TEXT,
        ({ systemInfoSettings }, option) => {
            return {
                systemInfoSettings: {
                    ...systemInfoSettings,
                    textSettings: {
                        ...systemInfoSettings.textSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_INFO_SETTINGS_CHANGE_CHECKBOX,
        ({ systemInfoSettings }, option) => {
            return {
                systemInfoSettings: {
                    ...systemInfoSettings,
                    checkboxSettings: {
                        ...systemInfoSettings.checkboxSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_INFO_SETTINGS_CHANGE_RADIOGROUP,
        ({ systemInfoSettings }, option) => {
            return {
                systemInfoSettings: {
                    ...systemInfoSettings,
                    radioSettings: {
                        ...systemInfoSettings.radioSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_INFO_SETTINGS_CHANGE_DROPDOWN,
        ({ systemInfoSettings }, option) => {
            console.log(option, 'dropdownchange')
            return {
                systemInfoSettings: {
                    ...systemInfoSettings,
                    dropdownSettings: {
                        ...systemInfoSettings.dropdownSettings,
                        [option.name]: {
                            ...systemInfoSettings.dropdownSettings[option.name],
                            value: option.value,
                        },
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_INFO_SETTINGS_CHANGE_SLIDER,
        ({ systemInfoSettings }, option) => {
            return {
                systemInfoSettings: {
                    ...systemInfoSettings,
                    slidersSettings: {
                        ...systemInfoSettings.slidersSettings,
                        [option.name]: {
                            ...systemInfoSettings.slidersSettings[option.name],
                            value: option.value,
                        },
                    },
                },
            }
        },
    )
}
