const initialState = {
  id: 100,
  restaurant: {},
  restaurants: [],
};

const reducers = {
  updateRestaurantName(state, action) {
    const { name } = action.payload;

    return {
      ...state,
      restaurant: {
        name,
      },
    };
  },

  updateRestaurantCategory(state, action) {
    const { category } = action.payload;

    return {
      ...state,
      restaurant: {
        category,
      },
    };
  },

  updateRestaurantAddress(state, action) {
    const { address } = action.payload;

    return {
      ...state,
      restaurant: {
        address,
      },
    };
  },

  addRestaurant(state) {
    const { id, restaurant, restaurants } = state;

    return {
      ...state,
      id: id + 1,
      restaurant: {},
      restaurants: [...restaurants, restaurant],
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  const reduce = reducers[action.type];

  if (!reduce) {
    return state;
  }

  return reduce(state, action);
}
