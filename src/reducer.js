const initialState = {
  newId: 100,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const reducers = {
  updateRestaurant: (state, { payload: { restaurant } }) => ({
    ...state,
    restaurant: { ...state.restaurant, ...restaurant },
  }),
  addRestaurant: (state) => {
    const { newId, restaurant, restaurants } = state;

    return {
      newId: newId + 1,
      restaurant: {},
      restaurants: [...restaurants, { id: newId, restaurant }],
    };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
