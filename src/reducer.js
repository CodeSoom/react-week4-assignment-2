const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const reducers = {
  updateRestaurantInformation: (state, action) => {
    const { name, value } = action.payload;

    return {
      ...state,
      [name]: value,
    };
  },
  setRestaurants: (state, action) => ({
    ...state,
    restaurants: [...state.restaurants, ...action.payload.restaurants],
  }),
  addRestaurant: (state) => {
    const {
      newId, name, category, address, restaurants,
    } = state;

    if (!name || !category || !address) return state;

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      restaurants: [...restaurants, {
        id: newId, name, category, address,
      }],
    };
  },
};

export default function reducer(state = initialState, action) {
  if (reducers[action.type] === undefined) return state;
  return reducers[action.type](state, action);
}
