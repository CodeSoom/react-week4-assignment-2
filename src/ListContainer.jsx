import { useSelector } from 'react-redux';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));
  return (
    <ul>
      {restaurants?.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          |
          <span>{item.sort}</span>
          |
          <span>{item.location}</span>
        </li>
      ))}
    </ul>
  );
}
