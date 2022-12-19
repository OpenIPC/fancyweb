import { h } from 'preact'
import { NavLink } from '../../../../components/common/NavMenuLink'

const NavMenu = () => {
    return (
        <div class="flex  items-center w-full pl-28 pr-40 tabs-menu">
            <NavLink
                href="/settings/info/maininfo"
                path="/settings/info/maininfo"
                activeClassName="active"
                class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
            >
                Информация
            </NavLink>
            <NavLink
                href="/settings/info/logs"
                path="/settings/info/logs"
                activeClassName="active"
                class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
            >
                Логи
            </NavLink>
        </div>
    )
}
export default NavMenu
