const initialState = {
  newId: 100,
  name: '',
  type: '',
  address: '',
  restaurants: [
    {
      id: 1,
      name: '뽀식이네 감자탕',
      type: '한식',
      address: '경기도 양평군',
    },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurants') {
    return state;
  }

  if (action.type === 'changeName') {
    return {
      ...state,
      name: action.payload.value,
    };
  }

  if (action.type === 'changeType') {
    return {
      ...state,
      type: '한식',
    }
  }

  if (action.type === 'changeAddress') {
    return state;
  }

  return state;
}
