export default function Restaurants({ restaurants = [] }) {
  if (!restaurants.length) {
    return null;
  }

  return (
    <ul>
      {restaurants.map(({ name, type, address }) => (
        <li key={name}>
          <p>
            {`${name} | ${type} | ${address}`}
          </p>
        </li>
      ))}
    </ul>
  );
}
