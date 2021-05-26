const initialState = {
  id: 1,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  return {
    id: state.id + 1,
    name: '',
    category: '',
    address: '',
    restaurants: [...state.restaurants, action.payload],
  };
}
