import React from 'react';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        <li>대천부양꼬치 | 중식 | 경기도 남양주시</li>
        <li>바토스 | 양식 | 이태원동</li>
      </ul>
      <div>
        <input
          id="input-restaurant-name"
          type="text"
          placeholder="이름"
        />
        <input
          id="input-restaurant-type"
          type="text"
          placeholder="분류"
        />
        <input
          id="input-restaurant-address"
          type="text"
          placeholder="주소"
        />
        <button type="button" onClick={() => { }}>
          등록
        </button>
      </div>
    </div>
  );
}
