const initialState = {
  name: '',
  category: '',
  location: '',
  restaurants: [],
};

const addRestaurant = ({ state }) => {
  const {
    name, category, location, restaurants,
  } = state;

  return {
    ...state,
    restaurants: [...restaurants, { name, category, location }],
  };
};

const updateRestaurantName = ({ state, payload }) => ({
  ...state,
  name: payload.name,
});

const reducers = {
  addRestaurant,
  updateRestaurantName,
};

export default function reducer(state = initialState, { type, payload }) {
  if (reducers[type]) {
    return reducers[type]({ state, payload });
  }
  return state;
}
