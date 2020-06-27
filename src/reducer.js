const initialState = {
  newId: 100,
  name: '',
  type: '',
  address: '',
  restaurants: [
    {
      newId: 101, name: 'Seoul Pizza', type: 'Western', address: 'Seoul Itaewon', restaurants: [],
    },
  ],
};

const reducers = {
  addRestaurant: (state) => {
    const {
      newId, name, type, address, restaurants,
    } = state;

    if (!name) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      name: '',
      type: '',
      address: '',
      restaurants: [...restaurants, {
        id: newId, name, type, address,
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
