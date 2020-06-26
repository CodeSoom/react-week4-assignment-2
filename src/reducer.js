const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  informations: [],
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

  return state;
}
