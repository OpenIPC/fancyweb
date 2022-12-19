import { h } from 'preact'
import { NavLink } from '../../../../components/common/NavMenuLink'

const NavMenu = () => {
  return (
    <div class="flex  items-center w-full pl-28 pr-40 tabs-menu">
      <NavLink
        href="/settings/system/main"
        path="/settings/system/main"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        Общие
      </NavLink>
      <NavLink
        href="/settings/system/accounts"
        path="/settings/system/accounts"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        Аккаунты и права
      </NavLink>
      <NavLink
        href="/settings/system/update"
        path="/settings/system/update"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        Обновление системы
      </NavLink>
    </div>
  )
}
export default NavMenu
