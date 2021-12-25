const initialState = {
  restaurants: [],
  restaurant: {
    title: '',
    address: '',
    menu: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    return {
      ...state,
      restaurants: [...state.restaurants, state.restaurant],
      restaurant: { ...initialState.restaurant },
    };
  }

  if (action.type === 'changeForm') {
    const { key, value } = action.payload.field;

    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [key]: value,
      },
    };
  }

  return state;
}
