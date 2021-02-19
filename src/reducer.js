const initialState = {
  id: 0,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const actionTypeFunctions = {
  updateRestaurantName: (state, action) => ({
    ...state,
    name: action.payload.name,
  }),
  updateRestaurantCategory: (state, action) => ({
    ...state,
    category: action.payload.category,
  }),
  updateRestaurantAddress: (state, action) => ({
    ...state,
    address: action.payload.address,
  }),
};

const defaultFunction = (state) => (state);

export default function reducer(state = initialState, action) {
  return (actionTypeFunctions[action.type] || defaultFunction)(state, action);
}
