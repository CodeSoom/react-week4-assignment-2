export const addNewRestaurant = (newRestaurantForm) => ({
  type: 'addNewRestaurant',
  payload: {
    newRestaurantForm,
  },
});

export const updateFormInputs = (name, value) => ({
  type: 'updateFormInputs',
  payload: {
    name,
    value,
  },
});
