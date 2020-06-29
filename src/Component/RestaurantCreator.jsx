import React from 'react';

export default function RestaurantCreator({ restaurant, onChange, onClick }) {
  const { name, category, address } = restaurant;

  return (
    <p>
      <input
        type="text"
        placeholder="이름"
        data-testid="name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="분류"
        data-testid="category"
        name="category"
        value={category}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="주소"
        data-testid="address"
        name="address"
        value={address}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>등록</button>
    </p>
  );
}
