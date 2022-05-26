import { useSelector } from 'react-redux';
import List from '../components/List';

export default function ListContainer() {
  const { restaurantCategory } = useSelector((state) => ({
    restaurantCategory: state.restaurantCategory,
  }));

  return <List restaurantCategory={restaurantCategory} />;
}
