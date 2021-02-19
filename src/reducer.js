const initialState = {
  id: 100,
  name: '',
  category: '',
  address: '',
  restaurantsList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === 'updateInput') {
    return {
      ...state,
      [payload.placeholder]: payload.input,
    };
  }

  if (type === 'addRestaurants' && !Object.values(state).includes('')) {
    const {
      id, name, category, address, restaurantsList,
    } = state;

    return {
      ...state,
      id: id + 1,
      name: '',
      category: '',
      address: '',
      restaurantsList: [...restaurantsList, {
        id, name, category, address,
      }],
    };
  }

  return state;
}

export default reducer;
