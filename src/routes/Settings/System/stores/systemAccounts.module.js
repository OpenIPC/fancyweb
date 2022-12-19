export const SYSTEM_ACCOUNTS_SETTINGS_CHANGE_TEXT =
    'SystemAccountsSettings/textSettings/change_option'
export const SYSTEM_ACCOUNTS_SETTINGS_CHANGE_CHECKBOX =
    'SystemAccountsSettings/checkboxSettings/change_option'
export const SYSTEM_ACCOUNTS_SETTINGS_CHANGE_RADIOGROUP =
    'SystemAccountsSettings/radioSettings/change_option'
export const SYSTEM_ACCOUNTS_SETTINGS_CHANGE_DROPDOWN =
    'SystemAccountsSettings/dropdownSettings/change_option'
export const SYSTEM_ACCOUNTS_SETTINGS_CHANGE_SLIDER =
    'SystemAccountsSettings/slidersSettings/change_option'

export function SystemAccountsSettings(store) {
    store.on('@init', () => ({
        SystemAccountsSettings: {
            textSettings: {
                account_name: '',
                account_password_old: '',
                account_password_new: '',
                account_password_new_re: '',
            },
        },
    }))

    store.on(
        SYSTEM_ACCOUNTS_SETTINGS_CHANGE_TEXT,
        ({ SystemAccountsSettings }, option) => {
            return {
                SystemAccountsSettings: {
                    ...SystemAccountsSettings,
                    textSettings: {
                        ...SystemAccountsSettings.textSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_ACCOUNTS_SETTINGS_CHANGE_CHECKBOX,
        ({ SystemAccountsSettings }, option) => {
            return {
                SystemAccountsSettings: {
                    ...SystemAccountsSettings,
                    checkboxSettings: {
                        ...SystemAccountsSettings.checkboxSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_ACCOUNTS_SETTINGS_CHANGE_RADIOGROUP,
        ({ SystemAccountsSettings }, option) => {
            return {
                SystemAccountsSettings: {
                    ...SystemAccountsSettings,
                    radioSettings: {
                        ...SystemAccountsSettings.radioSettings,
                        [option.name]: option.value,
                    },
                },
            }
        },
    )
    store.on(
        SYSTEM_ACCOUNTS_SETTINGS_CHANGE_DROPDOWN,
        ({ SystemAccountsSettings }, option) => {
            console.log(option, 'dropdownchange')
            return {
                SystemAccountsSettings: {
                    ...SystemAccountsSettings,
                    dropdownSettings: {
                        ...SystemAccountsSettings.dropdownSettings,
                        [option.name]: {
                            ...SystemAccountsSettings.dropdownSettings[
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
        SYSTEM_ACCOUNTS_SETTINGS_CHANGE_SLIDER,
        ({ SystemAccountsSettings }, option) => {
            return {
                SystemAccountsSettings: {
                    ...SystemAccountsSettings,
                    slidersSettings: {
                        ...SystemAccountsSettings.slidersSettings,
                        [option.name]: {
                            ...SystemAccountsSettings.slidersSettings[
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
