export const changeRestaurantData = (state, action) => {
  const { name, value } = action.payload;

  return {
    ...state,
    [name]: value,
  };
};

export const addRestaurantData = (state) => {
  const {
    name,
    category,
    address,
    restaurants,
  } = state;

  if (!name || !category || !address) return state;

  const lastIndexDerive = (arr) => arr[arr.length - 1];

  return {
    name: '',
    category: '',
    address: '',
    restaurants: restaurants.concat(
      {
        id: (lastIndexDerive(restaurants)?.id ?? 0) + 1,
        text: `${name} | ${category} | ${address}`,
      },
    ),
  };
};
