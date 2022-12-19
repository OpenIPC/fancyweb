// store/index.js
import { createStoreon } from 'storeon'
import { menu } from '../components/Menu/menuStore'
import {
  asideSettings,
  asideSettingsMenu,
} from '../routes/Home/components/stores/asideSettings.module'
import { imageSettings } from '../routes/Settings/SettingsCameras/stores/imageSettings.module'
import { modalStore } from './modalStore'
import { videoSettings } from '../routes/Settings/SettingsCameras/stores/videoSettings.module'
import {
  settingsPorts,
  settingsTCP,
  settingsVtun,
  settingsWifi,
} from '../routes/Settings/Network/stores'
import {SystemAccountsSettings} from '../routes/Settings/System/stores/systemAccounts.module';
import {SystemMainSettings} from '../routes/Settings/System/stores/systemMain.module';
import {SystemUpdatesSettings} from '../routes/Settings/System/stores/systemUpdates.module';

export const store = createStoreon([
  menu,
  asideSettings,
  asideSettingsMenu,
  imageSettings,
  videoSettings,
  settingsPorts,
  settingsTCP,
  settingsVtun,
  settingsWifi,
  modalStore,
	SystemUpdatesSettings,
	SystemMainSettings,
	SystemAccountsSettings,
])
