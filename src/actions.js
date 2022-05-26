export function updateRestaurantName(restaurantName) {
  return {
    type: 'UPDATE_RESTAURANT_NAME',
    payload: {
      restaurantName,
    },
  };
}

export function updateRestaurantCategory(restaurantCategory) {
  return {
    type: 'UPDATE_RESTAURANT_CATEGORY',
    payload: {
      restaurantCategory,
    },
  };
}

export function updateRestaurantAddress(restaurantAddress) {
  return {
    type: 'UPDATE_RESTAURANT_ADDRESS',
    payload: {
      restaurantAddress,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'ADD_RESTAURANT',
  };
}
