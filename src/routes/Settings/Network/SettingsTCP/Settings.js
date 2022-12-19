import { h } from 'preact'
import FormItemWrap from '../../../../components/FormItemWrap'
import MaskedInput from 'react-text-mask'
import { useStoreon } from '../../../../App'
import {
    TCP_SETTINGS_CHANGE_TEXT,
    TCP_SETTINGS_CHANGE_DROPDOWN,
    TCP_SETTINGS_CHANGE_RADIOGROUP,
} from '../stores'
import ReactDropdown from 'react-dropdown'
import RadioButton from '../../../../components/common/RadioButton/RadioButton'

export const Settings = () => {
    const { dispatch, settingsTCP } = useStoreon('settingsTCP')

    const textSettings = settingsTCP.textSettings
    const dropdownSettings = settingsTCP.dropdownSettings
    const radioSettings = settingsTCP.radioSettings

    const onChangeRadio = (e) => {
        dispatch(TCP_SETTINGS_CHANGE_RADIOGROUP, {
            name: e.target.name,
            value: e.target.value,
        })
    }
    const onChangeInput = (e) => {
        let value = e.target.value
        let name = e.target.name

        console.log(name, value)
        dispatch(TCP_SETTINGS_CHANGE_TEXT, {
            name,
            value,
        })
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                alert('Сохранено, в консоли :)')
                console.log(settingsTCP, 'saved settings')
            }}
            class="flex-1  pl-28 pr-40 py-36 bg-light h-full "
        >
            <div className="form-wrap">
                <FormItemWrap title="Имя хоста">
                    <div class="flex flex-col w-full h-full input-field">
                        <input
                            class="cursor-pointer w-full h-full   input"
                            placeholder="IPS"
                            name="host_name"
                            onChange={onChangeInput}
                            value={textSettings.host_name}
                            // guide={false}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap
                    class="dropdown"
                    title={dropdownSettings.network_card_type.label}
                >
                    <ReactDropdown
                        options={dropdownSettings.network_card_type.options}
                        value={dropdownSettings.network_card_type.value}
                        onChange={(e) => {
                            dispatch(TCP_SETTINGS_CHANGE_DROPDOWN, {
                                name: 'network_card_type',
                                value: e.value,
                            })
                        }}
                        placeholder="Выберите значение"
                    />
                </FormItemWrap>
                <FormItemWrap title="Профиль">
                    <div class="flex mr-24 items-center">
                        <RadioButton
                            name={'ip_adress_mode'}
                            value={'static'}
                            checked={radioSettings.ip_adress_mode}
                            onChange={onChangeRadio}
                            label="Статический"
                        />
                    </div>
                    <div class="flex mr-24 items-center">
                        <RadioButton
                            name={'ip_adress_mode'}
                            value={'dynamic'}
                            checked={radioSettings.ip_adress_mode}
                            onChange={onChangeRadio}
                            label="Динамический"
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="MAC адрес">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="9c - 14 - 63 - 1c - 3f - bd"
                            guide={false}
                            name="mac_address"
                            onChange={onChangeInput}
                            // value={textSettings.mac_address}
                            mask={[
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                                '-',
                                /\d/,
                                /\d/,
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap
                    class="dropdown"
                    title={dropdownSettings.ip_address_version.label}
                >
                    <ReactDropdown
                        options={dropdownSettings.ip_address_version.options}
                        value={dropdownSettings.ip_address_version.value}
                        onChange={(e) => {
                            dispatch(TCP_SETTINGS_CHANGE_DROPDOWN, {
                                name: 'ip_address_version',
                                value: e.value,
                            })
                        }}
                        placeholder="Выберите значение"
                    />
                </FormItemWrap>
                <FormItemWrap title="IP адрес">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="192 - 192 - 192 - 192"
                            guide={false}
                            name="ip_address"
                            onChange={onChangeInput}
                            // value={textSettings.mac_address}
                            mask={[
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="Маска подсети">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="255 - 255 - 255 - 0"
                            guide={false}
                            name="subnet_mask"
                            onChange={onChangeInput}
                            // value={textSettings.mac_address}
                            mask={[
                                /[0-2]/,
                                /[0-5]/,
                                /[0-5]/,
                                '-',
                                /[0-2]/,
                                /[0-5]/,
                                /[0-5]/,
                                '-',
                                /[0-2]/,
                                /[0-5]/,
                                /[0-5]/,
                                '-',
                                /[0-2]/,
                                /[0-5]/,
                                /[0-5]/,
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="IP шлюза">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="255 - 255 - 255 - 0"
                            guide={false}
                            name="gateway_ip"
                            onChange={onChangeInput}
                            // value={textSettings.mac_address}
                            mask={[
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="Основной DNS ">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="255 - 255 - 255 - 0"
                            guide={false}
                            name="main_dns"
                            onChange={onChangeInput}
                            // value={textSettings.mac_address}
                            mask={[
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                                '-',
                                /[0-1]/,
                                /\d/,
                                /[0-2]/,
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <div class="flex justify-between mt-36">
                    <button class="button ghost">По умолчанию</button>
                    <button class="button accent">Сохранить</button>
                </div>
            </div>
        </form>
    )
}
