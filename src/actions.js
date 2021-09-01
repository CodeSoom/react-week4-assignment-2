export function updateText(name, text) {
  return {
    type: 'updateText',
    payload: {
      name,
      text,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
