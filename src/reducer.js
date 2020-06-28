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
      const {
        newId, title, kind, address, restaurants,
      } = state;
      return {
        ...state,
        newId: newId + 1,
        title: '',
        kind: '',
        address: '',
        restaurants: [
          ...restaurants,
          {
            id: newId, title, kind, address,
          },
        ],
      };
    },
  };

  return reducers[action.type] ? (
    reducers[action.type](action.payload)
  ) : (
    state
  );
}
