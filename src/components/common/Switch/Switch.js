import { h } from 'preact'

const Switch = (props) => {
  const { value, label, checked, onChange, name } = props
  return (
    <label class="switch">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <span class="slider round" />
    </label>
  )
}

export default Switch
