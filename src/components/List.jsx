import useRestaurants from '../hooks/useRestaurants';

export default function List() {
  const { restaurants } = useRestaurants();

  return (
    <ul>
      {restaurants.map(({
        id, name, category, address,
      }) => (
        <li key={id}>
          {`${name} | ${category} | ${address}`}
        </li>
      ))}

    </ul>
  );
}
