export const IMAGE_SETTINGS_CHANGE_TEXT =
  'imageSettings/textSettings/change_option'
export const IMAGE_SETTINGS_CHANGE_CHECKBOX =
  'imageSettings/checkboxSettings/change_option'
export const IMAGE_SETTINGS_CHANGE_RADIOGROUP =
  'imageSettings/radioSettings/change_option'
export const IMAGE_SETTINGS_CHANGE_DROPDOWN =
  'imageSettings/dropdownSettings/change_option'
export const IMAGE_SETTINGS_CHANGE_SLIDER =
  'imageSettings/slidersSettings/change_option'

export function imageSettings(store) {
  store.on('@init', () => ({
    imageSettings: {
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

  store.on(IMAGE_SETTINGS_CHANGE_TEXT, ({ imageSettings }, option) => {
    return {
      imageSettings: {
        ...imageSettings,
        textSettings: {
          ...imageSettings.textSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(IMAGE_SETTINGS_CHANGE_CHECKBOX, ({ imageSettings }, option) => {
    return {
      imageSettings: {
        ...imageSettings,
        checkboxSettings: {
          ...imageSettings.checkboxSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(IMAGE_SETTINGS_CHANGE_RADIOGROUP, ({ imageSettings }, option) => {
    return {
      imageSettings: {
        ...imageSettings,
        radioSettings: {
          ...imageSettings.radioSettings,
          [option.name]: option.value,
        },
      },
    }
  })
  store.on(IMAGE_SETTINGS_CHANGE_DROPDOWN, ({ imageSettings }, option) => {
    console.log(option, 'dropdownchange')
    return {
      imageSettings: {
        ...imageSettings,
        dropdownSettings: {
          ...imageSettings.dropdownSettings,
          [option.name]: {
            ...imageSettings.dropdownSettings[option.name],
            value: option.value,
          },
        },
      },
    }
  })
  store.on(IMAGE_SETTINGS_CHANGE_SLIDER, ({ imageSettings }, option) => {
    return {
      imageSettings: {
        ...imageSettings,
        slidersSettings: {
          ...imageSettings.slidersSettings,
          [option.name]: {
            ...imageSettings.slidersSettings[option.name],
            value: option.value,
          },
        },
      },
    }
  })
}
