export default function reducer(state, action) {
  if (action.type === 'updateRestaurantName') {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  if (action.type === 'updateRestaurantCategory') {
    return {
      ...state,
      category: action.payload.category,
    };
  }

  return state;
}
