export default function updateReservations(key, value) {
  return {
    type: 'updateReservations',
    payload: {
      [key]: value,
    },
  };
}
