export const initialState = {
  restaurantInformation: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
  nextId: 1,
};

export default function reducer(state = initialState, action = { type: '' }) {
  if (action.type === 'changeInput') {
    const { name, value } = action.payload;

    return {
      ...state,
      restaurantInformation: {
        ...state.restaurantInformation,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { name, category, address } = state.restaurantInformation;

    const newRestaurant = {
      id: state.nextId,
      name,
      category,
      address,
    };

    return {
      ...state,
      restaurantInformation: initialState.restaurantInformation,
      nextId: state.nextId + 1,
      restaurants: [
        ...state.restaurants,
        newRestaurant,
      ],
    };
  }

  return state;
}
