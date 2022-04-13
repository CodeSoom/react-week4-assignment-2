export default function Item({ restaurant }) {
  const { name, category, address } = restaurant;

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
