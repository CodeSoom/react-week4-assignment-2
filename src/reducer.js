export const initialState = {
  inputs: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
  nextId: 1,
};

export default function reducer(state = initialState, action = { type: '' }) {
  if (action.type === 'changeInput') {
    const { name, value } = action.payload;

    return {
      ...state,
      inputs: {
        ...state.inputs,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { name, category, address } = state.inputs;

    const newRestaurant = {
      id: state.nextId,
      name,
      category,
      address,
    };

    return {
      ...state,
      inputs: initialState.inputs,
      nextId: state.nextId + 1,
      restaurants: [
        ...state.restaurants,
        newRestaurant,
      ],
    };
  }

  return state;
}
