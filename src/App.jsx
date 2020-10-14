import React from 'react';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        <li>마녀주방 | 한식 | 서울시 강남구</li>
      </ul>
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />
      <button type="button">
        등록
      </button>
    </div>
  );
}
