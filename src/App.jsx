import { useSelector } from 'react-redux';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {`${restaurant.name} | ${restaurant.classification} | ${restaurant.address}`}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />
      <button type="button">등록</button>
    </>
  );
}
