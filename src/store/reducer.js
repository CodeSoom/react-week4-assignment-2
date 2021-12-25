import { ADD_NEW_RESTAURANT, CHANGE_INPUT } from './actions';
import { identity } from '../lib';

const initialState = {
  newId: 100,
  input: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const inputKeys = ['name', 'category', 'address'];

const reducers = {
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;

    const isValidName = inputKeys.includes(name);

    if (isValidName) {
      return ({
        ...state,
        input: {
          ...state.input,
          [name]: value,
        },
      });
    }
    return state;
  },
  [ADD_NEW_RESTAURANT]: (state) => {
    const { input } = state;

    const isEmpty = Object.values(input).some((value) => !value);

    if (isEmpty) {
      return state;
    }

    return ({
      ...state,
      newId: state.newId + 1,
      input: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...state.restaurants, {
        ...input,
        newId: state.newId,
      }],

    });
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || identity)(state, action);
}
