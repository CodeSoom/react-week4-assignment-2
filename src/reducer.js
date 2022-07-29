const initialState = {
  restaurantName: '',
  restaurantType: '',
  restaurantLocation: '',
  newId: 0,
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (!action) return state;
  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }
  if (action.type === 'changeName') {
    return {
      ...state,
      restaurantName: action.payload.input,
    };
  }
  if (action.type === 'changeCategory') {
    return {
      ...state,
      restaurantType: action.payload.input,
    };
  }
  if (action.type === 'changeAddress') {
    return {
      ...state,
      restaurantLocation: action.payload.input,
    };
  }
  if (action.type === 'addRestaurant') {
    return {
      restaurantName: '',
      restaurantType: '',
      restaurantLocation: '',
      newId: state.newId + 1,
      restaurants: [
        ...state.restaurants,
        {
          id: state.newId,
          name: state.restaurantName,
          type: state.restaurantType,
          location: state.restaurantLocation,
        },
      ],
    };
  }
  return state;
}
