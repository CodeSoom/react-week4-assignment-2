import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    restaurant: {
      name: '키와미',
      category: '일식',
      address: '분당구 정자동',
    },
    restaurants: [
      { name: '마녀주방', category: '한식', address: '서울시 강남구' },
      { name: '시카고피자', category: '양식', address: '이태원동' },
    ],
  });

  const { restaurants, restaurant } = state;

  return (
    <Page restaurants={restaurants} restaurant={restaurant} />
  );
}
