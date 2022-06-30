import reducers from './reducerHandler';

export const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
}
