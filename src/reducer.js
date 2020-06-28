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

    if (!restaurantName || !restaurantCategory || !restaurantAddress) {
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
