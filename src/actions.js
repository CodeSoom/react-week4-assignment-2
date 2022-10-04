export function updateName(listName) {
  return {
    type: 'updateName',
    payload: {
      listName,
    },
  };
}

export function updateCategory(listCategory) {
  return {
    type: 'updateCategory',
    payload: {
      listCategory,
    },
  };
}

export function updateAddress(listAddress) {
  return {
    type: 'updateAddress',
    payload: {
      listAddress,
    },
  };
}

export function updateReservation() {
  return {
    type: 'updateReservation',
  };
}
