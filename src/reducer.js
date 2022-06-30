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

  return state;
};

export default reducer;
