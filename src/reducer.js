const initialState = {
  newId: 1,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  const { newId, restaurant, restaurants } = state;

  if (action.type === 'updateRestaurant') {
    return {
      ...state,
      restaurant: {
        ...restaurant,
        [action.payload.target]: action.payload.inputValue,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { name, category, address } = restaurant;

    if (name === '' || category === '' || address === '') {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...restaurants, {
        id: newId,
        name,
        category,
        address,
      }],
    };
  }

  return state;
}
