const initialState = {
  nameInput: '',
  typeInput: '',
  addressInput: '',
  restaurants: [],
};

const actionHandlers = {
  updateNameInput: (state, action) => ({
    ...state,
    nameInput: action.payload.name,
  }),
  updateTypeInput: (state, action) => ({
    ...state,
    typeInput: action.payload.type,
  }),
  updateAddressInput: (state, action) => ({
    ...state,
    addressInput: action.payload.address,
  }),
};

const reducer = (state = initialState, action) => {
  if (actionHandlers[action.type]) {
    return actionHandlers[action.type](state, action);
  }

  return state;
};

export default reducer;
