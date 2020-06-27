export function updateInformations(target, value) {
  return {
    type: 'updateInformations',
    payload: {
      target,
      value,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
