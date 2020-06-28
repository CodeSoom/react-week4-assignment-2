export function updateRestaurant(target) {
  return {
    type: 'updateRestaurant',
    payload: {
      target,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
