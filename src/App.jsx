import React from 'react';

export default function App() {
  return (
    <div>
      <h1> Restaurant</h1>

      <ul>
        <li>마녀주방 | 한식 | 서울시 강남구</li>
        <li>시카고피자 | 양식 | 이태원</li>
      </ul>

      <input placeholder="이름" />
      <input placeholder="분류" />
      <input placeholder="주소" />
      <button type="button">
        등록
      </button>

    </div>
  );
}
