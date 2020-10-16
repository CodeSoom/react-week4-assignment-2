export function updateRestaurantName(name) {
  return {
    type: 'updateRestaurantName',
    payload: {
      name,
    },
  };
}
