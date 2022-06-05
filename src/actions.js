export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function updateRestaurant({ name, value }) {
  return {
    type: 'updateRestaurant',
    payload: {
      name,
      value,
    },
  };
}
