import React from 'react';

import RestaurantInputContainer from './RestaurantInputContainer';
import RestaurantListContainer from './RestaurantListContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantListContainer />
      <RestaurantInputContainer />
    </div>
  );
}
