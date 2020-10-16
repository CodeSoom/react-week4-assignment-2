const initialState = {
  restaurants: [],
  inputs: [
    { name: 'name', placeholder: '이름', value: '' },
    { name: 'category', placeholder: '분류', value: '' },
    { name: 'address', placeholder: '주소', value: '' },
  ],
};

const initialAction = { type: 'initialType' };

const reducers = {
  updateInputText: (state, payload) => {
    const newInputs = state.inputs
      .map((input) => ({
        ...input,
        value: input.placeholder === payload.placeholder
          ? payload.value
          : input.value,
      }));

    return { ...state, inputs: newInputs };
  },
  addRestaurant: (state) => {
    const { restaurants, inputs } = state;

    return {
      ...state,
      restaurants: [...restaurants, {
        name: inputs[0].value,
        category: inputs[1].value,
        address: inputs[2].value,
      }],
    };
  },
};

export default function reducer(state = initialState, action = initialAction) {
  if (!reducers[action.type]) return state;

  return reducers[action.type](state, action.payload);
}
