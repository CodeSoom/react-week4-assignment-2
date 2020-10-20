export function onChange({ name, value }) {
  return {
    type: 'onChange',
    payload: {
      name,
      value,
    },
  };
}

export function onClick() {
  return {
    type: 'onClick',
  };
}
