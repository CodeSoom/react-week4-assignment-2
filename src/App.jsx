export default function App() {
  const dummyItems = [
    {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
  ];
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {dummyItems.map((restaurant) => (
          <li key={restaurant.name}>
            <p>
              {restaurant.name}
              {' '}
              |
              {' '}
              {restaurant.category}
              {' '}
              |
              {' '}
              {restaurant.address}
              {' '}
            </p>
          </li>
        ))}
      </ul>
      <div>
        <input placeholder="이름" />
        <input placeholder="분류" />
        <input placeholder="주소" />
        <button type="button">등록</button>
      </div>
    </div>
  );
}
