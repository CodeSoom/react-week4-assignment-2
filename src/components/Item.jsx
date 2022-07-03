export default function Item({ restaurants: { title, category, address } }) {
  return (
    <li>
      {title}
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
