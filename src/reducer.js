const initialState = {
  restaurants: [],
  restaurant: {
    name: '',
    classification: '',
    location: '',
  },
  placeholders: ['이름', '분류', '주소'],
};

const reducers = {
  updateRestaurant: (state, { placeholder, value }) => {
    const { restaurant } = state;

    if (placeholder === '이름') {
      return {
        ...state,
        restaurant: { ...restaurant, name: value },
      };
    }

    if (placeholder === '분류') {
      return {
        ...state,
        restaurant: { ...restaurant, classification: value },
      };
    }

    if (placeholder === '주소') {
      return {
        ...state,
        restaurant: { ...restaurant, location: value },
      };
    }

    return state;
  },
  addRestaurant: (state) => {
    const { restaurants, restaurant } = state;
    const { name, classification, location } = restaurant;

    if (!name || !classification || !location) {
      return state;
    }

    return {
      ...state,
      restaurant: {
        name: '',
        classification: '',
        location: '',
      },
      restaurants: [...restaurants, restaurant],
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action.payload);
}
