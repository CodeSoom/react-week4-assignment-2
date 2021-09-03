const initialState = {
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
  restaurants: [],
};

const reducers = {
  updateRestaurantName: (state, { payload }) => ({
    ...state,
    restaurantName: payload.restaurantName,
  }),
  updateRestaurantCategory: (state, { payload }) => ({
    ...state,
    restaurantCategory: payload.restaurantCategory,
  }),
  updateRestaurantAddress: (state, { payload }) => ({
    ...state,
    restaurantAddress: payload.restaurantAddress,
  }),
  addRestaurant: (state) => ({
    ...state,
    restaurantName: '',
    restaurantCategory: '',
    restaurantAddress: '',
    restaurants: [
      ...state.restaurants,
      `${state.restaurantName} | ${state.restaurantCategory} | ${state.restaurantAddress}`,
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
