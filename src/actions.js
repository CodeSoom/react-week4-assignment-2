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

export function UpdateRestaurantAdress(adressInput) {
  return {
    type: 'UpdateRestaurantAdress',
    payload: {
      adressInput,
    },
  };
}

export function addRestaurant(id) {
  return {
    type: 'addRestaurant',
    payload: {
      id,
    },
  };
}
