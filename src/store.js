import { createStore } from 'redux';

const initState = {
  restaurants: [],
};

const reducer = (state, action) => state;

const store = createStore(reducer, initState);

export default store;