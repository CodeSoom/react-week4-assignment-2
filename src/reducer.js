const initState = {
  restaurantId: 100,
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
      ...previousState,
      restaurantName: action.payload.restaurantName,
    };
  }

  if (action.type === 'changeType') {
    return {
      ...previousState,
      restaurantType: action.payload.restaurantType,
    };
  }

  if (action.type === 'changeAddress') {
    return {
      ...previousState,
      restaurantAddress: action.payload.restaurantAddress,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      restaurantId,
      restaurantName,
      restaurantType,
      restaurantAddress,
      restaurants,
    } = previousState;

    return {
      ...previousState,
      restaurantId: restaurantId + 1,
      restaurantName: '',
      restaurantType: '',
      restaurantAddress: '',
      restaurants: [
        ...restaurants,
        {
          id: restaurantId + 1,
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
