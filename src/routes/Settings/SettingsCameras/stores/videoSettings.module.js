export const VIDEO_SETTINGS_CHANGE_DROPDOWN =
  'videoSettings/dropdownSettings/change_option'

export function videoSettings(store) {
  store.on('@init', () => ({
    videoSettings: {
      dropdownSettings: {
        option_codec: {
          options: [
            { value: 'mp4', label: 'MP4' },
            { value: 'webm', label: 'WebM' },
          ],
          value: 'mp4',
          name: 'option_codec',
          label: 'Кодек',
        },
        option_bitrate_type: {
          options: [
            { value: 'CBR', label: 'CBR' },
            { value: 'VBR', label: 'VBR' },
          ],
          value: 'VBR',
          name: 'option_bitrate_type',
          label: 'Тип битрейта',
        },
        option_bitrate: {
          options: [
            { value: '1500', label: '1500-4500 кбит/с' },
            { value: '4500', label: '4500–9000 кбит/с' },
          ],
          value: '1500',
          name: 'option_bitrate',
          label: 'Битрейт',
        },
        option_definition: {
          options: [
            { value: '1080', label: '1080p (1920х1080)' },
            { value: '720', label: '720p (1340х720)' },
          ],
          value: '1080',
          name: 'option_definition',
          label: 'Разрешение видео',
        },
      },
    },
  }))

  store.on(VIDEO_SETTINGS_CHANGE_DROPDOWN, ({ videoSettings }, option) => {
    console.log(option, 'dropdownchange')
    return {
      videoSettings: {
        ...videoSettings,
        dropdownSettings: {
          ...videoSettings.dropdownSettings,
          [option.name]: {
            ...videoSettings.dropdownSettings[option.name],
            value: option.value,
          },
        },
      },
    }
  })
}
