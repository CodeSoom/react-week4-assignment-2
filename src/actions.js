export function updateName(name) {
  return {
    type: 'updateName',
    payload: {
      name,
    },
  };
}

export function updateSort(sort) {
  return {
    type: 'updateSort',
    payload: {
      sort,
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
export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
