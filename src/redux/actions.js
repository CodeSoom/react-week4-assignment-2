export function addRestaurant(restaurant) {
  return {
    type: 'restaurant/addItem',
    payload: restaurant,
  };
}

export function updateField(data) {
  return {
    type: 'restaurant/updateField',
    payload: data,
  };
}
