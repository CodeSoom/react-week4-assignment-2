export default function List({ datum }) {
  return (
    <li>
      {' '}
      {datum.name}
      {' '}
      |
      {' '}
      {datum.category}
      {' '}
      |
      {' '}
      {datum.address}
      {' '}
    </li>
  );
}
