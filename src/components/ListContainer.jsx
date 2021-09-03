import { useSelector } from 'react-redux';
import List from './List';

export default function ListContainer() {
  const restaurants = useSelector((state) => state.restaurants);

  return (
    <List restaurants={restaurants} />
  );
}
