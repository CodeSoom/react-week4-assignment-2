import { ADD_RESTAURANT, UPDATE_RESTAURANTINFO } from './actions';

const initialState = {
  restaurantList: [],
  restaurantInfo: {
    id: 0, name: '', category: '', address: '',
  },
};

const actionTypes = [UPDATE_RESTAURANTINFO, ADD_RESTAURANT];

function checkAction(action) {
  if (!action) return false;

  if (!actionTypes.includes(action.type)) return false;

  return true;
}

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
  if (checkAction(action) === false) {
    return state;
  }

  return actionHandler[action.type](state, action);
}
