import React from 'react';

export default function Input({
  name, category, address, onChange, onClick,
}) {
  return (
    <div>
      <input placeholder="이름" name="name" value={name} onChange={onChange} />
      <input placeholder="분류" name="category" value={category} onChange={onChange} />
      <input placeholder="주소" name="address" value={address} onChange={onChange} />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
