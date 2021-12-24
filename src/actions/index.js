export function updateRestaurant(target, value) {
  return {
    type: 'updateRestaurant',
    payload: {
      target,
      value,
    },
  };
}

export function addRestaurant(restaurant) {
  return {
    type: 'addRestaurant',
    payload: {
      restaurant,
    },
  };
}
