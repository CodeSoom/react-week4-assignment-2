const initialState = {
  newId: 1,
  shopName: '',
  shopType: '',
  shopAddress: '',
  restaurants: [],
};

export default function reducer(state = initialState, action = { type: '' }) {
  if (action.type === 'setRestaurants') {
    const {
      newId, shopName, shopType, shopAddress, restaurants,
    } = state;

    if (!shopName) return state;

    return {
      ...state,
      newId: newId + 1,
      shopName: '',
      shopType: '',
      shopAddress: '',
      restaurants: [...restaurants, {
        id: newId, name: shopName, type: shopType, address: shopAddress,
      }],
    };
  }

  return state;
}
