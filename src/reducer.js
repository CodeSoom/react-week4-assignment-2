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

  if (action.type === 'updateRestaurantAddress') {
    return {
      ...state,
      address: action.payload.address,
    };
  }

  return state;
}
