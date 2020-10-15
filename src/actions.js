export function updateInputText(placeholder, value) {
  return ({
    type: 'updateInputText',
    payload: {
      placeholder,
      value,
    },
  });
}

export function addRestaurant() {
  return ({
    type: 'addRestaurant',
  });
}
