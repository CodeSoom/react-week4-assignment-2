import React from 'react';
import RestaurantsContainer from './RestaurantsContainer';
import RestaurantFormContainer from './RestaurantFormContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantFormContainer />
    </div>
  );
}
