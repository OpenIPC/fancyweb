export const VTUN_SETTINGS_CHANGE_TEXT =
  'settingsVtun/textSettings/change_option'
export const VTUN_SETTINGS_CHANGE_CHECKBOX =
  'settingsVtun/checkboxSettings/change_option'
export const VTUN_SETTINGS_CHANGE_RADIOGROUP =
  'settingsVtun/radioSettings/change_option'
export const VTUN_SETTINGS_CHANGE_DROPDOWN =
  'settingsVtun/dropdownSettings/change_option'
export const VTUN_SETTINGS_CHANGE_SLIDER =
  'settingsVtun/slidersSettings/change_option'

export function settingsVtun(store) {
  store.on('@init', () => ({
    settingsVtun: {
      radioSettings: {
        ip_adress_mode: 'static',
      },
      dropdownSettings: {
        network_card_type: {
          options: [
            { value: 'ethernet', label: 'Ethernet (по умолчанию)' },
            { value: 'ethernet_2', label: 'Ethernet 2' },
          ],
          value: 'ethernet',
          name: 'network_card_type',
          label: 'Сетевая карта',
        },
        ip_address_version: {
          options: [
            { value: 'ipv4', label: 'IPv4' },
            { value: 'ipv6', label: 'IPv6' },
          ],
          value: 'ipv4',
          name: 'ip_address_version',
          label: 'Версия IP-адреса',
        },
      },
      textSettings: {
        host_name: '',
        mac_address: '',
        ip_address: '',
        subnet_mask: '',
        gateway_ip: '',
        main_dns: '',
      },
    },
  }))

  store.on(VTUN_SETTINGS_CHANGE_TEXT, ({ settingsVtun }, option) => {
    return {
      settingsVtun: {
        ...settingsVtun,
        textSettings: {
          ...settingsVtun.textSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(VTUN_SETTINGS_CHANGE_CHECKBOX, ({ settingsVtun }, option) => {
    return {
      settingsVtun: {
        ...settingsVtun,
        checkboxSettings: {
          ...settingsVtun.checkboxSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(VTUN_SETTINGS_CHANGE_RADIOGROUP, ({ settingsVtun }, option) => {
    return {
      settingsVtun: {
        ...settingsVtun,
        radioSettings: {
          ...settingsVtun.radioSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(VTUN_SETTINGS_CHANGE_DROPDOWN, ({ settingsVtun }, option) => {
    console.log(option, 'dropdownchange')
    return {
      settingsVtun: {
        ...settingsVtun,
        dropdownSettings: {
          ...settingsVtun.dropdownSettings,
          [option.name]: {
            ...settingsVtun.dropdownSettings[option.name],
            value: option.value,
          },
        },
      },
    }
  })
}
