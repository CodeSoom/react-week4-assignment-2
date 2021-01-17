import React from 'react';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
