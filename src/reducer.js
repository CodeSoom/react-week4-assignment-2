const initialState = {
  newId: 1,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
};

const reducers = {
  onChange: (state, { payload: { name, value } }) => ({
    ...state,
    restaurant: {
      ...state.restaurant,
      [name]: value,
    },
  }),
  onClick: (state) => {
    const {
      id,
      newId,
      restaurant,
      restaurants,
    } = state;

    return {
      ...state,
      newId: id + 1,
      restaurants: [
        ...restaurants,
        {
          ...restaurant,
          id: newId,
        },
      ],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!action || action.type.indexOf('@@') > -1) {
    return state;
  }

  const { type } = action;

  return reducers[type](state, action);
}
