import React from 'react';

import RestaurantList from './RestaurantList';

// RestaurantList 데이터를 관리하기 위해서 필요
export default function RestaurantListContainer() {
  const restaurantList = {
    id: 1,
    name: '호식당',
    category: '일식',
    address: '경기도 수정구 태평동',
  };
  return (
    <RestaurantList restaurantList={restaurantList} />
  );
}
