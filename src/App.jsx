import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    restaurants: [
      { name: '마녀주방', category: '한식', address: '서울시 강남구' },
      { name: '시카고피자', category: '양식', address: '이태원동' },
    ],
  });

  const { restaurants } = state;

  return (
    <Page restaurants={restaurants} />
  );
}
