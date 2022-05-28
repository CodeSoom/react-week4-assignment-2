const initialState = {
  newId: 100,
  restaurant: {
    name: '',
    address: '',
    category: '',
  },
  restaurants: [],
};

const reducerOptions = {
  addRestaurant: (state) => {
    const { restaurants, restaurant } = state;
    return {
      newId: state.newId + 1,
      restaurants: [
        ...restaurants,
        { id: state.newId, ...restaurant },
      ],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    };
  },
  updateRestaurant: (state, action) => {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  },
};

export default function reducer(state = initialState, action = '') {
  return reducerOptions[action.type] ? reducerOptions[action.type](state, action) : state;
}
