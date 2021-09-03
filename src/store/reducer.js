const initialState = {
  nextId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateName') {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  if (action.type === 'updateCategory') {
    return {
      ...state,
      category: action.payload.category,
    };
  }

  if (action.type === 'updateAddress') {
    return {
      ...state,
      address: action.payload.address,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      name, category, address, nextId, restaurants,
    } = state;

    if (name === '' || category === '' || address === '') {
      return state;
    }

    return {
      ...state,
      nextId: nextId + 1,
      name: '',
      category: '',
      address: '',
      restaurants: restaurants.concat({
        id: nextId,
        name,
        category,
        address,
      }),
    };
  }

  return state;
}
