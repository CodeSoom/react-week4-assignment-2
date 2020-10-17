export function updateRestaurantName(restaurantName) {
  return {
    type: 'updateRestaurantName',
    payload: restaurantName,
  };
}

export function updateRestaurantType(restaurantType) {
  return {
    type: 'updateRestaurantType',
    payload: restaurantType,
  };
}

export function updateRestaurantLocation(restaurantLocation) {
  return {
    type: 'updateRestaurantLocation',
    payload: restaurantLocation,
  };
}

export function addRestaurantInfo({ name, type, location }) {
  return {
    type: 'addRestaurantInfo',
    payload: {
      name,
      type,
      location,
    },
  };
}
