export const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const reducer = (state = initialState, action) => {
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
      name,
      address,
      category,
      restaurants,
      newId,
    } = state;

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      restaurants: [...restaurants, {
        name,
        address,
        category,
      }],
    };
  }

  return state;
};

export default reducer;
