import React from 'react';

import RestaurantListContainer from './Component/RestaurantListContainer';
import RestaurantCreateContainer from './Component/RestaurantCreateContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantListContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
