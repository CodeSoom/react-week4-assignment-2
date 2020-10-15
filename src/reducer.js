const initialState = {
  restaurants: [],
  inputs: [
    { placeholder: '이름', value: '' },
    { placeholder: '분류', value: '' },
    { placeholder: '주소', value: '' },
  ],
};

const initialAction = { type: 'initialType' };

const reducers = {
  updateInputText: (state, payload) => {
    const newInputs = state.inputs
      .map(({ placeholder, value }) => ({
        placeholder,
        value: placeholder === payload.placeholder
          ? payload.value
          : value,
      }));

    return { ...state, inputs: newInputs };
  },
};

export default function reducer(state = initialState, action = initialAction) {
  if (action.type === 'initialType') return state;

  return reducers[action.type](state, action.payload);
}
