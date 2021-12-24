const initialState = {
  restaurants: [],
  restaurant: {
    name: 'test1',
    category: 'test2',
    address: 'test3',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === '') {
    return state;
  }

  return state;
}
