export default function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants && restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.text}
        </li>
      ))}
    </ul>
  );
}
