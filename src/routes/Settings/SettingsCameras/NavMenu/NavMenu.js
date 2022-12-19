import { h } from 'preact'
import { NavLink } from '../../../../components/common/NavMenuLink'

const NavMenu = () => {
  return (
    <div class="flex  items-center w-full pl-28 pr-40 tabs-menu">
      <NavLink
        href="/settings/cameras/image"
        path="/settings/cameras/image"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        Изображение
      </NavLink>
      <NavLink
        href="/settings/cameras/video"
        path="/settings/cameras/video"
        activeClassName="active"
        class="cursor-pointer py-16 px-36 hover:border-accent border-transparent border-0 border-b-2 text-lg font-bold tab-menu__item"
      >
        Видеопоток
      </NavLink>
    </div>
  )
}
export default NavMenu
