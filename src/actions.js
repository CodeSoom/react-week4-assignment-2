export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function updateName(name) {
  return {
    type: 'updateName',
    payload: {
      name,
    },
  };
}

export function updateCategory(category) {
  return {
    type: 'updateCategory',
    payload: {
      category,
    },
  };
}

export function updateAddress(address) {
  return {
    type: 'updateAddress',
    payload: {
      address,
    },
  };
}
