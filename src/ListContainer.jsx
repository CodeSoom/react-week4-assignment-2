import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { restaurantList } = useSelector((state) => ({
    restaurantList: state.restaurantList,
  }));
  return <List restaurantList={restaurantList} />;
}
