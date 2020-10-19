import React from 'react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants'

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
