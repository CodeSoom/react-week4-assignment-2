import React from 'react';

import Page from './Page';

export default function App() {
  return (
    <div>
      <Page 
        onClickAddItem={onClickAddItem}
        onChange={onChange}
        items={restaurants}
      />
    </div>
  );
}
