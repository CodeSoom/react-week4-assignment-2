export const ACTION_TYPES = {
  CHANGE_NAME: 'CHANGE_NAME',
  CHANGE_CATEGORY: 'CHANGE_CATEGORY',
  CHANGE_ADDRESS: 'CHANGE_ADDRESS',
  ADD_RESTAURANTS: 'ADD_RESTAURANTS',
};

export const changeName = (name) => ({
  type: ACTION_TYPES.CHANGE_NAME,
  payload: { name },
});

export const changeCategory = (category) => ({
  type: ACTION_TYPES.CHANGE_CATEGORY,
  payload: { category },
});

export const changeAddress = (address) => ({
  type: ACTION_TYPES.CHANGE_ADDRESS,
  payload: { address },
});

export const addRestaurants = (restaurant) => ({
  type: ACTION_TYPES.ADD_RESTAURANTS,
  payload: { restaurant },
});
