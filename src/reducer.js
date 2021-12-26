const initialState = {
  newId: 1,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
};

const reducers = {
  addRestaurant: (state) => {
    const newId = state.newId + 1;

    return {
      ...state,
      newId,
      restaurants: [
        ...state.restaurants,
        { ...state.restaurant, id: newId },
      ],
      restaurant: { ...initialState.restaurant },
    };
  },
  changeForm: (state, payload) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      ...payload.field,
    },
  }),
};

export default function reducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action.payload);
  }

  return state;
}
