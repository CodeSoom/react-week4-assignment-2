import React from 'react';

import Item from './Item';

export default function List({
  restaurants,
}) {
  if (restaurants.length === 0) {
    return <p>레스토랑 목록이 없습니다.</p>;
  }

  return (
    <ul>
      {restaurants.map((v) => (
        <Item restaurants={v} key={v.id} />
      ))}
    </ul>
  );
}
