import React from 'react';

import Item from './Item';

export default function List({ informations }) {
  return (
    <ul>
      {informations.map((information) => (
        <Item
          key={information.id}
          information={information}
        />
      ))}
    </ul>
  );
}
