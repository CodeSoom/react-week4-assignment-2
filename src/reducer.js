export const restaurants = {
  newId: 0,
  listName: '',
  listCategory: '',
  listAddress: '',
  list: [],
};

export default function reducer(state = restaurants, action) {
  if (action.type === 'setRestaurants') {
    return {
      ...action.payload.restaurants,
    };
  }

  if (action.type === 'updateName') {
    return {
      ...state,
      listName: action.payload.listName,
    };
  }

  if (action.type === 'updateCategory') {
    return {
      ...state,
      listCategory: action.payload.listCategory,
    };
  }

  if (action.type === 'updateAddress') {
    return {
      ...state,
      listAddress: action.payload.listAddress,
    };
  }

  if (action.type === 'updateReservation') {
    const {
      newId,
      listName,
      listCategory,
      listAddress,
      list,
    } = state;

    if (!listName || !listCategory || !listAddress) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      listName: '',
      listCategory: '',
      listAddress: '',
      list: [
        ...list,
        {
          id: newId,
          name: listName,
          category: listCategory,
          address: listAddress,
        }],
    };
  }

  return state;
}
