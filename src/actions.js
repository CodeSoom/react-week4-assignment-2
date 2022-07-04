export function updateRestaurantName(restaurantName) {
  return {
    type: 'updateRestaurantName',
    payload: {
      restaurantName,
    },
  };
}

export function updateRestaurantType(restaurantType) {
  return {
    type: 'updateRestaurantType',
    payload: {
      restaurantType,
    },
  };
}

export function updateRestaurantAdress(restaurantAdress) {
  return {
    type: 'updateRestaurantAdress',
    payload: {
      restaurantAdress,
    },
  };
}

export function addRestaurant(id) {
  return {
    type: 'addRestaurant',
    payload: {
      id,
    },
  };
}
