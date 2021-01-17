import React from 'react';

import RestaurantFormContainer from './RestaurantFormContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantFormContainer />
    </div>
  );
}
