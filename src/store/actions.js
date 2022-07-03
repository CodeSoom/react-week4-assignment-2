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

export {
  updateName,
  updateCategory,
};
