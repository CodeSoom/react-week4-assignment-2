import React from 'react';

import ReastaurantFormContainer from './RestaurantFormContainer';
import RestaurantList from './RestaurantList';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList />
      <ReastaurantFormContainer />
    </div>
  );
}
