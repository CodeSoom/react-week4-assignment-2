import { createStore } from 'redux';

const initialState = {
  registers: [],
};

function reducer(state = initialState) {
  return state;
}

const store = createStore(reducer);

export default store;
