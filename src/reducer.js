const initialState = {
  restaurantsName: '',
  category: '',
  address: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    return {
      ...state,
    };
  }
  return state;
}
