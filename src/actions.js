export function updateRestaurantTitle(name, value) {
  return {
    type: 'updateRestaurantTitle',
    payload: {
      name,
      value,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
