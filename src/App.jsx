import React from 'react';

export default function App() {
  function handleButtonClick() {}

  return (
    <div>
      <h1>Restaurant</h1>
      <ul>
        <li>
          마녀식당 | 한식 | 서울시 강남구
        </li>
      </ul>
      <button type="button" onClick={handleButtonClick}>
        등록
      </button>
    </div>
  );
}
