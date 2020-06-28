const initialState = {
  newId: 100,
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    const {
      newId, restaurantName, restaurantCategory, restaurantAddress, restaurants,
    } = state;

    if (restaurantName.length === 0) {
      return state;
    }

    if (restaurantCategory.length === 0) {
      return state;
    }

    if (restaurantAddress.length === 0) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurantName: '',
      restaurantCategory: '',
      restaurantAddress: '',
      restaurants: [...restaurants, {
        id: newId, name: restaurantName, category: restaurantCategory, address: restaurantAddress,
      }],
    };
  }
  return state;
}
