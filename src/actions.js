export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function updateRestaurantField({ name, value }) {
  return {
    type: 'updateRestaurantField',
    payload: {
      name,
      value,
    },
  };
}
