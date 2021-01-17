const initialState = {
  id: 100,
  restaurant: {},
  restaurants: [],
};

const reducers = {
  updateRestaurant(state, action) {
    const { name, value } = action.payload;

    return {
      ...state,
      restaurant: {
        name,
        value,
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
