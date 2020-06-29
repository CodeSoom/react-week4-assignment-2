import React from 'react';

import Restaurant from './Restaurant';

export default function Restaurants({ restaurants }) {
  if (!restaurants.length) {
    return <p>리스트가 없습니다.</p>;
  }

  return (
    <ul>
      {
        restaurants.map((restaurant) => <Restaurant restaurant={restaurant} key={restaurant.id} />)
      }
    </ul>
  );
}
