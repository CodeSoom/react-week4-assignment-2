const initialState = {
  newId: 1,
  restaurants: [],
  restaurant: {
    title: '',
    address: '',
    menu: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    const newId = state.newId + 1;

    return {
      ...state,
      newId,
      restaurants: [
        ...state.restaurants,
        { ...state.restaurant, id: newId },
      ],
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
