const initialState = {
  restaurants: [],
  restaurant: {
    name: '',
    classification: '',
    location: '',
  },
};

const getKeyByPlaceholder = {
  이름: 'name',
  분류: 'classification',
  주소: 'location',
};

const reducers = {
  updateRestaurant: (state, { placeholder, value }) => {
    const { restaurant } = state;
    const key = getKeyByPlaceholder[placeholder];

    if (!key) {
      return state;
    }

    return {
      ...state,
      restaurant: { ...restaurant, [key]: value },
    };
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
