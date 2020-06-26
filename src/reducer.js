const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  informations: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateName') {
    return {
      ...state,
      name: action.payload.name,
    };
  }
  return state;
}
