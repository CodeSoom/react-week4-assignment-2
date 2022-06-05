const initialState = {
  newId: 1,
  restaurantName: '',
  restaurantType: '',
  restaurantAddress: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  return ({
    updateName: {
      ...state,
      restaurantName: action.payload?.restaurantName,
    },
    updateType: {
      ...state,
      restaurantType: action.payload?.restaurantType,
    },
    updateAddress: {
      ...state,
      restaurantAddress: action.payload?.restaurantAddress,
    },
    addRestaurant: {
      ...state,
      newId: state.newId + 1,
      restaurantName: '',
      restaurantType: '',
      restaurantAddress: '',
      restaurants: [...state.restaurants, {
        id: state.newId,
        name: state.restaurantName,
        type: state.restaurantType,
        address: state.restaurantAddress,
      }],

    },
  }[action.type]) || state;
}
