const initialState = {
  newId: 50,
  restaurants: [],
  restaurantInfo: {
    title: '',
    address: '',
    category: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurants') {
    const values = Object.values(state.restaurantInfo);
    const isAllValuesEmpty = values.every((value) => value === '');
    if (isAllValuesEmpty) {
      return state;
    }

    return {
      ...state,
      newId: state.newId + 1,
      restaurants: [
        ...state.restaurants,
        { id: state.newId, ...state.restaurantInfo },
      ],
    };
  }
  if (action.type === 'updateRestaurantInfo') {
    return {
      ...state,
      restaurantInfo: {
        ...state.restaurantInfo,
        [action.payload.name]: action.payload.value,
      },
    };
  }
  return state;
}
