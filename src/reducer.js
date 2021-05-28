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

  if (action.type === 'addRestaurant') {
    const {
      newId,
      name,
      category,
      address,
      restaurants,
    } = restaurant;

    if (!name || !category || !address) {
      return restaurant;
    }

    return {
      ...restaurant,
      newId: newId + 1,
      restaurants: [...restaurants, {
        id: newId, name, category, address,
      }],
      name: '',
      category: '',
      address: '',
    };
  }

  return restaurant;
}
