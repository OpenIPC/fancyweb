import { h, React } from 'preact'
import Router from 'preact-router'
import { SettingsMainInfo } from './MainInfo'
import { SettingsLogs } from './Logs'
export const SettingsInformation = (props) => {
    console.log('settings')
    return (
        <div class="  main-content overflow-hidden">
            <Router>
                <SettingsLogs
                    path="/settings/info/logs"
                    title="Настройки / Системные логи "
                />
                <SettingsMainInfo
                    path="/settings/info/maininfo"
                    title="Настройки / Информация"
                />
            </Router>
        </div>
    )
}
