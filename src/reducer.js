const initialState = {
  id: 1,
  restaurant: {
    name: '',
    category: '',
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
    const { name, category, address } = restaurant;
    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      id: id + 1,
      restaurant: {
        name: '',
        category: '',
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
