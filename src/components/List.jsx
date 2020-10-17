import React from 'react';

import Item from './Item';

export default function List({ reservations }) {
  if (!reservations) return (<></>);

  return (
    <ul>
      {
        reservations.map(({
          id, name, category, address,
        }) => (
          <Item
            key={id}
            name={name}
            category={category}
            address={address}
          />
        ))
      }
    </ul>
  );
}
