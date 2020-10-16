const initialState = {
  nameTitle: '',
  classification: '',
  location: '',
  newId: 100,
};

const infoValue = {
  ...initialState,
};

const restaurants = [];

export default function reducer(
  state = { initialState, infoValue, restaurants },
  action,
) {
  if (action.type === 'updateInformation') {
    const { name, value } = action.payload;
    return {
      ...state.infoValue,
      [name]: value,
    };
  }

  if (action.type === 'addInformation') {
    const {
      newId, nameTitle, classification, location,
    } = action.payload;
    return {
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
    return {
      ...infoValue,
    };
  }

  return state;
}
