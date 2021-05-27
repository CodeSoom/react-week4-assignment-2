export function addNewRestaurant(restaurant) {
  return {
    type: 'restaurant/addItem',
    payload: restaurant,
  };
}

export function updateRestaurantField(data) {
  return {
    type: 'restaurant/updateField',
    payload: data,
  };
}
