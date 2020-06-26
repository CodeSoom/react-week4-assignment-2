import React from 'react';

export default function App() {
  return (
    <div>
      {/* App Component */}
      <h1>Restaurants</h1>
      {/* List Component */}
      <ul>
        {/* Item Component */}
        <li>
          마녀주방
          |
          한식
          |
          서울시 강남구
        </li>
      </ul>
      {/* Input Component */}
      <p>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="분류" />
        <input type="text" placeholder="주소" />
        <button type="button">등록</button>
      </p>
    </div>
  );
}
