const initialState = {
  restaurants: [],
  restaurant: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }

  return state;
}
