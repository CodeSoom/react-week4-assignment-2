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
};

export default function reducer(state = initialState, action) {
  return !action || !actionCreators[action.type]
    ? state
    : actionCreators[action.type](state, action);
}
