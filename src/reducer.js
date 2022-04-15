const initialState = {
  newId: 100,
  restaurantsName: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    const {
      newId, restaurantsName, category, address, restaurants,
    } = state;

    if (!restaurantsName || !category || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurantsName: '',
      category: '',
      address: '',
      restaurants: [...restaurants, {
        id: newId, name: restaurantsName, category, address,
      }],
    };
  }

  if (action.type === 'updateRestaurant') {
    return {
      ...state,
      restaurantsName: '경주횟집',
      category: '횟집',
      address: '구룡포읍',
    };
  }

  return state;
}
