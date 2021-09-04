const initialState = {
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const reducers = {
  updateRestaurantName: (state, { payload }) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      name: payload.name,
    },
  }),
  updateRestaurantCategory: (state, { payload }) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      category: payload.category,
    },
  }),
  updateRestaurantAddress: (state, { payload }) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      address: payload.address,
    },
  }),
  addRestaurant: (state) => ({
    ...state,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [
      ...state.restaurants,
      {
        id: state.restaurants.length,
        title: `${state.restaurant.name} | ${state.restaurant.category} | ${state.restaurant.address}`,
      },
    ],
  }),
};

export default function reducer(state = initialState, action) {
  try {
    return reducers[action.type](state, action);
  } catch (error) {
    return state;
  }
}
