export const changeInput = (value, indexName) => ({
  type: "CHANGE_INPUT",
  payload: { value, indexName },
});

export const registerInput = () => ({ type: "REGISTER_INPUT" });

export const deleteList = (id) => ({
  type: "DELETE_LIST",
  payload: { id },
});
