export function updateInformation(category, content) {
  return {
    type: 'updateInformation',
    payload: {
      category,
      content,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
