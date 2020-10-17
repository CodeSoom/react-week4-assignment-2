const initialState = {
  newId: 1,
  reservationName: '',
  reservationCategory: '',
  reservationAddress: '',
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
        reservationName,
        reservationCategory,
        reservationAddress,
      } = state;

      if (!reservationName) return state;
      if (!reservationCategory) return state;
      if (!reservationAddress) return state;

      return ({
        ...state,
        newId: newId + 1,
        reservationName: '',
        reservationCategory: '',
        reservationAddress: '',
        reservations: [
          ...reservations,
          {
            id: newId,
            name: reservationName,
            category: reservationCategory,
            address: reservationAddress,
          },
        ],
      });
    },
  };

  return actions[action.type]
    ? actions[action.type]()
    : state;
}
