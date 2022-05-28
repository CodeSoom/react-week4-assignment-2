export function updateName(restaurantName) {
  return { type: 'updateName', payload: { restaurantName } };
}

export function updateType(restaurantType) {
  return {
    type: 'updateType',
    payload: { restaurantType },
  };
}

export function updateAddress(restaurantAddress) {
  return {
    type: 'updateAddress',
    payload: { restaurantAddress },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
