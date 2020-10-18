const initialState = {
  newId: 103,
  inputs: [
    {
      name: 'name',
      placeholder: '이름',
      value: '',
    },
    {
      name: 'category',
      placeholder: '분류',
      value: '',
    },
    {
      name: 'address',
      placeholder: '주소',
      value: '',
    },
  ],
  restaurants: [
    {
      id: 101,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    {
      id: 102,
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
    {
      id: 103,
      name: '카와미',
      category: '일식',
      address: '분당구 정자동',
    },
  ],
};

const reduce = {
  updateText: (state, action) => {
    const changeInput = state.inputs.map((input) => ({
      ...input,
      value: input.name === action.payload.name ? action.payload.value : input.value,
    }));

    return {
      ...state,
      inputs: changeInput,
    };
  },

  addRestaurant: (state) => {
    const { newId, inputs, restaurants } = state;
    const [name, category, address] = inputs;
    const haveInputsValueEmpty = inputs.filter((input) => input.value === '').length;
    const initializeInputs = inputs.map((input) => ({
      ...input,
      value: '',
    }));

    if (haveInputsValueEmpty) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      inputs: initializeInputs,
      restaurants: [...restaurants, {
        id: newId,
        name: name.value,
        category: category.value,
        address: address.value,
      }],
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!reduce[action.type]) {
    return state;
  }

  return reduce[action.type](state, action);
}
