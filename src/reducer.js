const initState = {
  restaurantName: '',
  restaurants: [],
};

function reducer(previousState = initState, action) {
  if (!action) {
    return previousState;
  }

  if (action.type === 'changeName') {
    return {
      ...initState,
      restaurantName: action.payload.restaurantName,
    };
  }

  if (action.type === 'changeType') {
    return {
      ...initState,
      restaurantType: action.payload.restaurantType,
    };
  }

  return previousState;
}

export default reducer;
