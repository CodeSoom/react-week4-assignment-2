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

export {
  updateName,
  updateCategory,
  updateAddress,
};
