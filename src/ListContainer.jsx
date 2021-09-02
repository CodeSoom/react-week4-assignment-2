import { useSelector } from 'react-redux';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
          {restaurant.category}
          {restaurant.address}
        </li>
      ))}
    </ul>
  );
}
