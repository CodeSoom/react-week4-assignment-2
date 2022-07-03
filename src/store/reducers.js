const reducers = {
  updateName(state, action) {
    return {
      ...state,
      name: action.payload.name,
    };
  },

  updateCategory(state, action) {
    return {
      ...state,
      category: action.payload.category,
    };
  },

  updateAddress(state, action) {
    return {
      ...state,
      address: action.payload.address,
    };
  },

  addRestaurant(state) {
    const {
      name,
      address,
      category,
      restaurants,
      newId,
    } = state;

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      restaurants: [...restaurants, {
        name,
        address,
        category,
      }],
    };
  },
};

export default reducers;
