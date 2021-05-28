export const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducers(state = initialState, action) {
  const { type } = action;

  if (type === 'restaurants/setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  if (type === 'restaurants/updateRestaurantName') {
    const { name } = action.payload;

    return {
      ...state,
      name,
    };
  }

  if (type === 'restaurants/updateRestaurantCategory') {
    const { category } = action.payload;

    return {
      ...state,
      category,
    };
  }

  if (type === 'restaurants/updateRestaurantAddress') {
    const { address } = action.payload;

    return {
      ...state,
      address,
    };
  }

  if (type === 'restaurants/addRestaurant') {
    const {
      name, category, address,
      restaurants,
      newId,
    } = state;

    return {
      ...state,
      newId: newId + 1,
      name: '',
      category: '',
      address: '',
      restaurants: [
        ...restaurants,
        {
          newId,
          name,
          category,
          address,
        },
      ],
    };
  }

  return state;
}
