const initState = {
  title: '',
  restaurants: [],
};

export default function reducer(state = initState, action = {}) {
  const reducers = {
    updateTitle: ({ title }) => ({
      ...state,
      title,
    }),
  };

  return reducers[action.type] ? (
    reducers[action.type](action.payload)
  ) : (
    state
  );
}
