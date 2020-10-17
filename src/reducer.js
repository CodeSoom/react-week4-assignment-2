import {
  ADD_RESTAURANT,
  CHANGE_RESTAURANT_INPUT,
} from './actions';

export const initialState = {
  newId: 1,
  restaurants: [],
  name: '',
  category: '',
  address: '',
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
      name: initialState.name,
      category: initialState.category,
      address: initialState.address,
    };
  }

  if (action.type === CHANGE_RESTAURANT_INPUT.NAME) {
    return {
      ...state,
      name: action.payload,
    };
  }

  if (action.type === CHANGE_RESTAURANT_INPUT.CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  }

  if (action.type === CHANGE_RESTAURANT_INPUT.ADDRESS) {
    return {
      ...state,
      address: action.payload,
    };
  }

  return state;
}
