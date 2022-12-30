const initialState = {
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    return state;
  }
  return state;
}
