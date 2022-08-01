export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function changeNewRestaurant({ inputName, input }) {
  return {
    type: 'changeNewRestaurant',
    payload: {
      inputName,
      input,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
