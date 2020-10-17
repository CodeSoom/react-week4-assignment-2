export function changeName(name) {
  return {
    type: 'changeName',
    payload: {
      name,
    },
  };
}

export function changeCuisine(cuisine) {
  return {
    type: 'changeCuisine',
    payload: {
      cuisine,
    },
  };
}

export function changeLocation(location) {
  return {
    type: 'changeLocation',
    payload: {
      location,
    },
  };
}

export function clickAddRestaurant() {
  return {
    type: 'clickAddRestaurant',
  };
}
