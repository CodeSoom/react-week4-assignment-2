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
  if (action.type === 'updateInformations') {
    return {
      ...state,
      informations: {
        ...state.informations,
        [action.payload.target]: action.payload.value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    return {
      ...state,
      newId: state.newId + 1,
      informations: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...state.restaurants, {
        id: state.newId,
        name: state.informations.name,
        category: state.informations.category,
        address: state.informations.address,
      }],
    };
  }

  return state;
}
