const initialState = { restaurants: [] };
const initialAction = { type: 'initialType' };

export default function reducer(state = initialState, action = initialAction) {
  if (action.type === 'initialType') return state;

  return state;
}
