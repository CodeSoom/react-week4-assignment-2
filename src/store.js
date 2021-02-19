import { createStore } from 'redux';

const initialState = {
  restaurant: '',
  type: '',
  address: '',
  registers: [],
};

function reducer(state = initialState) {
  return state;
}

const store = createStore(reducer);

export default store;
