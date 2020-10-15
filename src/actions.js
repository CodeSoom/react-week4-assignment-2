export function updateRestaurant(placeholder, value) {
  return {
    type: 'updateRestaurant',
    payload: {
      placeholder,
      value,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
