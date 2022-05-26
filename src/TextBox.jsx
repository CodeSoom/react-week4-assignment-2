import React from 'react';

export default function TextBox({ onChange, restaurantInfo, onClick }) {
  return (
    <>
      <input type="text" name="name" placeholder="이름" onChange={onChange} defaultValue={restaurantInfo.name} />
      <input type="text" name="category" placeholder="분류" onChange={onChange} defaultValue={restaurantInfo.category} />
      <input type="text" name="address" placeholder="주소" onChange={onChange} defaultValue={restaurantInfo.address} />
      <button type="button" onClick={onClick}>등록</button>
    </>
  );
}
