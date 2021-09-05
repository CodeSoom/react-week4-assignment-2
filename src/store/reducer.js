const initialState = {
  name: '',
  category: '',
  address: '',
  restaurants: [
    { name: '마녀주방', category: '분식', address: '서울시 강남구' },
    { name: '시카고피자', category: '양식', address: '이태원동' },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRestaurantInfo') {
    const { infoType, value } = action.payload;
    return {
      ...state,
      [infoType]: value,
    };
  }

  return state;
}
