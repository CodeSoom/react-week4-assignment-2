import { useSelector } from 'react-redux';

export default function RestaurantList() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
          |
          {' '}
          {restaurant.address}
          {' '}
          |
          {' '}
          {restaurant.category}
        </li>
      ))}
    </ul>
  );
}
