export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
          |
          {restaurants.category}
          |
          {restaurants.address}
        </li>
      ))}
    </ul>
  );
}
