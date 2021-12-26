export function updateRestaurant(target, value) {
  return {
    type: 'updateRestaurant',
    payload: {
      target,
      value,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
