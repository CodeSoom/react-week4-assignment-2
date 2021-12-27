export const updateRestaurantInfo = (key, value) => ({
  type: 'updateRestautrantInfo',
  payload: {
    key,
    value,
  },
});

export const addRestaurant = () => ({
  type: 'addRestaurant',
});
