const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateInformation') {
    const { name, category, address } = action.payload;

    if (name) {
      return {
        ...state,
        name,
      };
    }

    if (category) {
      return {
        ...state,
        category,
      };
    }

    if (address) {
      return {
        ...state,
        address,
      };
    }
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
