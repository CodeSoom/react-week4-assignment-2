const initialState = {
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const reducers = {
  updateRestaurantField: (state, { payload: { name, value } }) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      [name]: value,
    },
  }),
  addRestaurant: (state) => ({
    ...state,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [
      ...state.restaurants,
      {
        id: state.restaurants.length,
        title: `${state.restaurant.name} | ${state.restaurant.category} | ${state.restaurant.address}`,
      },
    ],
  }),
};

export default function reducer(state = initialState, action) {
  try {
    return reducers[action.type](state, action);
  } catch (error) {
    return state;
  }
}
