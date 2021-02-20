import { ADD_RESTAURANT, UPDATE_RESTAURANTINFO } from './actions';

const initialState = {
  restaurantList: [],
  restaurantInfo: {
    id: 0, name: '', category: '', address: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === UPDATE_RESTAURANTINFO) {
    return { ...state, restaurantInfo: { ...state.restaurantInfo, ...action.payload } };
  }
  if (action.type === ADD_RESTAURANT) {
    const { restaurantList, restaurantInfo } = state;
    return {
      ...state,
      restaurantList: [...restaurantList, { ...restaurantInfo, id: restaurantList.length + 1 }],
    };
  }
  return state;
}
