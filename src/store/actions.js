const updateName = (name) => ({
  type: 'updateName',
  payload: {
    name,
  },
});

const updateCategory = (category) => ({
  type: 'updateCategory',
  payload: {
    category,
  },
});

const updateAddress = (address) => ({
  type: 'updateAddress',
  payload: {
    address,
  },
});

const addRestaurant = () => ({
  type: 'addRestaurant',
});

export {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurant,
};
