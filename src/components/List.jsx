import Item from './Item';

export default function List({ restaurantCatalog }) {
  return (
    <ul>
      {restaurantCatalog.map((restaurant) => (
        <Item key={restaurant.restaurantId} restaurant={restaurant} />
      ))}
    </ul>
  );
}
