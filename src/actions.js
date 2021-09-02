export function updateNameText(nameText) {
  return {
    type: 'updateNameText',
    payload: {
      nameText,
    },
  };
}

export function updateCategoryText(categoryText) {
  return {
    type: 'updateCategoryText',
    payload: {
      categoryText,
    },
  };
}

export function updateAddressText(addressText) {
  return {
    type: 'updateAddressText',
    payload: {
      addressText,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function setRestaurants() {
  return {
    type: 'setRestaurants',
  };
}
