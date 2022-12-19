import { h } from 'preact'
import Router from 'preact-router'
import { Accounts } from './Accounts'
import { Main } from './Main'
import { Updates } from './Updates'
const SettingsSystem = (props) => {
    console.log('settings')
    return (
        <div class="  main-content overflow-hidden">
            <Router>
                <Accounts
                    path="/settings/system/accounts"
                    title="Настройки / Система / Аккаунты и права"
                />
                <Main
                    path="/settings/system/main"
                    title="Настройки / Система / Общие"
                />
                <Updates
                    path="/settings/system/update"
                    title="Настройки / Система / Обновление системы"
                />
            </Router>
        </div>
    )
}
export default SettingsSystem
