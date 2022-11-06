export function changeText(name, text) {
  return {
    type: 'changeText',
    payload: { key: name, content: text },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
