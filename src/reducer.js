const initialRestaurant = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: { initialRestaurant },
};

const reducers = {
  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  },
  updateRestaurantField: (state, action) => {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  },
  addRestaurant: (state) => {
    const {
      newId, restaurant, restaurants,
    } = state;

    return {
      ...state,
      newId: newId + 1,
      restaurant: initialRestaurant,
      restaurants: [...restaurants, {
        id: newId, ...restaurant,
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
