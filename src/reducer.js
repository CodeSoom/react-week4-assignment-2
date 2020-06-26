const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  informations: [],
};

const reducers = {
  updateName: (state, action) => ({
    ...state,
    name: action.payload.name,
  }),
  updateCategory: (state, action) => ({
    ...state,
    category: action.payload.category,
  }),
  updateAddress: (state, action) => ({
    ...state,
    address: action.payload.address,
  }),
  addInformation: (state) => {
    const {
      newId, name, category, address, informations,
    } = state;

    if (!name || !category || !address) return state;

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      informations: [...informations, {
        id: newId, name, category, address,
      }],
    };
  },
};

export default function reducer(state = initialState, action) {
  if (reducers[action.type] === undefined) return state;
  return reducers[action.type](state, action);
}
