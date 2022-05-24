import React from 'react';

export default function TextBox({ handleChange, restaurantInfo }) {
  return (
    <>
      <input type="text" placeholder="이름" onChange={handleChange} value={restaurantInfo.name} />
      <input type="text" placeholder="분류" onChange={handleChange} value={restaurantInfo.category} />
      <input type="text" placeholder="주소" onChange={handleChange} value={restaurantInfo.address} />
      <button type="button">등록</button>
    </>
  );
}
