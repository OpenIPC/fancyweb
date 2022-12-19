import { h } from 'preact'
import FormItemWrap from '../../../../components/FormItemWrap'
import ReactDropdown from 'react-dropdown'
import MainContentHead from '../../../../components/MainContentHead/MainContentHead'
import NavMenu from '../NavMenu/NavMenu'
import { Settings } from './Settings'

export const SettingsWifi = (props) => {
  const options = ['one', 'two', 'three']
  const defaultOption = options[0]
  return (
    <div class="w-full h-full flex  flex-col">
      <MainContentHead title={props.title} />
      <NavMenu />

      <Settings />
    </div>
  )
}
