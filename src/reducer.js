import {
  ADD_RESTAURANT,
  CHANGE_RESTAURANT_INPUT,
} from './actions';

const initialState = {
  newId: 1,
  restaurants: [],
  name: '',
  type: '',
  place: '',
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
      type: initialState.type,
      place: initialState.place,
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
