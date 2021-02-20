import React from 'react';

import Item from './Item';

function RestaurantList({ restaurantList }) {
  if (!restaurantList) {
    return <></>;
  }

  return (
    <ul>
      {[{
        id: 0,
        name: '선정릉역 깐부치킨',
        category: '한식',
        address: '서울 강남구 삼성동 37 깐부치킨 선정릉역점',
      }].map((restaurantInfo) => (
        <Item
          key={restaurantInfo.id}
          restaurantInfo={restaurantInfo}
        />
      ))}
    </ul>
  );
}

export default RestaurantList;
