const defaultState = {
  newId: 20,
  restaurant: {
    name: '', category: '', address: '',
  },
  restaurants: [],
};

export default function reducer(state = defaultState, action) {
  // TODO: Computed property names 활용 예정
  if (action.type === 'updateRestaurant') {
    return {
      ...state,
      restaurant: action.payload.restaurant,
    };
  }

  if (action.type === 'addRestaurant') {
    const { newId, restaurant, restaurants } = state;

    if (!restaurant.name || !restaurant.category || !restaurant.address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurant: {
        name: '', category: '', address: '',
      },
      restaurants: [...restaurants, {
        id: newId,
        name: restaurant.name,
        category: restaurant.category,
        address: restaurant.address,
      }],
    };
  }

  return state;
}
