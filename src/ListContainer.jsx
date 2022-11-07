import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { restaurantLists } = useSelector((state) => ({
    restaurantLists: state.restaurantLists,
  }));
  return <List restaurantLists={restaurantLists} />;
}
