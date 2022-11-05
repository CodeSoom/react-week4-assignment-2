export function updateRestaurant(keyValue, text) {
  return {
    type: 'updateRestaurant',
    payload: { key: keyValue, content: text },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
