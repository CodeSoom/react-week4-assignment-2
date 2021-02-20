import { ADD_RESTAURANT, UPDATE_RESTAURANTINFO } from './actions';

const initialState = {
  restaurantList: [],
  restaurantInfo: {
    id: 0, name: '', category: '', address: '',
  },
};

const actionHandler = {

  [UPDATE_RESTAURANTINFO](state, action) {
    return { ...state, restaurantInfo: { ...state.restaurantInfo, ...action.payload } };
  },
  [ADD_RESTAURANT](state) {
    const { restaurantList, restaurantInfo } = state;
    return {
      ...state,
      restaurantList: [...restaurantList, { ...restaurantInfo, id: restaurantList.length + 1 }],
    };
  },

};

export default function reducer(state = initialState, action) {
  return actionHandler[action.type](state, action);
}
