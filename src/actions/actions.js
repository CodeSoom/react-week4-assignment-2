export function setRestaurants(restaurants) {
  return {
    type: 'restaurants/setRestaurants',
    payload: { restaurants },
  };
}

export function addRestaurant() {
  return {
    type: 'restaurants/addRestaurant',
  };
}

export function updateRestaurantName(name) {
  return {
    type: 'restaurants/updateRestaurantName',
    payload: { name },
  };
}

export function updateRestaurantCategory(category) {
  return {
    type: 'restaurants/updateRestaurantCategory',
    payload: { category },
  };
}

export function updateRestaurantAddress(address) {
  return {
    type: 'restaurants/updateRestaurantAddress',
    payload: { address },
  };
}
