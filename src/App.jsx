import React from 'react';

import List from './List';

export default function App() {
  const tasks = [
    {
      title: '마녀주방 | 한식 | 서울시 강남구',
      id: 1,
    },
    {
      title: '시카고피자 | 양식 | 이태원동',
      id: 2,
    },
  ];

  return (
    <div>
      <h1>Restaurants</h1>
      <List tasks={tasks} />
    </div>
  );
}
