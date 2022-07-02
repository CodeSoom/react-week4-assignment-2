import Item from './Item';

export default function List({ restaurants }) {
  return (
    <ol>
      {restaurants.map((restaurant) => (
        <Item key={restaurant.id} restaurants={restaurant} />
      ))}
    </ol>
  );
}
