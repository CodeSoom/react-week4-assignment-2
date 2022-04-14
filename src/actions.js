export function addRestaurant({ restaurantName, category, address }) {
  return {
    type: 'addRestaurant',
    payload: {
      restaurantName,
      category,
      address,
    },
  };
}
