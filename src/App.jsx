import React from 'react';

import RestaurantCreateContainer from './RestaurantCreateContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
