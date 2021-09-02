import { createStore } from 'redux';

const initialState = {
  newId: 100,
  nameText: '',
  categoryText: '',
  addressText: '',
  restaurants: [],
};

const reducer = (state = initialState) => state;

const store = createStore(reducer);

export default store;
