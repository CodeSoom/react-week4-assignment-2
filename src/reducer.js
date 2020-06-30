import { v4 as uuid } from 'uuid';

export const initialState = {
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    const { name, category, address } = state.restaurant;

    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...state.restaurants, {
        id: uuid(),
        name,
        category,
        address,
      }],
    };
  }

  if (action.type === 'updateInput') {
    const restaurant = action.payload;

    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        ...restaurant,
      },
    };
  }

  return state;
}
