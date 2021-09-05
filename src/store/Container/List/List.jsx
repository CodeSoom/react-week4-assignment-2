export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map(
        ({ name, category, address }) => (<li key={name}>{`${name}|${category}|${address}`}</li>),
      )}
    </ul>
  );
}
