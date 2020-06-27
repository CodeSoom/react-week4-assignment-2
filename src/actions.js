export function changeRestaurant(field, value) {
  return {
    type: 'changeRestaurant',
    payload: {
      field, value,
    },
  };
}

export function saveNewRestaurant() {
  return {
    type: 'saveNewRestaurant',
  };
}
