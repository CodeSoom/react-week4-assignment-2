const initialState = {
  newId: 100,
  restaurant: {
    name: '마법사식당',
    category: '이탈리안',
    address: '서울시 강남구',
  },
  restaurants: [
    {
      id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
    },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'changeRestaurantField') {
    const { restaurant } = state;
    const { name, value } = action.payload;

    return {
      ...state,
      restaurant: {
        ...restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { restaurant, restaurants, newId } = state;

    return {
      newId: newId + 1,
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [...restaurants, { ...restaurant, id: newId }],
    };
  }

  return state;
}
