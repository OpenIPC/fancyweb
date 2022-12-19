import { h } from 'preact'
import FormItemWrap from '../../../../components/FormItemWrap'
import RangeSlider from '../../../../components/common/RangeSlider/RangeSlider'
import { useStoreon } from '../../../../App'
import { IMAGE_SETTINGS_CHANGE_SLIDER } from '../stores/systemInfoSettings.module'
export const Sliders = () => {
    const { dispatch, imageSettings } = useStoreon('imageSettings')
    const slidersSettings = imageSettings.slidersSettings
    const onChangeSlider = (option) => {
        dispatch(IMAGE_SETTINGS_CHANGE_SLIDER, option)
    }
    return (
        <>
            {slidersSettings &&
                Object.entries(slidersSettings).map((settings) => {
                    return (
                        <FormItemWrap title={settings[1].label}>
                            <RangeSlider
                                onChange={onChangeSlider}
                                settings={settings[1]}
                            />
                        </FormItemWrap>
                    )
                })}
        </>
    )
}
// {
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
// }
