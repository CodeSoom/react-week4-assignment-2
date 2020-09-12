const initalState = {
  restaurantList: [],
};

export default function reducer(state = initalState, action) {
  // Don't Forget:: action의 type을 확인
  if (action.type === 'setRestaurantList') {
    const { restaurantList } = action.payload;
    return {
      ...state,
      restaurantList,
    };
  }
  return state;
}
