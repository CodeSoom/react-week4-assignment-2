const initialState = {
  newId: 100,
  restaurantInfo: {
    name: '',
    address: '',
    category: '',
  },
  restaurants: [],
};

const reducerOptions = {
  addRestaurant: (state) => {
    const { restaurants, restaurantInfo } = state;
    return {
      newId: state.newId + 1,
      restaurants: [
        ...restaurants,
        { id: state.newId, ...restaurantInfo },
      ],
      restaurantInfo: {
        name: '',
        category: '',
        address: '',
      },
    };
  },
  updateRestaurantInfo: (state, action) => {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurantInfo: {
        ...state.restaurantInfo,
        [name]: value,
      },
    };
  },
};

export default function reducer(state = initialState, action = '') {
  return reducerOptions[action.type] ? reducerOptions[action.type](state, action) : state;
}
