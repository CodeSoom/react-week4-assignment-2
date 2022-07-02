export function UpdateRestaurantName(nameInput) {
  return {
    type: 'UpdateRestaurantName',
    payload: {
      nameInput,
    },
  };
}

export function UpdateRestaurantType(typeInput) {
  return {
    type: 'UpdateRestaurantType',
    payload: {
      typeInput,
    },
  };
}
