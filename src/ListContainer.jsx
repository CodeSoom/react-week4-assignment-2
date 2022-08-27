import { useSelector } from 'react-redux';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {`${restaurant.name} | ${restaurant.classification} | ${restaurant.address}`}
        </li>
      ))}
    </ul>
  );
}
