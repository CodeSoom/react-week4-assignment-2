const initialState = {
  newId: 100,
  information: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateInformation') {
    const { information } = action.payload;

    if (!information) {
      return state;
    }

    const newInformation = {
      name: 'New restaurant',
      category: 'New category',
      address: 'New address',
    };

    return {
      ...state,
      information: newInformation,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      newId, information, restaurants,
    } = state;

    const { name, category, address } = information;
    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      information: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [
        ...restaurants, {
          id: newId, information,
        },
      ],
    };
  }

  return state;
}
