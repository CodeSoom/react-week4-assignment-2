const initialState = {
  restaurants: [],
  inputInfos: [
    { name: 'name', placeholder: '이름', value: '' },
    { name: 'category', placeholder: '분류', value: '' },
    { name: 'address', placeholder: '주소', value: '' },
  ],
};

const initialAction = { type: 'initialType' };

const reducers = {
  updateInputText: (state, payload) => {
    const newInputs = state.inputInfos
      .map((input) => ({
        ...input,
        value: input.placeholder === payload.placeholder
          ? payload.value
          : input.value,
      }));

    return { ...state, inputInfos: newInputs };
  },
  addRestaurant: (state) => {
    const { restaurants, inputInfos } = state;

    return {
      ...state,
      inputInfos: [
        { name: 'name', placeholder: '이름', value: '' },
        { name: 'category', placeholder: '분류', value: '' },
        { name: 'address', placeholder: '주소', value: '' },
      ],
      restaurants: [...restaurants, {
        name: inputInfos[0].value,
        category: inputInfos[1].value,
        address: inputInfos[2].value,
      }],
    };
  },
};

export default function reducer(state = initialState, action = initialAction) {
  if (!reducers[action.type]) return state;

  return reducers[action.type](state, action.payload);
}
