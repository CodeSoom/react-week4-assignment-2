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
          name: '',
          category: '',
          address: '',
        }],
    };
  }

  return state;
}
