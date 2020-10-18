export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function updateRestaurantName(name) {
  return {
    type: 'updateRestaurantName',
    payload: {
      name,
    },
  };
}

export function updateRestaurantCategory(category) {
  return {
    type: 'updateRestaurantCategory',
    payload: {
      category,
    },
  };
}

export function updateRestaurantLocation(location) {
  return {
    type: 'updateRestaurantLocation',
    payload: {
      location,
    },
  };
}
