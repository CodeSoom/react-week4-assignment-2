export const initialState = {
  inputs: {
    title: '',
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

  return state;
}
