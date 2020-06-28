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
    addRestaurant: () => {
      const { title, restaurants } = state;
      return {
        ...state,
        title: '',
        restaurants: [...restaurants, { id: 2, title }],
      };
    },
  };

  return reducers[action.type] ? (
    reducers[action.type](action.payload)
  ) : (
    state
  );
}
