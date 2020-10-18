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
    const [name, category, address] = inputs;
    const newInputs = inputs
      .map((input) => ({
        ...input,
        value: '',
      }));

    return {
      ...state,
      inputs: newInputs,
      restaurants: [...restaurants, {
        name: name.value,
        category: category.value,
        address: address.value,
      }],
    };
  },
};

export default function reducer(state = initialState, action = initialAction) {
  if (!reducers[action.type]) return state;

  return reducers[action.type](state, action.payload);
}
