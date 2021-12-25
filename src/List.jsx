export default function List({ restuarants }) {
  return (
    <ul>
      {restuarants.map((restuarant) => (
        <li key={restuarant.name}>
          {restuarant.name}
          {' '}
          |
          {' '}
          {restuarant.category}
          {' '}
          |
          {' '}
          {restuarant.address}
        </li>
      ))}
    </ul>
  );
}
