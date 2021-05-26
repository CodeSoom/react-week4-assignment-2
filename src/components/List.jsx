import { useSelector } from 'react-redux';

export default function List() {
  const restaurants = useSelector((state) => state.restaurants);
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
