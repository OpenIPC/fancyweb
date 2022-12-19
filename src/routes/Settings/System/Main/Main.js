import { h } from 'preact'
import MainContentHead from '../../../../components/MainContentHead/MainContentHead'
import NavMenu from '../NavMenu/NavMenu'
import './../../../../components/common/Dropdown/Dropdown.css'
import { Settings } from './Settings'
export const Main = (props) => {
    return (
        <div class="w-full h-full flex  flex-col">
            <MainContentHead title={props.title} />
            <NavMenu />
            <Settings />
        </div>
    )
}
