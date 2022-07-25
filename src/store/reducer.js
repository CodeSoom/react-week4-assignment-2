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
  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  },

  addRestaurant: (state) => {
    const { newId, restaurant, restaurants } = state.restaurant;

    if (!restaurant) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...restaurants, {
        id: newId + 1,
        name: restaurant.name,
        category: restaurant.category,
        address: restaurant.address,
      }],
    };
  },

};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) { return state; }

  return reducers[action.type](state, action);
}
