const initialState = {
  newId: 103,
  restaurantTitles: [
    {
      name: 'name',
      placeholder: '이름',
      text: '',
    },
    {
      name: 'category',
      placeholder: '분류',
      text: '',
    },
    {
      name: 'address',
      placeholder: '주소',
      text: '',
    },
  ],
  restaurants: [
    {
      id: 101,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    {
      id: 102,
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
    {
      id: 103,
      name: '카와미',
      category: '일식',
      address: '분당구 정자동',
    },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRestaurant') {
    const changeRestaurant = state.restaurantTitles.map((restaurantTitle) => ({
      ...restaurantTitle,
      value: restaurantTitle.name === action.payload.name
        ? action.payload.value : restaurantTitle.value,
    }));

    return {
      ...state,
      restaurantTitles: changeRestaurant,
    };
  }

  if (action.type === 'addRestaurant') {
    const { newId, restaurantTitles, restaurants } = state;
    const [name, category, address] = restaurantTitles;

    const newRestaurantTitle = restaurantTitles.map((restaurantTitle) => ({
      ...restaurantTitle,
      value: '',
    }));

    const emptyRestaurantTitle = restaurantTitles.filter((restaurantTitle) => restaurantTitle.value === '').length;

    if (emptyRestaurantTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurantTitles: newRestaurantTitle,
      restaurants: [...restaurants, {
        id: newId,
        name: name.value,
        category: category.value,
        address: address.value,
      }],
    };
  }

  return state;
}
