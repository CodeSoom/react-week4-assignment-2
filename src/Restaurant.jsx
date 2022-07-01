const Restaurant = ({
  restaurant,
}) => (
  <li>
    {restaurant.name}
    {' '}
    |
    {' '}
    {restaurant.type}
    {' '}
    |
    {' '}
    {restaurant.address}
  </li>
);

export default Restaurant;
