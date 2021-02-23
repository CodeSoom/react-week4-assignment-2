import React from 'react';

import Item from './Item';

function RestaurantList({ restaurantList }) {
  if (!restaurantList) {
    return <></>;
  }

  return (
    <ul>
      {restaurantList.map((restaurantInfo) => (
        <Item
          key={restaurantInfo.id}
          restaurantInfo={restaurantInfo}
        />
      ))}
    </ul>
  );
}

export default RestaurantList;
