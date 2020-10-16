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

export function updateRestaurantAddr(address) {
  return {
    type: 'updateRestaurantAddr',
    payload: {
      address,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
