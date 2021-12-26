/**
 * @param state {object}
 * @param action {object}
 * @returns {undefined}
 */
import ActionType from './action/ActionType';

const initState = {
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

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

  return state;
}
