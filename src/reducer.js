const initialState = {
  newId: 0,
  name: '',
  category: '',
  address: '',
  registers: [],
};

export default function reducer(state = initialState, action) {
  if (!action) { return state; }

  if (action.type === 'updateInputText') {
    const value = Object.keys(action.payload)[0];
    return {
      ...state,
      [value]: action.payload[value],
    };
  }
  if (action.type === 'addRegister') {
    const {
      newId, name, category, address, registers,
    } = state;

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      registers: [...registers, {
        id: newId,
        information: `${name} | ${category} | ${address}`,
      }],
    };
  }
  return state;
}
