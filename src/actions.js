export function addRestaurant() {
  return { type: 'addRestaurant' };
}

export function updateRestaurant(field, value) {
  return {
    type: 'updateRestaurant',
    payload: { field, value },
  };
}
