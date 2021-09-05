export function updateInput(name, value) {
  if (name === 'name') {
    return {
      type: 'updateNameText',
      payload: {
        nameText: value,
      },
    };
  }
  if (name === 'category') {
    return {
      type: 'updateCategoryText',
      payload: {
        categoryText: value,
      },
    };
  }
  return {
    type: 'updateAddressText',
    payload: {
      addressText: value,
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
