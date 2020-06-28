const initState = {
  newId: 1,
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
      const { newId, title, restaurants } = state;
      return {
        ...state,
        newId: newId + 1,
        title: '',
        restaurants: [...restaurants, { id: newId, title }],
      };
    },
  };

  return reducers[action.type] ? (
    reducers[action.type](action.payload)
  ) : (
    state
  );
}
