export function updateRestaurant(target, inputValue) {
  return {
    type: 'updateRestaurant',
    payload: {
      target,
      inputValue,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
