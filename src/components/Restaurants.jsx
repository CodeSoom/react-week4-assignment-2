const Restaurants = ({ restaurants }) => (
  <ul>
    {restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        {restaurant.name}
        |
        {restaurant.category}
        |
        {restaurant.location}
      </li>
    ))}
  </ul>
);
export default Restaurants;
