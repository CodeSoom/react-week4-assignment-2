export default function Restaurant({ information: { name, category, address } }) {
  // TODO : 모양 수정 필요
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
