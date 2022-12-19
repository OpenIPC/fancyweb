import { h } from 'preact'
import { IconCam } from '../../assets/icons/IconCam'
import { IconEvent } from '../../assets/icons/IconEvent'
import { IconSettings } from '../../assets/icons/IconSettings'
import { NavLink } from '../common/NavMenuLink'
import { useStoreon } from '../../App'
import Logo from './../../assets/logo.svg'
const Arrow = () => (
    <div class="arrow">
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4.86192 2.19526C5.10224 1.95494 5.4804 1.93645 5.74193 2.1398L5.80473 2.19526L11.1381 7.5286C11.3784 7.76892 11.3969 8.14707 11.1935 8.4086L11.1381 8.4714L5.80473 13.8047C5.54438 14.0651 5.12227 14.0651 4.86192 13.8047C4.6216 13.5644 4.60311 13.1863 4.80646 12.9247L4.86192 12.8619L9.72385 8L4.86192 3.13807C4.60157 2.87772 4.60157 2.45561 4.86192 2.19526Z" />
        </svg>
    </div>
)
export const Menu = () => {
    const { dispatch, menu } = useStoreon('menu')
    console.log(menu, ' menuopened')
    const handleToggle = (key) => {
        dispatch('menu/toggle', key)
    }
    return (
        <aside class="bg-primary w-full p-2 flex-auto side-menu">
            <div class="flex flex-col relative min-h-full">
                <ul class="nav">
                    <li class=" px-36 py-16 flex">
                        {' '}
                        <img src={Logo} alt="OpenIPC" class=" h-8" />
                    </li>
                    <li class="nav__item">
                        <NavLink
                            // class="cursor-pointer text-white hover:text-fields mr-2 nav__item-link nav__item-link"
                            activeClassName="active"
                            href="/main"
                            path="/main"
                            class={`cursor-pointer text-white hover:text-fields mr-2 nav__item-link `}
                        >
                            <IconCam />
                            <span class="ml-16">Просмотр камеры</span>
                        </NavLink>
                    </li>

                    <li
                        class="nav__item"
                        tabIndex="1"
                        // onClick={() => {
                        //   handleToggle('events')
                        // }}
                    >
                        <NavLink
                            // class="cursor-pointer text-white hover:text-fields mr-2 nav__item-link"
                            activeClassName="active"
                            href="/events"
                            path="/events"
                            class={`cursor-pointer text-white hover:text-fields mr-2 nav__item-link `}
                        >
                            <IconEvent />
                            <span class="ml-16">События</span>
                        </NavLink>
                    </li>

                    <li class="nav__item" tabindex="0">
                        <div
                            class={`cursor-pointer text-white hover:text-fields mr-2 nav__item-link ${
                                menu.settings ? 'active_menu' : ''
                            }`}
                            onClick={() => {
                                handleToggle('settings')
                            }}
                        >
                            <IconSettings />
                            <span class="ml-16">Настройки</span>
                            <Arrow />
                        </div>
                        <div class="nav__submenu">
                            <NavLink
                                class="cursor-pointer text-white hover:text-fields mr-2 nav__item-wrap nav__item-link  nav__submenu-link"
                                activeClassName="active"
                                href="/settings/cameras/image"
                                path="/settings/cameras"
                                partial="/settings/cameras"
                            >
                                <div class="nav__submenu-link-border">
                                    <p>Камеры</p>
                                    <Arrow />
                                </div>
                            </NavLink>
                            <NavLink
                                class="cursor-pointer text-white hover:text-fields mr-2 nav__item-wrap nav__item-link  nav__submenu-link"
                                activeClassName="active"
                                href="/settings/network/tcp"
                                path="/settings/network"
                                partial="/settings/network"
                            >
                                <div class="nav__submenu-link-border">
                                    <p>Сеть</p>
                                    <Arrow />
                                </div>
                            </NavLink>
                            <NavLink
                                class="cursor-pointer text-white hover:text-fields mr-2 nav__item-wrap nav__item-link  nav__submenu-link"
                                activeClassName="active"
                                href="/settings/events"
                                path="/settings/events"
                                partial="/settings/events"
                            >
                                <div class="nav__submenu-link-border">
                                    <p>События</p>
                                    <Arrow />
                                </div>
                            </NavLink>
                            <NavLink
                                class="cursor-pointer text-white hover:text-fields mr-2 nav__item-wrap nav__item-link  nav__submenu-link"
                                activeClassName="active"
                                href="/settings/system/main"
                                path="/settings/system"
                                partial="/settings/system"
                            >
                                <div class="nav__submenu-link-border">
                                    <p>Система</p>

                                    <Arrow />
                                </div>
                            </NavLink>
                            <NavLink
                                class="cursor-pointer text-white hover:text-fields mr-2 nav__item-wrap nav__item-link  nav__submenu-link"
                                activeClassName="active"
                                href="/settings/info/maininfo"
                                path="/settings/info"
                                partial="/settings/info"
                            >
                                <div class="nav__submenu-link-border">
                                    <p>Информация</p>
                                    <Arrow />
                                </div>
                            </NavLink>
                        </div>
                    </li>

                    <li class="nav__item">
                        <NavLink
                            class="cursor-pointer text-white hover:text-fields mr-2 nav__item-wrap nav__item-link  "
                            activeClassName="active"
                            href="/login"
                            path="/login"
                            partial="/login"
                        >
                            <p>Вход</p>
                        </NavLink>
                    </li>
                </ul>
                <div class="mt-auto  text-secondary mx-24 mb-36 text-xs flex copyright">
                    <p>© 2021 OpenIPC. Все права защищены</p>
                </div>
            </div>
        </aside>
    )
}
