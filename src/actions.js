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
