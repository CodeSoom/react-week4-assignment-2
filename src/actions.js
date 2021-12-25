export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

// lint 에러 제거용
export function fnc() {
  return '';
}
