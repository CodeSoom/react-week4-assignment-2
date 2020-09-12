import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantList from './RestaurantList';

// RestaurantList 데이터를 관리하기 위해서 필요
export default function RestaurantListContainer() {
  const { restaurantList } = useSelector((state) => ({
    restaurantList: state.restaurantList,
  }));

  return (
    <RestaurantList restaurantList={restaurantList} />
  );
}
