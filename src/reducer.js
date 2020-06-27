const initialState = {
  newId: 1,
  newRestaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'changeRestaurant') {
    const { newRestaurant } = state;

    return {
      ...state,
      newRestaurant: {
        ...newRestaurant,
        [action.payload.field]: action.payload.value,
      },
    };
  }

  if (action.type === 'saveNewRestaurant') {
    const {
      newId, newRestaurant, restaurants,
    } = state;

    return {
      newId: newId + 1,
      newRestaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [
        ...restaurants,
        {
          id: newId,
          ...newRestaurant,
        },
      ],
    };
  }

  return state;
}

export default reducer;
