const initialRestaurant = {
  name: '',
  category: '',
  address: '',
};

const initalState = {
  newId: 100,
  restaurants: [],
  restaurant: initialRestaurant,
};

export default function reducer(state = initalState, action = { type: '' }) {
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
      restaurant: initialRestaurant,
    };
  }
  return state;
}
