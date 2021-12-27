export function addRestaurants() {
  return {
    type: 'addRestaurants',
  };
}

export function updateRestaurantInfo({ name, value }) {
  return {
    type: 'updateRestaurantInfo',
    payload: {
      name,
      value,
    },
  };
}
