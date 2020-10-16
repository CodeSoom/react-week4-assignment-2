const initialState = {
  infoValue: {
    nameTitle: '',
    classification: '',
    location: '',
  },
  newId: 100,
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateInformation') {
    const { name, value } = action.payload;

    return {
      ...state,
      infoValue: {
        ...state.infoValue,
        [name]: value,
      },
    };
  }

  if (action.type === 'addInformation') {
    const { restaurants, newId } = state;
    const {
      nameTitle, classification, location,
    } = action.payload;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [
        ...restaurants,
        {
          id: newId,
          nameTitle,
          classification,
          location,
        },
      ],
    };
  }

  if (action.type === 'initializeInformation') {
    const { infoValue } = initialState;
    return {
      ...state,
      infoValue,
    };
  }

  return state;
}
