export default function Restaurants({ restaurants }) {
  if (!restaurants.length) return null;

  return (
    <ul>
      {restaurants.map((restaurant) => {
        const {
          id, name, type, address,
        } = restaurant;
        return (
          <li key={id}>
            {`${name} | ${type} | ${address}` }
          </li>
        );
      })}
    </ul>
  );
}
