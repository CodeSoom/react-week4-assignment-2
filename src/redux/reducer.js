const initialState = {
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  return {
    restaurants: [...state.restaurants, action.payload],
  };
}
