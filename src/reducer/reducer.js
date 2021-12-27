/**
 * @param state {object}
 * @param action {object}
 * @returns {undefined}
 */
import ActionType from './action/ActionType';
import RestaurantState from '../domain/RestaurantState';

const initState = RestaurantState.initJson();

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  if (type === ActionType.UPDATE_NAME) {
    return {
      ...state,
      name: payload.name,
    };
  }

  if (type === ActionType.UPDATE_CATEGORY) {
    return {
      ...state,
      category: payload.category,
    };
  }

  if (type === ActionType.UPDATE_ADDRESS) {
    return {
      ...state,
      address: payload.address,
    };
  }

  if (type === ActionType.ADD_RESTAURANT) {
    return RestaurantState.newJsonWith(state);
  }

  return state;
}
