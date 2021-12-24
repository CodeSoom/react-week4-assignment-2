export const CHANGE_INPUT = 'changeInput';

export const changeInput = (name, value) => ({ type: CHANGE_INPUT, payload: { name, value } });
