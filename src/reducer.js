export default function reducer(state, action) {
  if (action.type === 'updateReservations') {
    return {
      ...state,
      [action.payload.key]: action.payload.value,
    };
  }

  const {
    id, name, category, address, reservations,
  } = state;

  if (action.type === 'addReservations') {
    return {
      ...state,
      id: id + 1,
      name: '',
      category: '',
      address: '',
      reservations: [
        ...reservations,
        {
          id, name, category, address,
        },
      ],
    };
  }

  return state;
}
