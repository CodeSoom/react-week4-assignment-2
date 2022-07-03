const reducers = {
  updateInputContent: (state, action) => ({
    ...state,
    [action.payload.targetType]: action.payload.content,
  }),

  addRestaurant: (state) => {
    const {
      newId,
      title,
      category,
      address,
      restaurants,
    } = state;

    if (!title || !category || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      title: '',
      category: '',
      address: '',
      restaurants: [...restaurants, {
        id: newId,
        title,
        category,
        address,
      }],
    };
  },
};

export default reducers;
