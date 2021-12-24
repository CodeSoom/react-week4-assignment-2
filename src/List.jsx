export default function List({ lists }) {
  if (lists.length === 0) {
    return (
      <div>
        <h1>Restaurants</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {lists.map((restaurant) => (
          <li key={restaurant} className="restaurant-list">
            {restaurant.name}
            {' '}
            |
            {restaurant.type}
            {' '}
            |
            {restaurant.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
