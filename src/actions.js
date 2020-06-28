function updateRestaurantInformation(name, value) {
  return {
    type: 'updateRestaurantInformation',
    payload: {
      name,
      value,
    },
  };
}

function addInformation() {
  return {
    type: 'addInformation',
  };
}

function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { informations: restaurants },
  };
}

export {
  updateRestaurantInformation,
  addInformation,
  setRestaurants,
};
