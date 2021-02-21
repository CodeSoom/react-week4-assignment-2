export const initialState = {
  id: 100,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurantsList: [],
};

function reducer(state = initialState, action = { type: '' }) {
  const { type, payload } = action;

  if (type === 'updateInput') {
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [payload.placeholder]: payload.input,
      },
    };
  }

  if (type === 'addRestaurants' && !Object.values(state.restaurant).includes('')) {
    const {
      id, restaurant: { name, category, address }, restaurantsList,
    } = state;

    return {
      ...state,
      id: id + 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurantsList: [...restaurantsList, {
        id, name, category, address,
      }],
    };
  }

  return state;
}

export default reducer;
