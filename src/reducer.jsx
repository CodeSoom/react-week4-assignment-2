const initalRestaurnt = {
  name: '',
  category: '',
  address: '',
};

const initailState = {
  newId: 100,
  restaurants: [],
  restaurant: initalRestaurnt,
};

export default function reducer(state = initailState, action) {
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
    const { newId, restaurants, restaurant } = state;
    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { ...restaurant, id: newId }],
      restaurant: initailState,
    };
  }

  return state;
}
