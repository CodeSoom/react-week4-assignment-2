const initialState = {
  information: {
    name: '',
    classification: '',
    address: '',
  },
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateInformation') {
    return {
      ...state,
      information: {
        ...state.information,
        [action.payload.category]: action.payload.content,
      },
    };
  }

  return state;
}
