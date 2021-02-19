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
  return state;
}
