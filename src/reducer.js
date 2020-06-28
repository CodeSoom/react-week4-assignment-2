const initialState = {
  newId: 100,
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  function changeFieldSelector(payloadName, payloadValue) {
    if (payloadName === 'changeRestaurantName') {
      return {
        ...state,
        restaurantName: payloadValue,
      };
    }
    if (payloadName === 'changeRestaurantCategory') {
      return {
        ...state,
        restaurantCategory: payloadValue,
      };
    }
    if (payloadName === 'changeRestaurantAddress') {
      return {
        ...state,
        restaurantAddress: payloadValue,
      };
    }
    return state;
  }

  if (action.type === 'addRestaurant') {
    const {
      newId, restaurantName, restaurantCategory, restaurantAddress, restaurants,
    } = state;

    if (!restaurantName || !restaurantCategory || !restaurantAddress) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurantName: '',
      restaurantCategory: '',
      restaurantAddress: '',
      restaurants: [...restaurants, {
        id: newId, name: restaurantName, category: restaurantCategory, address: restaurantAddress,
      }],
    };
  }

  if (action.type === 'changeRestaurantField') {
    changeFieldSelector(action.payload.name, action.payload.value);
  }

  return state;
}
