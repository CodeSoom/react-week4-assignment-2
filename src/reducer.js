const initialState = {
  informations: {
    name: '',
    category: '',
    address: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateInformations') {
    return {
      ...state,
      informations: {
        ...state.informations,
        [action.payload.target]: action.payload.value,
      },
    };
  }

  return state;
}
