const initialState = {
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
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
};

export default function reducer(state = initialState, action) {
  try {
    return reducers[action.type](state, action);
  } catch (error) {
    return state;
  }
}
