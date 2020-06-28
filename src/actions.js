export function updateTitle(title) {
  return {
    type: 'updateTitle',
    payload: {
      title,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
