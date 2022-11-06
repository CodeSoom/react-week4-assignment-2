export function updateRestaurant(inputName, text) {
  return {
    type: 'updateRestaurant',
    payload: { key: inputName, content: text },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
