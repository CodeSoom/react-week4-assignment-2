const initialState = {
  restaurants: [],
  restaurant: {
    name: '',
    classification: '',
    location: '',
  },
  placeholders: ['이름', '분류', '주소'],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRestaurant') {
    const { restaurant } = state;

    if (action.payload.placeholder === '이름') {
      return {
        ...state,
        restaurant: { ...restaurant, name: action.payload.value },
      };
    }

    if (action.payload.placeholder === '분류') {
      return {
        ...state,
        restaurant: { ...restaurant, classification: action.payload.value },
      };
    }

    if (action.payload.placeholder === '주소') {
      return {
        ...state,
        restaurant: { ...restaurant, location: action.payload.value },
      };
    }
  }

  if (action.type === 'addRestaurant') {
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
  }

  return state;
}
