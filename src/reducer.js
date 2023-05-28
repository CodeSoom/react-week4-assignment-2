const initialState = {
  id: 100,
  title: '',
  sort: '',
  location: '',
  restaurants: [
    {
      id: 1,
      title: '파리바게트',
      sort: '빵집',
      location: '구로',
    },
  ],
};

const actionCreator = {
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
};

export default function reducer(state = initialState, action) {
  if (actionCreator[action.type]) {
    const { payload } = action;
    return actionCreator[action.type](state, { payload });
  }

  return state;
}
