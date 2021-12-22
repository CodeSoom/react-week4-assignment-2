import { useSelector } from 'react-redux';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <ul>
      {restaurants.map(({
        id, title, address, category,
      }) => (
        <li key={id}>{`${title} | ${address} | ${category}`}</li>
      ))}
    </ul>
  );
}
