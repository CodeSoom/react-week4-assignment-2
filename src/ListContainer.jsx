import React from 'react';
import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

function ListContainer() {
  const restaurantList = useSelector((state) => state.restaurantList);

  return (
    <RestaurantList restaurantList={restaurantList} />
  );
}

export default ListContainer;
