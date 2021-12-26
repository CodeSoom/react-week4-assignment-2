const initialState = {
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRestaurant') {
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [action.payload.target]: action.payload.value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
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
  }

  return state;
}
