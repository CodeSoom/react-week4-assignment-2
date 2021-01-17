const initialState = {
  newId: 100,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const reducers = {
  updateRestaurantName: (state, action) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      name: action.payload.name,
    },
  }),

  updateRestaurantCategory: (state, action) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      category: action.payload.category,
    },
  }),

  updateRestaurantAddress: (state, action) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      address: action.payload.address,
    },
  }),

  addRestaurant: (state) => {
    const { newId, restaurant, restaurants } = state;

    if (!restaurant.name || !restaurant.category || !restaurant.address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurant: {
        name: '', category: '', address: '',
      },
      restaurants: [
        ...restaurants,
        {
          id: newId,
          name: state.restaurant.name,
          category: state.restaurant.category,
          address: state.restaurant.address,
        },
      ],
    };
  },
};

function unknownReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  if (typeof action === 'undefined') {
    return state;
  }

  return (reducers[action.type] || unknownReducer)(state, action);
}
