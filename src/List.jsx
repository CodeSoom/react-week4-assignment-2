export default function List({ restaurants }) {
  if (restaurants.length === 0) {
    return null;
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurants.name}>
          {restaurant.name}
          |
          {restaurant.category}
          |
          {restaurant.address}
        </li>
      ))}
    </ul>
  );
}
