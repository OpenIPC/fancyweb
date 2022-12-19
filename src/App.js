import { h, Component, createContext } from 'preact'
import { customContext } from 'storeon/preact'
import { store } from './store/rootStore'
import { Router } from 'preact-router'
import Match from 'preact-router/match'
import Login from './routes/Login'
import Home from './routes/Home'
import Events from './routes/Events'
import Settings from './routes/Settings'
import SettingsCameras from './routes/Settings/SettingsCameras'
import SettingsNetwork from './routes/Settings/Network'
import SettingsSystem from './routes/Settings/System'
import NotFoundPage from './routes/NotFoundPage'
import { Menu } from './components/Menu'
import { SettingsInformation } from './routes/Settings/Information'

const StoreContext = createContext(store)
export const useStoreon = customContext(StoreContext)

export default class App extends Component {
    /** Gets fired when the route changes.
     *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
     *	@param {string} event.url	The newly routed URL
     */
    handleRoute = (e) => {
        console.log(e, 'routeChanged')
        // this.currentUrl = e.url
    }

    render() {
        return (
            <StoreContext.Provider value={store}>
                <div id="app">
                    <div class="flex min-h-screen min-w-full">
                        <Match path="/login">
                            {({ matches }) => !matches && <Menu />}
                        </Match>

                        <Router onChange={this.handleRoute}>
                            <Home path="main" title="Просмотр камеры" />
                            <Events path="events/" title="События" />
                            <Settings path="settings/*" title="Настройки" />
                            <SettingsCameras path="settings/cameras/:variant?" />
                            <SettingsNetwork path="settings/network/:variant?" />
                            <SettingsSystem path="settings/system/:variant?" />
                            <SettingsInformation path="settings/info/:variant?" />
                            <Login path="/login" />
                            <NotFoundPage
                                path="/404"
                                default
                                title="Такой страницы не существует"
                            />
                        </Router>
                    </div>
                </div>
            </StoreContext.Provider>
        )
    }
}
