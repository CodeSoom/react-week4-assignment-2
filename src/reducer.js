const initialState = {
  restaurant: {
    id: 100,
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
    const { restaurant, restaurants } = state;

    const restaurantData = Object.values(restaurant);

    if (restaurantData.includes('')) { return state; }

    return {
      restaurant: {
        id: restaurant.id + 1,
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...restaurants, { id: restaurant.id, ...restaurant }],
    };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
