export default function List({ datum }) {
  return (
    <li>
      <span>{datum.name}</span>
      <span> | </span>
      <span>{datum.category}</span>
      <span> | </span>
      <span>{datum.address}</span>
    </li>
  );
}
