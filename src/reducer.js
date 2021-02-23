const initalState = {
  restaurants: [],
};

export default function reducer(state = initalState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }
  return state;
}
