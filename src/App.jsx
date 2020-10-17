import React from 'react';

import ListContainer from './containers/ListContainer';
import InputReservationContainer from './containers/InputReservationContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputReservationContainer />
    </div>
  );
}
