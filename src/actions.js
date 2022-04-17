export function updateInformation({ information }) {
  return {
    type: 'updateInformation',
    payload: {
      information,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
