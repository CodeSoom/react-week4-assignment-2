import { createStore } from 'redux';

const initialState = {
  id: null,
  restaurantName: '',
  lists: [
    { id: 1, name: '김밥천국' },
    { id: 2, name: '김밥지옥' },
  ],
};

function reducer(state = initialState, action) {
  if (action.type === 'updateRestaurant') {
    return {
      ...state,
      restaurantName: action.payload.restaurantName,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
