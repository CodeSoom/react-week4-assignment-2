const initialState = {
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  newId: 100,
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateInformation') {
    const { name, value } = action.payload;

    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'addInformation') {
    const { restaurants, newId } = state;
    const {
      name, category, address,
    } = action.payload;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [
        ...restaurants,
        {
          id: newId,
          name,
          category,
          address,
        },
      ],
    };
  }

  if (action.type === 'initializeRestaurantForm') {
    const { restaurant } = initialState;
    return {
      ...state,
      restaurant,
    };
  }

  return state;
}
