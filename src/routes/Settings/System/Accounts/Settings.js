import { h, React } from 'preact'
import FormItemWrap from '../../../../components/FormItemWrap'
import { useStoreon } from '../../../../App'
import { SYSTEM_ACCOUNTS_SETTINGS_CHANGE_TEXT } from '../stores/systemAccounts.module'
import { InputPassword } from '../../../../components/common/inputs/InputPassword'
export const Settings = () => {
    const { dispatch, SystemAccountsSettings } = useStoreon(
        'SystemAccountsSettings',
    )
    console.log(SystemAccountsSettings, 'SystemAccountsSettings')

    const onChangeInput = (e) => {
        dispatch(SYSTEM_ACCOUNTS_SETTINGS_CHANGE_TEXT, {
            name: e.target.name,
            value: e.target.value,
        })
    }
    const textSettings = SystemAccountsSettings.textSettings

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                alert('Сохранено, в консоли :)')
                console.log(SystemAccountsSettings, 'save video settings')
            }}
            class="flex-1  pl-28 pr-40 py-36 bg-light h-full "
        >
            <div className="form-wrap">
                <FormItemWrap title="Имя" class="mb-24">
                    <div className="flex input-field ">
                        <input
                            placeholder="Введите название аккаунта"
                            name="account_name"
                            onChange={onChangeInput}
                            value={textSettings.account_name}
                            className="cursor-pointer h-full w-full  p-4 input"
                        />
                    </div>
                </FormItemWrap>
                <div className="flex flex-col mb-36">
                    <h5 className="font-bold text-sm text-secondary mb-16">
                        Безопасность
                    </h5>
                    <FormItemWrap title="Старый пароль">
                        <div className="flex flex-col justify-center   w-full h-full input-field">
                            <InputPassword
                                placeholder="Пароль"
                                name="account_password_old"
                                onChange={onChangeInput}
                                value={textSettings.account_password_old}
                                className="cursor-pointer w-full h-full   input"
                            />
                        </div>
                    </FormItemWrap>
                    <FormItemWrap title="Новый пароль">
                        <div className="flex flex-col  justify-center   w-full h-full input-field">
                            <InputPassword
                                placeholder="Новый пароль"
                                name="account_password_new"
                                onChange={onChangeInput}
                                value={textSettings.account_password_new}
                                className="cursor-pointer w-full h-full   input"
                            />
                        </div>
                    </FormItemWrap>
                    <FormItemWrap title="Подтверждение пароля">
                        <div className="flex flex-col  justify-center  w-full h-full input-field">
                            <InputPassword
                                placeholder="Новый пароль ещё раз"
                                name="account_password_new_re"
                                onChange={onChangeInput}
                                value={textSettings.account_password_new_re}
                                className="cursor-pointer w-full h-full   input"
                            />
                        </div>
                    </FormItemWrap>
                </div>
                <div class="flex justify-between mt-36">
                    <button class="button ghost">По умолчанию</button>
                    <button class="button accent">Сохранить</button>
                </div>
            </div>
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
