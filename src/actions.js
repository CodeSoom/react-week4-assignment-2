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

function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { informations: restaurants },
  };
}

export {
  updateName,
  updateCategory,
  updateAddress,
  addInformation,
  setRestaurants,
};
