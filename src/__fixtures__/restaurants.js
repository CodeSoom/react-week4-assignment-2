const restaurants = [
  {
    id: 1,
    name: '마녀주방',
    category: '한식',
    address: '강남',
  }, {
    id: 2,
    name: '할머니뼈해장국',
    category: '한식',
    address: '강서',
  }, {
    id: 3,
    name: '엄마손파이',
    category: '한식',
    address: '강북',
  },
];

const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export { restaurants, initialState };
