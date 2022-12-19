import { React } from 'preact'
import ReactDropdown from 'react-dropdown'
import FormItemWrap from '../../../../components/FormItemWrap'

import Switch from '../../../../components/common/Switch/Switch'
import { useStoreon } from '../../../../App'
import {
    SYSTEM_MAIN_SETTINGS_CHANGE_CHECKBOX,
    SYSTEM_MAIN_SETTINGS_CHANGE_DROPDOWN,
    SYSTEM_MAIN_SETTINGS_CHANGE_RADIOGROUP,
    SYSTEM_MAIN_SETTINGS_CHANGE_TEXT,
} from '../stores/systemMain.module'
import { IconCircleArrows, IconCalendar } from '../../../../assets/icons'

export const Settings = () => {
    const { dispatch, SystemMainSettings } = useStoreon('SystemMainSettings')
    console.log(SystemMainSettings, 'SystemMainSettings')

    const dropdownSettings = SystemMainSettings.dropdownSettings
    const radioSettings = SystemMainSettings.radioSettings
    const checkboxSettings = SystemMainSettings.checkboxSettings
    const textSettings = SystemMainSettings.textSettings

    const onChangeInput = (e) => {
        dispatch(SYSTEM_MAIN_SETTINGS_CHANGE_TEXT, {
            name: e.target.name,
            value: e.target.value,
        })
    }
    const onChangeRadio = (e) => {
        dispatch(SYSTEM_MAIN_SETTINGS_CHANGE_RADIOGROUP, {
            name: e.target.name,
            value: e.target.value,
        })
    }
    const onChangeCheckbox = (e) => {
        console.log(e)
        dispatch(SYSTEM_MAIN_SETTINGS_CHANGE_CHECKBOX, {
            name: e.target.name,
            value: e.target.checked,
        })
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                alert('Сохранено, в консоли :)')
                console.log(SystemMainSettings, 'save image settings')
            }}
            className="flex-1  pl-28 pr-40 py-36 bg-light h-full "
        >
            <div className="form-wrap">
                <div className="flex flex-col mb-36">
                    <h5 className="font-bold text-sm text-secondary mb-16">
                        Базовые
                    </h5>
                    <FormItemWrap title="Название устройства">
                        <div className="flex flex-col w-full h-full input-field">
                            <input
                                placeholder="IPS"
                                name="host_name"
                                onChange={onChangeInput}
                                value={textSettings.host_name}
                                className="cursor-pointer w-full h-full   input"
                            />
                        </div>
                    </FormItemWrap>
                    <FormItemWrap
                        class="dropdown"
                        title={dropdownSettings.option_language.label}
                    >
                        <ReactDropdown
                            options={dropdownSettings.option_language.options}
                            value={dropdownSettings.option_language.value}
                            onChange={(e) => {
                                dispatch(SYSTEM_MAIN_SETTINGS_CHANGE_DROPDOWN, {
                                    name: 'option_language',
                                    value: e.value,
                                })
                            }}
                            placeholder="Выберите значение"
                        />
                    </FormItemWrap>
                </div>
                <div className="form-wrap">
                    <div className="flex flex-col mb-36">
                        <h5 className="font-bold text-sm text-secondary mb-16">
                            Дата и время
                        </h5>
                        <div className="mb-12 flex ">
                            <FormItemWrap
                                class="lg:mb-0 relative"
                                title="Текущая дата"
                            >
                                <div className="flex w-full h-full input-field ">
                                    <div className="relative mr-24 flex input-field">
                                        <input
                                            placeholder="Date"
                                            name="host_name"
                                            type="date"
                                            onChange={onChangeInput}
                                            value={textSettings.host_name}
                                            className="cursor-pointer h-full pr-28 input"
                                        />
                                        <div className="absolute  flex items-center pin-r pin-b pin-t">
                                            <IconCalendar />
                                        </div>
                                    </div>
                                    <div className="flex input-field ">
                                        <input
                                            placeholder="Time"
                                            name="host_name"
                                            type="time"
                                            onChange={onChangeInput}
                                            value={textSettings.host_name}
                                            className="cursor-pointer h-full w-full  p-4 input"
                                        />
                                    </div>
                                    <div className="bg-primary absolute  flex items-center pin-r pin-b pin-t w-10 flex items-center justify-center">
                                        <IconCircleArrows />
                                    </div>
                                </div>
                            </FormItemWrap>
                        </div>
                        <FormItemWrap
                            class="dropdown"
                            title={dropdownSettings.option_date_format.label}
                        >
                            <ReactDropdown
                                options={
                                    dropdownSettings.option_date_format.options
                                }
                                value={
                                    dropdownSettings.option_date_format.value
                                }
                                onChange={(e) => {
                                    dispatch(
                                        SYSTEM_MAIN_SETTINGS_CHANGE_DROPDOWN,
                                        {
                                            name: 'option_date_format',
                                            value: e.value,
                                        },
                                    )
                                }}
                                placeholder="Выберите значение"
                            />
                        </FormItemWrap>
                        <FormItemWrap
                            class="dropdown"
                            title={dropdownSettings.option_date_offset.label}
                        >
                            <ReactDropdown
                                options={
                                    dropdownSettings.option_date_offset.options
                                }
                                value={
                                    dropdownSettings.option_date_offset.value
                                }
                                onChange={(e) => {
                                    dispatch(
                                        SYSTEM_MAIN_SETTINGS_CHANGE_DROPDOWN,
                                        {
                                            name: 'option_date_offset',
                                            value: e.value,
                                        },
                                    )
                                }}
                                placeholder="Выберите значение"
                            />
                        </FormItemWrap>
                    </div>
                </div>
                <div className="form-wrap">
                    <div className="flex flex-col mb-36">
                        <div className="flex justify-between">
                            <h5 className="font-bold text-sm text-secondary mb-16">
                                Синхронизация с NTP Сервером
                            </h5>
                            <div className="flex justify-between">
                                <Switch
                                    name="sync_ntp_server"
                                    value={checkboxSettings.sync_ntp_server}
                                    checked={checkboxSettings.sync_ntp_server}
                                    onChange={onChangeCheckbox}
                                    label=""
                                />
                            </div>
                        </div>
                        <FormItemWrap title="NTP Сервер">
                            <div className="flex input-field ">
                                <input
                                    placeholder="ntp_server_name"
                                    name="ntp_server_name"
                                    onChange={onChangeInput}
                                    value={textSettings.ntp_server_name}
                                    className="cursor-pointer h-full w-full  p-4 input"
                                />
                            </div>
                        </FormItemWrap>
                        <FormItemWrap title="Порт">
                            <div className="flex input-field ">
                                <input
                                    placeholder="ntp_server_port"
                                    name="ntp_server_port"
                                    onChange={onChangeInput}
                                    value={textSettings.ntp_server_port}
                                    className="cursor-pointer h-full w-full  p-4 input"
                                />
                            </div>
                        </FormItemWrap>
                        <FormItemWrap title="Период обновления (0-30)">
                            <div className="flex input-field ">
                                <input
                                    placeholder="ntp_server_sync_period"
                                    name="ntp_server_sync_period"
                                    onChange={onChangeInput}
                                    value={textSettings.ntp_server_sync_period}
                                    className="cursor-pointer h-full w-full  p-4 input"
                                />
                            </div>
                        </FormItemWrap>
                    </div>
                </div>
                <div className="flex justify-between mt-36">
                    <button className="button ghost">По умолчанию</button>
                    <button className="button accent">Сохранить</button>
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
