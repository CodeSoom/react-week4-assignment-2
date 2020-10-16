import React from 'react';

import Item from './Item';

export default function List({ restaurantInfos }) {
  return (
    <ol>
      {restaurantInfos.map((restaurantInfo) => (
        <Item key={restaurantInfo.id} restaurantInfo={restaurantInfo} />
      ))}
    </ol>
  );
}
