const initialReservation = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  newId: 1,
  reservation: initialReservation,
  reservations: [],
};

export default function reducer(state = initialState, action) {
  const actions = {
    updateReservationName: () => ({
      ...state,
      reservationName: action.payload.reservationName,
    }),

    updateReservationCategory: () => ({
      ...state,
      reservationCategory: action.payload.reservationCategory,
    }),

    updateReservationAddress: () => ({
      ...state,
      reservationAddress: action.payload.reservationAddress,
    }),

    addReservation: () => {
      const {
        newId,
        reservations,
        reservation: { name, category, address },
      } = state;

      if (!name) return state;
      if (!category) return state;
      if (!address) return state;

      return ({
        ...state,
        newId: newId + 1,
        reservation: initialReservation,
        reservations: [
          ...reservations,
          {
            id: newId,
            name,
            category,
            address,
          },
        ],
      });
    },
  };

  return actions[action.type]
    ? actions[action.type]()
    : state;
}
