export default function reducer(state, action) {
  if (action.type === 'updateRestaurantName') {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  return state;
}
