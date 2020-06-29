export const defaultState = {
  newId: 20,
  restaurant: {
    name: '', category: '', address: '',
  },
  restaurants: [],
};

const reducers = {
  updateRestaurantName: (state, action) => {
    const { restaurant } = state;

    return {
      ...state,
      restaurant: {
        name: action.payload.restaurantName,
        category: restaurant.category,
        address: restaurant.address,
      },
    };
  },
  updateRestaurantCategory: (state, action) => {
    const { restaurant } = state;

    return {
      ...state,
      restaurant: {
        name: restaurant.name,
        category: action.payload.restaurantCategory,
        address: restaurant.address,
      },
    };
  },
  updateRestaurantAddress: (state, action) => {
    const { restaurant } = state;

    return {
      ...state,
      restaurant: {
        name: restaurant.name,
        category: restaurant.category,
        address: action.payload.restaurantAddress,
      },
    };
  },
  addRestaurant: (state) => {
    const { newId, restaurant, restaurants } = state;

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
  },
};

export function reducer(state = defaultState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
}
