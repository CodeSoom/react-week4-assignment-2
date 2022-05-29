export function changeRestaurantData(name, value) {
  return {
    type: 'changeRestaurantData',
    payload: {
      name,
      value,
    },
  };
}

export function addRestaurantData() {
  return {
    type: 'addRestaurantData',
  };
}
