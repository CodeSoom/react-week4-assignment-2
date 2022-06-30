const initialState = {
  nameInput: '',
  typeInput: '',
  addressInput: '',
  restaurants: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'updateNameInput') {
    return {
      ...state,
      nameInput: action.payload.name,
    };
  }

  if (action.type === 'updateTypeInput') {
    return {
      ...state,
      typeInput: action.payload.type,
    };
  }

  if (action.type === 'updateAddressInput') {
    return {
      ...state,
      addressInput: action.payload.address,
    };
  }

  return state;
};

export default reducer;
