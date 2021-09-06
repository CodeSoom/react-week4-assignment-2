export function updateRestaurantInfo(infoType, value) {
  return {
    type: 'updateRestaurantInfo',
    payload: { infoType, value },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
