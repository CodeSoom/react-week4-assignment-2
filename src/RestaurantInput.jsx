import React from 'react';

function RestaurantInput() {
  return (
    <div className="input-container">
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="분류" />
      <input type="text" placeholder="주소" />
      <button type="button">등록</button>
    </div>
  );
}

export default RestaurantInput;
