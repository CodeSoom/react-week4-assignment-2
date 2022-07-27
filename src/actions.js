export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function changeName(name) {
  return {
    type: 'changeName',
    payload: {
      name,
    },
  };
}

export function changeType(type) {
  return {
    type: 'changeName',
    payload: {
      type,
    },
  };
}

export function changeLocation(location) {
  return {
    type: 'changeName',
    payload: {
      location,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
