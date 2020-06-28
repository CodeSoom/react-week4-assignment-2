export function updateRestaurantName(name) {
  return {
    type: 'updateRestaurantName',
    payload: {
      restaurant: {
        name,
      },
    },
  };
}

export function updateRestaurantCategory(category) {
  return {
    type: 'updateRestaurantCategory',
    payload: {
      restaurant: {
        category,
      },
    },
  };
}

export function updateRestaurantAddress(address) {
  return {
    type: 'updateRestaurantAddress',
    payload: {
      restaurant: {
        address,
      },
    },
  };
}

export function registerReservation() {
  return {
    type: 'registerReservation',
  };
}

export function setReservations(reservations) {
  return {
    type: 'setReservations',
    payload: {
      reservations,
    },
  };
}
