import React from 'react';

export default function TextBox({ handleChange, restaurantInfo }) {
  return (
    <>
      <input type="text" name="name" placeholder="이름" onChange={handleChange} defaultValue={restaurantInfo.name} />
      <input type="text" name="category" placeholder="분류" onChange={handleChange} defaultValue={restaurantInfo.category} />
      <input type="text" name="address" placeholder="주소" onChange={handleChange} defaultValue={restaurantInfo.address} />
      <button type="button" onClick={() => console.log('click')}>등록</button>
    </>
  );
}
