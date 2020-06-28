export function changeRestaurant(field, value) {
  return {
    type: 'changeRestaurant',
    payload: {
      field, value,
    },
  };
}

export function saveNewRestaurant() {
  return {
    type: 'saveNewRestaurant',
  };
}

export function setInitialRestaurants(restaurants) {
  return {
    type: 'setInitialRestaurants',
    payload: {
      restaurants,
    },
  };
}
