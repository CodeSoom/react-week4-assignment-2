const initialRestaurant = {
  name: '',
  category: '',
  location: '',
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

  if (action.type === 'addRestaurant') {
    return {
      ...state,
      restaurants: [...state.restaurants, state.restaurant],
      restaurant: initialRestaurant,
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

  return state;
}
