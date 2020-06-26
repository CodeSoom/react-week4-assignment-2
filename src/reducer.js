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
  return previousState;
}

export default reducer;
