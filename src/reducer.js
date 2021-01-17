import {
  ADD_RESTAURANT,
  CHANGE_RESTAURANT_FIELD,
} from './actions';

export const initialState = {
  newId: 1,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_RESTAURANT) {
    const { newId, restaurants } = state;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [
        ...restaurants,
        { id: newId, value: action.payload },
      ],
      restaurant: initialState.restaurant,
    };
  }

  if (action.type === CHANGE_RESTAURANT_FIELD) {
    const { restaurant } = state;

    return {
      ...state,
      restaurant: {
        ...restaurant,
        ...action.payload,
      },
    };
  }

  return state;
}
