export const initialState = {
  input: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: []
};

export default function reducer(state = initialState, action) {

  if (action.type === 'addRestaurant') {
    const {name, category, address} = action.payload.input;

    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      restaurants: [...state.restaurants, {
        name,
        category,
        address,
      }],
    }
  }

  if (action.type === 'updateInput') {
    return {
      ...state,
      input: {
        ...state.input,
        [action.payload.key]: action.payload.value
      }
    }
  }

  return state;
}