export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function changeNewRestaurant({ inputName, input }) {
  const inputNameWithCapitalizedFirstLetter = inputName[0].toUpperCase() + inputName.substring(1);
  const actionType = `change${inputNameWithCapitalizedFirstLetter}`;
  return {
    type: actionType,
    payload: {
      inputName,
      input,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
