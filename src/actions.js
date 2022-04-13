export function updateInformation({ name, category, address }) {
  return {
    type: 'updateInformation',
    payload: {
      name,
      category,
      address,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
