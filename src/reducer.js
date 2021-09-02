const initialState = {
  newId: 100,
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

export default function reducer(state = initialState, aciton) {
  if (aciton.type === 'updateText') {
    return {
      ...state,
      restaurantTitles: aciton.payload.text,
    };
  }

  if (aciton.type === 'addRestaurant') {
    const { newId, restaurantTitles, restaurants } = state;
    const [name, category, address] = restaurantTitles;

    if (!restaurantTitles) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurantTitles: '',
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
