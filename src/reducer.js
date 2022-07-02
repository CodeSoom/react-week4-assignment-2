const initialState = {
  restaurantName: '',
  restaurantType: '',
  restaurantAdress: '',
  restaurants: [],
};

const reducerAction = {
  updateRestaurantName: (state, action) => ({
    ...state,
    restaurantName: action.payload.restaurantName,
  }),

  updateRestaurantType: (state, action) => ({
    ...state,
    restaurantType: action.payload.restaurantType,
  }),

  updateRestaurantAdress: (state, action) => ({
    ...state,
    restaurantAdress: action.payload.restaurantAdress,
  }),

  addRestaurant: (state, action) => {
    const {
      restaurantName, restaurantType, restaurantAdress, restaurants,
    } = state;

    return {
      ...state,
      restaurantName: '',
      restaurantType: '',
      restaurantAdress: '',
      restaurants: [...restaurants, {
        id: action.payload.id, name: restaurantName, type: restaurantType, adress: restaurantAdress,
      }],
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!reducerAction[action.type]) {
    return state;
  }

  return reducerAction[action.type](state, action);
}
