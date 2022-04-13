import Item from './Item';

export default function List({ restaurants }) {
  if (restaurants.length === 0) {
    return ((
      <p>레스토랑을 등록해 주세요.</p>
    ));
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Item key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
}
