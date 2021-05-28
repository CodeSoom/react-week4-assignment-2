const initialState = [];

export default function reducers(state = initialState, action) {
  const { type } = action;

  if (type === 'restaurants/setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  return state;
}
