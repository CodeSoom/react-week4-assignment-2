const initialState = {
  newId: 50,
  restaurants: [],
  restaurantInfo: {
    title: '',
    address: '',
    category: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurants') {
    return state;
  }
  if (action.type === 'updateRestaurantInfo') {
    return {
      ...state,
      restaurantInfo: {
        ...state.restaurantInfo,
        [action.payload.name]: action.payload.value,
      },
    };
  }
  return state;
}
