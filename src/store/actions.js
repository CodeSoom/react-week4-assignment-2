export function updateRestaurantField({ name, value }) {
  return {
    type: 'updateRestaurantField',
    payload: { name, value },
  };
}

export function addRestaurant() {
  return { type: 'addRestaurant' };
}
