const initialState = {
  nameInput: '',
  typeInput: '',
  adressInput: '',
  restaurants: [],
};

const reducerAction = {
  UpdateRestaurantName: (state, action) => ({
    ...state,
    nameInput: action.payload.nameInput,
  }),

  UpdateRestaurantType: (state, action) => ({
    ...state,
    typeInput: action.payload.typeInput,
  }),
};

export default function reducer(state = initialState, action) {
  if (!reducerAction[action.type]) {
    return state;
  }

  return reducerAction[action.type](state, action);
}
