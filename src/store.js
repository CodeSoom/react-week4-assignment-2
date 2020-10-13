import { createStore } from 'redux';

const initialState = { restaurants: [] };
const initialType = { type: 'initialType' };

function reducer(state = initialState, action = initialType) {
  if (action.type === 'initialType') return state;

  return state;
}

const store = createStore(reducer);

export default store;
