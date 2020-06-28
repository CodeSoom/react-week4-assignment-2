export function changeName(newRestaurantName) {
  return {
    type: 'changeName',
    payload: {
      restaurant: {
        name: newRestaurantName,
      },
    },
  };
}

export function changeType(newRestaurantType) {
  return {
    type: 'changeType',
    payload: {
      restaurant: {
        type: newRestaurantType,
      },
    },
  };
}

export function changeAddress(newRestaurantAddress) {
  return {
    type: 'changeAddress',
    payload: {
      restaurant: {
        address: newRestaurantAddress,
      },
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
