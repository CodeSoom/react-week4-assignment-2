import {
  ADD_RESTAURANT,
  CHANGE_RESTAURANT_INPUT,
} from './actions';

const initialState = {
  restaurants: [],
  name: '',
  type: '',
  place: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_RESTAURANT) {
    return {
      ...state,
      restaurants: [
        ...state.restaurants,
        action.payload,
      ],
    };
  }

  if (action.type === CHANGE_RESTAURANT_INPUT.NAME) {
    return {
      ...state,
      name: action.payload,
    };
  }

  if (action.type === CHANGE_RESTAURANT_INPUT.TYPE) {
    return {
      ...state,
      type: action.payload,
    };
  }

  if (action.type === CHANGE_RESTAURANT_INPUT.PLACE) {
    return {
      ...state,
      place: action.payload,
    };
  }

  return state;
}
