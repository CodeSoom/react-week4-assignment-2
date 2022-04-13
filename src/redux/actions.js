export const addRestaurant = ({ name, category, address }) => ({
  type: 'addRestaurant',
  payload: {
    name,
    category,
    address,
  },
});

export const deleteRestaurant = ({ name, category, address }) => ({
  type: 'deleteRestaurant',
  payload: {
    name,
    category,
    address,
  },
});
