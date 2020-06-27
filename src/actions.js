export const addRestaurant = (input) => ({
  type: 'addRestaurant',
  payload: {
    input,
  },
});

export const updateInput = (input) => ({
  type: 'updateInput',
  payload: {
    input,
  },
});
