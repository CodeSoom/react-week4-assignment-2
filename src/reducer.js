const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  data: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'handleChangeNameValue') {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  if (action.type === 'handleChangeCategroryValue') {
    return {
      ...state,
      category: action.payload.category,
    };
  }

  if (action.type === 'handleChangeAddressValue') {
    return {
      ...state,
      address: action.payload.address,
    };
  }

  if (action.type === 'saveData') {
    if (action.payload.data.name === ''
      || action.payload.data.category === ''
      || action.payload.data.address === '') {
      return state;
    }

    return {
      ...state,
      newId: state.newId + 1,
      name: '',
      category: '',
      address: '',
      data: [
        {
          id: state.newId,
          ...action.payload.data,
        },
        ...state.data,

      ],
    };
  }

  return state;
}
