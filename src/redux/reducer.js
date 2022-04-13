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
    if (!action.payload.name) {
      return state;
    }

    return {
      ...state,
      newId: state.newId + 1,
      name: '',
      category: '',
      address: '',
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
