import { h } from 'preact'
import MainContentHead from '../../../../components/MainContentHead/MainContentHead'
import NavMenu from '../NavMenu/NavMenu'
import { Settings } from './Settings'

export const SettingsVtun = (props) => {
  return (
    <div class="w-full h-full flex  flex-col">
      <MainContentHead title={props.title} />
      <NavMenu />
      <Settings />
    </div>
  )
}
