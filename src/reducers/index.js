const initialState = {
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
};

const handleReducer = {
  updateRestaurant: (state, action) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      [action.payload.target]: action.payload.value,
    },
  }),
  addRestaurant: (state) => {
    const { restaurants, restaurant } = state;

    return {
      ...state,
      restaurants: [
        ...restaurants,
        restaurant,
      ],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    };
  },
};

export default function reducer(state = initialState, action) {
  if (handleReducer[action.type]) {
    return handleReducer[action.type](state, action);
  }

  return state;
}
