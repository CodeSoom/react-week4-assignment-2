import { useSelector } from 'react-redux';
import List from './List';

export default function ListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));
  return (
    <ul>
      {restaurants.map((item) => (
        <List
          key={item.id}
          id={item.id}
          title={item.title}
          sort={item.sort}
          location={item.location}
        />
      ))}
    </ul>
  );
}
