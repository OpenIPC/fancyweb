import { h } from 'preact'

const FormItemWrap = (props) => {
  return (
			<div class={`w-full flex  mb-12 form-item__wrap ${props.class || ''}`}>
      <div class="form-item__name">{props.title}</div>

      <div class="form-item__component">{props.children}</div>
    </div>
  )
}

export default FormItemWrap
