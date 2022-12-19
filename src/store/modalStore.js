export const CHANGE_IS_OPEN_MODAL = 'modalStore/change_is_open_modal'
export const SET_MODAL_CLOSED = 'modalStore/close_modal'

export function modalStore(store) {
    store.on('@init', () => ({
        modalStore: {
            isOpenModal: null,
        },
    }))

    store.on(CHANGE_IS_OPEN_MODAL, ({ modalStore }, option) => {
        console.log(modalStore, 'openmodal')
        return {
            modalStore: {
                isOpenModal: option,
            },
        }
    })
    store.on(SET_MODAL_CLOSED, ({ modalStore }) => {
        return {
            isOpenModal: null,
        }
    })
}
