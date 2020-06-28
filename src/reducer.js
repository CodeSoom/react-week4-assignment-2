const initState = {
  // restaurantId: 100,
  // restaurantName: '',
  // restaurantType: '',
  // restaurantAddress: '',
  newId: 100,
  restaurant: {
    name: '',
    type: '',
    address: '',
  },
  restaurants: [],
};

function reducer(previousState = initState, action) {
  if (!action) {
    return previousState;
  }

  if (action.type === 'changeName') {
    const { restaurant } = previousState;

    return {
      ...previousState,
      restaurant: {
        ...restaurant,
        name: action.payload.restaurant.name,
      },
    };
  }

  if (action.type === 'changeType') {
    const { restaurant } = previousState;

    return {
      ...previousState,
      restaurant: {
        ...restaurant,
        type: action.payload.restaurant.type,
      },
    };
  }

  if (action.type === 'changeAddress') {
    const { restaurant } = previousState;

    return {
      ...previousState,
      restaurant: {
        ...restaurant,
        address: action.payload.restaurant.address,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      // restaurantId,
      // restaurantName,
      // restaurantType,
      // restaurantAddress,
      newId,
      restaurant,
      restaurants,
    } = previousState;

    return {
      ...previousState,
      // restaurantId: restaurantId + 1,
      // restaurantName: '',
      // restaurantType: '',
      // restaurantAddress: '',
      newId: newId + 1,
      restaurant: {
        name: '',
        type: '',
        address: '',
      },
      restaurants: [
        ...restaurants,
        {
          // id: restaurantId + 1,
          // name: restaurantName,
          // type: restaurantType,
          // address: restaurantAddress,
          id: newId + 1,
          restaurant,
        },
      ],
    };
  }

  return previousState;
}

export default reducer;
