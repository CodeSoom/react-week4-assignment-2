export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function createRestaurant() {
  return {
    type: 'createRestaurant',
  };
}
