export function updateInput({ name, value }) {
  return (
    {
      type: 'UPDATE_INPUT',
      payload: {
        name,
        value,
      },
    }
  );
}

export function addRestaurant() {
  return ({
    type: 'ADD_RESTAURANT',
  });
}
