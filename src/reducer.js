const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateInformation') {
    const { information } = action.payload;

    if (!information) {
      return state;
    }

    const { name, category, address } = information;

    return {
      ...state,
      name,
      category,
      address,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      newId, name, category, address, restaurants,
    } = state;

    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      restaurants: [
        ...restaurants, {
          id: newId, name, category, address,
        },
      ],
    };
  }

  return state;
}
