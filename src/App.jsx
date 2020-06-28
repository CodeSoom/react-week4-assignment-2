import React from 'react';

import RestaurantListContainer from './RestaurantListContainer';
import RestaurantFormContainer from './RestaurantFormContainer';

export default function App() {
  return (
    <div>
      <h2>Restaurants</h2>
      <RestaurantListContainer />
      <RestaurantFormContainer />
    </div>
  );
}
