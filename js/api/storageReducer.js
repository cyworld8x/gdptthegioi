import { combineReducers } from 'redux';
import NavigatorReducer from './navigatorReducer';
import PostReducer from './postReducer';
import SettingReducer from './settingReducer';

const StorageReducer = combineReducers({
    Storage: PostReducer,
    Settings: SettingReducer,
    Navigator: NavigatorReducer
});

export default StorageReducer;