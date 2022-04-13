const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer({
  state = initialState,
  action,
}) {
  if (action.type === 'addRestaurant') {
    if (!action.payload.name || !action.payload.category) {
      return state;
    }

    return {
      ...state,
      name: '',
      category: '',
      address: '',
      newId: state.newId + 1,
      restaurants: [
        ...state.restaurants,
        {
          id: state.newId,
          name: action.payload.name,
          category: action.payload.category,
          address: action.payload.address,
        }],
    };
  }

  return state;
}
