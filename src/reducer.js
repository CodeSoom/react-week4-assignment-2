const initialState = {
  newId: 100,
  name: '',
  sort: '',
  address: '',
  restaurantList: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateName') {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  if (action.type === 'updateSort') {
    return {
      ...state,
      sort: action.payload.sort,
    };
  }

  if (action.type === 'updateAddress') {
    return {
      ...state,
      address: action.payload.address,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      name, sort, address, restaurantList,
    } = state;
    return {
      ...state,
      name: '',
      sort: '',
      address: '',
      restaurantList: [...restaurantList, `${name} || ${sort} || ${address}`],
    };
  }

  return state;
}
