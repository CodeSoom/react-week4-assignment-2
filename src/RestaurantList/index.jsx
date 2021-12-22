export default function RestaurantList({ list }) {
  return (
    <ul>
      {list.map((restaurant) => (
        <li key={restaurant.id}>
          <span>{restaurant.name}</span>
          <span>{restaurant.category}</span>
          <span>{restaurant.address}</span>
        </li>
      ))}
    </ul>
  );
}
