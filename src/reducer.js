const initialState = {
  restaurant: {
    name: '',
    type: '',
    address: '',
  },
};

const reducers = {
  updateRestaurant: (state, { value, name }) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      [name]: value,
    },
  }),
};

const reducer = (state = initialState, { type, payload }) => {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
};

export default reducer;
