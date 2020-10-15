export default function reducer(state, action) {
  const { restaurants, restaurant, newId } = state;

  if (action.type === 'addRestaurant') {
    return ({
      newId: newId + 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...restaurants, { ...restaurant, id: newId }],
    });
  }

  return state;
}
