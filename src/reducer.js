import { ADD_RESTAURANT } from './actions';

const initialState = {
  restaurants: [],
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

  return state;
}
