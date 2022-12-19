export const PORTS_SETTINGS_CHANGE_TEXT =
  'settingsPorts/textSettings/change_option'
export function settingsPorts(store) {
  store.on('@init', () => ({
    settingsPorts: {
      textSettings: {
        connetions_count: '',
        tcp_port: '',
        udt_port: '',
        rtsp_port: '',
        http_port: '',
        https_port: '',
      },
    },
  }))

  store.on(PORTS_SETTINGS_CHANGE_TEXT, ({ settingsPorts }, option) => {
    return {
      settingsPorts: {
        ...settingsPorts,
        textSettings: {
          ...settingsPorts.textSettings,
          [option.name]: option.value,
        },
      },
    }
  })
}
