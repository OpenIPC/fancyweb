export const TCP_SETTINGS_CHANGE_TEXT = 'settingsTCP/textSettings/change_option'
export const TCP_SETTINGS_CHANGE_RADIOGROUP =
  'settingsTCP/radioSettings/change_option'
export const TCP_SETTINGS_CHANGE_DROPDOWN =
  'settingsTCP/dropdownSettings/change_option'

export function settingsTCP(store) {
  store.on('@init', () => ({
    settingsTCP: {
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

  store.on(TCP_SETTINGS_CHANGE_TEXT, ({ settingsTCP }, option) => {
    return {
      settingsTCP: {
        ...settingsTCP,
        textSettings: {
          ...settingsTCP.textSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(TCP_SETTINGS_CHANGE_RADIOGROUP, ({ settingsTCP }, option) => {
    return {
      settingsTCP: {
        ...settingsTCP,
        radioSettings: {
          ...settingsTCP.radioSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(TCP_SETTINGS_CHANGE_DROPDOWN, ({ settingsTCP }, option) => {
    console.log(option, 'dropdownchange')
    return {
      settingsTCP: {
        ...settingsTCP,
        dropdownSettings: {
          ...settingsTCP.dropdownSettings,
          [option.name]: {
            ...settingsTCP.dropdownSettings[option.name],
            value: option.value,
          },
        },
      },
    }
  })
}
