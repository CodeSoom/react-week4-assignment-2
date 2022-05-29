export function addRestaurant({ name, category, address }) {
  return {
    type: 'addRestaurant',
    payload: {
      name,
      category,
      address,
    },
  };
}

export function updateName({ name }) {
  return {
    type: 'updateName',
    payload: {
      name,
    },
  };
}

export function updateCategory({ category }) {
  return {
    type: 'updateName',
    payload: {
      category,
    },
  };
}

export function updateAddress({ address }) {
  return {
    type: 'updateName',
    payload: {
      address,
    },
  };
}
