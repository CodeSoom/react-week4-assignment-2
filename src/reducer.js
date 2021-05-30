const initailState = {
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    location: '',
  },
};

export default function reducer(state = initailState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'addRestaurant') {
    return {
      ...state,
      restaurants: [...state.restaurants, state.restaurant],
      restaurant: {
        name: '',
        category: '',
        location: '',
      },
    };
  }

  return state;
}
