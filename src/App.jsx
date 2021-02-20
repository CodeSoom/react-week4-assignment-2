import React from 'react';

import RestaurantList from './RestaurantList';
import RestaurantFormContainer from './RestaurantFormContainer';

const restaurants = [
  {
    id: 1, name: '자매수산', category: '일식', address: '서울시 논현동',
  },
];

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
      <RestaurantFormContainer />
    </div>
  );
}
