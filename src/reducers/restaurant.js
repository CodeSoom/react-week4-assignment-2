const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const restaurant = (state = initialState, action) => {
  if (action.type === 'updateRestaurantName') {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  if (action.type === 'updateRestaurantCategory') {
    return {
      ...state,
      category: action.payload.category,
    };
  }

  if (action.type === 'updateRestaurantAddr') {
    return {
      ...state,
      address: action.payload.address,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      newId, name, category, address, restaurants,
    } = state;

    if (!name && !category && !address) {
      return state;
    }

    return {
      ...state,
      name: '',
      category: '',
      address: '',
      restaurants: [
        ...restaurants,
        {
          id: newId, name, category, address,
        },
      ],
    };
  }
};

export default restaurant;
