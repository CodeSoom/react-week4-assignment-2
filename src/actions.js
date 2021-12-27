export function updateInput(name, value) {
  return {
    type: 'handleChangeValue',
    payload: {
      [name]: value,
    },
  };
}

export function updateData() {
  return {
    type: 'saveData',
  };
}
