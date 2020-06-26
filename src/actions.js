function updateName(name) {
  return {
    type: 'updateName',
    payload: {
      name,
    },
  };
}

function updateCategory(category) {
  return {
    type: 'updateCategory',
    payload: {
      category,
    },
  };
}

function updateAddress(address) {
  return {
    type: 'updateAddress',
    payload: {
      address,
    },
  };
}

function addInformation() {
  return {
    type: 'addInformation',
  };
}

export {
  updateName,
  updateCategory,
  updateAddress,
  addInformation,
};
