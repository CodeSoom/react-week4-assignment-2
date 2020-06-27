const initialState = {
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
      restaurants: [...state.restaurants, {
        name: state.informations.name,
        category: state.informations.category,
        address: state.informations.address,
      }],
    };
  }

  return state;
}
