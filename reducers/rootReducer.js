import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig={
    key:'root',
    storage:AsyncStorage,
    whitelist:['movie']
}



const rootReducer=combineReducers({movie:movieReducer});

export default persistReducer(persistConfig,rootReducer);

