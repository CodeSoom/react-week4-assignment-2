export function updateText(name, value) {
  return {
    type: 'updateText',
    payload: {
      name,
      value,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
