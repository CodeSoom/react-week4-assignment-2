const initialState = {
  newId: 50,
  restaurants: [],
  restaurantInfo: {
    name: '',
    address: '',
    category: '',
  },
};

const defaultReducer = (state) => state;

const reducers = {
  addRestaurants(state) {
    const values = Object.values(state.restaurantInfo);
    const isOneOfValueEmpty = values.some((value) => value === '');

    if (isOneOfValueEmpty) {
      return state;
    }

    return {
      ...state,
      newId: state.newId + 1,
      restaurants: [
        ...state.restaurants,
        { id: state.newId, ...state.restaurantInfo },
      ],
      restaurantInfo: {
        name: '',
        address: '',
        category: '',
      },
    };
  },

  updateRestaurantInfo(state, action) {
    return {
      ...state,
      restaurantInfo: {
        ...state.restaurantInfo,
        [action.payload.name]: action.payload.value,
      },
    };
  },
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
