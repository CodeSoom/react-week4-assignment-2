export function changeName(newRestaurantName) {
  return {
    type: 'changeName',
    payload: {
      restaurantName: newRestaurantName,
    },
  };
}

export function changeType(newRestaurantType) {
  return {
    type: 'changeType',
    payload: {
      restaurantType: newRestaurantType,
    },
  };
}

export function changeAddress(newRestaurantAddress) {
  return {
    type: 'changeAddress',
    payload: {
      restaurantAddress: newRestaurantAddress,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
