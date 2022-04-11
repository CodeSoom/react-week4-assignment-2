import Item from './Item';

export default function List({ restaurants }) {
  if (restaurants.length === 0) {
    return null;
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Item key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
}
