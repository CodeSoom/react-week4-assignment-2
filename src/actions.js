export const updateRestaurantName = (restaurantName) => ({
  type: 'updateRestaurantName',
  payload: {
    restaurantName,
  },
});

export const updateRestaurantType = (restaurantType) => ({
  type: 'updateRestaurantType',
  payload: {
    restaurantType,
  },
});

export const updateRestaurantAddress = (restaurantAddress) => ({
  type: 'updateRestaurantAddress',
  payload: {
    restaurantAddress,
  },
});

export const addRestaurant = (newId) => ({
  type: 'addRestaurant',
  payload: {
    newId,
  },
});
