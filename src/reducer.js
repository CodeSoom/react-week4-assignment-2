const initialState = {
  id: 100,
  restautrants: [],
  restautrant: {
    name: '',
    type: '',
    address: '',
  },
};

// TODO: updateRestautrantInfo 리듀서 기능 정의
export default function useReducer(state = initialState, action = {}) {
  if (action.type === 'updateRestautrantInfo') {
    const { key, value } = action.payload;

    return {
      ...state,
      restautrant: {
        ...state.restautrant,
        [key]: value,
      },
    };
  }

  return state;
}
