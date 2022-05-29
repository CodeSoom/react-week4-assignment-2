const initialState = {
  newId: 100,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

const actions = {
  addRestaurant: (state) => ({
    ...state,
    newId: state.newId + 1,
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
    restaurants: [state.restaurants, {
      id: state.newId,
      name: state.restaurant.name,
      category: state.restaurant.category,
      address: state.restaurant.address,
    }],
  }),
};

const defaultAction = (state) => state;

export default function reducer(state = initialState, action) {
  return (actions[action.type] || defaultAction)(state);
}
