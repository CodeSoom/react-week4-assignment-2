export default function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <span>{restaurant.name}</span>
          <span>{restaurant.category}</span>
          <span>{restaurant.address}</span>
        </li>
      ))}
    </ul>
  );
}
