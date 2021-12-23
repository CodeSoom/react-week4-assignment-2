export default function Item({ restaurant }) {
  return (
    <li>
      {restaurant.name}
      {' '}
      |
      {restaurant.category}
      {' '}
      |
      {restaurant.address}
    </li>
  );
}
