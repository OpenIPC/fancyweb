import { h } from 'preact'
import MainContentHead from '../../../../components/MainContentHead/MainContentHead'
import NavMenu from '../NavMenu/NavMenu'
import { Settings } from './Settings'
export const SettingsImageTab = (props) => {
  console.log('SettingsImageTab')

  return (
    <div class="w-full h-full flex  flex-col">
      <MainContentHead title={props.title} />
      <NavMenu />
      <Settings />
    </div>
  )
}
{
  /* <FormItemWrap title="Настройка 3">
            <div class="flex flex-col w-full h-full input-field">
              <MaskedInput
                class="cursor-pointer w-full h-full   input"
                placeholder="192 - 168 - 3"
                guide={false}
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  '-',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  '-',
                  ' ',
                  /\d/,
                ]}
              />
            </div>
          </FormItemWrap>
          */
}
