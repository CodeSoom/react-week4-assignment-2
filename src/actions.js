export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
export function updateRestaurant({ restaurantsName, category, address }) {
  return {
    type: 'updateRestaurant',
    payload: {
      restaurantsName,
      category,
      address,
    },
  };
}
