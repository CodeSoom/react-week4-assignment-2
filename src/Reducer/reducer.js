const defaultState = {
  newId: 20,
  restaurant: {
    name: '', category: '', address: '',
  },
  restaurants: [],
};

export default function reducer(state = defaultState, action) {
  const { newId, restaurant, restaurants } = state;

  // TODO: Computed property names 활용 예정
  if (action.type === 'updateRestaurantName') {
    return {
      ...state,
      restaurant: {
        name: action.payload.restaurantName,
        category: restaurant.category,
        address: restaurant.address,
      },
    };
  }

  if (action.type === 'updateRestaurantCategory') {
    return {
      ...state,
      restaurant: {
        name: restaurant.name,
        category: action.payload.restaurantCategory,
        address: restaurant.address,
      },
    };
  }

  if (action.type === 'updateRestaurantAddress') {
    return {
      ...state,
      restaurant: {
        name: restaurant.name,
        category: restaurant.category,
        address: action.payload.restaurantAddress,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    if (!restaurant.name || !restaurant.category || !restaurant.address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurant: {
        name: '', category: '', address: '',
      },
      restaurants: [...restaurants, {
        id: newId,
        name: restaurant.name,
        category: restaurant.category,
        address: restaurant.address,
      }],
    };
  }

  return state;
}
