export default function reducer(state, action) {
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
