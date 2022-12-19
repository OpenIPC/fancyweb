import { h } from 'preact'
import { useStoreon } from '../../../../App'
import RangeSlider from '../../../../components/common/RangeSlider/RangeSlider'
const Arrow = (props) => {
    const { active } = props
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class={`arrow ${active ? 'active' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.7071 3.29289C16.3466 2.93241 15.7794 2.90468 15.3871 3.2097L15.2929 3.29289L7.29289 11.2929C6.93241 11.6534 6.90468 12.2206 7.2097 12.6129L7.29289 12.7071L15.2929 20.7071C15.6834 21.0976 16.3166 21.0976 16.7071 20.7071C17.0676 20.3466 17.0953 19.7794 16.7903 19.3871L16.7071 19.2929L9.41421 12L16.7071 4.70711C17.0976 4.31658 17.0976 3.68342 16.7071 3.29289Z"
                fill="#FB3C4A"
            />
        </svg>
    )
}
const AsideSettings = (props) => {
    const { dispatch, asideSettingsMenu, asideSettings } = useStoreon(
        'asideSettingsMenu',
        'asideSettings',
    )
    const toggleMenu = () => {
        dispatch('asideSettingsMenu/toggle')
    }
    const onChangeAsideSettings = (option) => {
        dispatch('asideSettings/change_option', option)
    }

    return (
        <form
            class={`absolute flex aside-menu ${
                asideSettingsMenu.isOpen && 'active'
            }`}
        >
            <div
                class="flex items-center justify-center aside-menu__button"
                onClick={toggleMenu}
            >
                <Arrow active={asideSettingsMenu.isOpen} />
            </div>
            <div class="flex flex-col w-full px-24 py-28 ">
                <h5 class="text-primary text-lg mb-24">
                    Настройки изображения
                </h5>
                {asideSettings &&
                    Object.entries(asideSettings).map((settings) => {
                        return (
                            <div class="mb-24">
                                <span>{settings[1].label}</span>
                                <RangeSlider
                                    onChange={onChangeAsideSettings}
                                    settings={settings[1]}
                                />
                            </div>
                        )
                    })}
                <div class="mt-auto">
                    <button class="button ghost"> Сбросить</button>
                </div>
            </div>
        </form>
    )
}

export default AsideSettings
