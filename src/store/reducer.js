const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurantList: [],
};

const reducers = {
  changeText: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.content,
  }),
  addRestaurant: (state) => {
    const {
      newId, name, category, address, restaurantList,
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
      restaurantList: [...restaurantList, {
        id: newId, name, category, address,
      }],
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}
