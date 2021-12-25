import Divider from '../Divider';

export default function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <article>
            <span>{restaurant.name}</span>
            <Divider />
            <span>{restaurant.category}</span>
            <Divider />
            <span>{restaurant.address}</span>
          </article>
        </li>
      ))}
    </ul>
  );
}
