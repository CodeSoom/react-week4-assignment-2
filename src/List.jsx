export default function List({ restaurants }) {
  if (restaurants.length === 0) return <></>;

  return (
    <ul>
      { restaurants.map(({
        id, name, category, address,
      }) => (
        <li key={id}>
          {name}
          |
          {category}
          |
          {address}
        </li>
      ))}
    </ul>
  );
}
