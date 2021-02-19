import React from 'react';

import Input from './Input';

export default function App() {
  const registers = [{
    id: 1,
    information: '마녀식당 | 한식 | 서울시 강남구',
  }];

  return (
    <div>
      <h1>Restaurant</h1>
      <ul>
        <li>
          {registers[0].information}
        </li>
      </ul>
      <Input />
    </div>
  );
}
