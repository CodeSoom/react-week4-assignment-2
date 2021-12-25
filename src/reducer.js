const initialRestaurant = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  restaurants: [],
  restaurant: initialRestaurant,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
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
