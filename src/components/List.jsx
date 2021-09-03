import Item from './Item';

export default function List({ restaurants }) {
  if (restaurants.length === 0) {
    return <div>레스토랑이 없습니다.</div>;
  }

  return (
    <ul>
      {
        restaurants.map((restaurant) => (<Item key={restaurant.id} restaurant={restaurant} />))
      }
    </ul>
  );
}
