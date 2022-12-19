import { h } from 'preact'

const Button = (props) => {
  console.log(props)
  const { label, variant } = props
  return <button class={`button ${variant}`}>{label}</button>
}

export default Button
