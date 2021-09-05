export function updateRestaurantInfo(infoType, value) {
  return {
    type: 'updateRestaurantInfo',
    payload: { infoType, value },
  };
}
