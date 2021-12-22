const initialState = {
  newId: 50,
  restaurants: [],
  restaurantInfo: {
    name: '',
    address: '',
    category: '',
  },
};

function addRestaurants(state) {
  const values = Object.values(state.restaurantInfo);
  const isOneOfValueEmpty = values.some((value) => value === '');

  if (isOneOfValueEmpty) {
    return state;
  }

  return {
    ...state,
    newId: state.newId + 1,
    restaurants: [
      ...state.restaurants,
      { id: state.newId, ...state.restaurantInfo },
    ],
    restaurantInfo: {
      name: '',
      address: '',
      category: '',
    },
  };
}

function updateRestaurantInfo(state, action) {
  return {
    ...state,
    restaurantInfo: {
      ...state.restaurantInfo,
      [action.payload.name]: action.payload.value,
    },
  };
}

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurants') {
    return addRestaurants(state);
  }

  if (action.type === 'updateRestaurantInfo') {
    return updateRestaurantInfo(state, action);
  }

  return state;
}
