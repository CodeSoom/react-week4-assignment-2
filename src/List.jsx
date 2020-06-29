import React from 'react';

import Item from './Item';

export default function List({ reservations }) {
  return (
    <ul>
      {reservations.map((reservation) => (
        <Item
          key={reservation.id}
          restaurant={reservation.restaurant}
        />
      ))}
    </ul>
  );
}
