import React from 'react';

const RestaurantInput = () => {
  return (
    <>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" placeholder="이름" />
      <label htmlFor="category">분류</label>
      <input type="text" id="category" placeholder="분류" />
      <label htmlFor="address">주소</label>
      <input type="text" id="address" placeholder="주소" />
      <button type="button">등록</button>
    </>
  );
};

export default RestaurantInput;
