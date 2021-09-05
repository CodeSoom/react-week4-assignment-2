const initialRestaurant = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  newId: 100,
  restaurant: initialRestaurant,
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRestaurant') {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      restaurant: { name, category, address },
      newId,
      restaurants,
    } = state;

    if (name === '' || category === '' || address === '') {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurant: initialRestaurant,
      restaurants: restaurants.concat({
        id: newId,
        name,
        category,
        address,
      }),
    };
  }

  return state;
}
