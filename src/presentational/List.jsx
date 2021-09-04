export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ id, title }) => (
        <li key={id}>
          {title}
        </li>
      ))}
    </ul>
  );
}
