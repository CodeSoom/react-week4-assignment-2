export const changeInput = (value, name) => ({
  type: 'CHANGE_INPUT',
  payload: { value, name },
});

export const registerInput = () => ({ type: 'REGISTER_INPUT' });

export const deleteList = (id) => ({
  type: 'DELETE_LIST',
  payload: { id },
});
