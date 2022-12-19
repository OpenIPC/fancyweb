import { h } from 'preact'

export const Input = (props) => {
    console.log(props)
    const { classInput } = props
    return (
        <div class="flex flex-col w-full h-full input-field">
            <input
                placeholder="Login"
                type="text"
                class={`w-full h-full input ${classInput || ''}`}
            />
            <p class="error-text">123</p>
        </div>
    )
}
