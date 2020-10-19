import React from 'react';

import Restaurants from './Restaurants';

export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants ? <Restaurants restaurants={restaurants} /> : null}
    </ul>
  );
}
