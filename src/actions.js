export function updateRestaurantInfo({ type, value }) {
  return {
    type: 'updateRestaurantInfo',
    payload: { type, value },
  };
}

export function addRestaurantInfo({ name, type, location }) {
  return {
    type: 'addRestaurantInfo',
    payload: {
      name,
      type,
      location,
    },
  };
}
