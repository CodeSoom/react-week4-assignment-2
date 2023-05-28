const initialState = {
  id: 100,
  title: '',
  sort: '',
  location: '',
  restaurants: [],
};

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

const reducers = createReducer(initialState, {
  UPDATE_INPUT: (state, { payload }) => {
    const { name, value } = payload;
    return ({
      ...state,
      [name]: value,
    }
    );
  },
  ADD_RESTAURANT: (state) => {
    const {
      id, title, sort, location, restaurants,
    } = state;
    return {
      ...state,
      id: id + 1,
      title: '',
      sort: '',
      location: '',
      restaurants: [
        ...restaurants, {
          id, title, sort, location,
        }],
    };
  },
});

export default reducers;
