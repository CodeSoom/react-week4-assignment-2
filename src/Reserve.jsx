import React from 'react';

export default function Reserve({
  name, category, address,
  onChange, onClick,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
        onChange={onChange}
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
