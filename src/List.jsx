import React from 'react';

import Restaurant from './Restaurant';

export default function List({ restaurants }) {
  return (
    <div>
      { restaurants.map(({
        id, name, type, address,
      }) => (
        <Restaurant
          key={id}
          name={name}
          type={type}
          address={address}
        />
      ))}
    </div>
  );
}
