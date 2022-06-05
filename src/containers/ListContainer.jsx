import { useSelector } from 'react-redux';

import List from '../components/List';

export default function ListContainer() {
  const { restaurantCatalog } = useSelector((state) => ({
    restaurantCatalog: state.restaurantCatalog,
  }));

  return <List restaurantCatalog={restaurantCatalog} />;
}
