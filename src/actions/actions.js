export function setRestaurants(restaurants) {
  return {
    type: 'restaurants/setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export default {};
