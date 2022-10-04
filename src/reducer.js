const initialState = {
  newId: 0,
  listTitle: '',
  listMenu: '',
  listAddress: '',
  list: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateReservation') {
    const {
      newId,
      listTitle,
      listMenu,
      listAddress,
      list,
    } = state;

    if (!listTitle || !listMenu || !listAddress) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      listTitle: '',
      listMenu: '',
      listAddress: '',
      list: [
        ...list,
        {
          id: newId,
          title: listTitle,
          menu: listMenu,
          address: listAddress,
        }],
    };
  }

  return state;
}
