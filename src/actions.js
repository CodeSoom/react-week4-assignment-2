function updateRestaurantInformation(name, value) {
  return {
    type: 'updateRestaurantInformation',
    payload: {
      name,
      value,
    },
  };
}

function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export {
  updateRestaurantInformation,
  addRestaurant,
  setRestaurants,
};
