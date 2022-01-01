import { combineReducers, createStore } from 'redux';
import restaurantReducer from './reducers/restaurant';

const rootReducer = combineReducers({ restaurant: restaurantReducer });

const store = createStore(rootReducer);

export default store;
