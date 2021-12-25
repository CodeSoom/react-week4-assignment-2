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

  return state;
}
