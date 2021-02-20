import React from 'react';

export default function InputForm({
  restaurant,
  onChange,
  onClick,
}) {
  const { name, category, address } = restaurant;

  return (
    <div>
      <input
        value={name}
        name="name"
        placeholder="이름"
        onChange={onChange}
      />
      <input
        value={category}
        name="category"
        placeholder="분류"
        onChange={onChange}
      />
      <input
        value={address}
        name="address"
        placeholder="주소"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
