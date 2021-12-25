const Restaurants = ({ restaurants }) => (
  <ul>
    {restaurants.map(({
      title, menu, address, id,
    }) => (
      <li key={id}>
        {title}
        |
        {menu}
        |
        {address}
      </li>
    ))}
  </ul>
);

export default Restaurants;
