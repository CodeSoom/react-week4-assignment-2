const Restaurants = ({ restaurants }) => (
  <ul>
    {restaurants.map(({
      name, category, address, id,
    }) => (
      <li key={id}>
        {name}
        |
        {category}
        |
        {address}
      </li>
    ))}
  </ul>
);

export default Restaurants;
