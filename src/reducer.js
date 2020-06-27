function reducer(state, action) {
  if (action.type === 'changeCategory') {
    return {
      ...state,
      category: action.payload.category,
    };
  }

  if (action.type === 'changeAddress') {
    return {
      ...state,
      address: action.payload.address,
    };
  }

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
