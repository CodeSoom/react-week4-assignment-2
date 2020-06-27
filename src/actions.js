const registerRestaurant = () => ({
  type: 'registerRestaurant',
  payload: {},
});

const updateInput = (inputValue) => ({
  type: 'updateInput',
  payload: inputValue,
});

export { registerRestaurant, updateInput };
