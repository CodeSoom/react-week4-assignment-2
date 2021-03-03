const initialState = {
  id: 0,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const actionTypeFunctions = {
  updateRestaurantInformation: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.value,
  }),
  addRestaurantInformation: (state) => ({
    ...state,
    name: '',
    category: '',
    address: '',
    restaurants: [
      ...state.restaurants,
      {
        id: state.id,
        name: state.name,
        category: state.category,
        address: state.address,
      },
    ],
  }),
};

const defaultFunction = (state) => (state);

export default function reducer(state = initialState, action) {
  return (actionTypeFunctions[action.type] || defaultFunction)(state, action);
}
