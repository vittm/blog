import {createStore,combineReducers} from 'redux';
import { Popup } from './reducers/popup';

const reducers = combineReducers({
  popup : Popup
});

const store = createStore(reducers);

export default store;