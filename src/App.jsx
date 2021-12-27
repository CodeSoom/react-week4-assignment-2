import List from './List';

export default function App() {
  const restuarants = [
    { name: '모토쿠라시', category: '일식', address: '서울시 송파구' },
    { name: '마녀주방', category: '한식', address: '서울시 강남구' },
  ];

  return (
    <div>
      <h1>Restaurants</h1>
      <List restuarants={restuarants} />
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />
      <button type="button">등록</button>
    </div>
  );
}
