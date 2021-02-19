import React from 'react';

import Input from './Input';
import List from './List';

export default function App() {
  const registers = [{ id: 1, information: '마녀식당 | 한식 | 서울시 강남구' }];
  return (
    <div>
      <h1>Restaurant</h1>
      <List registers={registers} />
      <Input />
    </div>
  );
}
