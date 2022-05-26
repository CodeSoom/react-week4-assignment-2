import { createStore } from 'redux';

const initialState = {
  restaurantInfo: {
    name: '',
    address: '',
    category: '',
  },
  restaurants: [{
    id: 1,
    name: '마녀주방',
    address: '한식',
    category: '서울시 강남구',
  }, {
    id: 2,
    name: '시카고피자',
    address: '양식',
    category: '이태원동',
  }, {
    id: 3,
    name: '키와미',
    address: '일식',
    category: '분당구 정자동',
  }],
};

function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    const { restaurants, restaurantInfo } = state;
    return {
      restaurants: [
        ...restaurants,
        restaurantInfo,
      ],
      restaurantInfo: {
        name: '',
        category: '',
        address: '',
      },
    };
  }
  if (action.type === 'updateRestaurantInfo') {
    const { name, value } = action;
    return {
      ...state,
      restaurantInfo: {
        [name]: value,
      },
    };
  }
  return state;
}

const store = createStore(reducer);

export default store;
