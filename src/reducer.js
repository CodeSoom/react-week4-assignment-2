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

  return state;
};

export default reducer;
