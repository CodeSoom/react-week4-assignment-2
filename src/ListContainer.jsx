import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { listRestaurantInfo } = useSelector((state) => state);

  return (
    <List restaurantInfos={listRestaurantInfo} />
  );
}
