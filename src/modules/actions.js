export function updateReservationName(reservationName) {
  return {
    type: 'updateReservationName',
    payload: {
      reservationName,
    },
  };
}

export function updateReservationCategory(reservationCategory) {
  return {
    type: 'updateReservationCategory',
    payload: {
      reservationCategory,
    },
  };
}

export function updateReservationAddress(reservationAddress) {
  return {
    type: 'updateReservationAddress',
    payload: {
      reservationAddress,
    },
  };
}

export function addReservation() {
  return ({
    type: 'addReservation',
  });
}
