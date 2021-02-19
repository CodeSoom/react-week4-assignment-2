import { UPDATE_RESTAURANTINFO } from './actions';

const initialState = {
  restaurantList: [],
  restaurantInfo: { name: '', category: '', address: '' },
};

export default function reducer(state = initialState, action) {
  if (action.type === UPDATE_RESTAURANTINFO) {
    return { ...state, restaurantInfo: { ...state.restaurantInfo, ...action.payload } };
  }
  return state;
}
