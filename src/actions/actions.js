export function setRestaurants(restaurants) {
  return {
    type: 'restaurants/setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'restaurants/addRestaurant',
  };
}

export function updateRestaurantName(name) {
  return {
    type: 'restaurant/updateRestaurantName',
    payload: { name },
  };
}

export function updateRestaurantCategory(category) {
  return {
    type: 'restaurant/updateRestaurantCategory',
    payload: { category },
  };
}

export function updateRestaurantAddress(address) {
  return {
    type: 'restaurant/updateRestaurantAddress',
    payload: { address },
  };
}
