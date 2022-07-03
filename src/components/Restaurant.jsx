export default function Restaurant({ name, address, category }) {
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
