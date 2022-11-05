const initialState = {
  id: null,
  restaurantName: '',
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
    const {
      restaurantName, category, address, restaurantList,
    } = state;

    return {
      ...state,
      restaurantName: '',
      category: '',
      address: '',
      restaurantList: [
        ...restaurantList,
        {
          id: Date.now(),
          restaurantName,
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
