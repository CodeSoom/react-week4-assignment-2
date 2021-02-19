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

export default function reducer(state, action) {
  return actionTypeFunctions[action.type](state, action);
}
