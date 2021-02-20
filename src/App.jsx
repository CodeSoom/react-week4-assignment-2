import React from 'react';

import InputContainer from './InputContainer';
import ListContainer from './List';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputContainer />
    </div>
  );
}
