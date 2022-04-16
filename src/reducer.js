const initialState = {
  restaurants: [
    {
      id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
    },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: [...action.payload.restaurants],
    };
  }
  return state;
}
