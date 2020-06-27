import { v4 as uuid } from 'uuid';

export const initialState = {
  input: {
    name: '',
    category: '',
    address: ''
  },
  restaurants: []
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    const { name, category, address } = action.payload.input;

    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      input: {
        name: '',
        category: '',
        address: ''
      },
      restaurants: [...state.restaurants, {
        id: uuid(),
        name,
        category,
        address
      }]
    };
  }

  if (action.type === 'updateInput') {

    const input = action.payload.input;

    return {
      ...state,
      input: {
        ...state.input,
        ...input
      }
    };
  }

  if (action.type === 'setRestaurants') {
    return {
      ...initialState
    };
  }

  return state;
}