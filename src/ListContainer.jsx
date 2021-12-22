import { useSelector } from 'react-redux';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {restaurants.map(({
        id, name, address, category,
      }) => (
        <li key={id}>{`${name} | ${address} | ${category}`}</li>
      ))}
    </ul>
  );
}
