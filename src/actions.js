export const addRestaurant = (restaurant) => ({
  type: 'addRestaurant',
  payload: {
    restaurant,
  },
});

export const changeForm = (field) => ({
  type: 'changeForm',
  payload: {
    field,
  },
});
