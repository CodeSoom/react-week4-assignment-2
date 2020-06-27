const initialState = {
  newId: 1,
  informations: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  const { newId, informations, restaurants } = state;

  if (action.type === 'updateInformations') {
    return {
      ...state,
      informations: {
        ...informations,
        [action.payload.target]: action.payload.value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { name, category, address } = informations;

    return {
      ...state,
      newId: newId + 1,
      informations: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...restaurants, {
        id: newId,
        name,
        category,
        address,
      }],
    };
  }

  return state;
}
