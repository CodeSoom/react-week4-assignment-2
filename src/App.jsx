import React, { useState } from 'react';

import InputFormContainer from './InputFormContainer';

import RestaurantsList from './RestaurantsList';

export default function App() {
  const [state] = useState({
    restaurantsList: [],
  });

  const {
    restaurantsList,
  } = state;

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsList restaurants={restaurantsList} />
      <InputFormContainer />
    </div>
  );
}
