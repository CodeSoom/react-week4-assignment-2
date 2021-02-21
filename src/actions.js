export function updateInput(name, value) {
  return (
    {
      type: 'updateInput',
      payload: {
        placeholder: name,
        input: value,
      },
    }
  );
}

export function addRestaurants() {
  return ({ type: 'addRestaurants' });
}
