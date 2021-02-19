import React from 'react';

import List from './List';

export default function App() {
  const restaurants = [
    {
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
      id: 1,
    },
    {
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
      id: 2,
    },
  ];

  return (
    <div>
      <h1>Restaurants</h1>
      <List restaurants={restaurants} />
      <form>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="분류" />
        <input type="text" placeholder="주소" />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
