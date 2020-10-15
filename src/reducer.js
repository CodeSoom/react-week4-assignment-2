const initialState = {
  newId: 100,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const reducers = {
  addRestaurant(state) {
    const { newId, restaurant, restaurants } = state;

    return ({
      newId: newId + 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...restaurants, { ...restaurant, id: newId }],
    });
  },
  updateRestaurant(state, action) {
    const { restaurant } = state;
    const { field, value } = action.payload;

    return ({
      ...state,
      restaurant: {
        ...restaurant,
        [field]: value,
      },
    });
  },
};

export default (state = initialState, action = {}) => {
  const { type } = action;
  const reducer = reducers[type];

  if (!reducer) {
    return state;
  }

  return reducer(state, action);
};
