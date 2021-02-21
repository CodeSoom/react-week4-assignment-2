export function updateReservations(key, value) {
  return {
    type: 'updateReservations',
    payload: {
      [key]: value,
    },
  };
}

export function addReservations() {
  return {
    type: 'addReservations',
  };
}
