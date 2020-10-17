import React from 'react';

import Item from './Item';

export default function List({ restaurants }) {
  return (
    <ul>
      {
        restaurants.map((info) => (
          <Item key={info.name} info={info} />
        ))
      }
    </ul>
  );
}
