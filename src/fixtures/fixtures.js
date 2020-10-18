export const restaurantsFixture = [
  {
    id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
  },
  {
    id: 2, name: '시카고피자', category: '양식', address: '이태원동',
  },
  {
    id: 3, name: '키와미', category: '일식', address: '분당구 정자동',
  },
];

export const inputTypes = [
  { placeholderName: '이름', inputName: 'name', value: '마녀주방' },
  { placeholderName: '분류', inputName: 'category', value: '한식' },
  { placeholderName: '주소', inputName: 'address', value: '서울시 강남구' },
];

export const restaurantFixture = { name: '마녀주방', category: '한식', address: '서울시 강남구' };

export const initRestaurant = { name: '', category: '', address: '' };
