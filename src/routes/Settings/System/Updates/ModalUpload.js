import { h, React } from 'preact'
import { useStoreon } from '../../../../App'
import Modal from '../../../../components/common/Modal/Modal'
import { CHANGE_IS_OPEN_MODAL } from '../../../../store/modalStore'
export const ModalUpload = (props) => {
    const { modalId } = props
    const { dispatch, modalStore } = useStoreon('modalStore')
    const isOpenModal = modalStore.isOpenModal === modalId
    const setIsOpenModal = (option) => {
        dispatch(CHANGE_IS_OPEN_MODAL, option)
    }
    return (
        <Modal open={isOpenModal} handleClose={setIsOpenModal}>
            <div className="mr-12">
                <div className="h-8" />
                <h2 className="text-lg text-primary">
                    Загрузить обновление системы?
                </h2>
                <div className="h-12" />
                <div className="flex items-center buttons-group">
                    <button
                        className="button ghost mr-12"
                        type={'button'}
                        onClick={(e) => {
                            e.preventDefault()
                            setIsOpenModal(false)
                        }}
                    >
                        {' '}
                        Отмена{' '}
                    </button>
                    <button className="button accent" type={'submit'}>
                        {' '}
                        Обновить
                    </button>
                </div>
            </div>
        </Modal>
    )
}
{
    /* <FormItemWrap title="Настройка 3">
            <div class="flex flex-col w-full h-full input-field">
              <MaskedInput
                class="cursor-pointer w-full h-full   input"
                placeholder="192 - 168 - 3"
                guide={false}
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  '-',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  '-',
                  ' ',
                  /\d/,
                ]}
              />
            </div>
          </FormItemWrap>
          */
}
