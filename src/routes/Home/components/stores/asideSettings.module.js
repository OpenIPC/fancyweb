export function asideSettings(store) {
  store.on('@init', () => ({
    asideSettings: {
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
    },
  }))

  store.on('asideSettings/change_option', ({ asideSettings }, option) => {
    return {
      asideSettings: {
        ...asideSettings,
        [option.name]: {
          ...asideSettings[option.name],
          value: option.value,
        },
      },
    }
  })
}

export function asideSettingsMenu(store) {
  store.on('@init', () => ({
    asideSettingsMenu: {
      isOpen: false,
    },
  }))

  store.on('asideSettingsMenu/toggle', ({ asideSettingsMenu }) => {
    return {
      asideSettingsMenu: {
        isOpen: !asideSettingsMenu['isOpen'],
      },
    }
  })
}
