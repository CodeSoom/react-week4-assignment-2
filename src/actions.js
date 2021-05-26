export function addRestaurants() {
  return {
    type: 'addRestaurants',
  };
}

export function changeName(value) {
  return {
    type: 'changeName',
    payload: {
      value,
    },
  };
}

export function changeType(value) {
  return {
    type: 'changeType',
    payload: {
      value,
    },
  };
}

export function changeAddress(value) {
  return {
    type: 'changeAddress',
    payload: {
      value,
    },
  };
}
