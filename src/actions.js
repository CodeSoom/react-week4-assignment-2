export function updateRestaurantName(nameInput) {
  return {
    type: 'updateRestaurantName',
    payload: {
      nameInput,
    },
  };
}

export function updateRestaurantType(typeInput) {
  return {
    type: 'updateRestaurantType',
    payload: {
      typeInput,
    },
  };
}

export function updateRestaurantAdress(adressInput) {
  return {
    type: 'updateRestaurantAdress',
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
