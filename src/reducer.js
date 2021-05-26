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
    const { newId, name, type, address, restaurants } = state;
    if(!name || !type || !address) {
      return state;
    }

    return {
      ...state,
      restaurants: [...restaurants, {
        id: newId + 1,
        name,
        type,
        address,
      }],
      name: '',
      type: '',
      address: '',
    };
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
      type: action.payload.value,
    }
  }

  if (action.type === 'changeAddress') {
    return {
      ...state,
      address: action.payload.value,
    };
  }

  return state;
}
