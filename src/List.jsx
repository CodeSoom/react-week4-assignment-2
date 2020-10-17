import React from 'react';

import Item from './Item';

export default function List({ restaurantInfos }) {
  return (
    <ul>
      {restaurantInfos.map((restaurantInfo) => (
        <Item key={restaurantInfo.id} restaurantInfo={restaurantInfo} />
      ))}
    </ul>
  );
}
