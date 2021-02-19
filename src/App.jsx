import React from 'react';

import InputFormContainer from './InputFormContainer';

import RestaurantsListContainer from './RestaurantsListContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsListContainer />
      <InputFormContainer />
    </div>
  );
}
