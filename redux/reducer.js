const initialState = {
  newId: 100,
  name: '',
  classify: '',
  address: '',
  restaurants: [],
};

const type = {
  updateName: (state, action) => ({
    ...state,
    name: action.payload.name,
  }),
  updateClassify: (state, action) => ({
    ...state,
    classify: action.payload.classify,
  }),
  updateAddress: (state, action) => ({
    ...state,
    address: action.payload.address,
  }),
  addRestaurant: (state) => {
    const {
      newId,
      name,
      classify,
      address,
      restaurants,
    } = state;

    if (!name || !classify || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      name: '',
      classify: '',
      address: '',
      restaurants: [...restaurants, {
        id: newId,
        name,
        classify,
        address,
      }],
    };
  },
};

export default function reducer(state = initialState, action) {
  return type[action.type] ? (type[action.type])(state, action) : state;
}
