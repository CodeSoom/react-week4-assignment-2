const initState = {
  restaurantName: '',
  restaurantType: '',
  restaurantAddress: '',
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

  if (action.type === 'changeAddress') {
    return {
      ...initState,
      restaurantAddress: action.payload.restaurantAddress,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      restaurantName,
      restaurantType,
      restaurantAddress,
      restaurants,
    } = previousState;

    return {
      ...initState,
      restaurantName: '',
      restaurantType: '',
      restaurantAddress: '',
      restaurants: [
        ...restaurants,
        {
          name: restaurantName,
          type: restaurantType,
          address: restaurantAddress,
        },
      ],
    };
  }

  return previousState;
}

export default reducer;
