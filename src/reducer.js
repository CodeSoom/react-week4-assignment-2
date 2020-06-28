const initialState = {
  id: 1,
  input: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const handlers = {
  registerRestaurant: (state) => ({
    ...state,
    id: state.id + 1,
    input: initialState.input,
    restaurants: [
      ...state.restaurants,
      {
        id: state.id,
        name: state.input.name,
        category: state.input.category,
        address: state.input.address,
      },
    ],
  }),

  updateInput: (state, { name, value }) => ({
    ...state,
    input: {
      ...state.input,
      [name]: value,
    },
  }),
};

export default function reducer(state = initialState, action) {
  return handlers[action.type] ? handlers[action.type](state, action.payload) : state;
}
