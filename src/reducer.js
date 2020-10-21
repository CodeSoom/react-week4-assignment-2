const initialRestaurant = {
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
};

const initialState = {
  restaurants: [],
  restaurant: initialRestaurant,
};

export default function reducer(state = initialState, action) {
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
      restaurant: initialRestaurant,
    };
  }

  return state;
}
