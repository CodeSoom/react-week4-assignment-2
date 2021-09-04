export function updateRestaurantName(name) {
  return {
    type: 'updateRestaurantName',
    payload: { name },
  };
}

export function updateRestaurantCategory(category) {
  return {
    type: 'updateRestaurantCategory',
    payload: { category },
  };
}

export function updateRestaurantAddress(address) {
  return {
    type: 'updateRestaurantAddress',
    payload: { address },
  };
}

export function addRestaurant() {
  return { type: 'addRestaurant' };
}
