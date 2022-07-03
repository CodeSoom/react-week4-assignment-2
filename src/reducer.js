const initialState = {
  restaurant: {
    name: '',
    type: '',
    address: '',
  },
  restaurants: [],
};

const actionHandlers = {
  updateRestaurantName: (state, action) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      name: action.payload.restaurantName,
    },
  }),
  updateRestaurantType: (state, action) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      type: action.payload.restaurantType,
    },
  }),
  updateRestaurantAddress: (state, action) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      address: action.payload.restaurantAddress,
    },
  }),
  addRestaurant: (state, action) => {
    const {
      restaurant,
      restaurants,
    } = state;

    const { newId } = action.payload;

    if (!restaurant.name || !restaurant.type || !restaurant.address || !newId) {
      return state;
    }

    return {
      ...state,
      restaurant: {
        name: '',
        type: '',
        address: '',
      },
      restaurants: [
        ...restaurants,
        {
          id: newId,
          name: restaurant.name,
          type: restaurant.type,
          address: restaurant.address,
        },
      ],
    };
  },
};

const reducer = (state = initialState, action) => {
  if (!actionHandlers[action.type]) {
    return state;
  }

  return actionHandlers[action.type](state, action);
};

export default reducer;
