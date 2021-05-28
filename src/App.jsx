import React from 'react';

import Input from './presentational/Input';
import Restaurants from './presentational/Restaurants';

export default function App() {
  const restaurants = [
    {
      id: 1,
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    },
    {
      id: 2,
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
  ];

  return (
    <div>
      <h1>Restaurants</h1>
      <Restaurants restaurants={restaurants} />
      <Input />
    </div>
  );
}
