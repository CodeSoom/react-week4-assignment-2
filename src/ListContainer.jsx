import React from 'react';
import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

function ListContainer() {
  const restaurantList = useSelector((state) => state.restaurantList);

  return (
    <div className="list-container">
      <RestaurantList restaurantList={restaurantList} />
    </div>

  );
}

export default ListContainer;
