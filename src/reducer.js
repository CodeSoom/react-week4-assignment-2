const initialRestaurant = {
  newId: 100,
  name: '',
  category: '',
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

  if (action.type === 'updateCategory') {
    return {
      ...restaurant,
      category: action.payload.category,
    };
  }

  return restaurant;
}
