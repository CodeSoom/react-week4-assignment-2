export function updateInputText({ name, value }) {
  return {
    type: 'updateInputText',
    payload: { [name]: value },
  };
}

export function addRegister() {
  return {
    type: 'addRegister',
  };
}
