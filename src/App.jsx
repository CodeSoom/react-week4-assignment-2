import React from 'react';

import Restaurants from './Restaurants';

export default function App() {
  const restaurants = [
    {
      id: 1, name: '김밥천국', category: '분식', address: '서울시 서초구 방배동',
    },
  ];
  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
