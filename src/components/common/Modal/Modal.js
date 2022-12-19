import { h, React } from 'preact'
import { useRef } from 'preact/hooks'

const Modal = (props) => {
    const { children, open, handleClose } = props

    const ref = useRef(null)

    const handleClickOutside = (event) => {
        if (
            ref.current != event.target &&
            !ref.current.contains(event.target)
        ) {
            handleClose()
        }
    }

    const CloseIcon = (props) => {
        const { classes, handleClose } = props
        return (
            <div class={classes} tabIndex={0}>
                <svg
                    width="24"
                    onClick={(e) => {
                        console.log(e, 'closemodal')
                        handleClose()
                    }}
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4.2097 4.3871L4.29289 4.29289C4.65338 3.93241 5.22061 3.90468 5.6129 4.2097L5.70711 4.29289L12 10.585L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.415 12L19.7071 18.2929C20.0676 18.6534 20.0953 19.2206 19.7903 19.6129L19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L12 13.415L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.585 12L4.29289 5.70711C3.93241 5.34662 3.90468 4.77939 4.2097 4.3871L4.29289 4.29289L4.2097 4.3871Z" />
                </svg>
            </div>
        )
    }
    return (
        <div onClick={handleClickOutside}>
            <div
                class={`flex items-center justify-center  fixed pin w-screen h-screen modal ${
                    open ? 'active' : ''
                }`}
            >
                <div
                    ref={ref}
                    class="flex items-center flex-col bg-white relative modal-body  modal-body__exit"
                >
                    <div class="content">
                        <CloseIcon
                            classes="absolute cursor-pointer close-icon focus:text-accent"
                            handleClose={handleClose}
                        />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
