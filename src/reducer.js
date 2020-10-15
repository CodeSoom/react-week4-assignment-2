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
  }

  return state;
}
