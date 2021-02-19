const initialState = {
  newId: 100,
  restaurant: {
    name: '',
    category: '',
    restaurants: [],
  },
};

const reducers = {
  updateRestaurant: (state, { payload: { restaurant } }) => ({
    ...state, restaurant: { ...state.restaurant, ...restaurant },
  }),

};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
