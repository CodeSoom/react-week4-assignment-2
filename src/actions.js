export const changeInput = (value, indexname) => ({
  type: 'CHANGE_INPUT',
  payload: { value, indexname },
});

export const registerInput = () => ({ type: 'REGISTER_INPUT' });

export const deleteList = (id) => ({
  type: 'DELETE_LIST',
  payload: { id },
});
