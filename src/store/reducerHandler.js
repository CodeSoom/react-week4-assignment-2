const reducers = {
  updateInputContent: (state, action) => ({
    ...state,
    [action.payload.target]: action.payload.content,
  }),

  addRestaurant: (state) => {
    const {
      newId,
      name,
      category,
      address,
      restaurants,
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
      restaurants: [...restaurants, {
        id: newId,
        name,
        category,
        address,
      }],
    };
  },
};

export default reducers;
