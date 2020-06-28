const initialState = {
  newId: 100,
  restaurant: '',
  classify: '',
  address: '',
  restaurants: [],
};

const type = {
  updateRestaurant: (state, action) => ({
    ...state,
    restaurant: action.payload.restaurant,
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
      restaurant,
      classify,
      address,
      restaurants,
    } = state;

    if (!restaurant || !classify || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurant: '',
      classify: '',
      address: '',
      restaurants: [...restaurants, {
        id: newId,
        restaurant,
        classify,
        address,
      }],
    };
  },
};

export default function reducer(state = initialState, action) {
  return type[action.type] ? (type[action.type])(state, action) : state;
}
