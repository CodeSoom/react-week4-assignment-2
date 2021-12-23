import generateId from '../lib/uniqId';
import { ACTION_TYPES } from './actions';

export const initialState = {
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === ACTION_TYPES.CHANGE_NAME) {
    return {
      ...state,
      name: action.payload.name,
    };
  }
  if (action.type === ACTION_TYPES.CHANGE_CATEGORY) {
    return {
      ...state,
      category: action.payload.category,
    };
  }
  if (action.type === ACTION_TYPES.CHANGE_ADDRESS) {
    return {
      ...state,
      address: action.payload.address,
    };
  }
  if (action.type === ACTION_TYPES.ADD_RESTAURANTS) {
    return {
      ...state,
      restaurants: [...state.restaurants, { ...action.payload.restaurant, id: generateId() }],
    };
  }
  return state;
}
