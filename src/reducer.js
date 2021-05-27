const initialRestaurant = {
  newId: 100,
  name: '',
  restaurants: [],
};

export default function reducer(restaurant = initialRestaurant, action) {
  if (action === undefined) {
    return restaurant;
  }

  if (action.type === 'updateName') {
    return {
      ...restaurant,
      name: action.payload.name,
    };
  }
  return restaurant;
}
