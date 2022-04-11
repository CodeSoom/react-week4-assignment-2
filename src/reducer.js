const initialState = {
  newId: 100,
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
      newId, name, category, address, restaurants,
    } = state;

    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      restaurants: [
        ...restaurants, {
          id: newId, name, category, address,
        },
      ],
    };
  }

  return state;
}
