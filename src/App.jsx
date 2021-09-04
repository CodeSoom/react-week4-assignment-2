import React from 'react';
import ListContainer from './container/ListContainer';

import InputContainer from './container/InputContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}
