const initialState = {
  restaurantId: 0,
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
  restaurantCatalog: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'UPDATE_RESTAURANT_NAME') {
    return {
      ...state,
      restaurantName: action.payload.restaurantName,
    };
  }

  if (action.type === 'UPDATE_RESTAURANT_CATEGORY') {
    return {
      ...state,
      restaurantCategory: action.payload.restaurantCategory,
    };
  }

  if (action.type === 'UPDATE_RESTAURANT_ADDRESS') {
    return {
      ...state,
      restaurantAddress: action.payload.restaurantAddress,
    };
  }

  if (action.type === 'ADD_RESTAURANT') {
    const {
      restaurantId,
      restaurantName,
      restaurantCategory,
      restaurantAddress,
      restaurantCatalog,
    } = state;

    // 하나라도 공백이면 상태는 변경되지 않는다.
    if (!(restaurantName && restaurantCategory && restaurantAddress)) {
      return state;
    }

    return {
      ...state,
      restaurantId: restaurantId + 1,
      restaurantName: '',
      restaurantCategory: '',
      restaurantAddress: '',
      restaurantCatalog: [
        ...restaurantCatalog,
        {
          restaurantId,
          restaurantName,
          restaurantCategory,
          restaurantAddress,
        },
      ],
    };
  }

  return state;
}
