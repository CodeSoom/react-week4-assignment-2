function reducer(state, action) {
  if (action.type === 'clickSubmit') {
    const {
      newId, name, category, address, restaurants,
    } = state;

    return {
      newId: newId + 1,
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

  return state;
}

export default reducer;
