import React from 'react';

import ListContainer from '../containers/ListContainer';
import InputContainer from '../containers/InputContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}
