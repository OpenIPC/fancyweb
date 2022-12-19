import { h } from 'preact'
import Router from 'preact-router'
import { SettingsImageTab } from './Image/Image'
import { SettingsVideoTab } from './Video/Video'
const SettingsCameras = (props) => {
    console.log('settings')
    return (
        <div class="  main-content overflow-hidden">
            <Router>
                <SettingsImageTab
                    path="/settings/cameras/image"
                    title="Настройки / Камеры / Изображение"
                />
                <SettingsVideoTab
                    path="/settings/cameras/video"
                    title="Настройки / Камеры / Видео"
                />
            </Router>
        </div>
    )
}
export default SettingsCameras
