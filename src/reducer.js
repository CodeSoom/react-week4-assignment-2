const initialState = {
  newId: 100,
  nameText: '',
  categoryText: '',
  addressText: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateNameText') {
    return {
      ...state,
      nameText: action.payload.nameText,
    };
  }

  if (action.type === 'updateCategoryText') {
    return {
      ...state,
      categoryText: action.payload.categoryText,
    };
  }

  if (action.type === 'updateAddressText') {
    return {
      ...state,
      addressText: action.payload.addressText,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      newId,
      nameText,
      categoryText,
      addressText,
      restaurants,
    } = state;

    if (!nameText || !categoryText || !addressText) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      nameText: '',
      categoryText: '',
      addressText: '',
      restaurants: [...restaurants, {
        id: newId,
        name: nameText,
        category: categoryText,
        address: addressText,
      }],
    };
  }

  return state;
}
