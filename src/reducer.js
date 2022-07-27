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
      restaurantName: action.payload.name,
    };
  }
  if (action.type === 'changeType') {
    return {
      ...state,
      restaurantType: action.payload.type,
    };
  }
  if (action.type === 'changeLocation') {
    return {
      ...state,
      restaurantLocation: action.payload.location,
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
