import { CHANGE_NAME } from './actions';

const initialState = {
  newId: 100,
  input: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],

};

const reducers = {
  [CHANGE_NAME]: () => {},

};

export default function reducer(state = initialState, action = {}) {
  return state;
}
