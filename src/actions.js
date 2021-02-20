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
