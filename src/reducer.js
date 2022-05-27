const initialState = {
  restaurantInfo: {
    name: '',
    address: '',
    category: '',
  },
  restaurants: [],
};

export default function reducer(state = initialState, action = '') {
  if (action.type === 'addRestaurant') {
    const { restaurants, restaurantInfo } = state;
    return {
      restaurants: [
        ...restaurants,
        restaurantInfo,
      ],
      restaurantInfo: {
        name: '',
        category: '',
        address: '',
      },
    };
  }
  if (action.type === 'updateRestaurantInfo') {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurantInfo: {
        ...state.restaurantInfo,
        [name]: value,
      },
    };
  }
  return state;
}
