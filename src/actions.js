export function updateRestaurantInfo(name, value) {
  return {
    type: 'updateRestaurantInfo',
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
