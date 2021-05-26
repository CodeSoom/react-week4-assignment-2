export function addRestaurant(restaurant) {
  const {
    id, name, category, address,
  } = restaurant;
  return {
    type: 'restaurant/addItem',
    payload: {
      id,
      name,
      category,
      address,
    },
  };
}

export function updateField({ field, value }) {
  return {
    type: 'restaurant/updateField',
    payload: {
      field,
      value,
    },
  };
}

export default {};
