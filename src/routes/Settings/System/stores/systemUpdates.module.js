export const SYSTEM_UPDATES_SETTINGS_CHANGE_TEXT =
    'SystemUpdatesSettings/textSettings/change_option'
export const SYSTEM_UPDATES_SETTINGS_CHANGE_CHECKBOX =
    'SystemUpdatesSettings/checkboxSettings/change_option'
export const SYSTEM_UPDATES_SETTINGS_CHANGE_RADIOGROUP =
    'SystemUpdatesSettings/radioSettings/change_option'
export const SYSTEM_UPDATES_SETTINGS_CHANGE_DROPDOWN =
    'SystemUpdatesSettings/dropdownSettings/change_option'
export const SYSTEM_UPDATES_SETTINGS_CHANGE_SLIDER =
    'SystemUpdatesSettings/slidersSettings/change_option'

export function SystemUpdatesSettings(store) {
    store.on('@init', () => {
        return {
            SystemUpdatesSettings: {
                textSettings: {
                    update_url: '',
                },
            },
        }
    })

    store.on(
        SYSTEM_UPDATES_SETTINGS_CHANGE_TEXT,
        ({ SystemUpdatesSettings }, option) => {
            return {
                SystemUpdatesSettings: {
                    ...SystemUpdatesSettings,
                    textSettings: {
                        ...SystemUpdatesSettings.textSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_UPDATES_SETTINGS_CHANGE_CHECKBOX,
        ({ SystemUpdatesSettings }, option) => {
            return {
                SystemUpdatesSettings: {
                    ...SystemUpdatesSettings,
                    checkboxSettings: {
                        ...SystemUpdatesSettings.checkboxSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_UPDATES_SETTINGS_CHANGE_RADIOGROUP,
        ({ SystemUpdatesSettings }, option) => {
            return {
                SystemUpdatesSettings: {
                    ...SystemUpdatesSettings,
                    radioSettings: {
                        ...SystemUpdatesSettings.radioSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_UPDATES_SETTINGS_CHANGE_DROPDOWN,
        ({ SystemUpdatesSettings }, option) => {
            console.log(option, 'dropdownchange')
            return {
                SystemUpdatesSettings: {
                    ...SystemUpdatesSettings,
                    dropdownSettings: {
                        ...SystemUpdatesSettings.dropdownSettings,
                        [option.name]: {
                            ...SystemUpdatesSettings.dropdownSettings[
                                option.name
                            ],
                            value: option.value,
                        },
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_UPDATES_SETTINGS_CHANGE_SLIDER,
        ({ SystemUpdatesSettings }, option) => {
            return {
                SystemUpdatesSettings: {
                    ...SystemUpdatesSettings,
                    slidersSettings: {
                        ...SystemUpdatesSettings.slidersSettings,
                        [option.name]: {
                            ...SystemUpdatesSettings.slidersSettings[
                                option.name
                            ],
                            value: option.value,
                        },
                    },
                },
            }
        },
    )
}
