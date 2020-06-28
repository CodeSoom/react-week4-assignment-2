const initState = {
  newId: 1,
  title: '',
  kind: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initState, action = {}) {
  const reducers = {
    updateRestaurant: ({ name, value }) => ({
      ...state,
      [name]: value,
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
