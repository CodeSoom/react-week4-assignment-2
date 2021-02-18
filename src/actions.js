export function updateRestaurantInformation(restaurantInfomration) {
  return {
    type: 'updateRestaurantInformation',
    payload: {
      restaurantInfomration,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
