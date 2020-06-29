const initState = {
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
      newId,
      restaurant,
      restaurants,
    } = previousState;

    return {
      ...previousState,
      newId: newId + 1,
      restaurant: {
        name: '',
        type: '',
        address: '',
      },
      restaurants: [
        ...restaurants,
        {
          id: newId + 1,
          name: restaurant.name,
          type: restaurant.type,
          address: restaurant.address,
        },
      ],
    };
  }

  return previousState;
}

export default reducer;
