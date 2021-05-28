import React from 'react';

import Input from './presentational/Input';
import Restaurants from './presentational/Restaurants';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants />
      <Input />
    </div>
  );
}
