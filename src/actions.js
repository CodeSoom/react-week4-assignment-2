export function addRestaurant(restaurant) {
  const {
    id, name, category, address,
  } = restaurant;
  return {
    type: 'AddRestaurant',
    payload: {
      id,
      name,
      category,
      address,
    },
  };
}

export default {};
