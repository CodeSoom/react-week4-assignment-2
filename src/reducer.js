const initialState = {
  id: null,
  name: '',
  category: '',
  address: '',
  restaurantList: [],
};

const actionCreators = {
  updateRestaurant: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.content,
  }),

  addRestaurant: (state) => {
    const { name, category, address, restaurantList } = state;

    if (!state.name || !state.category || !state.address) {
      return state;
    }

    return {
      ...state,
      name: '',
      category: '',
      address: '',
      restaurantList: [
        ...restaurantList,
        {
          id: Date.now(),
          name,
          category,
          address,
        },
      ],
    };
  },
};

export default function reducer(state = initialState, action) {
  return !action || !actionCreators[action.type]
    ? state
    : actionCreators[action.type](state, action);
}
