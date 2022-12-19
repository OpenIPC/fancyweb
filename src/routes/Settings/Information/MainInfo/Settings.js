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
} from '../stores/systemInfoSettings.module'

function InformItem(props) {
    const { title, descr, isLast } = props
    console.log(isLast)
    return (
        <div
            className={`form-item__name ${
                isLast && 'no-border'
            } flex-col items-start`}
        >
            <div class="text-secondary text-xs mb-4">{title}</div>
            <div class="text-base text-md">{descr}</div>
        </div>
    )
}

export const Settings = () => {
    const { dispatch, systemInfoSettings } = useStoreon('systemInfoSettings')

    const data = [
        {
            title: 'Модель',
            descr: 'RT-2684756',
        },
        {
            title: 'Серийный номер',
            descr: '48596128796',
        },
        {
            title: 'Версия прошивки',
            descr: '2.26.00000000000',
        },
    ]

    const InfoItems = data.map((item, index) => (
        <InformItem
            title={item.title}
            descr={item.descr}
            isLast={data.length === index + 1}
        />
    ))
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                alert('Сохранено, в консоли :)')
                console.log(imageSettings, 'save image settings')
            }}
            class="flex-1  pl-28 pr-40 py-36 bg-light h-full "
        >
            <div className={`w-full flex  mb-12 form-item__wrap `}>
                {InfoItems}
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
