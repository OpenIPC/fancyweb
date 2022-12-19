import { h } from 'preact'

const RadioButton = (props) => {
  const { style, label, name, value, checked, onChange } = props
  return (
    <label
      class={`cursor-pointer text-sm relative flex-1 w-full flex items-center checkcontainer ${
        style || ''
      }`}
    >
      <input
        type="radio"
        value={value}
        checked={checked === value}
        onChange={onChange}
        name={name || 'radio'}
      />
      <span class="radiobtn" />
      <span class="label">{label}</span>
    </label>
  )
}

export default RadioButton
