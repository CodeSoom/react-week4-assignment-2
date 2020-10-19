export const updateRestaurant = ({ value, name }) => ({
  type: 'updateRestaurant',
  payload: {
    value,
    name,
  },
});

export const addRestaurant = () => ({
  type: 'addRestaurant',
});
