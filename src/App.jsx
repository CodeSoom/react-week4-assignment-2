import React from 'react';
import ListContainer from './container/ListContainer';

import PageContainer from './container/PageContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <PageContainer />
      <ListContainer />
    </div>
  );
}
