export function updateInputText(target) {
  return {
    type: 'updateInputText',
    payload: { [target.name]: target.value },
  };
}

export function addRegister() {
  return {
    type: 'addRegister',
  };
}
