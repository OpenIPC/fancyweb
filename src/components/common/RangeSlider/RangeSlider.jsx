import { h } from 'preact'
import Slider from 'react-rangeslider'
import './RangeSlider.css'
import { useEffect } from 'preact/hooks'
const RangeSlider = (props) => {
  const { settings, onChange } = props

  const changeSliderValue = (value) => {
    onChange({
      name: settings.name,
      value,
    })
  }
  useEffect(() => {}, [props.settings.value])

  return (
    <div class="flex items-center text-secondary w-full input-field">
      <span class="mr-8">{settings.min_value}</span>
      <Slider
        onChange={changeSliderValue}
        min={settings.min_value}
        max={settings.max_value}
        step={settings.step}
        value={settings.value}
        reverse={false}
        tooltip={false}
        orientation="horizontal"
      />
      <span class="ml-8">{settings.value}</span>
    </div>
  )
}

export default RangeSlider
