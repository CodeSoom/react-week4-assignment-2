import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    Id: 0,
    restaurants: [],
  });

  const { restaurants } = state;

  function handleClickAddItem() {
  }

  function onChange() {
  }

  return (
    <div>
      <Page 
        onClickAddItem={handleClickAddItem}
        onChange={onChange}
        items={restaurants}
      />
    </div>
  );
}
