export const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const type = {
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
  addRestaurant: (state) => {
    const {
      newId,
      name,
      category,
      address,
      restaurants,
    } = state;

    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      restaurants: [...restaurants, {
        id: newId,
        name,
        category,
        address,
      }],
    };
  },
};

const defaultReducer = (state) => state;

export default function reducer(state = initialState, action) {
  if(!action) {
    return state
  }

  return (type[action.type] || defaultReducer)(state, action);
}
