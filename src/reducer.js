const initialState = {
  id: 0,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

function emptyInformation({ name, category, address }) {
  return !(name !== '' && category !== '' && address !== '');
}

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
  addRestaurantInformation: (state) => {
    const { name, category, address } = state;

    if (emptyInformation({ name, category, address })) {
      return state;
    }

    return {
      ...state,
      restaurants: [
        ...state.restaurants,
        {
          id: state.id,
          name: state.name,
          category: state.category,
          address: state.address,
        },
      ],
    };
  },
};

const defaultFunction = (state) => (state);

export default function reducer(state = initialState, action) {
  return (actionTypeFunctions[action.type] || defaultFunction)(state, action);
}
