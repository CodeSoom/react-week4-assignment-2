const initialRestaurant = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: initialRestaurant,

};

const actionCreators = {
  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  },

  changeRestaurantField: (state, action) => {
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
    const { newId, restaurants, restaurant } = state;
    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { ...restaurant, id: newId }],
      restaurant: initialRestaurant,
    };
  },
};

export default function reducer(state = initialState, action) {
  return !action || !actionCreators[action.type]
    ? state
    : actionCreators[action.type](state, action);
}
