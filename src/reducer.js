const initialState = {
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  newId: 100,
  restaurants: [],
};

const reducers = {
  updateInformation: (state, action) => {
    const { name, value } = action.payload;

    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  },

  addInformation: (state, action) => {
    const { restaurants, newId } = state;
    const {
      name, category, address,
    } = action.payload;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [
        ...restaurants,
        {
          id: newId,
          name,
          category,
          address,
        },
      ],
    };
  },

  initializeRestaurantForm: (state) => {
    const { restaurant } = initialState;

    return {
      ...state,
      restaurant,
    };
  },
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
