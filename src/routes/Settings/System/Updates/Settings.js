import { h, React } from 'preact'
import FormItemWrap from '../../../../components/FormItemWrap'
import ReactDropdown from 'react-dropdown'
import { useStoreon } from '../../../../App'
import { SYSTEM_UPDATES_SETTINGS_CHANGE_DROPDOWN } from '../stores/systemUpdates.module'
import { SYSTEM_MAIN_SETTINGS_CHANGE_TEXT } from '../stores/systemMain.module'
import { ModalUpload } from './ModalUpload'
import { CHANGE_IS_OPEN_MODAL } from '../../../../store/modalStore'
import { MODAL_UPLOAD } from '../../../../utlis/constants'

const IconPin = (props) => {
    return (
        <svg
            class={props.class || ''}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13.3334 1.6665C16.0949 1.6665 18.3334 3.90508 18.3334 6.6665C18.3334 7.94759 17.8483 9.15345 16.9968 10.0695L16.8386 10.2319L9.566 17.5043L9.52173 17.5455L9.47529 17.5829C8.91761 18.063 8.20511 18.3332 7.45258 18.3332C5.73999 18.3332 4.35166 16.9448 4.35166 15.2323C4.35166 14.4811 4.62084 13.7705 5.09796 13.2144L5.22153 13.0786L5.2341 13.0687L11.3099 6.98217C11.6351 6.65644 12.1627 6.65598 12.4885 6.98113C12.8142 7.30628 12.8146 7.83392 12.4895 8.15964L6.41364 14.2461L6.40453 14.2531C6.15761 14.5172 6.01832 14.8627 6.01832 15.2323C6.01832 16.0244 6.66046 16.6665 7.45258 16.6665C7.76837 16.6665 8.06665 16.5649 8.31193 16.3808L8.4137 16.2969L8.41435 16.2982L15.6663 9.0474L15.7985 8.9104C16.3527 8.30233 16.6668 7.51025 16.6668 6.6665C16.6668 4.82555 15.1744 3.33317 13.3334 3.33317C12.4487 3.33317 11.6213 3.67867 11.0042 4.28199L10.8752 4.41519L10.8598 4.42599L3.08874 12.2001C2.76337 12.5256 2.23573 12.5257 1.91023 12.2003C1.58472 11.875 1.5846 11.3473 1.90996 11.0218L9.66743 3.26087L9.70627 3.22502C10.6429 2.23798 11.9432 1.6665 13.3334 1.6665Z"
                fill="#212330"
            />
        </svg>
    )
}

export const Settings = () => {
    const { dispatch, SystemUpdatesSettings, modalStore } = useStoreon(
        'SystemUpdatesSettings',
        'modalStore',
    )
    const setIsOpenModal = (option) => {
        dispatch(CHANGE_IS_OPEN_MODAL, option)
    }

    const onChangeInput = (e) => {
        dispatch(SYSTEM_MAIN_SETTINGS_CHANGE_TEXT, {
            name: e.target.name,
            value: e.target.value,
        })
    }
    const textSettings = SystemUpdatesSettings.textSettings

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                alert('Сохранено, в консоли :)')
                console.log(SystemUpdatesSettings, 'save video settings')
            }}
            class="flex-1  pl-28 pr-40 py-36 bg-light h-full "
        >
            <div className="form-wrap">
                <FormItemWrap title="Название устройства">
                    <div className="flex flex-col w-full h-full input-field">
                        <input
                            placeholder="http://..."
                            name="update_url"
                            onChange={onChangeInput}
                            value={textSettings.update_url}
                            className="cursor-pointer w-full h-full   input"
                        />
                    </div>
                </FormItemWrap>
                <div class="flex justify-between mt-36">
                    <input type={'file'} hidden id={'system_file_upload'} />
                    <label class="button ghost" htmlFor={'system_file_upload'}>
                        <IconPin class={'mr-8'} />
                        <span>Загрузить файл</span>
                    </label>
                    <button
                        class="button accent"
                        type={'button'}
                        onClick={() => {
                            setIsOpenModal(MODAL_UPLOAD)
                        }}
                    >
                        Обновить
                    </button>
                </div>
            </div>
            <ModalUpload modalId={'upload_file_modal'} />
        </form>
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
