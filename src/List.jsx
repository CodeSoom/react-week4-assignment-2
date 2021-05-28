export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map((item) => (
        <li key={item.id}>
          {item.name}
          {' '}
          |
          {' '}
          {item.category}
          {' '}
          |
          {' '}
          {item.location}
        </li>
      ))}
    </ul>
  );
}
