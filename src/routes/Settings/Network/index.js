import { h } from 'preact'
import Router from 'preact-router'
import { SettingsTCP } from './SettingsTCP'
import { SettingsPorts } from './SettingsPorts'
import { SettingsVtun } from './SettingsVtun/SettingsVtun'
import { SettingsWifi } from './SettingsWifi'
const SettingsNetwork = () => {
    return (
        <div class="  main-content overflow-hidden">
            <Router>
                <SettingsTCP
                    path="/settings/network/tcp"
                    title="Настройки / Сеть / TCP/IP"
                />
                <SettingsPorts
                    path="/settings/network/ports"
                    title="Настройки / Камеры / Порты"
                />
                <SettingsVtun
                    path="/settings/network/vtun"
                    title="Настройки / Камеры / VTUN"
                />
                <SettingsWifi
                    path="/settings/network/wi-fi"
                    title="Настройки / Камеры / WI-FI"
                />
            </Router>
        </div>
    )
}
export default SettingsNetwork
