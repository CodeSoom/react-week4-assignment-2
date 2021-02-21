import React from 'react';

import RestaurantFormContainer from './RestaurantFormContainer';
import RestaurantListContainer from './RestaurantListContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantListContainer />
      <RestaurantFormContainer />
    </div>
  );
}
