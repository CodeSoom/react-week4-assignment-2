export default function Item({ restaurant }) {
  const { name, category, address } = restaurant.information;

  return (
    <li>
      {name}
      {' | '}
      {category}
      {' | '}
      {address}
    </li>
  );
}
