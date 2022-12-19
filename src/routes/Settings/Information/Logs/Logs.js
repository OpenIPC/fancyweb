import { h, React } from 'preact'
import MainContentHead from '../../../../components/MainContentHead/MainContentHead'
import NavMenu from '../NavMenu/NavMenu'
import { Settings } from './Settings'

export const SettingsLogs = (props) => {
    console.log('videotab')
    return (
        <div class="w-full h-full flex  flex-col">
            <MainContentHead title={props.title} />
            <NavMenu />

            <Settings />
        </div>
    )
}
