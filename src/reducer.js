const initialState = {
  newId: 1,
  restaurants: [],
  name: '',
  cuisine: '',
  location: '',
};

const reducers = {
  changeName: (state, { payload }) => ({
    ...state,
    name: payload.name,
  }),
  changeCuisine: (state, { payload }) => ({
    ...state,
    cuisine: payload.cuisine,
  }),
  changeLocation: (state, { payload }) => ({
    ...state,
    location: payload.location,
  }),
  clickAddRestaurant: (state) => {
    const {
      newId,
      name,
      cuisine,
      location,
      restaurants,
    } = state;

    return {
      ...state,
      newId: state.id + 1,
      restaurants: [
        ...restaurants,
        {
          id: newId,
          name,
          cuisine,
          location,
        },
      ],
      name: '',
      cuisine: '',
      location: '',
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
