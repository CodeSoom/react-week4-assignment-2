const initalState = {
  restaurants: [],
  restaurant: {},
};

export default function reducer(state = initalState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'changeRestaurantField') {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { restaurants, restaurant } = state;

    return {
      ...state,
      restaurants: [...restaurants, restaurant],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    };
  }
  return state;
}
