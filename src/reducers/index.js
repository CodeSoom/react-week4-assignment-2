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
    return {
      ...state,
      restaurants: [
        ...state.restaurants,
        action.payload.restaurant,
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
