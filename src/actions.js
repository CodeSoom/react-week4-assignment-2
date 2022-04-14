export function addRestaurant({ restaurantsName, category, address }) {
  return {
    type: 'addRestaurant',
    payload: {
      restaurantsName,
      category,
      address,
    },
  };
}
