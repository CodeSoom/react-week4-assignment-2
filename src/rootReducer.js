import { combineReducers } from 'redux';

import restaurantReducer from './restaurantSlice';

export default combineReducers({
  restaurant: restaurantReducer,
});
