const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  items: [],
};

const restaurant = (state = initialState, action) => {
  if (action.type === 'changeRestaurantField') {
    return {
      ...state,
      name: action.payload.name,
      category: action.payload.category,
      address: action.payload.address,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      newId, name, category, address, items,
    } = state;

    if (!name && !category && !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      items: [
        ...items,
        {
          id: newId, name, category, address,
        },
      ],
    };
  }

  return state;
};

export default restaurant;
