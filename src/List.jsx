import React from 'react';

import Restaurant from './Restaurant';

export default function List({ restaurants }) {
  return (
    <div>
      { restaurants.map(({
        id, name, category, address,
      }) => (
        <Restaurant
          key={id}
          name={name}
          category={category}
          address={address}
        />
      ))}
    </div>
  );
}
