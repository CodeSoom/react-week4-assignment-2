const initState = {
  newId: 1,
  name: '',
  category: '',
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
        newId, name, category, address, restaurants,
      } = state;
      return {
        ...state,
        newId: newId + 1,
        name: '',
        category: '',
        address: '',
        restaurants: [
          ...restaurants,
          {
            id: newId, name, category, address,
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
