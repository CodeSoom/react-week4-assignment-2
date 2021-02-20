import React from 'react';

import RestaurantList from './RestaurantList';

export default function App() {
  const restaurants = [
    {
      id: 1, title: '자매수산', category: '일식', address: '서울시 논현동',
    },
  ];
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}
