const initialState = {
  restaurantName: '',
  restaurantType: '',
  restaurantLocation: '',
  newId: 0,
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action && action.type === 'setRestaurants') {
    return {
      ...state,
      restaurantName: '',
      restaurantType: '',
      restaurantLocation: '',
      restaurants: action.payload.restaurants,
    };
  }
  return state;
}
