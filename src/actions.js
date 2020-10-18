export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function updateRestaurantName(name) {
  return {
    type: 'updateRestaurantName',
    payload: {
      name,
    },
  };
}
