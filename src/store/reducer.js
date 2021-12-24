import { CHANGE_INPUT } from './actions';
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

    if (inputKeys.includes(name)) {
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
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || identity)(state, action);
}
