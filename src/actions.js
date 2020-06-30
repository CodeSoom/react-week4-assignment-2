export const addRestaurant = () => ({
  type: 'addRestaurant',
});

export const updateInput = ({ key, value }) => ({
  type: 'updateInput',
  payload: {
    [key]: value,
  },
});
