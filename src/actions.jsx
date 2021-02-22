export function changeInput({ value, name }) {
  return {
    type: 'changeInput',
    payload: { value, name },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
