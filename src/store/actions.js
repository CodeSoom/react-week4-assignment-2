export function changeText(keyValue, text) {
  return {
    type: 'changeText',
    payload: { key: keyValue, content: text },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
