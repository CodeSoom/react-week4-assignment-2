import React from 'react';

export default function App() {
  const handleClickAddRestaurants = () => {
    console.log('click!!!');
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        <li>마녀주방 | 한식 | 서울시 강남구</li>
        <li>시카고피자 | 양식 | 이태원동</li>
      </ul>
      <input placeholder="이름" />
      <input placeholder="분류" />
      <input placeholder="주소" />
      <button
        type="button"
        onClick={handleClickAddRestaurants}
      >
        등록
      </button>
    </div>
  );
}
