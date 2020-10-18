const initialState = {
  newId: 100,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const reduces = {
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

export default function reducer(state = initialState, action) {
  if (!reduces[action.type]) {
    return state;
  }

  return reduces[action.type](state, action);
}
