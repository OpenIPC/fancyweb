import { h } from 'preact'
import { NavLink } from '../../../../components/common/NavMenuLink'

const NavMenu = () => {
  return (
    <div class="flex  items-center w-full pl-28 pr-40 tabs-menu">
      <NavLink
        href="/settings/network/tcp"
        path="/settings/network/tcp"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        TCP/IP
      </NavLink>
      <NavLink
        href="/settings/network/ports"
        path="/settings/network/ports"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        Порты
      </NavLink>
      <NavLink
        href="/settings/network/vtun"
        path="/settings/network/vtun"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        VTUN
      </NavLink>
      <NavLink
        href="/settings/network/wi-fi"
        path="/settings/network/wi-fi"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        WI-FI
      </NavLink>
    </div>
  )
}
export default NavMenu
