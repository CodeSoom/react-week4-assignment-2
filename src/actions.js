export const updateRestaurantName = (name) => ({
  type: 'updateRestaurantName',
  payload: {
    name,
  },
});

export const updateRestaurantCategory = (category) => ({
  type: 'updateRestaurantCategory',
  payload: {
    category,
  },
});

export const updateRestaurantAddress = (address) => ({
  type: 'updateRestaurantAddress',
  payload: {
    address,
  },
});
