import React from 'react';

export default function Input({
  name, category, address, onChange, onClick,
}) {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={name}
        name="name"
        placeholder="이름"
      />
      <input
        type="text"
        onChange={onChange}
        value={category}
        name="category"
        placeholder="분류"
      />
      <input
        type="text"
        onChange={onChange}
        value={address}
        name="address"
        placeholder="주소"
      />
      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </div>
  );
}
