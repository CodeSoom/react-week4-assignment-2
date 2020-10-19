export function updateRestaurantInfo({ type, value }) {
  return {
    type: 'updateRestaurantInfo',
    payload: { type, value },
  };
}

export function addRestaurantInfo({ name, category, address }) {
  return {
    type: 'addRestaurantInfo',
    payload: {
      name,
      category,
      address,
    },
  };
}
