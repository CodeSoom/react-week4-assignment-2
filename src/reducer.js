const initialRestaurant = {
  newId: 100,
  name: '',
  category: '',
  address: '',
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

  if (action.type === 'updateAddress') {
    return {
      ...restaurant,
      address: action.payload.address,
    };
  }

  return restaurant;
}
