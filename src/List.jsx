export default function List({ restaurants }) {
  return (
    <ol>
      {restaurants && restaurants.map((restaurant) => {
        const restaurantItem = `${restaurant.name} | ${restaurant.type} | ${restaurant.location}`;
        return (
          <li key={restaurant.id}>
            {restaurantItem}
          </li>
        );
      })}
    </ol>
  );
}
