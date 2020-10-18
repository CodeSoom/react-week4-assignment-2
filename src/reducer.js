const initialState = {
  newId: 100,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const reduces = {

};

export default function reducer(state = initialState, action) {
  if (!reduces[action.type]) {
    return state;
  }

  return reduces[action.type](state, action);
}
