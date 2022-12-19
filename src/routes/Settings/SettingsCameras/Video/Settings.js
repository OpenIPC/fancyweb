import { h } from 'preact'
import FormItemWrap from '../../../../components/FormItemWrap'
import ReactDropdown from 'react-dropdown'
import { useStoreon } from '../../../../App'
import { VIDEO_SETTINGS_CHANGE_DROPDOWN } from '../stores/videoSettings.module'
export const Settings = () => {
    const { dispatch, videoSettings } = useStoreon('videoSettings')
    console.log(videoSettings, 'videoSettings')

    const dropdownSettings = videoSettings.dropdownSettings

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                alert('Сохранено, в консоли :)')
                console.log(videoSettings, 'save video settings')
            }}
            class="flex-1  pl-28 pr-40 py-36 bg-light h-full "
        >
            <div className="form-wrap">
                <FormItemWrap
                    class="dropdown"
                    title={dropdownSettings.option_bitrate.label}
                >
                    <ReactDropdown
                        options={dropdownSettings.option_bitrate.options}
                        value={dropdownSettings.option_bitrate.value}
                        onChange={(e) => {
                            dispatch(VIDEO_SETTINGS_CHANGE_DROPDOWN, {
                                name: 'option_bitrate',
                                value: e.value,
                            })
                        }}
                        placeholder="Выберите значение"
                    />
                </FormItemWrap>
                <FormItemWrap
                    class="dropdown"
                    title={dropdownSettings.option_definition.label}
                >
                    <ReactDropdown
                        options={dropdownSettings.option_definition.options}
                        value={dropdownSettings.option_definition.value}
                        onChange={(e) => {
                            dispatch(VIDEO_SETTINGS_CHANGE_DROPDOWN, {
                                name: 'option_definition',
                                value: e.value,
                            })
                        }}
                        placeholder="Выберите значение"
                    />
                </FormItemWrap>
                <FormItemWrap
                    class="dropdown"
                    title={dropdownSettings.option_bitrate_type.label}
                >
                    <ReactDropdown
                        options={dropdownSettings.option_bitrate_type.options}
                        value={dropdownSettings.option_bitrate_type.value}
                        onChange={(e) => {
                            dispatch(VIDEO_SETTINGS_CHANGE_DROPDOWN, {
                                name: 'option_bitrate_type',
                                value: e.value,
                            })
                        }}
                        placeholder="Выберите значение"
                    />
                </FormItemWrap>
                <FormItemWrap
                    class="dropdown"
                    title={dropdownSettings.option_codec.label}
                >
                    <ReactDropdown
                        options={dropdownSettings.option_codec.options}
                        value={dropdownSettings.option_codec.value}
                        onChange={(e) => {
                            dispatch(VIDEO_SETTINGS_CHANGE_DROPDOWN, {
                                name: 'option_codec',
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
