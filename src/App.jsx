import React from 'react';

import Input from './presentational/Input';
import RestaurantsContainer from './container/RestaurantsContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <Input />
    </div>
  );
}
