import { createStore } from 'redux';

const initialState = {
  newId: 100,
  restaurants: [
    {
      id: 1,
      name: '뽀식이네 감자탕',
      type: '한식',
      address: '경기도 양평군',
    },
  ],
};

function reducer(state = initialState) {
  return state;
}

const store = createStore(reducer, initState);

export default store;
