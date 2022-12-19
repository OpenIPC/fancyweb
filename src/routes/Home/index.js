import { h, React } from 'preact'
import MainContentHead from '../../components/MainContentHead/MainContentHead'
import AsideSettings from './components/AsideSettings/AsideSettings'
import { useStoreon } from '../../App'
const Events = (props) => {
    const { asideSettingsMenu } = useStoreon('asideSettingsMenu')
    console.log(props, 'Events')
    return (
        <div class="w-full  flex  flex-col main-content overflow-hidden">
            <MainContentHead title={props.title} />
            <div class={`flex-1  pl-28 pr-48 py-36 bg-light h-full relative `}>
                <div
                    class={`w-full flex flex-col h-full content-camera ${
                        asideSettingsMenu.isOpen ? 'active' : ''
                    }`}
                >
                    <iframe
                        class="w-full h-full mr-24"
                        src={`https://www.youtube.com/embed/AFHjaVJEZqA`}
                        frameborder="20"
                    />
                    <AsideSettings />
                </div>
            </div>
        </div>
    )
}

export default Events
