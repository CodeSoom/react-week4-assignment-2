export const initialState = {
  id: 100,
  restaurants: [],
  restautrant: {
    name: '',
    type: '',
    address: '',
  },
};

// TODO: updateRestautrantInfo 리듀서 기능 정의
export default function reducer(state = initialState, action = {}) {
  if (action.type === 'updateRestautrantInfo') {
    const { key, value } = action.payload;

    return {
      ...state,
      restautrant: {
        ...state.restautrant,
        [key]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { restautrant } = state;
    const { name, type, address } = restautrant;

    if (!name || !type || !address) {
      return state;
    }

    return {
      ...state,
      restaurants: state.restaurants.concat(restautrant),
      restautrant: initialState.restautrant,
    };
  }

  return state;
}
