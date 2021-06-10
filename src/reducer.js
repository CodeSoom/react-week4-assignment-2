export const initialState = {
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
  restaurants: [
    { name: '마녀주방', category: '한식', address: '서울시 강남구' },
  ],
};
export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    return {
      ...initialState,
      restaurants: [
        ...state.restaurants,
        {
          name: 'test',
          category: 'test',
          address: 'test',
        },
      ],
    };
  }
  return state;
}
