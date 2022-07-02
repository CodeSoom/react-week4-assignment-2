const initialState = {
  nameInput: '',
  typeInput: '',
  adressInput: '',
  restaurants: [],
};

const reducerAction = {
  updateRestaurantName: (state, action) => ({
    ...state,
    nameInput: action.payload.nameInput,
  }),

  updateRestaurantType: (state, action) => ({
    ...state,
    typeInput: action.payload.typeInput,
  }),

  updateRestaurantAdress: (state, action) => ({
    ...state,
    adressInput: action.payload.adressInput,
  }),

  addRestaurant: (state, action) => {
    const {
      nameInput, typeInput, adressInput, restaurants,
    } = state;

    return {
      ...state,
      nameInput: '',
      typeInput: '',
      adressInput: '',
      restaurants: [...restaurants, {
        id: action.payload.id, name: nameInput, type: typeInput, adress: adressInput,
      }],
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!reducerAction[action.type]) {
    return state;
  }

  return reducerAction[action.type](state, action);
}
