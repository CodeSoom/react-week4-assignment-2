export function setRestuarants() {
  return {
    type: 'setRestuarants',
  };
}

export function changeName(name) {
  return {
    type: 'changeName',
    payload: {
      name,
    },
  };
}
export function changeCategory(category) {
  return {
    type: 'changeCategory',
    payload: {
      category,
    },
  };
}
export function changeAddress(address) {
  return {
    type: 'changeAddress',
    payload: {
      address,
    },
  };
}
