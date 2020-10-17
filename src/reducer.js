const initialState = {
  id: 1,
  restaurant: {
    name: '',
    type: '',
    address: '',
  },
  restaurants: [],
};

const reducers = {
  updateRestaurant: (state, { value, name }) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      [name]: value,
    },
  }),
  addRestaurant: (state) => {
    const { id, restaurant, restaurants } = state;
    const { name, type, address } = restaurant;
    if (!name || !type || !address) {
      return state;
    }

    return {
      ...state,
      id: id + 1,
      restaurant: {
        name: '',
        type: '',
        address: '',
      },
      restaurants: [...restaurants, { id, ...restaurant }],
    };
  },
};

const reducer = (state = initialState, { type, payload }) => {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
};

export default reducer;
