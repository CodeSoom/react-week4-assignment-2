export function updateInput(e) {
  return (
    {
      type: 'updateInput',
      payload: {
        placeholder: e.target.name,
        input: e.target.value,
      },
    }
  );
}

export function addRestaurants() {
  return ({ type: 'addRestaurants' });
}
