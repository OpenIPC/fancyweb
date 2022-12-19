export const WIFI_SETTINGS_CHANGE_TEXT =
  'settingsWifi/textSettings/change_option'
export const WIFI_SETTINGS_CHANGE_CHECKBOX =
  'settingsWifi/checkboxSettings/change_option'
export const WIFI_SETTINGS_CHANGE_RADIOGROUP =
  'settingsWifi/radioSettings/change_option'
export const WIFI_SETTINGS_CHANGE_DROPDOWN =
  'settingsWifi/dropdownSettings/change_option'
export const WIFI_SETTINGS_CHANGE_SLIDER =
  'settingsWifi/slidersSettings/change_option'

export function settingsWifi(store) {
  store.on('@init', () => ({
    settingsWifi: {
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

  store.on(WIFI_SETTINGS_CHANGE_TEXT, ({ settingsWifi }, option) => {
    return {
      settingsWifi: {
        ...settingsWifi,
        textSettings: {
          ...settingsWifi.textSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(WIFI_SETTINGS_CHANGE_CHECKBOX, ({ settingsWifi }, option) => {
    return {
      settingsWifi: {
        ...settingsWifi,
        checkboxSettings: {
          ...settingsWifi.checkboxSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(WIFI_SETTINGS_CHANGE_RADIOGROUP, ({ settingsWifi }, option) => {
    return {
      settingsWifi: {
        ...settingsWifi,
        radioSettings: {
          ...settingsWifi.radioSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(WIFI_SETTINGS_CHANGE_DROPDOWN, ({ settingsWifi }, option) => {
    console.log(option, 'dropdownchange')
    return {
      settingsWifi: {
        ...settingsWifi,
        dropdownSettings: {
          ...settingsWifi.dropdownSettings,
          [option.name]: {
            ...settingsWifi.dropdownSettings[option.name],
            value: option.value,
          },
        },
      },
    }
  })
}
