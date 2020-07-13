import React from 'react';

import RestaurantsListContainer from './containers/RestaurantsListContainer';
import RestaurantsInputContainer from './containers/RestaurantsInputContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsListContainer />
      <RestaurantsInputContainer />
    </div>
  );
}
