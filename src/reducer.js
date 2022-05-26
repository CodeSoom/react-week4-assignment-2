const initialState = {
  restaurantId: 0,
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
  restaurantCatalog: [],
};

const updateRestaurantName = (state, action) => ({
  ...state,
  restaurantName: action.payload.restaurantName,
});

const updateRestaurantCategory = (state, action) => ({
  ...state,
  restaurantCategory: action.payload.restaurantCategory,
});

const updateRestaurantAddress = (state, action) => ({
  ...state,
  restaurantAddress: action.payload.restaurantAddress,
});

const addRestaurant = (state) => {
  const {
    restaurantId,
    restaurantName,
    restaurantCategory,
    restaurantAddress,
    restaurantCatalog,
  } = state;

  if (!(restaurantName && restaurantCategory && restaurantAddress)) {
    return state;
  }

  return {
    ...state,
    restaurantId: restaurantId + 1,
    restaurantName: '',
    restaurantCategory: '',
    restaurantAddress: '',
    restaurantCatalog: [
      ...restaurantCatalog,
      {
        restaurantId,
        restaurantName,
        restaurantCategory,
        restaurantAddress,
      },
    ],
  };
};

const actionMethod = {
  UPDATE_RESTAURANT_NAME: (state, action) => updateRestaurantName(state, action),
  UPDATE_RESTAURANT_CATEGORY: (state, action) => updateRestaurantCategory(state, action),
  UPDATE_RESTAURANT_ADDRESS: (state, action) => updateRestaurantAddress(state, action),
  ADD_RESTAURANT: (state) => addRestaurant(state),
};

const reducer = (state = initialState, action) => {
  if (action.type in actionMethod) {
    return actionMethod[action.type](state, action);
  }

  return state;
};

export default reducer;
