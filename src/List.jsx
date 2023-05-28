export default function List({
  id, title, sort, location,
}) {
  return (
    <li key={id}>
      <span>{title}</span>
      |
      <span>{sort}</span>
      |
      <span>{location}</span>
    </li>
  );
}
