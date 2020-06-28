const initialState = {
  newId: 100,
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  function changeFieldSelector(payloadName, payloadValue) {
    console.log('paylodName:', payloadName, ', payloadValue:', payloadValue);
    if (payloadName === 'changeRestaurantName') {
      console.log('enter payloadRestaurantName condition');
      return {
        ...state,
        restaurantName: payloadValue,
      };
    }
    if (payloadName === 'changeRestaurantCategory') {
      console.log('enter payloadRestaurantCategory condition');
      return {
        ...state,
        restaurantCategory: payloadValue,
      };
    }
    if (payloadName === 'changeRestaurantAddress') {
      console.log('enter payloadRestaurantAddress condition');
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
