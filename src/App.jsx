import List from './List';

export default function App() {
  const restaurants = [
    {
      id: 1, name: '마녀주방', category: '한식', location: '서울시 강남구',
    },
    {
      id: 2, name: '시카고피자', category: '양식', location: '이태원동',
    },
  ];

  return (
    <div>
      <h2>Restaurants</h2>
      <List restaurants={restaurants} />
    </div>
  );
}
