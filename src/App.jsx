export default function App() {
  const restaurants = [
    {
      id: 1, name: '김밥제국', category: '분식', address: '서울 강남구 역삼동',
    },
  ];

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
