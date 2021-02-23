export function updateRestaurant(restaurant) {
  return {
    type: 'updateRestaurant',
    payload: {
      restaurant,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
