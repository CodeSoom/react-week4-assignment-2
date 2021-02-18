import React from 'react';

export default function RestaurantForm({ restaurant = {}, handleChange, handleClick }) {
  const { name, category, address } = restaurant;

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>등록</button>
    </div>
  );
}
