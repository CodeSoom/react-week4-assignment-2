import React from 'react';

export default function Input({
  restaurant: { name, category, address },
  onChange, onClick,
}) {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="이름"
        onChange={onChange}
      />
      <input
        type="text"
        name="category"
        value={category}
        placeholder="분류"
        onChange={onChange}
      />
      <input
        type="text"
        name={address}
        value={address}
        placeholder="주소"
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
