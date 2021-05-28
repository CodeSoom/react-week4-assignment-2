export const initialState = {
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

  if (type === 'restaurant/updateRestaurantName') {
    const { name } = action.payload;

    return {
      ...state,
      name,
    };
  }

  if (type === 'restaurant/updateRestaurantCategory') {
    const { category } = action.payload;

    return {
      ...state,
      category,
    };
  }

  if (type === 'restaurant/updateRestaurantAddress') {
    const { address } = action.payload;

    return {
      ...state,
      address,
    };
  }

  return state;
}
