export const changeInput = (value, index) => {
  return { type: "CHANGE_INPUT", payload: value };
};

export const registerInput = () => {
  return { type: "REGISTER_INPUT" };
};
