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
          <li key={restaurant.name} className="restaurant-list">
            <span>{restaurant.name}</span>
            <span> | </span>
            <span>{restaurant.type}</span>
            <span> | </span>
            <span>{restaurant.address}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
