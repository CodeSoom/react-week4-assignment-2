const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  data: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'handleChangeValue') {
    return {
      ...state,
      ...action.payload
    };
  }



  if (action.type === 'saveData') {
    if (state.name === ''
      || state.category === ''
      || state.address === '') {
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
          name: state.name,
          category: state.category,
          address: state.address
        },
        ...state.data,

      ],
    };
  }

  return state;
}
