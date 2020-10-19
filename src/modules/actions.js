export function updateReservation({ target, value }) {
  return {
    type: 'updateReservation',
    payload: { target, value },
  };
}

export function addReservation() {
  return ({
    type: 'addReservation',
  });
}
