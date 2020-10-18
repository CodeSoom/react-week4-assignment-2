export function changeRestaurantField({ name = '', category = '', address = '' }) {
  return {
    type: 'changeRestaurantField',
    payload: {
      name,
      category,
      address,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
