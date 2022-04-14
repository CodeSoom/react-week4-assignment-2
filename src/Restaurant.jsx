export default function Restaurant({
  information: {
    name, category, address,
  },
}) {
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
