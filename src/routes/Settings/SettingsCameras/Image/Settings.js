import { h, React } from 'preact'
import FormItemWrap from '../../../../components/FormItemWrap'
import ReactDropdown from 'react-dropdown'
import RadioButton from '../../../../components/common/RadioButton/RadioButton'
import Switch from '../../../../components/common/Switch/Switch'
import { useStoreon } from '../../../../App'
import { Sliders } from './Sliders'
import {
    IMAGE_SETTINGS_CHANGE_TEXT,
    IMAGE_SETTINGS_CHANGE_RADIOGROUP,
    IMAGE_SETTINGS_CHANGE_CHECKBOX,
    IMAGE_SETTINGS_CHANGE_DROPDOWN,
} from '../stores/imageSettings.module'
export const Settings = () => {
    const { dispatch, imageSettings } = useStoreon('imageSettings')
    console.log(imageSettings, 'cameraSettingsONCHANGE')

    const dropdownSettings = imageSettings.dropdownSettings
    const radioSettings = imageSettings.radioSettings
    const checkboxSettings = imageSettings.checkboxSettings
    const textSettings = imageSettings.textSettings

    const onChangeInput = (e) => {
        dispatch(IMAGE_SETTINGS_CHANGE_TEXT, {
            name: e.target.name,
            value: e.target.value,
        })
    }
    const onChangeRadio = (e) => {
        dispatch(IMAGE_SETTINGS_CHANGE_RADIOGROUP, {
            name: e.target.name,
            value: e.target.value,
        })
    }
    const onChangeCheckbox = (e) => {
        console.log(e)
        dispatch(IMAGE_SETTINGS_CHANGE_CHECKBOX, {
            name: e.target.name,
            value: e.target.checked,
        })
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                alert('Сохранено, в консоли :)')
                console.log(imageSettings, 'save image settings')
            }}
            class="flex-1  pl-28 pr-40 py-36 bg-light h-full "
        >
            <div className="form-wrap">
                <FormItemWrap title="Профиль">
                    <div class="flex mr-24 items-center">
                        <RadioButton
                            name={'day_time'}
                            value={'day'}
                            checked={radioSettings.day_time}
                            onChange={onChangeRadio}
                            label="День"
                        />
                    </div>
                    <div class="flex mr-24 items-center">
                        <RadioButton
                            name={'day_time'}
                            value={'nigh'}
                            checked={radioSettings.day_time}
                            onChange={onChangeRadio}
                            label="Ночь"
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="Имя хоста">
                    <div class="flex flex-col w-full h-full input-field">
                        <input
                            placeholder="IPS"
                            name="host_name"
                            onChange={onChangeInput}
                            value={textSettings.host_name}
                            class="cursor-pointer w-full h-full   input"
                        />
                    </div>
                </FormItemWrap>

                <Sliders />
                <FormItemWrap title="WDR">
                    <div class="flex mr-24 items-center">
                        <RadioButton
                            name={'wdr_option'}
                            value={'high'}
                            checked={radioSettings.wdr_option}
                            onChange={onChangeRadio}
                            label="Высокая"
                        />
                    </div>
                    <div class="flex mr-24 items-center">
                        <RadioButton
                            name={'wdr_option'}
                            value={'middle'}
                            checked={radioSettings.wdr_option}
                            onChange={onChangeRadio}
                            label="Средняя"
                        />
                    </div>
                    <div class="flex mr-24 items-center">
                        <RadioButton
                            name={'wdr_option'}
                            value={'low'}
                            checked={radioSettings.wdr_option}
                            onChange={onChangeRadio}
                            label="Низкая"
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap
                    class="dropdown"
                    title={dropdownSettings.option_rotation.label}
                >
                    <ReactDropdown
                        options={dropdownSettings.option_rotation.options}
                        value={dropdownSettings.option_rotation.value}
                        onChange={(e) => {
                            dispatch(IMAGE_SETTINGS_CHANGE_DROPDOWN, {
                                name: 'option_rotation',
                                value: e.value,
                            })
                        }}
                        placeholder="Выберите значение"
                    />
                </FormItemWrap>
                <div class="flex justify-between mb-12">
                    <div class="text-sm font-bold text-primary">
                        Зеркально отображение
                    </div>
                    <div class="flex justify-between">
                        <Switch
                            name={'mirrored'}
                            value={checkboxSettings.mirrored}
                            checked={checkboxSettings.mirrored}
                            onChange={onChangeCheckbox}
                            label=""
                        />
                    </div>
                </div>
                <FormItemWrap class="dropdown" title="Угол">
                    <ReactDropdown
                        options={dropdownSettings.option_angle.options}
                        value={dropdownSettings.option_angle.value}
                        onChange={(e) => {
                            dispatch(IMAGE_SETTINGS_CHANGE_DROPDOWN, {
                                name: 'option_angle',
                                value: e.value,
                            })
                        }}
                        placeholder="Выберите значение"
                    />
                </FormItemWrap>
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
