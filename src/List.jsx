import React from 'react';

import Restaurant from './Restaurant';

export default function List({ restaurants }) {
  if (restaurants.length === 0) {
    return (
      <div>
        입력된 레스토랑 정보가 없습니다.
      </div>
    );
  }

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
