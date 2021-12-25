const initialState = {
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
      restaurant: action.payload.restaurant,
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
