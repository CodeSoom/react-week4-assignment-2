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
    const newInputInfos = state.inputInfos
      .map((input) => ({
        ...input,
        value: input.placeholder === payload.placeholder
          ? payload.value
          : input.value,
      }));

    return { ...state, inputInfos: newInputInfos };
  },
  addRestaurant: (state) => {
    const { restaurants, inputInfos } = state;
    const [name, category, address] = inputInfos;
    const newInputInfos = inputInfos
      .map((inputInfo) => ({
        ...inputInfo,
        value: '',
      }));

    return {
      ...state,
      inputInfos: newInputInfos,
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
