export function updateRestaurantName(restaurantName) {
  return {
    type: 'updateRestaurantName',
    payload: {
      restaurantName,
    },
  };
}

export function updateRestaurantCategory(restaurantCategory) {
  return {
    type: 'updateRestaurantCategory',
    payload: {
      restaurantCategory,
    },
  };
}

export function updateRestaurantAddress(restaurantAddress) {
  return {
    type: 'updateRestaurantAddress',
    payload: {
      restaurantAddress,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
