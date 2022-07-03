import reducers from './reducers';

export const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const reducer = (state = initialState, action) => {
  if (!action || !reducers[action.type]) return state;

  return reducers[action.type](state, action);
};

export default reducer;
