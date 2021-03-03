export const updateRestaurantInformation = (key, value) => ({
  type: 'updateRestaurantInformation',
  payload: {
    key,
    value,
  },
});

export const addRestaurantInformation = () => ({
  type: 'addRestaurantInformation',
});
