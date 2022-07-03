export default function Item({ restaurants: { name, category, address } }) {
  return (
    <li>
      {name}
      {' '}
      |
      {' '}
      {category}
      {' '}
      |
      {' '}
      {address}
    </li>
  );
}
