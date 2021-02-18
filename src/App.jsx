import React from 'react';

import ReastaurantForm from './RestaurantForm';
import RestaurantList from './RestaurantList';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList />
      <ReastaurantForm />
    </div>
  );
}
